import { z } from "zod";

export const contactIntentEnum = z.enum([
  "workforce-outsourcing",
  "engineering-talent",
  "business-support",
  "managed-workforce",
  "payroll-demo",
  "partnership",
  "career",
  "sales",
  "support",
  "general",
]);

export const contactFormSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid work email."),
  company: z.string().min(2, "Please enter your company name."),
  phone: z.string().optional(),
  role: z.string().optional(),
  intent: contactIntentEnum,
  workforceRequirement: z.string().optional(),
  estimatedWorkers: z.string().optional(),
  message: z
    .string()
    .min(10, "Please provide a bit more detail (at least 10 characters).")
    .max(5000, "Message is too long."),
  privacyConsent: z
    .boolean()
    .refine((val) => val === true, {
      message: "Please accept the privacy policy to continue.",
    }),
  website: z.string().max(0).optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const consultationFormSchema = contactFormSchema.extend({
  employeeCount: z.string().optional(),
  preferredDate: z.string().optional(),
  intent: z.enum([
    "workforce-outsourcing",
    "engineering-talent",
    "business-support",
    "managed-workforce",
    "payroll-demo",
    "partnership",
    "sales",
    "support",
  ]),
});

export type ConsultationFormValues = z.infer<typeof consultationFormSchema>;

export const intentOptions: {
  value: ContactFormValues["intent"];
  label: string;
}[] = [
  { value: "workforce-outsourcing", label: "Workforce Outsourcing" },
  { value: "engineering-talent", label: "Engineering Talent" },
  { value: "business-support", label: "Business Support" },
  { value: "managed-workforce", label: "Managed Workforce" },
  { value: "payroll-demo", label: "ProQPay Demo" },
  { value: "partnership", label: "Partnership" },
  { value: "career", label: "Careers" },
  { value: "sales", label: "Sales" },
  { value: "support", label: "Support" },
  { value: "general", label: "Other" },
];
