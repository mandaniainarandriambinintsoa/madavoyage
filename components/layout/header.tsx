import { CalendarDays, Palmtree } from "lucide-react";
import { destinations } from "@/data/destinations";

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="/#accueil" aria-label="MadaVoyage accueil">
        <span className="brand-mark">
          <Palmtree size={21} aria-hidden="true" />
        </span>
        <span className="brand-text">
          <strong>MadaVoyage</strong>
          <small>Agence de voyage</small>
        </span>
      </a>
      <nav className="main-nav" aria-label="Navigation principale">
        <a href="/#accueil">Accueil</a>
        <div className="nav-dropdown">
          <a href="/#destinations">Destinations</a>
          <div className="nav-dropdown-menu">
            {destinations.map((destination) => (
              <a href={`/destinations/${destination.slug}`} key={destination.slug}>
                <span>{destination.menuLabel}</span>
                <small>{destination.region}</small>
              </a>
            ))}
          </div>
        </div>
        <a href="/#circuits">Circuits</a>
        <a href="/#apropos">A propos</a>
        <a href="/#contact">Contact</a>
      </nav>
      <a className="nav-cta" href="/#reservation">
        <CalendarDays size={18} aria-hidden="true" />
        Demande de devis
      </a>
    </header>
  );
}
