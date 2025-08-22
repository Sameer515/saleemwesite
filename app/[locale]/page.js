import SimpleHomePage from '../../components/SimpleHomePage';

export function generateStaticParams() {
  return [
    {locale: 'ro'},
    {locale: 'en'}
  ];
}

export default function Page({ params: { locale } }) {
  return <SimpleHomePage locale={locale} />;
}
