import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['ro', 'en'],
  defaultLocale: 'ro'
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
