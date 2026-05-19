import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import CookieSettingsClient from './CookieSettingsClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = 'https://meudonforest.com';
  const zhUrl = `${baseUrl}/cookie-settings`;
  const enUrl = `${baseUrl}/en/cookie-settings`;
  const frUrl = `${baseUrl}/fr/cookie-settings`;
  const selfUrl = locale === 'zh' ? zhUrl : locale === 'fr' ? frUrl : enUrl;

  return {
    alternates: {
      canonical: selfUrl,
      languages: {
        'zh': zhUrl,
        'en': enUrl,
        'fr': frUrl,
        'x-default': zhUrl,
      },
    },
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
