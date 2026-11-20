import type { Locale } from '@/i18n/routing';

/**
 * Source unique des faits « neutres » sur l'attraction.
 * Modifier ici (pas dans les composants) quand les données changent.
 */
export const SITE_URL = 'https://www.meudonforest.com';

export const attraction = {
  name: 'Forêt domaniale de Meudon',
  alternateNames: [
    'Forêt de Meudon',
    'Foret de Meudon',
    'Bois de Meudon',
    'Forêt domaniale de Meudon (Meudon, Hauts-de-Seine)',
  ],
  attractionType: 'National forest',
  manager: 'Office national des forêts (ONF)',
  areas: 'Meudon, Chaville, Clamart, Sèvres (Hauts-de-Seine), Vélizy-Villacoublay et Viroflay (Yvelines)',
  areaHectares: 1100,
  surroundings: 'banlieue sud-ouest de Paris',
  region: 'Île-de-France',
  country: 'France',
  address: {
    streetAddress: 'Forêt domaniale de Meudon',
    addressLocality: 'Meudon',
    addressRegion: 'Hauts-de-Seine',
    addressCountry: 'FR',
  },
  plusCode: 'Q6W5+8R Meudon, France',
  // Repère du massif publié par Destination Hauts-de-Seine.
  geo: { latitude: 48.80652, longitude: 2.233576 },
  googleMaps: {
    url: 'https://maps.app.goo.gl/x72sfn3MWeRm2ATy8',
  },
  // Ressources officielles / gestionnaire
  threePondWalkUrl: 'https://destination.hauts-de-seine.fr/balade-3-etangs-en-foret-de-meudon.html',
  managerUrl: 'https://www.onf.fr/vivre-la-foret/foret-domaniale-pres-de-chez-moi/%2B/174b%3A%3Aforet-domaniale-de-meudon.html',
  regionUrl: 'https://www.iledefrance.fr/',
  transportUrl: 'https://www.iledefrancemobilites.fr/',
  ecologyUrl: 'https://www.ecologie.gouv.fr/',
  parisRegionUrl: 'https://www.visitparisregion.com/',
  images: [
    `${SITE_URL}/gallery/meudon-forest-1.jpg`,
    `${SITE_URL}/gallery/meudon-forest-3.jpg`,
    `${SITE_URL}/gallery/meudon-forest-5.jpg`,
    `${SITE_URL}/gallery/meudon-forest-9.jpg`,
  ],
  heroImage: `${SITE_URL}/gallery/meudon-forest-1.jpg`,
} as const;

export const htmlLocales: Record<Locale, string> = {
  fr: 'fr_FR',
  en: 'en_US',
  zh: 'zh_CN',
};

export const htmlLang: Record<Locale, string> = {
  fr: 'fr',
  en: 'en',
  zh: 'zh-Hans',
};

/** @id stable : la même entité est décrite dans les 3 langues. */
export function attractionId() {
  return `${SITE_URL}/#attraction`;
}

export function buildAttractionSchema(names: {
  name: string;
  description: string;
  openingHours: string;
  pricing: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': ['TouristAttraction', 'TouristDestination'],
    '@id': attractionId(),
    name: names.name,
    alternateName: attraction.alternateNames,
    additionalType: attraction.attractionType,
    description: names.description,
    url: `${SITE_URL}/`,
    image: attraction.images,
    address: {
      '@type': 'PostalAddress',
      streetAddress: attraction.address.streetAddress,
      addressLocality: attraction.address.addressLocality,
      addressRegion: attraction.address.addressRegion,
      addressCountry: attraction.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: attraction.geo.latitude,
      longitude: attraction.geo.longitude,
    },
    hasMap: attraction.googleMaps.url,
    sameAs: [attraction.googleMaps.url, attraction.managerUrl],
    isAccessibleForFree: true,
    publicAccess: true,
    knowsAbout: [
      `Forêt domaniale de Meudon`,
      `randonnée en Forêt de Meudon`,
      `circuit des étangs`,
      `accès depuis Paris`,
    ],
  };
}

export function buildWebSiteSchema(localeNames: Record<Locale, string>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: localeNames.fr,
    inLanguage: Object.keys(localeNames),
    publisher: { '@id': `${SITE_URL}/#organization` },
  };
}

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Forêt domaniale de Meudon — site d’information',
    url: SITE_URL,
  };
}

export function buildWebPageSchema(page: { url: string; name: string; locale: Locale; breadcrumbId?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: page.url,
    name: page.name,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    inLanguage: page.locale,
  };
}

export function buildBreadcrumbSchema(crumbs: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

export function buildFaqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}
