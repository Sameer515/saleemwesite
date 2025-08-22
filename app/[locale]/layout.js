import '../globals.css';

export function generateStaticParams() {
  return ['ro', 'en', 'de', 'fr', 'es', 'ar', 'it'].map((locale) => ({ locale }));
}

export default async function LocaleLayout({children, params}) {
  const {locale} = await params;
  return (
    <html lang={locale} suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
