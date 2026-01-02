import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

let locales = ['en', 'it'];
let defaultLocale = 'en';

function getLocale(request: NextRequest) {
  // In a real app, you might check Accept-Language header here
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|favicon.ico|api|.*\\..*).*)',
  ],
};