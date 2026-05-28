import { siteConfig } from "@/lib/site";
import { Facebook, Instagram, Send, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container footer-layout">
        <div>
          <a className="brand footer-brand" href="#accueil">
            <span>Mada</span>Voyage
          </a>
          <p>
            Specialiste des voyages sur mesure a Madagascar. Decouvrez la
            beaute et l'authenticite de la Grande Ile.
          </p>
          <div className="social-row">
            <a href="#" aria-label="Facebook">
              <Facebook size={18} aria-hidden="true" />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram size={18} aria-hidden="true" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div>
          <h2>Liens utiles</h2>
          <a href="#accueil">Accueil</a>
          <a href="#destinations">Destinations</a>
          <a href="#circuits">Circuits</a>
          <a href="#apropos">A propos</a>
          <a href="#contact">Contact</a>
        </div>
        <div>
          <h2>Informations</h2>
          <p>{siteConfig.phone}</p>
          <p>{siteConfig.email}</p>
          <p>{siteConfig.address}</p>
        </div>
        <div>
          <h2>Newsletter</h2>
          <p>Recevez nos bons plans et inspirations de voyage.</p>
          <form className="newsletter-form">
            <input aria-label="Votre email" placeholder="Votre email" type="email" />
            <button aria-label="S'inscrire" type="button">
              <Send size={18} aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 MadaVoyage. Tous droits reserves.</span>
        <span>Mentions legales</span>
        <span>Conditions generales</span>
      </div>
    </footer>
  );
}
