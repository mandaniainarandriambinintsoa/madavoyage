import { Compass, Map, Route } from "lucide-react";

const steps = [
  {
    title: "Choisir un circuit",
    description:
      "Le visiteur comprend vite les offres, les durees, les prix de depart et les regions traversees.",
    icon: Compass
  },
  {
    title: "Valider un depart",
    description:
      "Les dates disponibles sont visibles sans tunnel complique, avec places restantes et style du voyage.",
    icon: Route
  },
  {
    title: "Personnaliser",
    description:
      "Le formulaire garde une porte ouverte pour les dates privees, groupes, familles ou demandes speciales.",
    icon: Map
  }
];

export function Experience() {
  return (
    <section className="section experience-section">
      <div className="container experience-layout">
        <div>
          <p className="section-label">Parcours client</p>
          <h2>Une page pensee pour convertir sans perdre le charme du voyage</h2>
        </div>
        <div className="step-list">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <article className="step-item" key={step.title}>
                <span className="step-icon">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
