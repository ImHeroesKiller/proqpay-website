"use client";

import { useState } from "react";
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
  defaultIntent = "consultation",
}: {
  defaultIntent?: "consultation" | "proqpay-demo" | "sales";
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
        defaultIntent === "proqpay-demo"
          ? "I would like a ProQPay product demonstration."
          : "I would like a consultation with the MSG team.",
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
          values.employeeCount ? `Employee/team size: ${values.employeeCount}` : null,
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
        <h3 className="text-xl font-semibold">Request received</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Thank you. Our team will contact you shortly to schedule a consultation
          or demo.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="c-name">Full name</Label>
          <Input id="c-name" {...register("name")} />
          {errors.name ? (
            <p className="text-xs text-destructive">{errors.name.message}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="c-email">Work email</Label>
          <Input id="c-email" type="email" {...register("email")} />
          {errors.email ? (
            <p className="text-xs text-destructive">{errors.email.message}</p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="c-company">Company</Label>
          <Input id="c-company" {...register("company")} />
          {errors.company ? (
            <p className="text-xs text-destructive">{errors.company.message}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="c-phone">Phone (optional)</Label>
          <Input id="c-phone" {...register("phone")} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="intent">Intent</Label>
          <select
            id="intent"
            className="flex h-11 w-full rounded-xl border border-input bg-background px-3 text-sm shadow-sm"
            {...register("intent")}
          >
            <option value="consultation">Workforce consultation</option>
            <option value="proqpay-demo">ProQPay demo</option>
            <option value="sales">Talk to sales</option>
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="employeeCount">Team / employee scale (optional)</Label>
          <select
            id="employeeCount"
            className="flex h-11 w-full rounded-xl border border-input bg-background px-3 text-sm shadow-sm"
            {...register("employeeCount")}
          >
            <option value="">Select range</option>
            <option value="1-50">1–50</option>
            <option value="51-200">51–200</option>
            <option value="201-1000">201–1,000</option>
            <option value="1000+">1,000+</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="preferredDate">Preferred date (optional)</Label>
        <Input id="preferredDate" type="date" {...register("preferredDate")} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="c-message">Notes</Label>
        <Textarea id="c-message" {...register("message")} />
        {errors.message ? (
          <p className="text-xs text-destructive">{errors.message.message}</p>
        ) : null}
      </div>

      <div className="absolute left-[-9999px]" aria-hidden>
        <Input tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      {status === "error" ? (
        <p className="text-sm text-destructive">{errorMessage}</p>
      ) : null}

      <Button type="submit" variant="accent" size="lg" disabled={status === "loading"}>
        {status === "loading" ? "Submitting..." : "Request Consultation"}
      </Button>
    </form>
  );
}
