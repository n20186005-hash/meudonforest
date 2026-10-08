import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // Le français est la langue des recherches qui convertissent le plus : il reste
  // sur la racine (/). L'anglais et le chinois gardent leur préfixe.
  locales: ['fr', 'en', 'zh'],
  defaultLocale: 'fr',
  localePrefix: {
    mode: 'as-needed',
  },
  pathnames: {
    '/': '/',
    // Pages thématiques longue traîne (voir src/data/topics.ts)
    '/randonnee-foret-meudon': {
      fr: '/randonnee-foret-meudon',
      en: '/hiking-trails-meudon-forest',
      zh: '/hiking-trails-meudon-forest',
    },
    '/carte-foret-meudon': {
      fr: '/carte-foret-meudon',
      en: '/map-meudon-forest',
      zh: '/map-meudon-forest',
    },
    '/balade-etangs-meudon': {
      fr: '/balade-etangs-meudon',
      en: '/etangs-walk-meudon',
      zh: '/etangs-walk-meudon',
    },
    '/acces-foret-meudon': {
      fr: '/acces-foret-meudon',
      en: '/getting-there-meudon-forest',
      zh: '/getting-there-meudon-forest',
    },
    '/privacy-policy': '/privacy-policy',
    '/terms-of-service': '/terms-of-service',
    '/cookie-settings': '/cookie-settings',
  },
});

export type Locale = (typeof routing.locales)[number];
