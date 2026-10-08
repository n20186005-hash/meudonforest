import type { Locale } from '@/i18n/routing';
import { frTopics } from './topics.fr';
import { enTopics } from './topics.en';
import { zhTopics } from './topics.zh';

/**
 * Pages thématiques longue traîne.
 * Les clés correspondent aux `pathnames` définis dans src/i18n/routing.ts
 * (la clé est le chemin français, sans préfixe de locale).
 */
export const topicKeys = [
  'randonnee-foret-meudon',
  'carte-foret-meudon',
  'balade-etangs-meudon',
  'acces-foret-meudon',
] as const;

export type TopicKey = (typeof topicKeys)[number];

export function isTopicKey(value: string): value is TopicKey {
  return (topicKeys as readonly string[]).includes(value);
}

export type TopicContent = {
  slug: string;
  title: string;
  description: string;
  intro: string[];
  facts: Array<{ label: string; value: string }>;
  sections: Array<{
    id: string;
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }>;
  faq: Array<{ question: string; answer: string }>;
  internalLinksTitle: string;
};

export const topics: Record<Locale, Record<TopicKey, TopicContent>> = {
  fr: frTopics,
  en: enTopics,
  zh: zhTopics,
};

export function getRelatedTopics(key: TopicKey): TopicKey[] {
  return topicKeys.filter((k) => k !== key);
}
