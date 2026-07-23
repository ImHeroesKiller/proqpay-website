import { NextResponse } from "next/server";
import { strategicInterestSchema } from "@/lib/validations/strategic-interest";
import { isStrategicInterestEnabled } from "@/lib/content/portfolio";

/** Simple in-memory rate limit (per isolate). TODO: replace with durable store in multi-instance production. */
const rateBuckets = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 8;
const RATE_WINDOW_MS = 60 * 60 * 1000;

function getClientKey(request: Request): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const bucket = rateBuckets.get(key);
  if (!bucket || now > bucket.resetAt) {
    rateBuckets.set(key, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  bucket.count += 1;
  return bucket.count > RATE_LIMIT;
}

export async function POST(request: Request) {
  try {
    if (!isStrategicInterestEnabled()) {
      return NextResponse.json(
        {
          error:
            "Strategic interest submissions are not available at this time. Please contact MSG Advisory via the main contact channel.",
        },
        { status: 403 },
      );
    }

    const clientKey = getClientKey(request);
    if (isRateLimited(clientKey)) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again later." },
        { status: 429 },
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

    // Honeypot
    if (parsed.data.website) {
      return NextResponse.json({ ok: true });
    }

    // Sanitize: only log non-sensitive operational fields for advisory follow-up.
    // TODO: integrate Resend/SendGrid for Strategic Advisory inbox delivery.
    const {
      name,
      company,
      position,
      email,
      phone,
      partnerType,
      areaOfInterest,
      investmentRange,
      industryExperience,
      message,
      portfolioSlug,
    } = parsed.data;

    console.info("[MSG Strategic Interest]", {
      name,
      company,
      position,
      email,
      phone,
      partnerType,
      areaOfInterest,
      investmentRange: investmentRange || null,
      industryExperience: industryExperience || null,
      messageLength: message.length,
      portfolioSlug: portfolioSlug || null,
      receivedAt: new Date().toISOString(),
      routeTo: "strategic-advisory",
    });

    return NextResponse.json({
      ok: true,
      message:
        "Thank you. Our Strategic Advisory team will review your submission and contact you if the opportunity is relevant.",
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to process request." },
      { status: 500 },
    );
  }
}
