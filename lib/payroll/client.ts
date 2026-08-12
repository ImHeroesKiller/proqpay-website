const headers = () => ({ "x-msg-worker-secret": process.env.PAYROLL_WORKER_SECRET ?? "" });

export async function payrollWorker(path: string, init: RequestInit = {}) {
  const base = process.env.PAYROLL_WORKER_URL;
  if (!base || !process.env.PAYROLL_WORKER_SECRET) throw new Error("Payroll service is not configured.");
  return fetch(`${base.replace(/\/$/, "")}${path}`, { ...init, headers: { ...headers(), ...init.headers }, cache: "no-store" });
}
