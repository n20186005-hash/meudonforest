import type { MetadataRoute } from 'next';
import { getPathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { SITE_URL } from '@/lib/site';
import { nearbyHref, nearbyPlaces } from '@/data/nearby';
import { topicKeys } from '@/data/topics';

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  const languagesFor = (href: Parameters<typeof getPathname>[0]['href']) => {
    const langs: Record<string, string> = {};
    for (const locale of routing.locales) {
      langs[locale] = `${SITE_URL}${getPathname({ locale, href })}`;
    }
    langs['x-default'] = langs.fr;
    return langs;
  };

  for (const locale of routing.locales) {
    const homeHref = '/' as const;
    entries.push({
      url: `${SITE_URL}${getPathname({ locale, href: homeHref })}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: { languages: languagesFor(homeHref) },
    });

    for (const href of ['/a-proximite' as const, ...nearbyPlaces.map(nearbyHref)]) {
      entries.push({
        url: `${SITE_URL}${getPathname({ locale, href })}`,
        alternates: { languages: languagesFor(href) },
      });
    }

    for (const key of topicKeys) {
      const href = `/${key}` as Parameters<typeof getPathname>[0]['href'];
      entries.push({
        url: `${SITE_URL}${getPathname({ locale, href })}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
        alternates: { languages: languagesFor(href) },
      });
    }
  }

  return entries;
}
