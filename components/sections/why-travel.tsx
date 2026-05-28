import { Handshake, Luggage, MapPinned, ShieldCheck } from "lucide-react";
import { reasons } from "@/data/travel";

const icons = [MapPinned, Luggage, Handshake, ShieldCheck];

export function WhyTravel() {
  return (
    <section id="apropos" className="why-section">
      <div className="container">
        <p className="section-label center" data-reveal>
          Pourquoi voyager avec nous ?
        </p>
        <div className="why-grid">
          {reasons.map((reason, index) => {
            const Icon = icons[index];
            return (
              <article
                className="why-item"
                data-reveal
                data-reveal-delay={index * 80}
                key={reason.title}
              >
                <Icon size={38} aria-hidden="true" />
                <h2>{reason.title}</h2>
                <p>{reason.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
