import { NextResponse } from "next/server";
import { payrollWorker } from "@/lib/payroll/client";
export async function GET(request:Request){const token=request.headers.get("x-client-token")??"";if(token.length<60)return NextResponse.json({error:"Unauthorized"},{status:401});const response=await payrollWorker("/client/application",{headers:{"x-client-token":token}});return new NextResponse(response.body,{status:response.status,headers:{"content-type":"application/json"}})}
