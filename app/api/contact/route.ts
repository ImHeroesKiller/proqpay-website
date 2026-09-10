import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/contact";

export const runtime = "nodejs";

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

    // Honeypot triggered: return success without forwarding the submission.
    if (parsed.data.website) {
      return NextResponse.json({ ok: true });
    }

    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (!webhookUrl) {
      return NextResponse.json(
        {
          error:
            "Online contact delivery is temporarily unavailable. Please contact MSG by email or WhatsApp.",
        },
        { status: 503 },
      );
    }

    const { website: _honeypot, ...submission } = parsed.data;
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };
    if (process.env.CONTACT_WEBHOOK_TOKEN) {
      headers.Authorization = `Bearer ${process.env.CONTACT_WEBHOOK_TOKEN}`;
    }

    const upstream = await fetch(webhookUrl, {
      method: "POST",
      headers,
      body: JSON.stringify({
        source: "msg-os.com",
        receivedAt: new Date().toISOString(),
        ...submission,
      }),
      cache: "no-store",
    });

    if (!upstream.ok) {
      console.error("[MSG Contact] delivery failed", {
        status: upstream.status,
      });
      return NextResponse.json(
        {
          error:
            "We could not deliver your message. Please contact MSG by email or WhatsApp.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      ok: true,
      message: "Message received. Our team will respond shortly.",
    });
  } catch (error) {
    console.error("[MSG Contact] request failed", {
      message: error instanceof Error ? error.message : "Unknown error",
    });
    return NextResponse.json(
      { error: "Unable to process request." },
      { status: 500 },
    );
  }
}
