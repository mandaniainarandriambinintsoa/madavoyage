import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { BookingFlow } from "@/components/sections/booking-flow";
import { circuits } from "@/data/travel";

export function Circuits() {
  return (
    <section id="circuits" className="section circuits-booking-section">
      <div className="container circuits-booking-layout">
        <div className="circuits-content">
        <div className="section-heading" data-reveal>
          <p className="section-label">Nos circuits accompagnes</p>
          <h2>Partez a la decouverte de Madagascar</h2>
          <p>
            Des itineraires soigneusement concus pour vivre le meilleur de la
            Grande Ile.
          </p>
        </div>
        <div className="card-grid">
          {circuits.map((circuit, index) => (
            <article
              className="circuit-card"
              data-reveal
              data-reveal-delay={index * 90}
              key={circuit.title}
            >
              <div className="card-image">
                <Image
                  src={circuit.image}
                  alt={circuit.title}
                  fill
                  loading="eager"
                  sizes="(min-width: 900px) 33vw, 100vw"
                />
                <span className="image-badge">{circuit.duration}</span>
              </div>
              <div className="card-body">
                <h3>{circuit.title}</h3>
                <p>{circuit.description}</p>
                <ul className="place-list">
                  {circuit.places.map((place) => (
                    <li key={place}>
                      <MapPin size={15} aria-hidden="true" />
                      {place}
                    </li>
                  ))}
                </ul>
                <div className="card-footer">
                  <strong>{circuit.price}</strong>
                  <a href="#reservation" aria-label={`Voir le detail pour ${circuit.title}`}>
                    Voir le detail
                    <ArrowRight size={17} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        </div>
        <BookingFlow />
      </div>
    </section>
  );
}
