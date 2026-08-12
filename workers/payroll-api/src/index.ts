declare global { interface Env { WORKER_SHARED_SECRET: string } }
const allowed: Record<string,string[]> = { "application/pdf":["pdf"], "application/vnd.ms-excel":["xls"], "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":["xlsx"], "image/png":["png"], "image/jpeg":["jpg","jpeg"] };
const json = (body: unknown, status=200) => Response.json(body,{status,headers:{"cache-control":"no-store","x-content-type-options":"nosniff"}});
const cleanName = (name:string) => name.normalize("NFKC").replace(/[^a-zA-Z0-9._-]/g,"-").replace(/-+/g,"-").slice(-120);
async function authorized(request:Request, env:Env){ const supplied=request.headers.get("x-msg-worker-secret")??""; const expected=env.WORKER_SHARED_SECRET??""; if(!supplied||!expected)return false; const enc=new TextEncoder(); const [a,b]=await Promise.all([crypto.subtle.digest("SHA-256",enc.encode(supplied)),crypto.subtle.digest("SHA-256",enc.encode(expected))]); const av=new Uint8Array(a),bv=new Uint8Array(b); let diff=av.length^bv.length; for(let i=0;i<av.length;i++) diff|=av[i]^(bv[i]??0); return diff===0; }
function registration(sequence:number){return `MSG-PAY-${new Date().getUTCFullYear()}-${String(sequence).padStart(5,"0")}`}
async function rateLimited(request:Request,env:Env){const ip=request.headers.get("cf-connecting-ip")??"unknown";const digest=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(ip));const key=[...new Uint8Array(digest)].map(b=>b.toString(16).padStart(2,"0")).join("");const now=Math.floor(Date.now()/1000),windowStart=now-(now%3600);await env.DB.prepare("INSERT INTO ApiRateLimit (key,window_started,request_count) VALUES (?1,?2,1) ON CONFLICT(key) DO UPDATE SET window_started=CASE WHEN window_started<?2 THEN ?2 ELSE window_started END, request_count=CASE WHEN window_started<?2 THEN 1 ELSE request_count+1 END").bind(key,windowStart).run();const row=await env.DB.prepare("SELECT request_count FROM ApiRateLimit WHERE key=?1").bind(key).first<{request_count:number}>();return (row?.request_count??0)>30}
export default { async fetch(request,env):Promise<Response>{
  try {
    if(!await authorized(request,env)) return json({error:"Unauthorized"},401);
    if(await rateLimited(request,env)) return json({error:"Too many requests"},429);
    const url=new URL(request.url); const docMatch=url.pathname.match(/^\/applications\/([0-9a-f-]{36})\/documents$/i);
    if(request.method==="POST"&&url.pathname==="/applications"){
      const body=await request.json<Record<string,unknown>>(); const id=crypto.randomUUID(); const now=new Date();
      const count=await env.DB.prepare("SELECT COUNT(*) AS total FROM ClientApplication WHERE registration_number LIKE ?1").bind(`MSG-PAY-${now.getUTCFullYear()}-%`).first<{total:number}>(); const reg=registration((count?.total??0)+1);
      await env.DB.prepare("INSERT INTO ClientApplication (id,registration_number,status,company_json,contact_json,payroll_json,funding_json,consent_json,created_at,updated_at,submitted_at,retention_until) VALUES (?1,?2,'INITIAL_REVIEW',?3,?4,?5,?6,?7,?8,?8,?8,?9)").bind(id,reg,JSON.stringify(body.company),JSON.stringify(body.contact),JSON.stringify(body.payroll),body.funding?JSON.stringify(body.funding):null,JSON.stringify(body.consents),now.toISOString(),new Date(Date.UTC(now.getUTCFullYear()+5,now.getUTCMonth(),now.getUTCDate())).toISOString()).run();
      await env.DB.prepare("INSERT INTO DocumentAuditLog (id,application_id,action,actor_type,detail_json,created_at) VALUES (?1,?2,'APPLICATION_SUBMITTED','CLIENT',?3,?4)").bind(crypto.randomUUID(),id,JSON.stringify({registrationNumber:reg}),now.toISOString()).run();
      return json({id,registrationNumber:reg,status:"INITIAL_REVIEW"},201);
    }
    if(request.method==="POST"&&docMatch){
      const applicationId=docMatch[1]; const exists=await env.DB.prepare("SELECT id FROM ClientApplication WHERE id=?1 AND deleted_at IS NULL").bind(applicationId).first(); if(!exists)return json({error:"Application not found"},404);
      const form=await request.formData(); const file=form.get("file"); const category=String(form.get("category")??"").toLowerCase(); const documentType=String(form.get("documentType")??"").slice(0,80);
      if(!(file instanceof File)||!allowed[file.type])return json({error:"Invalid MIME type"},400); const ext=file.name.split(".").pop()?.toLowerCase()??""; if(!allowed[file.type].includes(ext))return json({error:"File extension does not match MIME type"},400);
      const limit=category==="financial"?20*1024*1024:10*1024*1024; if(!file.size||file.size>limit)return json({error:"Invalid file size"},400);
      const id=crypto.randomUUID(); const key=`applications/${applicationId}/${Date.now()}-${id.slice(0,8)}-${cleanName(file.name)}`; const hash=await crypto.subtle.digest("SHA-256",await file.arrayBuffer()); const checksum=[...new Uint8Array(hash)].map(b=>b.toString(16).padStart(2,"0")).join("");
      await env.DOCUMENTS.put(key,file.stream(),{httpMetadata:{contentType:file.type,contentDisposition:`attachment; filename="${cleanName(file.name)}"`},customMetadata:{applicationId,documentType,checksum}});
      const now=new Date().toISOString(); await env.DB.batch([env.DB.prepare("INSERT INTO ClientApplicationDocument (id,application_id,category,document_type,original_filename,storage_key,mime_type,size_bytes,checksum,created_at) VALUES (?1,?2,?3,?4,?5,?6,?7,?8,?9,?10)").bind(id,applicationId,category,documentType,file.name,key,file.type,file.size,checksum,now),env.DB.prepare("INSERT INTO DocumentAuditLog (id,application_id,document_id,action,actor_type,detail_json,created_at) VALUES (?1,?2,?3,'DOCUMENT_UPLOADED','CLIENT',?4,?5)").bind(crypto.randomUUID(),applicationId,id,JSON.stringify({category,mimeType:file.type,size:file.size}),now)]);
      return json({id,filename:file.name,category},201);
    }
    return json({error:"Not found"},404);
  } catch(error){console.error(JSON.stringify({event:"payroll_api_error",message:error instanceof Error?error.message:"Unknown"})); return json({error:"Unable to process request"},500);}
}} satisfies ExportedHandler<Env>;
