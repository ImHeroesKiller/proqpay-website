import { z } from "zod";

const optionalText = z.string().trim().max(500).optional().default("");
const optionalCount = z.preprocess(
  (value) => (value === "" || value === null || value === undefined ? undefined : value),
  z.coerce.number().int().nonnegative().optional(),
);

const fundingSchema = z
  .object({
    amount: z.coerce.number().positive(),
    paymentTerm: z.enum(["D+7", "D+14", "D+21", "D+30"]),
    repaymentSource: z.enum([
      "Operating Cash Flow",
      "Customer Receivable",
      "Project Payment",
      "Corporate Treasury",
      "Other",
    ]),
    customerPaymentTerm: z.enum([
      "Cash",
      "7 hari",
      "14 hari",
      "30 hari",
      "45 hari",
      "60 hari",
      ">60 hari",
    ]),
    workingCapital: z.boolean().default(false),
    revenueRange: z.enum([
      "<10 M",
      "10–25 M",
      "25–50 M",
      "50–100 M",
      "100–250 M",
      "250–500 M",
      ">500 M",
    ]),
    bankName: optionalText,
    facilityType: optionalText,
    facilityLimit: z.coerce.number().nonnegative().default(0),
  })
  .superRefine((value, ctx) => {
    if (!value.workingCapital) return;
    if (!value.bankName) {
      ctx.addIssue({ code: "custom", path: ["bankName"], message: "Nama bank wajib diisi." });
    }
    if (!value.facilityType) {
      ctx.addIssue({ code: "custom", path: ["facilityType"], message: "Jenis fasilitas wajib diisi." });
    }
    if (!value.facilityLimit) {
      ctx.addIssue({ code: "custom", path: ["facilityLimit"], message: "Limit fasilitas wajib diisi." });
    }
  });

export const payrollApplicationSchema = z.object({
  id: z.string().uuid().optional(),
  company: z.object({
    legalName: z.string().trim().min(2).max(200),
    businessType: z.enum(["PT", "CV", "Yayasan", "Koperasi", "Lainnya"]),
    country: z.string().trim().min(2).max(100).default("Indonesia"),
    npwp: z.string().trim().min(5).max(30),
    industry: z.string().trim().min(2).max(120),
    foundedYear: z.coerce.number().int().min(1900).max(new Date().getFullYear()),
    address: z.string().trim().min(5).max(500),
    city: z.string().trim().min(2).max(120),
    province: z.string().trim().min(2).max(120),
    brand: optionalText,
    website: optionalText,
    nib: optionalText,
    branchCount: optionalCount,
    totalEmployees: optionalCount,
  }),
  contact: z.object({
    name: z.string().trim().min(2).max(160),
    title: z.string().trim().min(2).max(120),
    department: z.string().trim().min(2).max(120),
    email: z.string().trim().email().max(200),
    whatsapp: z.string().trim().min(8).max(30),
    telephone: optionalText,
    preferred: z.enum(["WhatsApp", "Email", "Phone"]),
    authority: z.literal(true),
  }),
  payroll: z.object({
    employeeCount: z.coerce.number().int().positive(),
    monthlyPayroll: z.coerce.number().positive(),
    payrollDate: z.string().min(1),
    frequency: z.enum(["Monthly", "Bi-weekly", "Weekly", "Other"]),
    currentSystem: z.enum([
      "Internal HR",
      "Excel",
      "HRIS",
      "Payroll Provider",
      "Outsourcing Provider",
      "Belum ada sistem",
    ]),
    services: z.array(z.string().trim().min(1)).min(1),
    challenge: z.string().max(3000).optional().default(""),
  }),
  funding: fundingSchema.optional(),
  consents: z.object({
    accurate: z.literal(true),
    dataProcessing: z.literal(true),
  }),
});

export type PayrollApplication = z.infer<typeof payrollApplicationSchema>;

export const allowedDocuments = [
  "application/pdf",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "image/png",
  "image/jpeg",
] as const;
