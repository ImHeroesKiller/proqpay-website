import {payrollWorker} from "@/lib/payroll/client";
export const PORTAL_COOKIE="msg_portal_session";
export function portalToken(request:Request){const cookies=request.headers.get("cookie")??"";return cookies.split(";").map(v=>v.trim()).find(v=>v.startsWith(`${PORTAL_COOKIE}=`))?.slice(PORTAL_COOKIE.length+1)??""}
export async function portalUser(request:Request){const token=portalToken(request);if(!token)return null;const response=await payrollWorker("/auth/session",{headers:{"x-portal-token":token}});if(!response.ok)return null;return (await response.json() as {user:{id:string;username:string;role:"ADMIN"|"CLIENT";application_id:string|null}}).user}
export async function adminAuthorized(request:Request){const user=await portalUser(request);return user?.role==="ADMIN"}
