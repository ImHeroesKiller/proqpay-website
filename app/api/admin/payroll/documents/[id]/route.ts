import { NextResponse } from "next/server";
import { payrollWorker } from "@/lib/payroll/client";
import { adminAuthorized } from "@/lib/payroll/auth";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!await adminAuthorized(request)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  const response = await payrollWorker(`/admin/documents/${id}`);
  return new NextResponse(response.body, { status: response.status, headers: { "content-type": response.headers.get("content-type") ?? "application/octet-stream", "content-disposition": response.headers.get("content-disposition") ?? "inline", "cache-control": "private, no-store" } });
}
