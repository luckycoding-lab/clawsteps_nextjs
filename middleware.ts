import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const isAdmin = token?.email === process.env.ADMIN_EMAIL;

    // Block non-admin users from accessing /admin routes
    if (req.nextUrl.pathname.startsWith('/admin') && !isAdmin) {
      return NextResponse.redirect(new URL('/blog?error=unauthorized', req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token, // User must be logged in
    },
  }
);

export const config = {
  matcher: ['/admin/:path*'],
};