import type { Metadata } from 'next';
import { hasLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import { routing, type Locale } from '@/i18n/routing';
import { nearbyHref, nearbyPlaces, nearbyLabels, categories, mapQuery } from '@/data/nearby';
import { absoluteUrl, buildAlternates } from '@/lib/seo';
import { buildBreadcrumbSchema, buildWebPageSchema } from '@/lib/site';
import { NearbyCards } from '@/components/NearbyPlaces';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import LanguageToggle from '@/components/LanguageToggle';

type Props = { params: Promise<{ locale: string; place: string }> };

function getPlace(locale: string, slug: string) {
  if (!hasLocale(routing.locales, locale)) notFound();
  const place = nearbyPlaces.find((entry) => entry.slug === slug);
  if (!place) notFound();
  return { place, locale: locale as Locale };
}

export function generateStaticParams() {
  return nearbyPlaces.map(({ slug }) => ({ place: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, place: slug } = await params;
  const { place, locale: lang } = getPlace(locale, slug);
  const labels = nearbyLabels[lang];
  const title = `${place.name} | ${labels.home}`;
  const description = place.text[lang][1];
  const alternates = buildAlternates(nearbyHref(place), lang);
  return {
    title,
    description,
    alternates,
    openGraph: {
      title, description, url: alternates.canonical, type: 'article',
      images: place.image ? [{ url: place.image.url, alt: place.name }] : [],
    },
    twitter: { card: place.image ? 'summary_large_image' : 'summary', title, description, images: place.image ? [place.image.url] : [] },
  };
}

export default async function NearbyDetail({ params }: Props) {
  const { locale, place: slug } = await params;
  const { place, locale: lang } = getPlace(locale, slug);
  setRequestLocale(lang);
  const labels = nearbyLabels[lang];
  const [history, landscape, access, visit, photo, question, answer] = place.text[lang];
  const related = nearbyPlaces.filter((candidate) => candidate.slug !== slug);
  const suggestions = [
    ...related.filter((entry) => entry.town === place.town),
    ...related.filter((entry) => entry.town !== place.town && entry.category === place.category),
  ].slice(0, 3);
  const url = absoluteUrl(nearbyHref(place), lang);
  const query = mapQuery(place);

  return (
    <>
      <StructuredData data={[
        buildWebPageSchema({ url, name: place.name, locale: lang }),
        buildBreadcrumbSchema([
          { name: labels.home, url: absoluteUrl('/', lang) },
          { name: labels.name, url: absoluteUrl('/a-proximite', lang) },
          { name: place.name, url },
        ]),
      ]} />
      <main className="max-w-5xl mx-auto px-5 py-6 sm:py-10">
        <nav aria-label={labels.name} className="mb-8 flex gap-3 flex-wrap items-center">
          <Link href="/" className="underline">{labels.home}</Link>
          <span aria-hidden="true">/</span>
          <Link href="/a-proximite" className="underline">{labels.name}</Link>
          <div className="ml-auto"><LanguageToggle /></div>
        </nav>
        <header className="mb-7">
          <p className="mb-2" style={{ color: 'var(--text-muted)' }}>{place.town} · {categories[place.category][lang]}</p>
          <h1 className="font-display text-4xl sm:text-6xl font-bold">{place.name}</h1>
          <a className="mt-4 inline-block underline" href={`https://www.google.com/maps/search/?api=1&query=${query}`}>{labels.maps}</a>
        </header>
        {place.image
          ? <figure className="mb-6">
              <img src={place.image.url} alt={place.name} className="w-full max-h-96 object-contain rounded-2xl" />
              <figcaption className="mt-2 text-sm"><a className="underline" href={place.image.page}>{place.image.credit}</a></figcaption>
            </figure>
          : <div className="rounded-2xl grid place-items-center mb-6 h-36 sm:h-52 border" style={{ background: 'var(--bg-tertiary)', borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}>{labels.pending}</div>}
        <section className="rounded-xl border px-5 py-4 mb-8" style={{ background: 'var(--card-bg)', borderColor: 'var(--border-color)' }}>
          <h2 className="font-semibold">{labels.manager}</h2>
          {place.manager ? <a className="underline" href={place.source}>{place.manager}</a> : <p>{labels.unknown}</p>}
        </section>
        {[[labels.history, history], [labels.landscape, landscape], [labels.access, access], [labels.visit, visit], [labels.photo, photo]].map(([heading, content]) => (
          <section key={heading} className="my-8 max-w-3xl">
            <h2 className="font-display text-2xl font-semibold mb-2">{heading}</h2>
            <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{content}</p>
          </section>
        ))}
        <section className="my-8">
          <h2 className="font-display text-2xl font-semibold mb-3">{labels.faq}</h2>
          <details className="rounded-xl border p-4" style={{ borderColor: 'var(--border-color)' }}>
            <summary className="cursor-pointer font-semibold">{question}</summary>
            <p className="mt-2 leading-relaxed">{answer}</p>
          </details>
        </section>
        <section className="my-8">
          <h2 className="font-display text-2xl font-semibold mb-3">{labels.maps}</h2>
          <iframe className="rounded-xl w-full h-72 border-0" loading="lazy" title={`${labels.maps} — ${place.name}`} src={`https://maps.google.com/maps?q=${query}&output=embed`} referrerPolicy="no-referrer-when-downgrade" />
          <a className="mt-3 inline-block underline" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${place.town}, Île-de-France, France`)}`}>{labels.region} · {place.town}</a>
          <Link href="/carte-foret-meudon" className="block mt-2 underline">{labels.forestMap}</Link>
        </section>
        <section className="my-8">
          <h2 className="font-display text-2xl font-semibold mb-3">{labels.sources}</h2>
          <ul className="list-disc ml-5 break-words">
            {[place.source, place.more].filter((source): source is string => Boolean(source)).map((source) => (
              <li key={source}><a href={source} className="underline">{new URL(source).hostname.replace(/^www\./, '')}</a></li>
            ))}
          </ul>
        </section>
        <section className="my-8">
          <h2 className="font-display text-2xl font-semibold mb-3">{labels.related}</h2>
          <NearbyCards places={suggestions} locale={lang} />
        </section>
      </main>
      <Footer />
    </>
  );
}
