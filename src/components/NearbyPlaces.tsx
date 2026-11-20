import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import { categories, nearbyHref, nearbyLabels, nearbyPlaces, type NearbyPlace } from '@/data/nearby';

export function NearbyCards({ places, locale }: { places: NearbyPlace[]; locale: Locale }) {
  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {places.map((place) => (
        <li key={place.slug}>
          <Link href={nearbyHref(place)} className="block h-full p-4 rounded-xl border hover:underline" style={{ background: 'var(--card-bg)', borderColor: 'var(--border-color)' }}>
            <span className="block font-medium" style={{ color: 'var(--text-primary)' }}>{place.name}</span>
            <span className="text-sm" style={{ color: 'var(--text-muted)' }}>{place.town} · {categories[place.category][locale]}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function NearbyPlaces({ locale, full = false }: { locale: Locale; full?: boolean }) {
  const labels = nearbyLabels[locale];

  return (
    <section id="nearby" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto">
        {full
          ? <h1 className="font-display text-4xl sm:text-5xl font-semibold">{labels.title}</h1>
          : <h2 className="font-display text-3xl sm:text-4xl font-semibold">{labels.title}</h2>}
        <p className="mt-3 mb-8" style={{ color: 'var(--text-secondary)' }}>{labels.intro}</p>
        {Object.entries(categories).map(([category, categoryNames]) => (
          <div key={category} className="mt-8">
            <h3 className="text-xl font-semibold mb-4">{categoryNames[locale]}</h3>
            <NearbyCards locale={locale} places={nearbyPlaces.filter((place) => place.category === category).slice(0, full ? undefined : 3)} />
          </div>
        ))}
        {!full && <Link href="/a-proximite" className="inline-block mt-6 font-semibold underline" style={{ color: 'var(--accent)' }}>{labels.name}</Link>}
      </div>
    </section>
  );
}
