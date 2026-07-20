"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  consultationFormSchema,
  type ConsultationFormValues,
} from "@/lib/validations/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ConsultationForm({
  defaultIntent = "sales",
}: {
  defaultIntent?: ConsultationFormValues["intent"];
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
  } = useForm<ConsultationFormValues>({
    resolver: zodResolver(consultationFormSchema) as never,
    defaultValues: {
      intent: defaultIntent,
      name: "",
      email: "",
      company: "",
      phone: "",
      role: "",
      employeeCount: "",
      preferredDate: "",
      message:
        defaultIntent === "payroll-demo"
          ? "I would like a ProQPay payroll demo."
          : "I would like a consultation with MSG.",
      privacyConsent: false,
      website: "",
    },
  });

  const onSubmit = async (values: ConsultationFormValues) => {
    setStatus("loading");
    setErrorMessage("");
    try {
      const payload = {
        ...values,
        message: [
          values.message,
          values.employeeCount ? `Team size: ${values.employeeCount}` : null,
          values.preferredDate ? `Preferred date: ${values.preferredDate}` : null,
        ]
          .filter(Boolean)
          .join("\n"),
      };
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(data?.error ?? "Unable to submit request.");
      }
      setStatus("success");
      reset({
        intent: defaultIntent,
        name: "",
        email: "",
        company: "",
        phone: "",
        role: "",
        employeeCount: "",
        preferredDate: "",
        message:
          defaultIntent === "payroll-demo"
            ? "I would like a ProQPay payroll demo."
            : "I would like a consultation with MSG.",
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
        <h3 className="text-xl font-semibold">Request received</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Thank you. MSG will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="c-name">Full name</Label>
          <Input id="c-name" {...register("name")} />
          {errors.name ? (
            <p className="text-xs text-destructive" role="alert">
              {errors.name.message}
            </p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="c-email">Work email</Label>
          <Input id="c-email" type="email" {...register("email")} />
          {errors.email ? (
            <p className="text-xs text-destructive" role="alert">
              {errors.email.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="c-company">Company</Label>
          <Input id="c-company" {...register("company")} />
          {errors.company ? (
            <p className="text-xs text-destructive" role="alert">
              {errors.company.message}
            </p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="intent">Service interest</Label>
          <select
            id="intent"
            className="flex h-11 w-full rounded-xl border border-input bg-background px-3 text-sm shadow-sm"
            {...register("intent")}
          >
            <option value="workforce-outsourcing">Workforce Outsourcing</option>
            <option value="engineering-talent">Engineering Talent</option>
            <option value="business-support">Business Support</option>
            <option value="managed-workforce">Managed Workforce</option>
            <option value="payroll-demo">ProQPay Demo</option>
            <option value="partnership">Partnership</option>
            <option value="sales">Sales</option>
            <option value="support">Support</option>
          </select>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="employeeCount">Estimated team size</Label>
          <Input id="employeeCount" placeholder="e.g. 50" {...register("employeeCount")} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="preferredDate">Preferred contact date</Label>
          <Input id="preferredDate" type="date" {...register("preferredDate")} />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="c-message">Notes</Label>
        <Textarea id="c-message" {...register("message")} />
        {errors.message ? (
          <p className="text-xs text-destructive" role="alert">
            {errors.message.message}
          </p>
        ) : null}
      </div>

      <div className="flex items-start gap-3">
        <input
          id="c-privacy"
          type="checkbox"
          className="mt-1 h-4 w-4 rounded border-input"
          {...register("privacyConsent")}
        />
        <Label htmlFor="c-privacy" className="text-sm font-normal leading-relaxed">
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

      <div className="absolute left-[-9999px]" aria-hidden>
        <Input tabIndex={-1} autoComplete="off" {...register("website")} />
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
        {status === "loading" ? "Submitting..." : "Request Consultation"}
      </Button>
    </form>
  );
}
