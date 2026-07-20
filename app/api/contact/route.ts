import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/contact";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", issues: parsed.error.flatten() },
        { status: 400 },
      );
    }

    // Honeypot triggered
    if (parsed.data.website) {
      return NextResponse.json({ ok: true });
    }

    // Placeholder email delivery — replace with Resend/SendGrid in production.
    console.info("[ProQPay Contact]", {
      ...parsed.data,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      ok: true,
      message: "Message received. Our team will respond shortly.",
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to process request." },
      { status: 500 },
    );
  }
}
