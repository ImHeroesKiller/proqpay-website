"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Check, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Draft = Record<string, string | boolean | string[]>;
const baseSteps = [
  "Company",
  "Contact",
  "Payroll",
  "Funding",
  "Documents",
  "Review",
];
const services = [
  "Payroll Calculation",
  "PPh21",
  "BPJS Kesehatan",
  "BPJS Ketenagakerjaan",
  "Payslip",
  "Salary Disbursement",
  "Payroll Reporting",
  "Payroll Reconciliation",
  "Employee Data Management",
  "Payroll Funding",
];
const fields: Record<number, [string, string, string?][]> = {
  0: [
    ["legalName", "Nama Legal"],
    ["businessType", "Bentuk Badan Usaha"],
    ["country", "Negara Domisili"],
    ["npwp", "NPWP / Tax ID"],
    ["industry", "Industri"],
    ["foundedYear", "Tahun Berdiri", "number"],
    ["address", "Alamat"],
    ["city", "Kota"],
    ["province", "Provinsi / State"],
    ["brand", "Brand (opsional)"],
    ["website", "Website (opsional)"],
    ["nib", "NIB / Registration ID (opsional)"],
  ],
  1: [
    ["contactName", "Nama"],
    ["title", "Jabatan"],
    ["department", "Department"],
    ["email", "Corporate Email", "email"],
    ["whatsapp", "WhatsApp", "tel"],
    ["telephone", "Telephone (opsional)", "tel"],
  ],
  2: [
    ["employeeCount", "Jumlah Employee", "number"],
    ["monthlyPayroll", "Monthly Payroll (IDR)", "number"],
    ["payrollDate", "Payroll Date", "date"],
  ],
  3: [
    ["fundingAmount", "Estimated Funding Amount", "number"],
    ["paymentTerm", "Requested Payment Term"],
    ["repaymentSource", "Repayment Source"],
    ["customerPaymentTerm", "Customer Payment Term"],
    ["revenueRange", "Annual Revenue Range"],
  ],
};
const dropdowns: Record<string, string[]> = {
  businessType: ["PT", "CV", "Koperasi", "Yayasan", "Firma", "Lainnya"],
  country: [
    "Indonesia",
    "Singapore",
    "Malaysia",
    "Thailand",
    "Vietnam",
    "Philippines",
    "Other",
  ],
  industry: [
    "Financial Services",
    "Technology",
    "Manufacturing",
    "Retail",
    "Logistics",
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

export function PayrollRegistrationWizard() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [idaPrefilled, setIdaPrefilled] = useState(false);
  const [documents, setDocuments] = useState<Record<string, File | undefined>>(
    {},
  );
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
  const funding = (draft.services as string[]).includes("Payroll Funding");
  const steps = useMemo(
    () => (funding ? baseSteps : baseSteps.filter((s) => s !== "Funding")),
    [funding],
  );
  useEffect(() => {
    const saved = localStorage.getItem("msg-payroll-draft");
    if (saved) setDraft((d) => ({ ...d, ...JSON.parse(saved) }));
    if (localStorage.getItem("msg-payroll-ida-prefill")) setIdaPrefilled(true);
  }, []);
  useEffect(() => {
    localStorage.setItem("msg-payroll-draft", JSON.stringify(draft));
  }, [draft]);
  const current = steps[step];
  const set = (key: string, value: string | boolean | string[]) =>
    setDraft((d) => ({ ...d, [key]: value }));
  const validateStep = () => {
    const required: Record<string, string[]> = {
      Company: [
        "legalName",
        "businessType",
        "country",
        "npwp",
        "industry",
        "foundedYear",
        "address",
        "city",
        "province",
      ],
      Contact: ["contactName", "title", "department", "email", "whatsapp"],
      Payroll: ["employeeCount", "monthlyPayroll", "payrollDate"],
    };
    const missing = (required[current] ?? []).filter(
      (k) => !String(draft[k] ?? "").trim(),
    );
    if (missing.length) {
      setError("Lengkapi seluruh field wajib sebelum melanjutkan.");
      return false;
    }
    if (current === "Contact" && !draft.authority) {
      setError("Konfirmasi kewenangan contact person.");
      return false;
    }
    if (current === "Payroll" && !(draft.services as string[]).length) {
      setError("Pilih minimal satu layanan payroll.");
      return false;
    }
    setError("");
    return true;
  };
  const toggle = (item: string) => {
    const list = draft.services as string[];
    set(
      "services",
      list.includes(item) ? list.filter((x) => x !== item) : [...list, item],
    );
  };
  const submit = async () => {
    setBusy(true);
    setError("");
    const payload = {
      company: {
        legalName: draft.legalName,
        businessType: draft.businessType,
        country: draft.country || "Indonesia",
        npwp: draft.npwp,
        industry: draft.industry,
        foundedYear: draft.foundedYear,
        address: draft.address,
        city: draft.city,
        province: draft.province,
        brand: draft.brand,
        website: draft.website,
        nib: draft.nib,
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
      consents: {
        accurate: draft.accurate,
        dataProcessing: draft.dataProcessing,
      },
    };
    try {
      if (!documents.npwp || !documents.nib || !documents.financial)
        throw new Error(
          "NPWP, NIB, dan satu dokumen finansial wajib diunggah.",
        );
      const res = await fetch("/api/payroll/applications", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Submission failed");
      for (const [documentType, file] of Object.entries(documents)) {
        if (!file) continue;
        const category = documentType.startsWith("financial")
          ? "financial"
          : documentType.startsWith("commercial")
            ? "commercial"
            : documentType.startsWith("payroll") || documentType === "bpjs-tax"
              ? "payroll"
              : documentType.startsWith("supporting")
                ? "supporting"
                : "legal";
        const upload = new FormData();
        upload.set("file", file);
        upload.set("category", category);
        upload.set("documentType", documentType);
        const uploaded = await fetch(
          `/api/payroll/applications/${data.id}/documents`,
          { method: "POST", body: upload },
        );
        if (!uploaded.ok) throw new Error(`Upload ${documentType} gagal.`);
      }
      localStorage.removeItem("msg-payroll-draft");
      localStorage.setItem("msg-payroll-client-token", data.clientToken);
      router.push(
        `/payroll/register/success?registration=${encodeURIComponent(data.registrationNumber)}`,
      );
    } catch (e) {
      setError(e instanceof Error ? e.message : "Submission failed");
    } finally {
      setBusy(false);
    }
  };
  return (
    <main className="bg-[#f5f7fa] dark:bg-background">
      <div className="container-pro min-h-[calc(100vh-5rem)] max-w-4xl py-12 lg:py-16">
        <header className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-orange">
            MSG Payroll Service
          </p>
          <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
            Form Registrasi Payroll
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Lengkapi setiap langkah sesuai dokumen resmi perusahaan. Data
            tersimpan otomatis pada perangkat ini.
          </p>
          {idaPrefilled && (
            <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
              <strong>Draft telah diisi oleh IDA dari hasil OCR.</strong>
              <p className="mt-1">
                Periksa semua field, koreksi bila perlu, dan lengkapi dokumen
                wajib. Submission tetap dilakukan manual oleh Anda.
              </p>
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
        </header>
        <section className="rounded-3xl border bg-card p-5 shadow-sm sm:p-8">
          <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
            {steps.map((name, i) => (
              <div key={name} className="min-w-20 flex-1">
                <div
                  className={`h-1.5 rounded-full ${i <= step ? "bg-orange" : "bg-muted"}`}
                />
                <p
                  className={`mt-2 text-xs font-semibold ${i === step ? "text-foreground" : "text-muted-foreground"}`}
                >
                  {name}
                </p>
              </div>
            ))}
          </div>
          <p className="text-xs font-semibold uppercase tracking-[.16em] text-[#0B3A6E] dark:text-blue-300">
            Step {step + 1} of {steps.length}
          </p>
          <h2 className="mt-2 text-2xl font-bold">{current}</h2>
          {fields[baseSteps.indexOf(current)] ? (
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              {fields[baseSteps.indexOf(current)].map(([key, label, type]) => (
                <div
                  key={key}
                  className={key === "address" ? "sm:col-span-2" : ""}
                >
                  <Label
                    htmlFor={key}
                    title={`Isi ${label} sesuai dokumen resmi perusahaan.`}
                  >
                    {label}{" "}
                    <span
                      className="cursor-help text-muted-foreground"
                      aria-label={`Petunjuk ${label}`}
                    >
                      ⓘ
                    </span>
                  </Label>
                  {dropdowns[key] ? (
                    <select
                      id={key}
                      className="mt-2 h-11 w-full rounded-xl border bg-background px-3"
                      value={String(draft[key] ?? "")}
                      onChange={(e) => set(key, e.target.value)}
                    >
                      <option value="">Pilih {label}</option>
                      {dropdowns[key].map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  ) : (
                    <Input
                      id={key}
                      required
                      type={type ?? "text"}
                      value={String(draft[key] ?? "")}
                      onChange={(e) => set(key, e.target.value)}
                      className="mt-2"
                      placeholder={`Masukkan ${label.toLowerCase()}`}
                    />
                  )}
                </div>
              ))}
            </div>
          ) : null}
          {current === "Contact" && (
            <div className="mt-6 space-y-4">
              <Label>Preferred Contact</Label>
              <select
                className="h-11 w-full rounded-xl border bg-background px-3"
                value={String(draft.preferred)}
                onChange={(e) => set("preferred", e.target.value)}
              >
                <option>WhatsApp</option>
                <option>Email</option>
                <option>Phone</option>
              </select>
              <CheckField
                label="Saya berwenang mewakili perusahaan."
                checked={Boolean(draft.authority)}
                onChange={(v) => set("authority", v)}
              />
            </div>
          )}
          {current === "Payroll" && (
            <div className="mt-6 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Select
                  label="Payroll Frequency"
                  value={String(draft.frequency)}
                  options={["Monthly", "Weekly", "Biweekly", "Other"]}
                  onChange={(v) => set("frequency", v)}
                />
                <Select
                  label="Current Payroll System"
                  value={String(draft.currentSystem)}
                  options={[
                    "Excel",
                    "Internal",
                    "HRIS",
                    "Payroll Provider",
                    "Outsourcing",
                    "Belum ada",
                  ]}
                  onChange={(v) => set("currentSystem", v)}
                />
              </div>
              <div>
                <Label>Requested Services</Label>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {services.map((s) => (
                    <CheckField
                      key={s}
                      label={s}
                      checked={(draft.services as string[]).includes(s)}
                      onChange={() => toggle(s)}
                    />
                  ))}
                </div>
              </div>
              <Label>Current Challenge</Label>
              <Textarea
                value={String(draft.challenge ?? "")}
                onChange={(e) => set("challenge", e.target.value)}
              />
            </div>
          )}
          {current === "Funding" && (
            <div className="mt-6">
              <div className="rounded-xl border border-orange/30 bg-orange/5 p-4 text-sm">
                Payroll Funding bukan fasilitas otomatis. Persetujuan diberikan
                setelah assessment finansial dan credit review MSG.
              </div>
              <div className="mt-5">
                <CheckField
                  label="Memiliki Working Capital Facility"
                  checked={Boolean(draft.workingCapital)}
                  onChange={(v) => set("workingCapital", v)}
                />
                {draft.workingCapital && (
                  <div className="mt-5 grid gap-5 sm:grid-cols-3">
                    {[
                      ["bankName", "Nama Bank"],
                      ["facilityType", "Jenis Fasilitas"],
                      ["facilityLimit", "Limit"],
                    ].map(([k, l]) => (
                      <div key={k}>
                        <Label>{l}</Label>
                        <Input
                          className="mt-2"
                          value={String(draft[k] ?? "")}
                          onChange={(e) => set(k, e.target.value)}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
          {current === "Documents" && (
            <DocumentNotice
              documents={documents}
              onChange={(key, file) =>
                setDocuments((d) => ({ ...d, [key]: file }))
              }
            />
          )}
          {current === "Review" && (
            <div className="mt-7 space-y-5">
              <div className="rounded-2xl bg-muted/50 p-5 text-sm">
                <p className="font-semibold">
                  {String(draft.legalName ?? "Company")}
                </p>
                <p className="mt-1 text-muted-foreground">
                  {String(draft.employeeCount ?? "—")} employees · IDR{" "}
                  {Number(draft.monthlyPayroll ?? 0).toLocaleString("id-ID")}
                </p>
                <p className="mt-3 text-muted-foreground">
                  {(draft.services as string[]).join(" · ")}
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                Indicative only and subject to MSG assessment and approval.
              </p>
              <CheckField
                label="Informasi yang diberikan benar."
                checked={Boolean(draft.accurate)}
                onChange={(v) => set("accurate", v)}
              />
              <CheckField
                label="Setuju dengan pemrosesan data."
                checked={Boolean(draft.dataProcessing)}
                onChange={(v) => set("dataProcessing", v)}
              />
            </div>
          )}
          {error && (
            <p
              role="alert"
              className="mt-5 rounded-xl bg-destructive/10 p-3 text-sm text-destructive"
            >
              {error}
            </p>
          )}
          <div className="mt-8 flex items-center justify-between border-t pt-6">
            <Button
              variant="outline"
              disabled={step === 0 || busy}
              onClick={() => setStep((s) => s - 1)}
            >
              Previous
            </Button>
            {step < steps.length - 1 ? (
              <Button
                onClick={() => {
                  if (validateStep()) setStep((s) => s + 1);
                }}
              >
                Next
              </Button>
            ) : (
              <Button variant="accent" disabled={busy} onClick={submit}>
                {busy ? "Submitting..." : "Submit Registration"}
              </Button>
            )}
          </div>
          <p className="mt-4 text-right text-xs text-muted-foreground">
            Draft tersimpan otomatis di perangkat ini.
          </p>
        </section>
      </div>
    </main>
  );
}
function CheckField({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="flex cursor-pointer gap-3 rounded-xl border p-3 text-sm">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-0.5 h-4 w-4"
      />
      <span>{label}</span>
      {checked && <Check className="ml-auto h-4 w-4 text-emerald-600" />}
    </label>
  );
}
function Select({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <select
        className="mt-2 h-11 w-full rounded-xl border bg-background px-3"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
function DocumentNotice({
  documents,
  onChange,
}: {
  documents: Record<string, File | undefined>;
  onChange: (key: string, file?: File) => void;
}) {
  const slots = [
    ["npwp", "NPWP (wajib)"],
    ["nib", "NIB (wajib)"],
    ["akta", "Akta / AHU"],
    ["financial", "Financial Statement (wajib)"],
    ["financial-management", "Management Account"],
    ["financial-bank", "Rekening Koran"],
    ["financial-aging", "AR / AP Aging"],
    ["payroll-register", "Payroll Register"],
    ["bpjs-tax", "BPJS / PPh21"],
    ["commercial-contract", "Kontrak Kerja Existing"],
    ["commercial-po", "PO / Customer Contract"],
    ["supporting-other", "Dokumen Pendukung Lainnya"],
  ];
  return (
    <div className="mt-7 rounded-2xl border-2 border-dashed p-6">
      <FileText className="h-9 w-9 text-[#0B3A6E]" />
      <h3 className="mt-3 font-semibold">Dokumen assessment</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Unggah dokumen finansial dan pendukung. PDF, XLS, XLSX, PNG, JPG;
        maksimal 2 MB per file.
      </p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {slots.map(([key, label]) => (
          <label
            key={key}
            className="rounded-xl border bg-background p-4 text-sm font-medium"
          >
            {label}
            <input
              className="mt-2 block w-full text-xs"
              type="file"
              accept=".pdf,.xls,.xlsx,.png,.jpg,.jpeg"
              onChange={(e) => onChange(key, e.target.files?.[0])}
            />
            {documents[key] && (
              <span className="mt-2 block truncate text-xs text-emerald-600">
                {documents[key]?.name}
              </span>
            )}
          </label>
        ))}
      </div>
    </div>
  );
}
