import { z } from "zod";

export const partnerTypeEnum = z.enum([
  "strategic-investor",
  "financial-investor",
  "industry-operator",
  "potential-acquirer",
  "joint-venture-partner",
  "technology-partner",
  "other",
]);

export const interestAreaEnum = z.enum([
  "investment",
  "acquisition",
  "strategic-partnership",
  "joint-venture",
  "commercial-partnership",
  "technology-partnership",
  "request-more-information",
]);

export const strategicInterestSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  company: z.string().min(2, "Please enter your company name."),
  position: z.string().min(2, "Please enter your position."),
  email: z.string().email("Please enter a valid work email."),
  phone: z.string().min(6, "Please enter a phone number."),
  partnerType: partnerTypeEnum,
  areaOfInterest: interestAreaEnum,
  investmentRange: z.string().optional(),
  industryExperience: z.string().optional(),
  message: z
    .string()
    .min(20, "Please provide additional context (at least 20 characters).")
    .max(5000, "Message is too long."),
  confidentialityAck: z.boolean().refine((v) => v === true, {
    message: "Please acknowledge the confidentiality notice.",
  }),
  privacyConsent: z.boolean().refine((v) => v === true, {
    message: "Please accept the privacy policy to continue.",
  }),
  website: z.string().max(0).optional(),
  portfolioSlug: z.string().optional(),
});

export type StrategicInterestValues = z.infer<typeof strategicInterestSchema>;

export const partnerTypeOptions: {
  value: StrategicInterestValues["partnerType"];
  label: string;
}[] = [
  { value: "strategic-investor", label: "Strategic Investor" },
  { value: "financial-investor", label: "Financial Investor" },
  { value: "industry-operator", label: "Industry Operator" },
  { value: "potential-acquirer", label: "Potential Acquirer" },
  { value: "joint-venture-partner", label: "Joint Venture Partner" },
  { value: "technology-partner", label: "Technology Partner" },
  { value: "other", label: "Other" },
];

export const interestAreaOptions: {
  value: StrategicInterestValues["areaOfInterest"];
  label: string;
}[] = [
  { value: "investment", label: "Investment" },
  { value: "acquisition", label: "Acquisition" },
  { value: "strategic-partnership", label: "Strategic Partnership" },
  { value: "joint-venture", label: "Joint Venture" },
  { value: "commercial-partnership", label: "Commercial Partnership" },
  { value: "technology-partnership", label: "Technology Partnership" },
  { value: "request-more-information", label: "Request More Information" },
];
