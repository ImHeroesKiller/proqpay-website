"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactFormSchema,
  intentOptions,
  type ContactFormValues,
} from "@/lib/validations/contact";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export function ContactForm({
  defaultIntent = "general",
}: {
  defaultIntent?: ContactFormValues["intent"];
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema) as never,
    defaultValues: {
      intent: defaultIntent,
      name: "",
      email: "",
      company: "",
      phone: "",
      role: "",
      workforceRequirement: "",
      estimatedWorkers: "",
      message: "",
      privacyConsent: false,
      website: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("loading");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(data?.error ?? "Unable to send message.");
      }
      setStatus("success");
      reset({
        intent: defaultIntent,
        name: "",
        email: "",
        company: "",
        phone: "",
        role: "",
        workforceRequirement: "",
        estimatedWorkers: "",
        message: "",
        privacyConsent: false,
        website: "",
      });
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong.",
      );
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-border bg-muted/40 p-8 text-center">
        <h3 className="text-xl font-semibold">Thank you</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          MSG will respond shortly. For urgent matters:{" "}
          <a
            className="font-medium text-[#0B3A6E] dark:text-blue-300"
            href={`mailto:${siteConfig.contact.email}`}
          >
            {siteConfig.contact.email}
          </a>{" "}
          or WhatsApp{" "}
          <a
            className="font-medium text-[#0B3A6E] dark:text-blue-300"
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {siteConfig.contact.whatsappDisplay}
          </a>
          .
        </p>
        <Button className="mt-6" variant="outline" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" autoComplete="name" {...register("name")} />
          {errors.name ? (
            <p className="text-xs text-destructive" role="alert">
              {errors.name.message}
            </p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Work email</Label>
          <Input id="email" type="email" autoComplete="email" {...register("email")} />
          {errors.email ? (
            <p className="text-xs text-destructive" role="alert">
              {errors.email.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input id="company" autoComplete="organization" {...register("company")} />
          {errors.company ? (
            <p className="text-xs text-destructive" role="alert">
              {errors.company.message}
            </p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="role">Position</Label>
          <Input id="role" autoComplete="organization-title" {...register("role")} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" autoComplete="tel" {...register("phone")} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="intent">Service interest</Label>
          <select
            id="intent"
            className="flex h-11 w-full rounded-xl border border-input bg-background px-3 text-sm shadow-sm"
            {...register("intent")}
          >
            {intentOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="workforceRequirement">Workforce requirement</Label>
          <Input
            id="workforceRequirement"
            placeholder="e.g. Field team, engineering, admin"
            {...register("workforceRequirement")}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="estimatedWorkers">Estimated number of workers</Label>
          <Input
            id="estimatedWorkers"
            placeholder="e.g. 25–50"
            {...register("estimatedWorkers")}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" rows={5} {...register("message")} />
        {errors.message ? (
          <p className="text-xs text-destructive" role="alert">
            {errors.message.message}
          </p>
        ) : null}
      </div>

      <div className="flex items-start gap-3">
        <input
          id="privacyConsent"
          type="checkbox"
          className="mt-1 h-4 w-4 rounded border-input"
          {...register("privacyConsent")}
        />
        <Label htmlFor="privacyConsent" className="text-sm font-normal leading-relaxed">
          I agree to the processing of my information in accordance with the{" "}
          <Link href="/privacy" className="font-medium text-[#0B3A6E] underline-offset-2 hover:underline dark:text-blue-300">
            Privacy Policy
          </Link>
          .
        </Label>
      </div>
      {errors.privacyConsent ? (
        <p className="text-xs text-destructive" role="alert">
          {errors.privacyConsent.message}
        </p>
      ) : null}

      <div className="absolute left-[-9999px]" aria-hidden>
        <Label htmlFor="website">Website</Label>
        <Input
          id="website"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      {status === "error" ? (
        <p className="text-sm text-destructive" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <Button
        type="submit"
        size="lg"
        className="bg-[#0B3A6E] text-white hover:bg-[#0a3360]"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}
