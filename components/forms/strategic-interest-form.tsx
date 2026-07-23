"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import {
  interestAreaOptions,
  partnerTypeOptions,
  strategicInterestSchema,
  type StrategicInterestValues,
} from "@/lib/validations/strategic-interest";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const selectClass =
  "flex h-11 w-full rounded-xl border border-input bg-background px-3 text-sm shadow-sm";

export function StrategicInterestForm({
  portfolioSlug,
}: {
  portfolioSlug?: string;
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
  } = useForm<StrategicInterestValues>({
    resolver: zodResolver(strategicInterestSchema) as never,
    defaultValues: {
      name: "",
      company: "",
      position: "",
      email: "",
      phone: "",
      partnerType: "strategic-investor",
      areaOfInterest: "request-more-information",
      investmentRange: "",
      industryExperience: "",
      message: "",
      confidentialityAck: false,
      privacyConsent: false,
      website: "",
      portfolioSlug: portfolioSlug ?? "",
    },
  });

  const onSubmit = async (values: StrategicInterestValues) => {
    setStatus("loading");
    setErrorMessage("");
    try {
      const res = await fetch("/api/strategic-interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(data?.error ?? "Unable to send inquiry.");
      }
      setStatus("success");
      reset();
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
        <h3 className="text-xl font-semibold">Inquiry received</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          MSG Strategic Advisory will review your submission. Qualified parties
          may be contacted for a confidential discussion. For urgent matters:{" "}
          <a
            className="font-medium text-[#0B3A6E] dark:text-blue-300"
            href={`mailto:${siteConfig.contact.email}`}
          >
            {siteConfig.contact.email}
          </a>
          .
        </p>
        <Button className="mt-6" variant="outline" onClick={() => setStatus("idle")}>
          Submit another inquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="si-name">Full name</Label>
          <Input id="si-name" autoComplete="name" {...register("name")} />
          {errors.name ? (
            <p className="text-xs text-destructive" role="alert">
              {errors.name.message}
            </p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="si-company">Company</Label>
          <Input
            id="si-company"
            autoComplete="organization"
            {...register("company")}
          />
          {errors.company ? (
            <p className="text-xs text-destructive" role="alert">
              {errors.company.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="si-position">Position</Label>
          <Input
            id="si-position"
            autoComplete="organization-title"
            {...register("position")}
          />
          {errors.position ? (
            <p className="text-xs text-destructive" role="alert">
              {errors.position.message}
            </p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="si-email">Work email</Label>
          <Input
            id="si-email"
            type="email"
            autoComplete="email"
            {...register("email")}
          />
          {errors.email ? (
            <p className="text-xs text-destructive" role="alert">
              {errors.email.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="si-phone">Phone</Label>
          <Input id="si-phone" autoComplete="tel" {...register("phone")} />
          {errors.phone ? (
            <p className="text-xs text-destructive" role="alert">
              {errors.phone.message}
            </p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="si-partner">Investor or partner type</Label>
          <select
            id="si-partner"
            className={selectClass}
            {...register("partnerType")}
          >
            {partnerTypeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="si-interest">Area of interest</Label>
          <select
            id="si-interest"
            className={selectClass}
            {...register("areaOfInterest")}
          >
            {interestAreaOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="si-range">Indicative investment range (optional)</Label>
          <Input
            id="si-range"
            placeholder="Optional — no proof of funds required"
            {...register("investmentRange")}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="si-experience">Relevant industry experience (optional)</Label>
        <Input id="si-experience" {...register("industryExperience")} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="si-message">Message</Label>
        <Textarea id="si-message" rows={5} {...register("message")} />
        {errors.message ? (
          <p className="text-xs text-destructive" role="alert">
            {errors.message.message}
          </p>
        ) : null}
      </div>

      <input type="hidden" {...register("portfolioSlug")} />

      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <input
            id="si-confidentiality"
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-input"
            {...register("confidentialityAck")}
          />
          <Label
            htmlFor="si-confidentiality"
            className="text-sm font-normal leading-relaxed"
          >
            I acknowledge that transaction-related information is confidential
            and may only be shared after internal review and, where required, an
            NDA.
          </Label>
        </div>
        {errors.confidentialityAck ? (
          <p className="text-xs text-destructive" role="alert">
            {errors.confidentialityAck.message}
          </p>
        ) : null}

        <div className="flex items-start gap-3">
          <input
            id="si-privacy"
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-input"
            {...register("privacyConsent")}
          />
          <Label htmlFor="si-privacy" className="text-sm font-normal leading-relaxed">
            I agree to the processing of my information in accordance with the{" "}
            <Link
              href="/privacy"
              className="font-medium text-[#0B3A6E] underline-offset-2 hover:underline dark:text-blue-300"
            >
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
      </div>

      <div className="absolute left-[-9999px]" aria-hidden>
        <Label htmlFor="si-website">Website</Label>
        <Input
          id="si-website"
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

      <p className="text-xs text-muted-foreground">
        Do not submit proof of funds, financial statements, or sensitive personal
        documents through this form.
      </p>

      <Button
        type="submit"
        size="lg"
        className="bg-[#0B3A6E] text-white hover:bg-[#0a3360]"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending..." : "Request Confidential Discussion"}
      </Button>
    </form>
  );
}
