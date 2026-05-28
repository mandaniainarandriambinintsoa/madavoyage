import Image from "next/image";

export function FinalCta() {
  return (
    <section className="final-cta">
      <Image
        src="/images/madavoyage/cta-adventure-highlands.webp"
        alt="Paysage montagneux de Madagascar"
        fill
        loading="eager"
        sizes="100vw"
      />
      <div className="final-cta-overlay" />
      <div className="container final-cta-content" data-reveal>
        <h2>Pret a vivre l'aventure Malgache ?</h2>
        <a className="btn primary" href="#reservation">
          Demander un devis
        </a>
      </div>
    </section>
  );
}
