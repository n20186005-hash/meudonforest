import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';

export default async function FaqSection({ locale }: { locale: Locale }) {
  const messages = (await import(`@/messages/${locale}.json`)).default;
  const items: Array<{ question: string; answer: string }> = messages?.faqSection?.items || [];
  const t = await getTranslations('faqSection');

  if (items.length === 0) return null;

  return (
    <section id="faq" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>
          {t('title')}
        </h2>
        <p className="mb-8" style={{ color: 'var(--text-muted)' }}>{t('subtitle')}</p>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="space-y-4">
          {items.map((item, i) => (
            <details
              key={i}
              className="rounded-xl p-5 sm:p-6"
              style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
            >
              <summary className="font-semibold cursor-pointer" style={{ color: 'var(--text-primary)' }}>
                {item.question}
              </summary>
              <p className="mt-3 leading-relaxed text-sm" style={{ color: 'var(--text-secondary)' }}>
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
