import { z } from "zod";

const optionalText = z.string().trim().max(500).optional().default("");

export const payrollApplicationSchema = z.object({
  id: z.string().uuid().optional(),
  company: z.object({
    legalName: z.string().trim().min(2).max(200), businessType: z.string().trim().min(2), country: z.string().trim().min(2).max(100).default("Indonesia"), npwp: z.string().trim().min(5).max(30),
    industry: z.string().trim().min(2), foundedYear: z.coerce.number().int().min(1900).max(new Date().getFullYear()), address: z.string().trim().min(5).max(500),
    city: z.string().trim().min(2), province: z.string().trim().min(2), brand: optionalText, website: optionalText, nib: optionalText,
  }),
  contact: z.object({ name: z.string().trim().min(2), title: z.string().trim().min(2), department: z.string().trim().min(2), email: z.string().email(), whatsapp: z.string().trim().min(8), telephone: optionalText, preferred: z.enum(["WhatsApp", "Email", "Phone"]), authority: z.literal(true) }),
  payroll: z.object({ employeeCount: z.coerce.number().int().positive(), monthlyPayroll: z.coerce.number().positive(), payrollDate: z.string().min(1), frequency: z.string().min(1), currentSystem: z.string().min(1), services: z.array(z.string()).min(1), challenge: z.string().max(3000).optional().default("") }),
  funding: z.object({ amount: z.coerce.number().nonnegative().default(0), paymentTerm: optionalText, repaymentSource: optionalText, customerPaymentTerm: optionalText, workingCapital: z.boolean().default(false), revenueRange: optionalText, bankName: optionalText, facilityType: optionalText, facilityLimit: z.coerce.number().nonnegative().default(0) }).optional(),
  consents: z.object({ accurate: z.literal(true), dataProcessing: z.literal(true) }),
});

export type PayrollApplication = z.infer<typeof payrollApplicationSchema>;

export const allowedDocuments = ["application/pdf", "application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "image/png", "image/jpeg"] as const;
