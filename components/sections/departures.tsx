import { CalendarCheck, UsersRound } from "lucide-react";
import { departures } from "@/data/travel";

export function Departures() {
  return (
    <section id="departs" className="section departures-section">
      <div className="container split-heading">
        <div>
          <p className="section-label">Departs disponibles</p>
          <h2>Des creneaux simples a reserver</h2>
        </div>
        <p>
          La logique est volontairement duplicable : trois dates proposees,
          un prix clair, et une option de date personnalisee.
        </p>
      </div>
      <div className="container departure-grid">
        {departures.map((departure) => (
          <article className="departure-card" key={departure.date}>
            <p className="season">{departure.season}</p>
            <h3>{departure.date}</h3>
            <div className="meta-row">
              <span>
                <UsersRound size={17} aria-hidden="true" />
                {departure.places}
              </span>
              <span>
                <CalendarCheck size={17} aria-hidden="true" />
                {departure.style}
              </span>
            </div>
            <p>{departure.bestFor}</p>
            <strong>{departure.price}</strong>
            <a className="btn primary compact" href="#reservation">
              Reserver ce depart
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
