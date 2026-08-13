import { z } from "zod";

export const payrollOcrFieldKeys = [
  "legalName",
  "businessType",
  "country",
  "npwp",
  "industry",
  "foundedYear",
  "address",
  "city",
  "province",
  "brand",
  "website",
  "nib",
  "contactName",
  "title",
  "department",
  "email",
  "whatsapp",
  "telephone",
  "employeeCount",
  "monthlyPayroll",
  "payrollDate",
  "frequency",
  "currentSystem",
  "challenge",
  "fundingAmount",
  "paymentTerm",
  "repaymentSource",
  "customerPaymentTerm",
  "revenueRange",
  "bankName",
  "facilityType",
  "facilityLimit",
] as const;

export const payrollOcrFieldSchema = z.object({
  key: z.enum(payrollOcrFieldKeys),
  label: z
    .string()
    .nullable()
    .transform((value) => value || "Field terdeteksi"),
  value: z
    .union([z.string(), z.number()])
    .nullable()
    .transform((value) => (value == null ? "" : String(value))),
  confidence: z.enum(["high", "medium", "low"]),
  source: z
    .string()
    .nullable()
    .transform((value) => value || "Dokumen terlampir"),
});

export const payrollOcrResultSchema = z.object({
  companyName: z
    .string()
    .nullable()
    .transform((value) => value || ""),
  documentTypes: z
    .array(z.string())
    .nullable()
    .transform((value) => value || []),
  fields: z.array(payrollOcrFieldSchema),
  warnings: z
    .array(z.string())
    .nullable()
    .transform((value) => value || []),
});

export type PayrollOcrResult = z.infer<typeof payrollOcrResultSchema>;

export const payrollOcrLabels: Record<
  (typeof payrollOcrFieldKeys)[number],
  string
> = {
  legalName: "Nama legal perusahaan",
  businessType: "Bentuk badan usaha",
  country: "Negara",
  npwp: "NPWP / Tax ID",
  industry: "Industri",
  foundedYear: "Tahun berdiri",
  address: "Alamat",
  city: "Kota",
  province: "Provinsi",
  brand: "Nama brand",
  website: "Website",
  nib: "NIB / Registration ID",
  contactName: "Nama contact person",
  title: "Jabatan",
  department: "Departemen",
  email: "Corporate email",
  whatsapp: "WhatsApp",
  telephone: "Telepon",
  employeeCount: "Jumlah employee",
  monthlyPayroll: "Monthly payroll (IDR)",
  payrollDate: "Tanggal payroll",
  frequency: "Frekuensi payroll",
  currentSystem: "Sistem payroll saat ini",
  challenge: "Tantangan payroll",
  fundingAmount: "Kebutuhan funding (IDR)",
  paymentTerm: "Payment term",
  repaymentSource: "Sumber pembayaran",
  customerPaymentTerm: "Customer payment term",
  revenueRange: "Annual revenue range",
  bankName: "Nama bank",
  facilityType: "Jenis fasilitas",
  facilityLimit: "Limit fasilitas",
};
