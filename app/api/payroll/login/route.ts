import {NextResponse} from "next/server";import {payrollWorker} from "@/lib/payroll/client";
export async function POST(request:Request){const response=await payrollWorker("/auth/client-login",{method:"POST",headers:{"content-type":"application/json"},body:await request.text()});return new NextResponse(response.body,{status:response.status,headers:{"content-type":"application/json"}})}
