import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="accueil" className="hero-section">
      <Image
        src="/images/madavoyage/hero-madagascar.webp"
        alt="Paysage naturel de Madagascar"
        fill
        loading="eager"
        fetchPriority="high"
        className="hero-image"
      />
      <div className="hero-overlay" />
      <div className="container hero-content">
        <h1>Madagascar</h1>
        <p className="hero-kicker">Une destination unique comme nulle autre</p>
        <p className="hero-copy">
          Des paysages a couper le souffle, une biodiversite exceptionnelle et
          une culture riche et authentique.
        </p>
        <div className="hero-actions">
          <a className="btn primary" href="#circuits">
            Decouvrir les circuits
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a className="btn secondary" href="#reservation">
            Demander un devis
          </a>
        </div>
      </div>
    </section>
  );
}
