import Image from "next/image";
import { ArrowRight, CalendarDays, MapPin, ShieldCheck, UsersRound } from "lucide-react";
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
        <aside id="reservation" className="booking-card" data-reveal aria-label="Reservation de circuit">
          <h2>Reservez votre circuit</h2>
          <p>Choisissez vos dates et reservez votre aventure en toute simplicite.</p>
          <form>
            <label>
              Choisir un circuit
              <select defaultValue="">
                <option value="" disabled>
                  Selectionner un circuit
                </option>
                {circuits.map((circuit) => (
                  <option key={circuit.title}>{circuit.title}</option>
                ))}
              </select>
            </label>
            <label>
              Date de depart
              <input type="date" />
            </label>
            <label>
              Nombre de voyageurs
              <select defaultValue="2 voyageurs">
                <option>1 voyageur</option>
                <option>2 voyageurs</option>
                <option>3 voyageurs</option>
                <option>4 voyageurs et plus</option>
              </select>
            </label>
            <button className="btn primary" type="button">
              Verifier les disponibilites
            </button>
          </form>
          <div className="booking-proof">
            <span>
              <CalendarDays size={18} aria-hidden="true" />
              Confirmation rapide
            </span>
            <span>
              <ShieldCheck size={18} aria-hidden="true" />
              Paiement securise
            </span>
            <span>
              <UsersRound size={18} aria-hidden="true" />
              Accompagnement personnalise
            </span>
          </div>
        </aside>
      </div>
    </section>
  );
}
