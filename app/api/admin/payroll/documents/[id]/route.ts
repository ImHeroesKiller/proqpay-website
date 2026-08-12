import { NextResponse } from "next/server";
import { payrollWorker } from "@/lib/payroll/client";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!process.env.PAYROLL_ADMIN_KEY || request.headers.get("x-admin-key") !== process.env.PAYROLL_ADMIN_KEY) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  const response = await payrollWorker(`/admin/documents/${id}`);
  return new NextResponse(response.body, { status: response.status, headers: { "content-type": response.headers.get("content-type") ?? "application/octet-stream", "content-disposition": response.headers.get("content-disposition") ?? "inline", "cache-control": "private, no-store" } });
}
