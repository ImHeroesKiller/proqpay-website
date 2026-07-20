"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { demoFormSchema, type DemoFormValues } from "@/lib/validations/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function DemoForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DemoFormValues>({
    resolver: zodResolver(demoFormSchema) as never,
    defaultValues: {
      intent: "demo",
      name: "",
      email: "",
      company: "",
      phone: "",
      role: "",
      employeeCount: "",
      preferredDate: "",
      message: "I would like to schedule a ProQPay product demo.",
      website: "",
    },
  });

  const onSubmit = async (values: DemoFormValues) => {
    setStatus("loading");
    setErrorMessage("");
    try {
      const payload = {
        ...values,
        message: [
          values.message,
          `Employee count: ${values.employeeCount}`,
          values.preferredDate
            ? `Preferred date: ${values.preferredDate}`
            : null,
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
        throw new Error(data?.error ?? "Unable to submit demo request.");
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
        <h3 className="text-xl font-semibold">Demo request received</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Thank you. Our team will contact you shortly to schedule a walkthrough.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="demo-name">Full name</Label>
          <Input id="demo-name" {...register("name")} />
          {errors.name ? (
            <p className="text-xs text-destructive">{errors.name.message}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="demo-email">Work email</Label>
          <Input id="demo-email" type="email" {...register("email")} />
          {errors.email ? (
            <p className="text-xs text-destructive">{errors.email.message}</p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="demo-company">Company</Label>
          <Input id="demo-company" {...register("company")} />
          {errors.company ? (
            <p className="text-xs text-destructive">{errors.company.message}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="demo-phone">Phone (optional)</Label>
          <Input id="demo-phone" {...register("phone")} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="employeeCount">Employee count</Label>
          <select
            id="employeeCount"
            className="flex h-11 w-full rounded-xl border border-input bg-background px-3 text-sm shadow-sm"
            {...register("employeeCount")}
          >
            <option value="">Select range</option>
            <option value="1-100">1–100</option>
            <option value="101-500">101–500</option>
            <option value="501-2000">501–2,000</option>
            <option value="2000+">2,000+</option>
          </select>
          {errors.employeeCount ? (
            <p className="text-xs text-destructive">
              {errors.employeeCount.message}
            </p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="preferredDate">Preferred date (optional)</Label>
          <Input id="preferredDate" type="date" {...register("preferredDate")} />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="demo-message">Notes</Label>
        <Textarea id="demo-message" {...register("message")} />
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
        {status === "loading" ? "Submitting..." : "Request Demo"}
      </Button>
    </form>
  );
}
