'use client';

import { useTranslations } from 'next-intl';

const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/x72sfn3MWeRm2ATy8';

export default function Reviews() {
  const t = useTranslations('reviews');

  return (
    <section id="reviews" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6 text-center"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-10 mx-auto" style={{ background: 'var(--accent)' }} />

        <div
          className="rounded-2xl p-8 text-center"
          style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)' }}
        >
          <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
            {t('snippet')}
          </p>
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white transition-colors"
            style={{ background: 'var(--accent)' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {t('moreReviews')}
          </a>
        </div>
      </div>
    </section>
  );
}
