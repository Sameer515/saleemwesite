import SimpleHomePage from '../../components/SimpleHomePage';

export function generateStaticParams() {
  return ['ro', 'en', 'de', 'fr', 'es', 'ar', 'it'].map((locale) => ({ locale }));
}

export default async function Page({ params }) {
  const { locale } = await params;
  return <SimpleHomePage locale={locale} />;
}
