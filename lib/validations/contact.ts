import { z } from "zod";

export const contactIntentEnum = z.enum([
  "sales",
  "support",
  "payroll-demo",
  "partnership",
  "career",
  "general",
]);

export const contactFormSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid work email."),
  company: z.string().min(2, "Please enter your company name."),
  phone: z.string().optional(),
  role: z.string().optional(),
  intent: contactIntentEnum,
  message: z
    .string()
    .min(10, "Please provide a bit more detail (at least 10 characters).")
    .max(5000, "Message is too long."),
  website: z.string().max(0).optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const consultationFormSchema = contactFormSchema.extend({
  employeeCount: z.string().optional(),
  preferredDate: z.string().optional(),
  intent: z.enum(["sales", "payroll-demo", "partnership", "support"]),
});

export type ConsultationFormValues = z.infer<typeof consultationFormSchema>;
