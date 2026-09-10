import { NextResponse } from "next/server";
import { payrollWorker } from "@/lib/payroll/client";
import { allowedDocuments } from "@/lib/validations/payroll-registration";

export const runtime = "nodejs";

const DEFAULT_LIMIT = 10 * 1024 * 1024;
const FINANCIAL_LIMIT = 20 * 1024 * 1024;
const allowedCategories = new Set([
  "company-profile",
  "legal",
  "financial",
  "payroll",
  "commercial",
  "supporting",
]);
const extensionsByMime: Record<string, string[]> = {
  "application/pdf": ["pdf"],
  "application/vnd.ms-excel": ["xls"],
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ["xlsx"],
  "image/png": ["png"],
  "image/jpeg": ["jpg", "jpeg"],
};

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id)) {
      return NextResponse.json({ error: "Invalid application." }, { status: 400 });
    }

    const form = await request.formData();
    const file = form.get("file");
    const category = String(form.get("category") ?? "").toLowerCase();
    const documentType = String(form.get("documentType") ?? "").trim();

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "File is required." }, { status: 400 });
    }
    if (!category || !allowedCategories.has(category) || !documentType || documentType.length > 80) {
      return NextResponse.json({ error: "Invalid document metadata." }, { status: 400 });
    }
    if (!allowedDocuments.includes(file.type as never)) {
      return NextResponse.json({ error: "Invalid file type." }, { status: 400 });
    }

    const extension = file.name.split(".").pop()?.toLowerCase() ?? "";
    if (!extensionsByMime[file.type]?.includes(extension)) {
      return NextResponse.json(
        { error: "File extension does not match MIME type." },
        { status: 400 },
      );
    }

    const limit = category === "financial" ? FINANCIAL_LIMIT : DEFAULT_LIMIT;
    if (!file.size || file.size > limit) {
      return NextResponse.json(
        { error: `File exceeds ${limit / 1024 / 1024} MB.` },
        { status: 400 },
      );
    }

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
        "content-type": response.headers.get("content-type") ?? "application/json",
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Upload failed." },
      { status: 503 },
    );
  }
}
