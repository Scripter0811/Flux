import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(req: NextRequest) {
  const url = req.nextUrl.clone();

  // Allow login page
  if (url.pathname === "/admin/login") {
    return NextResponse.next();
  }

  // Check password in URL
  const password = url.searchParams.get("p");

  if (url.pathname.startsWith("/admin")) {
    if (password !== process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      url.pathname = "/admin/login";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
