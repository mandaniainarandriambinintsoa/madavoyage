"use client";

import { CalendarDays, CheckCircle2, Mail, Plane, UserRound, UsersRound } from "lucide-react";
import { useMemo, useState } from "react";
import { bookingDepartures, circuits } from "@/data/travel";

type BookingMode = "scheduled" | "custom";

export function BookingFlow() {
  const [selectedCircuit, setSelectedCircuit] = useState(circuits[0].title);
  const [mode, setMode] = useState<BookingMode>("scheduled");
  const availableDepartures = useMemo(
    () => bookingDepartures.filter((departure) => departure.circuitTitle === selectedCircuit),
    [selectedCircuit]
  );
  const [selectedDepartureId, setSelectedDepartureId] = useState(availableDepartures[0]?.id ?? "");
  const [travelers, setTravelers] = useState("2");
  const [customDate, setCustomDate] = useState("");
  const [flexibility, setFlexibility] = useState("± 3 jours");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const selectedDeparture =
    availableDepartures.find((departure) => departure.id === selectedDepartureId) ?? availableDepartures[0];
  const selectedCircuitData = circuits.find((circuit) => circuit.title === selectedCircuit) ?? circuits[0];

  const selectCircuit = (title: string) => {
    const nextDeparture = bookingDepartures.find((departure) => departure.circuitTitle === title);
    setSelectedCircuit(title);
    setSelectedDepartureId(nextDeparture?.id ?? "");
  };

  const tripDate =
    mode === "scheduled" && selectedDeparture
      ? `${selectedDeparture.date} - ${selectedDeparture.returnDate}`
      : customDate
        ? `${customDate} (${flexibility})`
        : "Date a proposer";

  return (
    <aside id="reservation" className="booking-card" data-reveal aria-label="Reservation de circuit">
      <div className="booking-card-header">
        <span className="booking-chip">
          <Plane size={16} aria-hidden="true" />
          Mode billet
        </span>
        <h2>Reservez votre circuit</h2>
        <p>Choisissez un depart pret a partir, ou demandez une date privee a confirmer.</p>
      </div>

      <div className="booking-steps" aria-label="Etapes de reservation">
        <span>1. Circuit</span>
        <span>2. Depart</span>
        <span>3. Voyageurs</span>
        <span>4. Recap</span>
      </div>

      <form className="booking-flow">
        <fieldset>
          <legend>Choisir un circuit</legend>
          <div className="circuit-choice-grid">
            {circuits.map((circuit) => (
              <button
                className={selectedCircuit === circuit.title ? "choice-card active" : "choice-card"}
                key={circuit.title}
                onClick={() => selectCircuit(circuit.title)}
                type="button"
              >
                <span>{circuit.duration}</span>
                <strong>{circuit.title}</strong>
                <small>{circuit.price}</small>
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend>Choisir le type de depart</legend>
          <div className="booking-tabs" role="tablist" aria-label="Type de depart">
            <button
              aria-selected={mode === "scheduled"}
              className={mode === "scheduled" ? "active" : undefined}
              onClick={() => setMode("scheduled")}
              role="tab"
              type="button"
            >
              Departs disponibles
            </button>
            <button
              aria-selected={mode === "custom"}
              className={mode === "custom" ? "active" : undefined}
              onClick={() => setMode("custom")}
              role="tab"
              type="button"
            >
              Date personnalisee
            </button>
          </div>

          {mode === "scheduled" ? (
            <div className="departure-choice-list">
              {availableDepartures.map((departure) => (
                <button
                  className={selectedDeparture?.id === departure.id ? "departure-option active" : "departure-option"}
                  key={departure.id}
                  onClick={() => setSelectedDepartureId(departure.id)}
                  type="button"
                >
                  <span className="departure-date">
                    <CalendarDays size={18} aria-hidden="true" />
                    {departure.date}
                  </span>
                  <span>{departure.returnDate}</span>
                  <strong>{departure.price}</strong>
                  <small>
                    {departure.placesLeft} places restantes · {departure.style}
                  </small>
                  <em>{departure.note}</em>
                </button>
              ))}
            </div>
          ) : (
            <div className="custom-date-grid">
              <label>
                Date souhaitee
                <input value={customDate} onChange={(event) => setCustomDate(event.target.value)} type="date" />
              </label>
              <label>
                Flexibilite
                <select value={flexibility} onChange={(event) => setFlexibility(event.target.value)}>
                  <option>Dates fixes</option>
                  <option>± 3 jours</option>
                  <option>± 7 jours</option>
                  <option>Mois flexible</option>
                </select>
              </label>
              <p>
                Cette option envoie une demande a confirmer. L'agence propose ensuite le meilleur creneau selon les
                guides, les hotels et le calendrier.
              </p>
            </div>
          )}
        </fieldset>

        <fieldset>
          <legend>Voyageurs et contact</legend>
          <div className="traveler-grid">
            <label>
              Voyageurs
              <select value={travelers} onChange={(event) => setTravelers(event.target.value)}>
                <option value="1">1 voyageur</option>
                <option value="2">2 voyageurs</option>
                <option value="3">3 voyageurs</option>
                <option value="4+">4 voyageurs et plus</option>
              </select>
            </label>
            <label>
              Nom
              <input
                autoComplete="name"
                onChange={(event) => setName(event.target.value)}
                placeholder="Votre nom"
                value={name}
              />
            </label>
            <label>
              Email
              <input
                autoComplete="email"
                onChange={(event) => setEmail(event.target.value)}
                placeholder="vous@email.com"
                type="email"
                value={email}
              />
            </label>
          </div>
        </fieldset>

        <div className="booking-summary" aria-live="polite">
          <div>
            <span>Recapitulatif</span>
            <strong>{selectedCircuitData.title}</strong>
          </div>
          <ul>
            <li>
              <CalendarDays size={16} aria-hidden="true" />
              {tripDate}
            </li>
            <li>
              <UsersRound size={16} aria-hidden="true" />
              {travelers} voyageur{travelers === "1" ? "" : "s"}
            </li>
            <li>
              <CheckCircle2 size={16} aria-hidden="true" />
              {mode === "scheduled" && selectedDeparture
                ? `Prix indicatif : ${selectedDeparture.price} / personne`
                : `Base tarifaire : ${selectedCircuitData.price}`}
            </li>
            <li>
              <UserRound size={16} aria-hidden="true" />
              {name || "Nom a completer"}
            </li>
            <li>
              <Mail size={16} aria-hidden="true" />
              {email || "Email a completer"}
            </li>
          </ul>
        </div>

        <button className="btn primary" type="button">
          Envoyer la demande
        </button>
      </form>

      <div className="booking-proof">
        <span>
          <CalendarDays size={18} aria-hidden="true" />
          Confirmation rapide
        </span>
        <span>
          <CheckCircle2 size={18} aria-hidden="true" />
          Depart bloque apres validation
        </span>
        <span>
          <UsersRound size={18} aria-hidden="true" />
          Accompagnement personnalise
        </span>
      </div>
    </aside>
  );
}
