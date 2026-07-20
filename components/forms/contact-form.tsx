"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/validations/contact";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

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
      message: "",
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
        message: "",
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" autoComplete="name" {...register("name")} />
          {errors.name ? (
            <p className="text-xs text-destructive">{errors.name.message}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Work email</Label>
          <Input id="email" type="email" autoComplete="email" {...register("email")} />
          {errors.email ? (
            <p className="text-xs text-destructive">{errors.email.message}</p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input id="company" autoComplete="organization" {...register("company")} />
          {errors.company ? (
            <p className="text-xs text-destructive">{errors.company.message}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone (optional)</Label>
          <Input id="phone" autoComplete="tel" {...register("phone")} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="role">Role (optional)</Label>
          <Input id="role" {...register("role")} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="intent">Category</Label>
          <select
            id="intent"
            className="flex h-11 w-full rounded-xl border border-input bg-background px-3 text-sm shadow-sm"
            {...register("intent")}
          >
            <option value="sales">Sales</option>
            <option value="support">Support</option>
            <option value="payroll-demo">Payroll Demo</option>
            <option value="partnership">Partnership</option>
            <option value="career">Career</option>
            <option value="general">General</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" {...register("message")} />
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
