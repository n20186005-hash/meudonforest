import { setRequestLocale, getTranslations } from 'next-intl/server';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import BasicInfo from '@/components/BasicInfo';
import HoursSection from '@/components/HoursSection';
import TicketsSection from '@/components/TicketsSection';
import TransportSection from '@/components/TransportSection';
import InfoSection from '@/components/InfoSection';
import RouteSection from '@/components/RouteSection';
import PhotoSpotsSection from '@/components/PhotoSpotsSection';
import HotelsSection from '@/components/HotelsSection';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import TopicsSection from '@/components/TopicsSection';
import FaqSection from '@/components/FaqSection';
import MapEmbed from '@/components/MapEmbed';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import {
  attraction,
  buildAttractionSchema,
  buildFaqSchema,
  buildWebSiteSchema,
  buildWebPageSchema,
} from '@/lib/site';
import { absoluteUrl } from '@/lib/seo';
import type { Locale } from '@/i18n/routing';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tMeta = await getTranslations('meta');
  const tHours = await getTranslations('hours');
  const tTickets = await getTranslations('tickets');
  const tFaq = await getTranslations('faqSection');
  const faqItems = (tFaq.raw('items') as Array<{ question: string; answer: string }>) || [];

  const attractionSchema = buildAttractionSchema({
    name: attraction.name,
    description: tMeta('description'),
    openingHours: tHours('parkTime'),
    pricing: tTickets('parkPrice'),
  });

  const schema = [
    buildWebSiteSchema({ fr: attraction.name, en: attraction.name, zh: attraction.name }),
    buildWebPageSchema({ url: absoluteUrl('/', locale as Locale), name: tMeta('title'), locale: locale as Locale }),
    attractionSchema,
    buildFaqSchema(faqItems),
  ];

  return (
    <>
      <StructuredData data={schema} />
      <Header />
      <main>
        <Hero />
        <Intro />
        <BasicInfo />
        <HoursSection />
        <TicketsSection />
        <TransportSection />
        <InfoSection />
        <RouteSection />
        <PhotoSpotsSection />
        <HotelsSection />
        <Gallery />
        <Reviews />
        <TopicsSection locale={locale as Locale} />
        <FaqSection locale={locale as Locale} />
        <MapEmbed />
      </main>
      <Footer />
    </>
  );
}
