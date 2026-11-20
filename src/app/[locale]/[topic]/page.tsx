import type { Metadata } from 'next';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing, type Locale } from '@/i18n/routing';
import { Link } from '@/i18n/navigation';
import { absoluteUrl, buildAlternates, type Href } from '@/lib/seo';
import { SITE_URL, attraction, buildBreadcrumbSchema, buildFaqSchema, buildWebPageSchema } from '@/lib/site';
import { topics, topicKeys, getRelatedTopics, isTopicKey, type TopicKey } from '@/data/topics';
import LanguageToggle from '@/components/LanguageToggle';
import { nearbyLabels } from '@/data/nearby';
import StructuredData from '@/components/StructuredData';

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    topicKeys.map((topic) => ({ locale, topic }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; topic: string }>;
}): Promise<Metadata> {
  const { locale, topic } = await params;
  if (!routing.locales.includes(locale as Locale) || !isTopicKey(topic)) return {};

  const content = topics[locale as Locale][topic];
  const href = `/${topic}` as Href;
  const url = absoluteUrl(href, locale as Locale);

  return {
    title: content.title,
    description: content.description,
    alternates: buildAlternates(href, locale as Locale),
    openGraph: {
      title: content.title,
      description: content.description,
      url,
      siteName: attraction.name,
      images: [{ url: attraction.heroImage, alt: attraction.name }],
      type: 'article',
    },
  };
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ locale: string; topic: string }>;
}) {
  const { locale, topic } = await params;
  if (!routing.locales.includes(locale as Locale) || !isTopicKey(topic)) {
    notFound();
  }

  const key = topic as TopicKey;
  setRequestLocale(locale);
  const content = topics[locale as Locale][key];
  const href = `/${key}` as Href;
  const url = absoluteUrl(href, locale as Locale);
  const t = await getTranslations('topics');
  const homeUrl = absoluteUrl('/', locale as Locale);

  const related = getRelatedTopics(key).map((relatedKey) => ({
    key: relatedKey,
    href: `/${relatedKey}` as Href,
    content: topics[locale as Locale][relatedKey],
  }));

  const faqSchema = buildFaqSchema(content.faq);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: attraction.name, url: homeUrl },
    { name: content.title, url },
  ]);
  const webPageSchema = buildWebPageSchema({ url, name: content.title, locale: locale as Locale });

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      <StructuredData data={[webPageSchema, breadcrumbSchema, faqSchema]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-24 sm:py-28">
        <nav aria-label={nearbyLabels[locale as Locale].name} className="mb-8 flex flex-wrap gap-4 items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium"
            style={{ color: 'var(--accent)' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            {attraction.name}
          </Link>
          <Link href="/a-proximite" className="underline text-sm">{nearbyLabels[locale as Locale].name}</Link>
          <div className="ml-auto"><LanguageToggle /></div>
        </nav>

        <h1 className="font-display text-3xl sm:text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
          {content.title}
        </h1>
        <div className="w-12 h-0.5 mb-8" style={{ background: 'var(--accent)' }} />

        {content.intro.map((paragraph, i) => (
          <p key={i} className="text-lg leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
            {paragraph}
          </p>
        ))}

        <div
          className="rounded-xl p-6 my-10"
          style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
        >
          <h2 className="font-display text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
            {t('factsTitle')}
          </h2>
          <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {content.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs uppercase tracking-wide mb-1" style={{ color: 'var(--text-muted)' }}>
                  {fact.label}
                </dt>
                <dd className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {content.sections.map((section) => (
          <section key={section.id} className="mb-10">
            <h2 className="font-display text-2xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              {section.heading}
            </h2>
            {section.paragraphs.map((paragraph, i) => (
              <p key={i} className="leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                {paragraph}
              </p>
            ))}
            {section.bullets && (
              <ul className="space-y-2 mt-4">
                {section.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                      style={{ background: 'var(--accent)' }}
                    />
                    <span style={{ color: 'var(--text-secondary)' }}>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <section className="mb-12 rounded-xl overflow-hidden" style={{ border: '1px solid var(--map-border)' }}>
          <div className="p-5" style={{ background: 'var(--bg-tertiary)' }}>
            <h2 className="font-display text-xl font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
              {t('mapTitle')}
            </h2>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              {attraction.plusCode}
            </p>
          </div>
          <iframe
            src="https://maps.google.com/maps?q=For%C3%AAt+domaniale+de+Meudon&output=embed"
            width="100%"
            height="380"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`${attraction.name} — carte`}
          />
          <div className="p-5 text-center" style={{ background: 'var(--bg-secondary)' }}>
            <a
              href={attraction.googleMaps.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white"
              style={{ background: 'var(--accent)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {t('openMaps')}
            </a>
          </div>
        </section>

        <section id="faq" className="mb-12">
          <h2 className="font-display text-2xl font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>
            {t('faqTitle')}
          </h2>
          <div className="space-y-4">
            {content.faq.map((item, i) => (
              <details
                key={i}
                className="rounded-xl p-5"
                style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
              >
                <summary
                  className="font-semibold cursor-pointer"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {item.question}
                </summary>
                <p className="mt-3 leading-relaxed text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-display text-xl font-semibold mb-5" style={{ color: 'var(--text-primary)' }}>
            {content.internalLinksTitle}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {related.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="rounded-xl p-5 transition-shadow hover:shadow-md"
                style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)' }}
              >
                <span className="text-sm font-semibold block mb-2" style={{ color: 'var(--accent)' }}>
                  {item.content.title}
                </span>
                <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {item.content.description}
                </span>
              </Link>
            ))}
            <Link
              href="/"
              className="rounded-xl p-5 transition-shadow hover:shadow-md"
              style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)' }}
            >
              <span className="text-sm font-semibold block mb-2" style={{ color: 'var(--accent)' }}>
                {attraction.name}
              </span>
              <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                {t('backToHome')}
              </span>
            </Link>
          </div>
        </section>

        <section className="pt-8" style={{ borderTop: '1px solid var(--border-color)' }}>
          <h2 className="font-display text-base font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
            {t('sourcesTitle')}
          </h2>
          <ul className="space-y-2 text-sm">
            {[
              { href: attraction.managerUrl, label: 'Office national des forêts (ONF)' },
              { href: attraction.threePondWalkUrl, label: 'Destination Hauts-de-Seine' },
              { href: attraction.transportUrl, label: 'Île-de-France Mobilités' },
              { href: attraction.googleMaps.url, label: 'Google Maps' },
            ].map((source) => (
              <li key={source.href}>
                <a
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                  style={{ color: 'var(--accent)' }}
                >
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-xs mt-6 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            {t('sourcesNote')} <span style={{ color: 'var(--text-secondary)' }}>{SITE_URL}</span>
          </p>
        </section>
      </div>
    </div>
  );
}
