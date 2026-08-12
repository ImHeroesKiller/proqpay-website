import { PayrollRegistrationWizard } from "@/components/payroll-registration/payroll-registration-wizard";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ title: "Register Payroll Service", description: "Enterprise Payroll Service client registration and onboarding with MSG.", path: "/payroll/register" });
export default function PayrollRegisterPage() { return <PayrollRegistrationWizard />; }
