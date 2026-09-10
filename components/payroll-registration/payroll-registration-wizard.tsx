"use client";

import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  BarChart3,
  Building2,
  Check,
  CircleDollarSign,
  FileText,
  Landmark,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Draft = Record<string, string | boolean | string[]>;
type PendingApplication = {
  id: string;
  registrationNumber: string;
  clientToken: string;
  uploaded: string[];
};
type FieldDefinition = {
  key: string;
  label: string;
  type?: string;
  optional?: boolean;
  inputMode?: "numeric" | "tel" | "email" | "url";
};
type DocumentCategory =
  | "company-profile"
  | "legal"
  | "financial"
  | "payroll"
  | "commercial"
  | "supporting";
type DocumentSlot = {
  key: string;
  label: string;
  category: DocumentCategory;
  required?: boolean;
};

const DRAFT_KEY = "msg-payroll-draft";
const PENDING_KEY = "msg-payroll-pending-application";
const TOKEN_KEY = "msg-payroll-client-token";
const DEFAULT_LIMIT = 10 * 1024 * 1024;
const FINANCIAL_LIMIT = 20 * 1024 * 1024;

const baseSteps = ["Company", "Contact", "Payroll", "Funding", "Documents", "Review"] as const;
const services = [
  "Payroll Calculation",
  "PPh 21",
  "BPJS Kesehatan",
  "BPJS Ketenagakerjaan",
  "Payslip",
  "Salary Disbursement",
  "Payroll Reconciliation",
  "Payroll Reporting",
  "Employee Data Management",
  "Payroll Funding",
];
const fields: Record<number, FieldDefinition[]> = {
  0: [
    { key: "legalName", label: "Nama Legal Perusahaan" },
    { key: "businessType", label: "Bentuk Badan Usaha" },
    { key: "country", label: "Negara Domisili" },
    { key: "npwp", label: "NPWP / Tax ID", inputMode: "numeric" },
    { key: "industry", label: "Industri" },
    { key: "foundedYear", label: "Tahun Berdiri", type: "number", inputMode: "numeric" },
    { key: "address", label: "Alamat Kantor" },
    { key: "city", label: "Kota" },
    { key: "province", label: "Provinsi / State" },
    { key: "brand", label: "Nama Brand", optional: true },
    { key: "website", label: "Website", optional: true, inputMode: "url" },
    { key: "nib", label: "NIB / Registration ID", optional: true },
    { key: "branchCount", label: "Jumlah Cabang", type: "number", optional: true, inputMode: "numeric" },
    { key: "totalEmployees", label: "Jumlah Karyawan", type: "number", optional: true, inputMode: "numeric" },
  ],
  1: [
    { key: "contactName", label: "Nama Lengkap" },
    { key: "title", label: "Jabatan" },
    { key: "department", label: "Department" },
    { key: "email", label: "Email Corporate", type: "email", inputMode: "email" },
    { key: "whatsapp", label: "WhatsApp Number", type: "tel", inputMode: "tel" },
    { key: "telephone", label: "Telephone", type: "tel", inputMode: "tel", optional: true },
  ],
  2: [
    { key: "employeeCount", label: "Jumlah karyawan yang diproses", type: "number", inputMode: "numeric" },
    { key: "monthlyPayroll", label: "Estimasi total payroll / bulan", inputMode: "numeric" },
    { key: "payrollDate", label: "Tanggal pembayaran gaji", type: "date" },
  ],
};
const dropdowns: Record<string, string[]> = {
  businessType: ["PT", "CV", "Yayasan", "Koperasi", "Lainnya"],
  country: ["Indonesia", "Singapore", "Malaysia", "Thailand", "Vietnam", "Philippines", "Other"],
  industry: [
    "Financial Services",
    "Technology",
    "Manufacturing",
    "FMCG",
    "Retail",
    "Logistics",
    "Construction",
    "Energy",
    "Healthcare",
    "Professional Services",
    "Other",
  ],
  province: [
    "DKI Jakarta",
    "Banten",
    "Jawa Barat",
    "Jawa Tengah",
    "DI Yogyakarta",
    "Jawa Timur",
    "Bali",
    "Other",
  ],
};
const documentSlots: DocumentSlot[] = [
  { key: "company-profile", label: "Company Profile", category: "company-profile" },
  { key: "npwp", label: "NPWP", category: "legal", required: true },
  { key: "nib", label: "NIB", category: "legal", required: true },
  { key: "akta", label: "Akta Pendirian / Perubahan", category: "legal" },
  { key: "ahu", label: "AHU", category: "legal" },
  { key: "financial", label: "Financial Statement", category: "financial", required: true },
  { key: "financial-management", label: "Management Account", category: "financial" },
  { key: "financial-bank", label: "Rekening Koran", category: "financial" },
  { key: "financial-ar", label: "AR Aging", category: "financial" },
  { key: "financial-ap", label: "AP Aging", category: "financial" },
  { key: "payroll-register", label: "Payroll Register", category: "payroll" },
  { key: "payroll-6-months", label: "Rekap Payroll 6 bulan", category: "payroll" },
  { key: "payroll-bpjs", label: "BPJS", category: "payroll" },
  { key: "payroll-pph21", label: "PPh21", category: "payroll" },
  { key: "commercial-customer-list", label: "Customer List", category: "commercial" },
  { key: "commercial-contract", label: "Contract / PO", category: "commercial" },
  { key: "commercial-payment-term", label: "Payment Term Customer", category: "commercial" },
  { key: "supporting-other", label: "Dokumen Pendukung Lainnya", category: "supporting" },
];
const benefits = [
  { Icon: Landmark, title: "Payroll Processing", description: "Perhitungan payroll, BPJS, pajak, dan komponen remunerasi." },
  { Icon: Building2, title: "Payroll Disbursement", description: "Workflow pembayaran gaji dengan approval dan reconciliation." },
  { Icon: CircleDollarSign, title: "Payroll Funding", description: "Opsi fasilitas pendanaan payroll berdasarkan hasil assessment." },
  { Icon: BarChart3, title: "Payroll Reporting", description: "Dashboard dan laporan payroll yang terstruktur dan transparan." },
];

function currencyDigits(value: unknown) {
  return String(value ?? "").replace(/\D/g, "");
}
function formatIdr(value: unknown) {
  const digits = currencyDigits(value);
  return digits ? `Rp${Number(digits).toLocaleString("id-ID")}` : "";
}
function formatNpwp(value: unknown) {
  const digits = String(value ?? "").replace(/\D/g, "").slice(0, 16);
  if (digits.length === 16) return digits.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
  let result = digits.slice(0, 2);
  if (digits.length > 2) result += `.${digits.slice(2, 5)}`;
  if (digits.length > 5) result += `.${digits.slice(5, 8)}`;
  if (digits.length > 8) result += `.${digits.slice(8, 9)}`;
  if (digits.length > 9) result += `-${digits.slice(9, 12)}`;
  if (digits.length > 12) result += `.${digits.slice(12, 15)}`;
  return result;
}
function sanitizePhone(value: string) {
  return value.replace(/[^+\d\s()-]/g, "").slice(0, 30);
}
function parseStored<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    localStorage.removeItem(key);
    return null;
  }
}
function fileError(slot: DocumentSlot, file: File) {
  const allowed: Record<string, string[]> = {
    "application/pdf": ["pdf"],
    "application/vnd.ms-excel": ["xls"],
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ["xlsx"],
    "image/png": ["png"],
    "image/jpeg": ["jpg", "jpeg"],
  };
  const extension = file.name.split(".").pop()?.toLowerCase() ?? "";
  if (!allowed[file.type] || !allowed[file.type].includes(extension)) {
    return "Format file tidak valid atau extension tidak sesuai MIME type.";
  }
  const limit = slot.category === "financial" ? FINANCIAL_LIMIT : DEFAULT_LIMIT;
  return !file.size || file.size > limit
    ? `Ukuran maksimum ${limit / 1024 / 1024} MB untuk dokumen ini.`
    : "";
}

export function PayrollRegistrationWizard() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [idaPrefilled, setIdaPrefilled] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [pending, setPending] = useState<PendingApplication | null>(null);
  const [documents, setDocuments] = useState<Record<string, File | undefined>>({});
  const [draft, setDraft] = useState<Draft>({
    country: "Indonesia",
    services: [],
    frequency: "Monthly",
    currentSystem: "Excel",
    preferred: "WhatsApp",
    authority: false,
    accurate: false,
    dataProcessing: false,
    workingCapital: false,
  });

  const funding = Array.isArray(draft.services) && draft.services.includes("Payroll Funding");
  const steps = useMemo(
    () => (funding ? [...baseSteps] : baseSteps.filter((name) => name !== "Funding")),
    [funding],
  );
  const current = steps[step] ?? steps[0];
  const fieldSet = fields[baseSteps.indexOf(current as (typeof baseSteps)[number])];

  useEffect(() => {
    const saved = parseStored<Draft>(DRAFT_KEY);
    if (saved) {
      setDraft((previous) => ({
        ...previous,
        ...saved,
        services: Array.isArray(saved.services) ? saved.services : [],
      }));
    }
    const savedPending = parseStored<PendingApplication>(PENDING_KEY);
    if (savedPending?.id && savedPending.registrationNumber && savedPending.clientToken) {
      setPending({
        ...savedPending,
        uploaded: Array.isArray(savedPending.uploaded) ? savedPending.uploaded : [],
      });
    }
    setIdaPrefilled(Boolean(localStorage.getItem("msg-payroll-ida-prefill")));
  }, []);

  useEffect(() => {
    localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
  }, [draft]);

  useEffect(() => {
    const warn = (event: BeforeUnloadEvent) => {
      if (!Object.values(documents).some(Boolean) || busy) return;
      event.preventDefault();
      event.returnValue = "";
    };
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [documents, busy]);

  useEffect(() => {
    if (step >= steps.length) setStep(Math.max(0, steps.length - 1));
  }, [step, steps.length]);

  const set = (key: string, value: string | boolean | string[]) => {
    setDraft((previous) => ({ ...previous, [key]: value }));
    setError("");
  };
  const hasDocument = (key: string) => Boolean(documents[key]) || Boolean(pending?.uploaded.includes(key));

  const validateStep = () => {
    const required: Record<string, string[]> = {
      Company: ["legalName", "businessType", "country", "npwp", "industry", "foundedYear", "address", "city", "province"],
      Contact: ["contactName", "title", "department", "email", "whatsapp"],
      Payroll: ["employeeCount", "monthlyPayroll", "payrollDate"],
    };
    if ((required[current] ?? []).some((key) => !String(draft[key] ?? "").trim())) {
      setError("Lengkapi seluruh field wajib sebelum melanjutkan.");
      return false;
    }
    if (current === "Company") {
      const year = Number(draft.foundedYear);
      if (!Number.isInteger(year) || year < 1900 || year > new Date().getFullYear()) {
        setError("Tahun berdiri tidak valid.");
        return false;
      }
      if (String(draft.npwp ?? "").replace(/\D/g, "").length < 5) {
        setError("NPWP / Tax ID tidak valid.");
        return false;
      }
    }
    if (current === "Contact") {
      if (!/^\S+@\S+\.\S+$/.test(String(draft.email ?? ""))) {
        setError("Gunakan email corporate yang valid.");
        return false;
      }
      if (String(draft.whatsapp ?? "").replace(/\D/g, "").length < 8) {
        setError("Nomor WhatsApp tidak valid.");
        return false;
      }
      if (!draft.authority) {
        setError("Konfirmasi kewenangan contact person.");
        return false;
      }
    }
    if (current === "Payroll") {
      if (Number(draft.employeeCount) <= 0 || Number(draft.monthlyPayroll) <= 0) {
        setError("Jumlah employee dan total payroll harus lebih dari 0.");
        return false;
      }
      if (!Array.isArray(draft.services) || !draft.services.length) {
        setError("Pilih minimal satu layanan payroll.");
        return false;
      }
    }
    if (current === "Funding") {
      const requiredFunding = ["fundingAmount", "paymentTerm", "repaymentSource", "customerPaymentTerm", "revenueRange"];
      if (requiredFunding.some((key) => !String(draft[key] ?? "").trim()) || Number(draft.fundingAmount) <= 0) {
        setError("Lengkapi seluruh informasi funding assessment.");
        return false;
      }
      if (
        draft.workingCapital &&
        (!String(draft.bankName ?? "").trim() ||
          !String(draft.facilityType ?? "").trim() ||
          Number(draft.facilityLimit) <= 0)
      ) {
        setError("Lengkapi bank, jenis fasilitas, dan limit working capital.");
        return false;
      }
    }
    if (current === "Documents") {
      const missing = documentSlots.filter((slot) => slot.required && !hasDocument(slot.key));
      if (missing.length) {
        setError(`Dokumen wajib belum lengkap: ${missing.map((slot) => slot.label).join(", ")}.`);
        return false;
      }
    }
    if (current === "Review" && (!draft.accurate || !draft.dataProcessing)) {
      setError("Centang kedua deklarasi sebelum mengirim registrasi.");
      return false;
    }
    setError("");
    return true;
  };

  const toggle = (item: string) => {
    const list = Array.isArray(draft.services) ? draft.services : [];
    set("services", list.includes(item) ? list.filter((value) => value !== item) : [...list, item]);
  };

  const selectDocument = (slot: DocumentSlot, file?: File) => {
    if (!file) {
      setDocuments((previous) => ({ ...previous, [slot.key]: undefined }));
      return;
    }
    const validationError = fileError(slot, file);
    if (validationError) {
      setDocuments((previous) => ({ ...previous, [slot.key]: undefined }));
      setError(`${slot.label}: ${validationError}`);
      return;
    }
    setDocuments((previous) => ({ ...previous, [slot.key]: file }));
    setError("");
  };

  const submit = async () => {
    if (!validateStep()) return;
    setBusy(true);
    setError("");
    setUploadProgress(0);

    const payload = {
      company: {
        legalName: draft.legalName,
        businessType: draft.businessType,
        country: draft.country || "Indonesia",
        npwp: String(draft.npwp ?? "").replace(/\D/g, ""),
        industry: draft.industry,
        foundedYear: draft.foundedYear,
        address: draft.address,
        city: draft.city,
        province: draft.province,
        brand: draft.brand,
        website: draft.website,
        nib: draft.nib,
        branchCount: draft.branchCount,
        totalEmployees: draft.totalEmployees,
      },
      contact: {
        name: draft.contactName,
        title: draft.title,
        department: draft.department,
        email: draft.email,
        whatsapp: draft.whatsapp,
        telephone: draft.telephone,
        preferred: draft.preferred,
        authority: draft.authority,
      },
      payroll: {
        employeeCount: draft.employeeCount,
        monthlyPayroll: draft.monthlyPayroll,
        payrollDate: draft.payrollDate,
        frequency: draft.frequency,
        currentSystem: draft.currentSystem,
        services: draft.services,
        challenge: draft.challenge,
      },
      funding: funding
        ? {
            amount: draft.fundingAmount,
            paymentTerm: draft.paymentTerm,
            repaymentSource: draft.repaymentSource,
            customerPaymentTerm: draft.customerPaymentTerm,
            workingCapital: draft.workingCapital,
            revenueRange: draft.revenueRange,
            bankName: draft.bankName,
            facilityType: draft.facilityType,
            facilityLimit: draft.facilityLimit,
          }
        : undefined,
      consents: { accurate: draft.accurate, dataProcessing: draft.dataProcessing },
    };

    try {
      let activeApplication: PendingApplication;
      if (pending) {
        activeApplication = pending;
      } else {
        const response = await fetch("/api/payroll/applications", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data = await response.json();
        if (!response.ok) {
          const issue = data?.issues?.fieldErrors
            ? Object.values(data.issues.fieldErrors as Record<string, string[]>).flat().find(Boolean)
            : null;
          throw new Error(String(issue ?? data.error ?? "Submission failed"));
        }
        if (!data.id || !data.registrationNumber || !data.clientToken) {
          throw new Error("Respons registrasi tidak lengkap. Silakan coba kembali.");
        }
        activeApplication = {
          id: String(data.id),
          registrationNumber: String(data.registrationNumber),
          clientToken: String(data.clientToken),
          uploaded: [],
        };
        setPending(activeApplication);
        localStorage.setItem(PENDING_KEY, JSON.stringify(activeApplication));
      }

      const selected = documentSlots.filter(
        (slot) => documents[slot.key] && !activeApplication.uploaded.includes(slot.key),
      );
      let completed = 0;
      for (const slot of selected) {
        const file = documents[slot.key];
        if (!file) continue;
        const upload = new FormData();
        upload.set("file", file);
        upload.set("category", slot.category);
        upload.set("documentType", slot.key);
        const response = await fetch(`/api/payroll/applications/${activeApplication.id}/documents`, {
          method: "POST",
          body: upload,
        });
        const data = await response.json().catch(() => ({}));
        if (!response.ok) {
          throw new Error(
            `${slot.label}: ${data.error ?? "upload gagal"}. Klik Submit lagi untuk melanjutkan tanpa membuat registrasi baru.`,
          );
        }
        activeApplication = {
          ...activeApplication,
          uploaded: [...activeApplication.uploaded, slot.key],
        };
        setPending(activeApplication);
        localStorage.setItem(PENDING_KEY, JSON.stringify(activeApplication));
        completed += 1;
        setUploadProgress(selected.length ? Math.round((completed / selected.length) * 100) : 100);
      }

      const mandatoryMissing = documentSlots.filter(
        (slot) => slot.required && !activeApplication.uploaded.includes(slot.key),
      );
      if (mandatoryMissing.length) {
        throw new Error(`Upload wajib belum selesai: ${mandatoryMissing.map((slot) => slot.label).join(", ")}.`);
      }

      localStorage.removeItem(DRAFT_KEY);
      localStorage.removeItem(PENDING_KEY);
      localStorage.removeItem("msg-payroll-ida-prefill");
      localStorage.setItem(TOKEN_KEY, activeApplication.clientToken);
      router.push(
        `/payroll/register/success?registration=${encodeURIComponent(activeApplication.registrationNumber)}`,
      );
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Submission failed");
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className="bg-[#f5f7fa] dark:bg-background">
      <div className="container-pro py-10 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start xl:gap-12">
          <aside className="rounded-3xl bg-[#0B1F33] p-6 text-white shadow-sm sm:p-8 lg:sticky lg:top-24">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-orange">MSG Payroll Service</p>
            <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Payroll lebih sederhana, terkontrol, dan terukur.
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              MSG membantu perusahaan mengelola payroll secara akurat melalui proses terintegrasi, reporting yang transparan, dan workflow pembayaran yang terkendali.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {benefits.map(({ Icon, title, description }) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Icon className="h-5 w-5 text-orange" aria-hidden />
                  <p className="mt-3 text-sm font-semibold">{title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-white/60">{description}</p>
                </div>
              ))}
            </div>
            <div className="mt-7 flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-orange" aria-hidden />
              <p className="text-xs leading-relaxed text-white/65">
                Seluruh data perusahaan akan diproses secara aman dan digunakan hanya untuk kebutuhan assessment layanan Payroll Service MSG.
              </p>
            </div>
          </aside>

          <section className="min-w-0 rounded-3xl border bg-card p-5 shadow-sm sm:p-8">
            <header className="mb-7">
              <p className="text-xs font-bold uppercase tracking-[.18em] text-[#0B3A6E] dark:text-blue-300">
                Client Registration & Onboarding
              </p>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Form Registrasi Payroll</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Lengkapi setiap langkah sesuai dokumen resmi perusahaan. Field form tersimpan otomatis pada perangkat ini.
              </p>
              {idaPrefilled && (
                <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-200">
                  <strong>Draft telah diisi oleh IDA dari hasil OCR.</strong>
                  <p className="mt-1">Periksa semua field, koreksi bila perlu, dan lengkapi dokumen wajib.</p>
                  <button
                    type="button"
                    className="mt-2 text-xs font-semibold underline"
                    onClick={() => {
                      localStorage.removeItem("msg-payroll-ida-prefill");
                      setIdaPrefilled(false);
                    }}
                  >
                    Tandai sudah diperiksa
                  </button>
                </div>
              )}
              {pending && (
                <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950 dark:border-amber-900/50 dark:bg-amber-950/30 dark:text-amber-100">
                  Registrasi <strong>{pending.registrationNumber}</strong> sudah dibuat. Jika upload sebelumnya gagal, Submit akan melanjutkan registrasi yang sama.
                </div>
              )}
            </header>

            <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
              {steps.map((name, index) => (
                <div key={name} className="min-w-20 flex-1">
                  <div className={`h-1.5 rounded-full ${index <= step ? "bg-orange" : "bg-muted"}`} />
                  <p className={`mt-2 text-xs font-semibold ${index === step ? "text-foreground" : "text-muted-foreground"}`}>{name}</p>
                </div>
              ))}
            </div>

            <p className="text-xs font-semibold uppercase tracking-[.16em] text-[#0B3A6E] dark:text-blue-300">
              Step {step + 1} of {steps.length}
            </p>
            <h3 className="mt-2 text-2xl font-bold">{current}</h3>

            {fieldSet ? (
              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                {fieldSet.map((field) => {
                  const value =
                    field.key === "monthlyPayroll"
                      ? formatIdr(draft[field.key])
                      : field.key === "npwp"
                        ? formatNpwp(draft[field.key])
                        : String(draft[field.key] ?? "");
                  return (
                    <div key={field.key} className={field.key === "address" ? "sm:col-span-2" : ""}>
                      <Label htmlFor={field.key}>
                        {field.label}
                        {field.optional ? <span className="font-normal text-muted-foreground"> · opsional</span> : null}
                      </Label>
                      {dropdowns[field.key] ? (
                        <select
                          id={field.key}
                          required={!field.optional}
                          className="mt-2 h-11 w-full rounded-xl border bg-background px-3 text-sm"
                          value={String(draft[field.key] ?? "")}
                          onChange={(event) => set(field.key, event.target.value)}
                        >
                          <option value="">Pilih {field.label}</option>
                          {dropdowns[field.key].map((option) => <option key={option}>{option}</option>)}
                        </select>
                      ) : (
                        <Input
                          id={field.key}
                          required={!field.optional}
                          type={field.key === "monthlyPayroll" ? "text" : field.type ?? "text"}
                          inputMode={field.inputMode}
                          value={value}
                          className="mt-2"
                          placeholder={`Masukkan ${field.label.toLowerCase()}`}
                          onChange={(event) => {
                            if (field.key === "monthlyPayroll") set(field.key, currencyDigits(event.target.value));
                            else if (field.key === "npwp") set(field.key, event.target.value.replace(/\D/g, "").slice(0, 16));
                            else if (field.inputMode === "tel") set(field.key, sanitizePhone(event.target.value));
                            else set(field.key, event.target.value);
                          }}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            ) : null}

            {current === "Contact" && (
              <div className="mt-6 space-y-4">
                <Select label="Preferred Contact" value={String(draft.preferred ?? "WhatsApp")} options={["WhatsApp", "Email", "Phone"]} onChange={(value) => set("preferred", value)} />
                <CheckField
                  label="Saya memiliki kewenangan atau telah mendapatkan persetujuan untuk melakukan penjajakan kerja sama Payroll Service MSG."
                  checked={Boolean(draft.authority)}
                  onChange={(value) => set("authority", value)}
                />
              </div>
            )}

            {current === "Payroll" && (
              <div className="mt-6 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Select label="Payroll Frequency" value={String(draft.frequency ?? "Monthly")} options={["Monthly", "Bi-weekly", "Weekly", "Other"]} onChange={(value) => set("frequency", value)} />
                  <Select label="Current Payroll System" value={String(draft.currentSystem ?? "Excel")} options={["Internal HR", "Excel", "HRIS", "Payroll Provider", "Outsourcing Provider", "Belum ada sistem"]} onChange={(value) => set("currentSystem", value)} />
                </div>
                <div>
                  <Label>Requested Services</Label>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    {services.map((service) => (
                      <CheckField key={service} label={service} checked={Array.isArray(draft.services) && draft.services.includes(service)} onChange={() => toggle(service)} />
                    ))}
                  </div>
                </div>
                <div>
                  <Label htmlFor="challenge">Current Challenge</Label>
                  <Textarea id="challenge" className="mt-2 min-h-28" value={String(draft.challenge ?? "")} onChange={(event) => set("challenge", event.target.value.slice(0, 3000))} placeholder="Jelaskan kendala payroll saat ini, proses approval, cut-off, reporting, atau disbursement." />
                </div>
              </div>
            )}

            {current === "Funding" && (
              <div className="mt-6 space-y-5">
                <div className="rounded-xl border border-orange/30 bg-orange/5 p-4 text-sm">
                  Payroll Funding bukan fasilitas otomatis. Persetujuan diberikan setelah proses financial dan credit assessment MSG.
                </div>
                <div>
                  <Label htmlFor="fundingAmount">Estimated Funding Amount</Label>
                  <Input id="fundingAmount" className="mt-2" inputMode="numeric" value={formatIdr(draft.fundingAmount)} onChange={(event) => set("fundingAmount", currencyDigits(event.target.value))} placeholder="Rp1.500.000.000" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Select label="Requested Payment Term" value={String(draft.paymentTerm ?? "")} options={["D+7", "D+14", "D+21", "D+30"]} placeholder="Pilih payment term" onChange={(value) => set("paymentTerm", value)} />
                  <Select label="Repayment Source" value={String(draft.repaymentSource ?? "")} options={["Operating Cash Flow", "Customer Receivable", "Project Payment", "Corporate Treasury", "Other"]} placeholder="Pilih repayment source" onChange={(value) => set("repaymentSource", value)} />
                  <Select label="Customer Payment Term" value={String(draft.customerPaymentTerm ?? "")} options={["Cash", "7 hari", "14 hari", "30 hari", "45 hari", "60 hari", ">60 hari"]} placeholder="Pilih customer payment term" onChange={(value) => set("customerPaymentTerm", value)} />
                  <Select label="Annual Revenue Range" value={String(draft.revenueRange ?? "")} options={["<10 M", "10–25 M", "25–50 M", "50–100 M", "100–250 M", "250–500 M", ">500 M"]} placeholder="Pilih annual revenue" onChange={(value) => set("revenueRange", value)} />
                </div>
                <CheckField label="Perusahaan memiliki fasilitas working capital" checked={Boolean(draft.workingCapital)} onChange={(value) => set("workingCapital", value)} />
                {draft.workingCapital && (
                  <div className="grid gap-5 rounded-2xl border bg-muted/30 p-4 sm:grid-cols-2">
                    <div><Label htmlFor="bankName">Nama Bank</Label><Input id="bankName" className="mt-2" value={String(draft.bankName ?? "")} onChange={(event) => set("bankName", event.target.value)} /></div>
                    <div><Label htmlFor="facilityType">Jenis Fasilitas</Label><Input id="facilityType" className="mt-2" value={String(draft.facilityType ?? "")} onChange={(event) => set("facilityType", event.target.value)} /></div>
                    <div className="sm:col-span-2"><Label htmlFor="facilityLimit">Limit Fasilitas</Label><Input id="facilityLimit" className="mt-2" inputMode="numeric" value={formatIdr(draft.facilityLimit)} onChange={(event) => set("facilityLimit", currencyDigits(event.target.value))} /></div>
                  </div>
                )}
              </div>
            )}

            {current === "Documents" && <DocumentUploader documents={documents} uploaded={pending?.uploaded ?? []} onChange={selectDocument} />}

            {current === "Review" && (
              <div className="mt-7 space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <SummaryCard title="Company">
                    <p className="font-semibold text-foreground">{String(draft.legalName ?? "—")}</p>
                    <p>{String(draft.industry ?? "—")}</p>
                    <p>{[draft.city, draft.province].filter(Boolean).join(", ") || "—"}</p>
                    <p>{String(draft.totalEmployees || draft.employeeCount || "—")} employees</p>
                  </SummaryCard>
                  <SummaryCard title="Payroll">
                    <p>{String(draft.employeeCount ?? "—")} employees processed</p>
                    <p>{formatIdr(draft.monthlyPayroll) || "—"} / month</p>
                    <p>Payroll date: {String(draft.payrollDate ?? "—")}</p>
                  </SummaryCard>
                </div>
                <SummaryCard title="Requested Services">
                  <div className="flex flex-wrap gap-2">
                    {(Array.isArray(draft.services) ? draft.services : []).map((service) => <span key={service} className="rounded-full border bg-background px-3 py-1 text-xs font-semibold text-foreground">{service}</span>)}
                  </div>
                </SummaryCard>
                {funding && <SummaryCard title="Funding"><p>Estimated Funding: <strong>{formatIdr(draft.fundingAmount) || "—"}</strong></p><p>Requested Term: <strong>{String(draft.paymentTerm ?? "—")}</strong></p></SummaryCard>}
                <p className="rounded-xl bg-muted/50 p-4 text-sm text-muted-foreground">Indicative only and subject to MSG assessment and approval.</p>
                <CheckField label="Saya menyatakan informasi yang diberikan benar." checked={Boolean(draft.accurate)} onChange={(value) => set("accurate", value)} />
                <CheckField label="Saya menyetujui pemrosesan data perusahaan untuk onboarding Payroll Service MSG." checked={Boolean(draft.dataProcessing)} onChange={(value) => set("dataProcessing", value)} />
              </div>
            )}

            {uploadProgress > 0 && busy && (
              <div className="mt-5" aria-live="polite">
                <div className="mb-2 flex justify-between text-xs text-muted-foreground"><span>Uploading documents</span><span>{uploadProgress}%</span></div>
                <div className="h-2 overflow-hidden rounded-full bg-muted"><div className="h-full bg-orange transition-all" style={{ width: `${uploadProgress}%` }} /></div>
              </div>
            )}
            {error && <p role="alert" className="mt-5 rounded-xl bg-destructive/10 p-3 text-sm text-destructive">{error}</p>}

            <div className="mt-8 flex items-center justify-between gap-3 border-t pt-6">
              <Button variant="outline" disabled={step === 0 || busy || Boolean(pending)} onClick={() => { setError(""); setStep((value) => Math.max(0, value - 1)); }}>Previous</Button>
              {step < steps.length - 1 ? (
                <Button onClick={() => { if (validateStep()) setStep((value) => Math.min(steps.length - 1, value + 1)); }}>Next</Button>
              ) : (
                <Button variant="accent" disabled={busy} onClick={submit}>{busy ? "Submitting..." : pending ? "Continue Submission" : "Submit Registration"}</Button>
              )}
            </div>
            <p className="mt-4 text-right text-xs text-muted-foreground">Field form tersimpan otomatis. File upload harus dipilih ulang setelah browser direload.</p>
          </section>
        </div>
      </div>
    </main>
  );
}

function CheckField({ label, checked, onChange }: { label: string; checked: boolean; onChange: (value: boolean) => void }) {
  return (
    <label className="flex cursor-pointer gap-3 rounded-xl border bg-background p-3 text-sm transition hover:border-[#0B3A6E]/30">
      <input type="checkbox" checked={checked} onChange={(event) => onChange(event.target.checked)} className="mt-0.5 h-4 w-4 accent-orange" />
      <span>{label}</span>
      {checked && <Check className="ml-auto h-4 w-4 shrink-0 text-emerald-600" aria-hidden />}
    </label>
  );
}

function Select({ label, value, options, onChange, placeholder }: { label: string; value: string; options: string[]; onChange: (value: string) => void; placeholder?: string }) {
  return (
    <div>
      <Label>{label}</Label>
      <select className="mt-2 h-11 w-full rounded-xl border bg-background px-3 text-sm" value={value} onChange={(event) => onChange(event.target.value)}>
        {placeholder ? <option value="">{placeholder}</option> : null}
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
    </div>
  );
}

function SummaryCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border bg-muted/30 p-5 text-sm">
      <p className="mb-3 text-xs font-bold uppercase tracking-[.14em] text-[#0B3A6E] dark:text-blue-300">{title}</p>
      <div className="space-y-1 text-muted-foreground">{children}</div>
    </div>
  );
}

function DocumentUploader({ documents, uploaded, onChange }: { documents: Record<string, File | undefined>; uploaded: string[]; onChange: (slot: DocumentSlot, file?: File) => void }) {
  return (
    <div className="mt-7 rounded-2xl border-2 border-dashed p-5 sm:p-6">
      <FileText className="h-9 w-9 text-[#0B3A6E]" aria-hidden />
      <h4 className="mt-3 font-semibold">Dokumen Initial Assessment</h4>
      <p className="mt-2 text-sm text-muted-foreground">PDF, XLS, XLSX, PNG, JPG/JPEG. Maksimum 10 MB per file; dokumen kategori financial maksimum 20 MB. NPWP, NIB, dan minimal satu financial document wajib.</p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {documentSlots.map((slot) => {
          const selected = documents[slot.key];
          const isUploaded = uploaded.includes(slot.key);
          const limit = slot.category === "financial" ? 20 : 10;
          return (
            <label
              key={slot.key}
              onDragOver={(event) => event.preventDefault()}
              onDrop={(event) => { event.preventDefault(); onChange(slot, event.dataTransfer.files?.[0]); }}
              className="rounded-xl border bg-background p-4 text-sm transition hover:border-[#0B3A6E]/40 hover:bg-muted/20"
            >
              <span className="flex items-center justify-between gap-2 font-medium">
                <span>{slot.label}{slot.required ? <span className="text-orange"> *</span> : null}</span>
                {isUploaded ? <span className="text-xs text-emerald-600">Uploaded</span> : null}
              </span>
              <span className="mt-1 block text-xs font-normal text-muted-foreground">Drag & drop atau pilih file · max {limit} MB</span>
              <input className="mt-3 block w-full text-xs file:mr-3 file:rounded-lg file:border-0 file:bg-muted file:px-3 file:py-2 file:font-semibold" type="file" accept=".pdf,.xls,.xlsx,.png,.jpg,.jpeg" disabled={isUploaded} onChange={(event) => onChange(slot, event.target.files?.[0])} />
              {selected && !isUploaded ? <span className="mt-2 block truncate text-xs text-emerald-600">{selected.name}</span> : null}
            </label>
          );
        })}
      </div>
    </div>
  );
}
