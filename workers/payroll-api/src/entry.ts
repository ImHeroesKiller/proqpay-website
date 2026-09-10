import legacyWorker from "./index";

type WorkerEnv = Parameters<typeof legacyWorker.fetch>[1];

const allowed: Record<string, string[]> = {
  "application/pdf": ["pdf"],
  "application/vnd.ms-excel": ["xls"],
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ["xlsx"],
  "image/png": ["png"],
  "image/jpeg": ["jpg", "jpeg"],
};
const categoryFolders: Record<string, string> = {
  "company-profile": "company-profile",
  legal: "legal-documents",
  financial: "financial-documents",
  payroll: "payroll-documents",
  commercial: "commercial-documents",
  supporting: "others",
};

const json = (body: unknown, status = 200) =>
  Response.json(body, {
    status,
    headers: {
      "cache-control": "no-store",
      "x-content-type-options": "nosniff",
    },
  });

const cleanName = (name: string) =>
  name
    .normalize("NFKC")
    .replace(/[^a-zA-Z0-9._-]/g, "-")
    .replace(/-+/g, "-")
    .slice(-120);

async function sha(value: string) {
  const hash = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(value),
  );
  return [...new Uint8Array(hash)]
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

async function authorized(request: Request, env: WorkerEnv) {
  const supplied = request.headers.get("x-msg-worker-secret") ?? "";
  const expected = env.WORKER_SHARED_SECRET ?? "";
  if (!supplied || !expected) return false;
  return (await sha(supplied)) === (await sha(expected));
}

async function uploadRateLimited(tokenHash: string, env: WorkerEnv) {
  const key = `document-upload:${tokenHash}`;
  const now = Math.floor(Date.now() / 1000);
  const windowStart = now - (now % 3600);
  await env.DB.prepare(
    "INSERT INTO ApiRateLimit (key,window_started,request_count) VALUES (?1,?2,1) ON CONFLICT(key) DO UPDATE SET window_started=CASE WHEN window_started<?2 THEN ?2 ELSE window_started END, request_count=CASE WHEN window_started<?2 THEN 1 ELSE request_count+1 END",
  )
    .bind(key, windowStart)
    .run();
  const row = await env.DB.prepare(
    "SELECT request_count FROM ApiRateLimit WHERE key=?1",
  )
    .bind(key)
    .first<{ request_count: number }>();
  return (row?.request_count ?? 0) > 30;
}

async function uploadDocument(
  request: Request,
  env: WorkerEnv,
  applicationId: string,
) {
  if (!(await authorized(request, env))) return json({ error: "Unauthorized" }, 401);

  const token = request.headers.get("x-client-token") ?? "";
  if (token.length < 60) return json({ error: "Unauthorized" }, 401);
  const tokenHash = await sha(token);

  const application = await env.DB.prepare(
    "SELECT id FROM ClientApplication WHERE id=?1 AND client_token_hash=?2 AND deleted_at IS NULL",
  )
    .bind(applicationId, tokenHash)
    .first();
  if (!application) return json({ error: "Forbidden" }, 403);
  if (await uploadRateLimited(tokenHash, env)) {
    return json({ error: "Too many upload requests" }, 429);
  }

  const form = await request.formData();
  const file = form.get("file");
  const category = String(form.get("category") ?? "").toLowerCase();
  const documentType = String(form.get("documentType") ?? "").trim().slice(0, 80);
  const folder = categoryFolders[category];

  if (!(file instanceof File)) return json({ error: "File is required" }, 400);
  if (!folder || !documentType) return json({ error: "Invalid document metadata" }, 400);
  if (!allowed[file.type]) return json({ error: "Invalid MIME type" }, 400);

  const extension = file.name.split(".").pop()?.toLowerCase() ?? "";
  if (!allowed[file.type].includes(extension)) {
    return json({ error: "File extension does not match MIME type" }, 400);
  }

  const limit = category === "financial" ? 20 * 1024 * 1024 : 10 * 1024 * 1024;
  if (!file.size || file.size > limit) {
    return json(
      { error: `Maximum file size is ${limit / 1024 / 1024} MB` },
      400,
    );
  }

  const id = crypto.randomUUID();
  const storedFileName = `${Date.now()}-${id.slice(0, 8)}-${cleanName(file.name)}`;
  const objectKey = `client-applications/${applicationId}/${folder}/${storedFileName}`;
  const bytes = await file.arrayBuffer();
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  const checksum = [...new Uint8Array(digest)]
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");

  await env.DOCUMENTS.put(objectKey, bytes, {
    httpMetadata: {
      contentType: file.type,
      contentDisposition: `attachment; filename="${cleanName(file.name)}"`,
    },
    customMetadata: {
      applicationId,
      documentType,
      category,
      checksum,
    },
  });

  const now = new Date().toISOString();
  try {
    await env.DB.batch([
      env.DB.prepare(
        "INSERT INTO ClientApplicationDocument (id,application_id,category,document_type,original_filename,storage_key,mime_type,size_bytes,checksum,created_at) VALUES (?1,?2,?3,?4,?5,?6,?7,?8,?9,?10)",
      ).bind(
        id,
        applicationId,
        category,
        documentType,
        file.name,
        objectKey,
        file.type,
        file.size,
        checksum,
        now,
      ),
      env.DB.prepare(
        "INSERT INTO DocumentAuditLog (id,application_id,document_id,action,actor_type,detail_json,created_at) VALUES (?1,?2,?3,'DOCUMENT_UPLOADED','CLIENT',?4,?5)",
      ).bind(
        crypto.randomUUID(),
        applicationId,
        id,
        JSON.stringify({ category, mimeType: file.type, size: file.size }),
        now,
      ),
    ]);
  } catch (error) {
    await env.DOCUMENTS.delete(objectKey);
    throw error;
  }

  return json(
    {
      id,
      filename: file.name,
      storedFileName,
      category,
      objectKey,
    },
    201,
  );
}

export default {
  async fetch(request: Request, env: WorkerEnv): Promise<Response> {
    try {
      const url = new URL(request.url);
      const match = url.pathname.match(
        /^\/applications\/([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})\/documents$/i,
      );
      if (request.method === "POST" && match) {
        return uploadDocument(request, env, match[1]);
      }
      return legacyWorker.fetch(request, env);
    } catch (error) {
      console.error(
        JSON.stringify({
          event: "payroll_api_entry_error",
          message: error instanceof Error ? error.message : "Unknown",
        }),
      );
      return json({ error: "Unable to process request" }, 500);
    }
  },
};
