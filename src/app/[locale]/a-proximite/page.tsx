import type { Metadata } from 'next';
import { hasLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { nearbyLabels } from '@/data/nearby';
import { buildAlternates } from '@/lib/seo';
import NearbyPlaces from '@/components/NearbyPlaces';
import Footer from '@/components/Footer';
import LanguageToggle from '@/components/LanguageToggle';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const labels = nearbyLabels[locale];
  const alternates = buildAlternates('/a-proximite', locale);
  return {
    title: labels.title,
    description: labels.intro,
    alternates,
    openGraph: { title: labels.title, description: labels.intro, url: alternates.canonical, type: 'website' },
  };
}

export default async function NearbyIndex({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  return (
    <>
      <div className="max-w-5xl mx-auto px-5 py-5 flex items-center justify-between">
        <Link className="font-semibold underline" href="/">{nearbyLabels[locale].home}</Link>
        <LanguageToggle />
      </div>
      <main><NearbyPlaces locale={locale} full /></main>
      <Footer />
    </>
  );
}
