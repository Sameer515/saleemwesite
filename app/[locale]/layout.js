import '../globals.css';

export function generateStaticParams() {
  return ['ro', 'en', 'de', 'fr', 'es', 'ar', 'it'].map((locale) => ({ locale }));
}

export default function LocaleLayout({children, params: {locale}}) {
  return (
    <html lang={locale}>
      <body>
        {children}
      </body>
    </html>
  );
}
