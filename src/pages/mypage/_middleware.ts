import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const token = req.cookies['accessToken'];
  const origin = req.nextUrl.origin;

  if (!token) return NextResponse.redirect(`${origin}/`);

  return NextResponse.next();
}
