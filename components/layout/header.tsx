import { CalendarDays, Palmtree } from "lucide-react";

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#accueil" aria-label="MadaVoyage accueil">
        <span className="brand-mark">
          <Palmtree size={21} aria-hidden="true" />
        </span>
        <span className="brand-text">
          <strong>MadaVoyage</strong>
          <small>Agence de voyage</small>
        </span>
      </a>
      <nav className="main-nav" aria-label="Navigation principale">
        <a href="#accueil">Accueil</a>
        <a href="#destinations">Destinations</a>
        <a href="#circuits">Circuits</a>
        <a href="#apropos">A propos</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="nav-cta" href="#reservation">
        <CalendarDays size={18} aria-hidden="true" />
        Demande de devis
      </a>
    </header>
  );
}
