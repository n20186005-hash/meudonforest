import { getPathname } from '@/i18n/navigation';
import { routing, type Locale } from '@/i18n/routing';
import { SITE_URL } from '@/lib/site';

export type Href = Parameters<typeof getPathname>[0]['href'];

/** URL absolue canonique d'une page pour une locale donnée. */
export function absoluteUrl(href: Href, locale: Locale = 'fr') {
  return `${SITE_URL}${getPathname({ locale, href })}`;
}

/**
 * canonical auto-référencé + hreflang des 3 langues.
 * Le français est le repli x-default (majorité du trafic organique).
 */
export function buildAlternates(href: Href, locale: Locale) {
  const languages: Record<string, string> = {};
  for (const loc of routing.locales) {
    languages[loc] = absoluteUrl(href, loc);
  }
  languages['x-default'] = absoluteUrl(href, 'fr');
  return {
    canonical: absoluteUrl(href, locale),
    languages,
  };
}
