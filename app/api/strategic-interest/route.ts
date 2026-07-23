import { NextResponse } from "next/server";
import { strategicInterestSchema } from "@/lib/validations/strategic-interest";
import { isStrategicInterestEnabled } from "@/lib/content/portfolio";

export async function POST(request: Request) {
  try {
    if (!isStrategicInterestEnabled()) {
      return NextResponse.json(
        {
          error:
            "Strategic interest submissions are not open publicly at this time. Please contact MSG Advisory via the main contact channel.",
        },
        { status: 403 },
      );
    }

    const body = await request.json();
    const parsed = strategicInterestSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", issues: parsed.error.flatten() },
        { status: 400 },
      );
    }

    if (parsed.data.website) {
      return NextResponse.json({ ok: true });
    }

    // Placeholder delivery — wire to Resend/SendGrid for Strategic Advisory inbox.
    console.info("[MSG Strategic Interest]", {
      ...parsed.data,
      // Never log fabricated financials; form does not collect proof of funds.
      receivedAt: new Date().toISOString(),
      routeTo: "strategic-advisory",
    });

    return NextResponse.json({
      ok: true,
      message:
        "Inquiry received. MSG Strategic Advisory will review and respond to qualified parties.",
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to process request." },
      { status: 500 },
    );
  }
}
