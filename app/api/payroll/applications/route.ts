import { NextResponse } from "next/server";
import { payrollWorker } from "@/lib/payroll/client";
import { payrollApplicationSchema } from "@/lib/validations/payroll-registration";

export async function POST(request: Request) {
  try {
    const parsed = payrollApplicationSchema.safeParse(await request.json());
    if (!parsed.success) return NextResponse.json({ error: "Validation failed", issues: parsed.error.flatten() }, { status: 400 });
    const response = await payrollWorker("/applications", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(parsed.data) });
    return new NextResponse(response.body, { status: response.status, headers: { "content-type": response.headers.get("content-type") ?? "application/json" } });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unable to submit application." }, { status: 503 });
  }
}
