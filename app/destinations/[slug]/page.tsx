import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, MapPin } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/sections/footer";
import { destinations, getDestination } from "@/data/destinations";
import { siteConfig } from "@/lib/site";

type DestinationPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export async function generateMetadata({ params }: DestinationPageProps) {
  const { slug } = await params;
  const destination = getDestination(slug);

  if (!destination) {
    return {};
  }

  return {
    title: `${destination.title} | ${siteConfig.name}`,
    description: destination.summary,
    openGraph: {
      title: `${destination.title} | ${siteConfig.name}`,
      description: destination.summary,
      images: [destination.image]
    }
  };
}

export default async function DestinationPage({ params }: DestinationPageProps) {
  const { slug } = await params;
  const destination = getDestination(slug);

  if (!destination) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <section className="destination-hero">
          <Image
            src={destination.image}
            alt={destination.title}
            fill
            priority
            sizes="100vw"
            className="destination-hero-image"
          />
          <div className="destination-hero-overlay" />
          <div className="container destination-hero-content">
            <Link className="destination-back" href="/#destinations">
              <ArrowLeft size={17} aria-hidden="true" />
              Toutes les destinations
            </Link>
            <p className="section-label">{destination.region}</p>
            <h1>{destination.title}</h1>
            <p>{destination.summary}</p>
          </div>
        </section>

        <section className="section destination-detail">
          <div className="container destination-detail-layout">
            <article>
              <p className="section-label">Apercu</p>
              <h2>Pourquoi y aller ?</h2>
              <p>{destination.intro}</p>
              <div className="destination-highlight-grid">
                {destination.highlights.map((highlight) => (
                  <span key={highlight}>{highlight}</span>
                ))}
              </div>
            </article>

            <aside className="destination-facts">
              <div>
                <CalendarDays size={20} aria-hidden="true" />
                <span>Duree conseillee</span>
                <strong>{destination.duration}</strong>
              </div>
              <div>
                <MapPin size={20} aria-hidden="true" />
                <span>Ideal pour</span>
                <strong>{destination.bestFor}</strong>
              </div>
              <Link className="btn primary" href="/#reservation">
                Demander un devis
              </Link>
            </aside>
          </div>
        </section>

        <section className="section destination-places">
          <div className="container">
            <div className="section-heading">
              <p className="section-label">A voir sur place</p>
              <h2>Les points forts de {destination.title}</h2>
            </div>
            <div className="destination-place-grid">
              {destination.places.map((place) => (
                <article className="destination-place-card" key={place.name}>
                  <span>{destination.region}</span>
                  <h3>{place.name}</h3>
                  <p>{place.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
