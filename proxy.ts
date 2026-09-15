import { NextRequest, NextResponse } from "next/server";

// Once a real custom domain is connected and "invoices.<domain>" is added
// as an extra domain on this same Vercel project, visiting the bare
// subdomain root serves the KAI invoices tool directly — no path needed.
// Until then this never fires (kai-editions.vercel.app doesn't match).
export function proxy(request: NextRequest) {
  const host = request.headers.get("host") || "";
  if (host.startsWith("invoices.") && request.nextUrl.pathname === "/") {
    return NextResponse.rewrite(new URL("/invoices-8259a77f", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
