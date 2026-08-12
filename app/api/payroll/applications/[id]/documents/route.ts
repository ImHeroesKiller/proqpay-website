import { NextResponse } from "next/server";
import { payrollWorker } from "@/lib/payroll/client";
import { allowedDocuments } from "@/lib/validations/payroll-registration";

export const runtime = "nodejs";
export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    if (!/^[0-9a-f-]{36}$/i.test(id))
      return NextResponse.json(
        { error: "Invalid application." },
        { status: 400 },
      );
    const form = await request.formData();
    const file = form.get("file");
    const category = String(form.get("category") ?? "");
    const documentType = String(form.get("documentType") ?? "");
    if (
      !(file instanceof File) ||
      !allowedDocuments.includes(file.type as never)
    )
      return NextResponse.json(
        { error: "Invalid file type." },
        { status: 400 },
      );
    const limit = 2 * 1024 * 1024;
    if (!file.size || file.size > limit)
      return NextResponse.json(
        { error: `File exceeds ${limit / 1024 / 1024} MB.` },
        { status: 400 },
      );
    const upstream = new FormData();
    upstream.set("file", file);
    upstream.set("category", category);
    upstream.set("documentType", documentType);
    const response = await payrollWorker(`/applications/${id}/documents`, {
      method: "POST",
      body: upstream,
    });
    return new NextResponse(response.body, {
      status: response.status,
      headers: {
        "content-type":
          response.headers.get("content-type") ?? "application/json",
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Upload failed." },
      { status: 503 },
    );
  }
}
