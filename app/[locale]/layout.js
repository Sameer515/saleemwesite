import '../globals.css';

export function generateStaticParams() {
  return [
    {locale: 'ro'},
    {locale: 'en'}
  ];
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
