import { z } from "zod";

export const contactIntentEnum = z.enum(["demo", "sales", "general"]);

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
  website: z.string().max(0).optional(), // honeypot
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const demoFormSchema = contactFormSchema.extend({
  employeeCount: z.string().min(1, "Please select employee count."),
  preferredDate: z.string().optional(),
  intent: z.literal("demo"),
});

export type DemoFormValues = z.infer<typeof demoFormSchema>;
