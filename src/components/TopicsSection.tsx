import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { topics, topicKeys } from '@/data/topics';
import type { Locale } from '@/i18n/routing';
import type { Href } from '@/lib/seo';

export default async function TopicsSection({ locale }: { locale: Locale }) {
  const t = await getTranslations('topicsSection');

  return (
    <section id="guides" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
          {t('title')}
        </h2>
        <p className="mb-8" style={{ color: 'var(--text-muted)' }}>
          {t('subtitle')}
        </p>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {topicKeys.map((key) => {
            const topic = topics[locale][key];
            return (
              <Link
                key={key}
                href={`/${key}` as Href}
                className="rounded-xl p-6 transition-shadow hover:shadow-md flex flex-col h-full"
                style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)' }}
              >
                <span className="font-semibold block mb-2" style={{ color: 'var(--text-primary)' }}>
                  {topic.title}
                </span>
                <span className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {topic.description}
                </span>
                <span
                  className="mt-4 text-sm font-medium inline-flex items-center gap-1"
                  style={{ color: 'var(--accent)' }}
                >
                  {t('readMore')}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
