import { redirect } from "next/navigation";

export default async function LegacyConsultation({
  searchParams,
}: {
  searchParams: Promise<{ intent?: string | string[] }>;
}) {
  const params = await searchParams;
  const intent = Array.isArray(params.intent) ? params.intent[0] : params.intent;

  if (intent) {
    redirect(`/contact?intent=${encodeURIComponent(intent)}`);
  }

  redirect("/contact");
}
