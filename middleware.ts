import { NextRequest, NextResponse } from 'next/server';
import { decryptSession } from '@/server/auth';
import { cookies } from 'next/headers';

export async function adminMiddleware(request: NextRequest) {
  const cookie = cookies().get('session')?.value;

  if (!cookie) return NextResponse.redirect(new URL('/login', request.nextUrl));

  const session = await decryptSession(cookie);

  if (!session?.userId || session?.role !== 'admin') return NextResponse.redirect(new URL('/login', request.nextUrl));

  return NextResponse.next();
}

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/dashboard')) {
    return adminMiddleware(request);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
