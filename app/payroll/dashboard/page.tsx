import { ClientDashboard } from "@/components/payroll-registration/client-dashboard"; import { buildMetadata } from "@/lib/seo";
export const metadata=buildMetadata({title:"Payroll Client Dashboard",description:"Track your MSG Payroll Service application.",path:"/payroll/dashboard"}); export default function Page(){return <main className="min-h-[70vh] bg-muted/30 py-12"><ClientDashboard/></main>}
