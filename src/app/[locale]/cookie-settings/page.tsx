import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { buildAlternates, type Href } from '@/lib/seo';
import type { Locale } from '@/i18n/routing';
import CookieSettingsClient from './CookieSettingsClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    ...buildAlternates('/cookie-settings' as Href, locale as Locale),
    robots: { index: false, follow: true },
  };
}

export default async function CookiePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CookieSettingsClient />;
}
