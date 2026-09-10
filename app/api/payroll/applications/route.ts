import { NextResponse } from "next/server";
import { payrollWorker } from "@/lib/payroll/client";
import { payrollApplicationSchema } from "@/lib/validations/payroll-registration";

const UPLOAD_COOKIE = "msg_payroll_upload_token";

export async function POST(request: Request) {
  try {
    const parsed = payrollApplicationSchema.safeParse(await request.json());
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", issues: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const upstream = await payrollWorker("/applications", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(parsed.data),
    });
    const data = await upstream.json();
    const response = NextResponse.json(data, { status: upstream.status });

    if (upstream.ok && typeof data === "object" && data && "clientToken" in data) {
      const token = String((data as { clientToken?: string }).clientToken ?? "");
      if (token.length >= 60) {
        response.cookies.set(UPLOAD_COOKIE, token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
          path: "/api/payroll/applications",
          maxAge: 2 * 60 * 60,
        });
      }
    }

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to submit application." },
      { status: 503 },
    );
  }
}
