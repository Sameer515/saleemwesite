import SimpleHomePage from '../../components/SimpleHomePage';

export function generateStaticParams() {
  return ['ro', 'en', 'de', 'fr', 'es', 'ar', 'it'].map((locale) => ({ locale }));
}

export default function Page({ params: { locale } }) {
  return <SimpleHomePage locale={locale} />;
}
