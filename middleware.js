import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['ro', 'en', 'de', 'fr', 'es', 'ar', 'it'],
  defaultLocale: 'ro'
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
