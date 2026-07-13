import { NextResponse, type NextRequest } from 'next/server';
import { decryptSession, SESSION_COOKIE } from '@/lib/session';

/**
 * Optimistic auth checks only (cookie signature verification, no database):
 * - /account is for logged-in users
 * - /login and /signup are for logged-out users
 * Secure checks live in the data access layer (src/lib/dal.ts).
 */
export async function proxy(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const session = await decryptSession(req.cookies.get(SESSION_COOKIE)?.value);

  if (path.startsWith('/account') && !session) {
    return NextResponse.redirect(new URL('/login', req.nextUrl));
  }

  if ((path === '/login' || path === '/signup') && session) {
    return NextResponse.redirect(new URL('/account', req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/account/:path*', '/login', '/signup'],
};
