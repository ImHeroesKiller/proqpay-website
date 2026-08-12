import { PayrollRegistrationWizard } from "@/components/payroll-registration/payroll-registration-wizard"; import { buildMetadata } from "@/lib/seo";
export const metadata=buildMetadata({title:"Payroll Registration Form",description:"Submit your MSG Payroll Service client registration.",path:"/payroll/register/form"});export default function Page(){return <PayrollRegistrationWizard/>}
