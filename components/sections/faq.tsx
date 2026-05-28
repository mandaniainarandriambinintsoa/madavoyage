import { faqs } from "@/data/travel";

export function Faq() {
  return (
    <section className="section faq-section">
      <div className="container faq-layout">
        <div data-reveal>
          <p className="section-label">Questions frequentes</p>
          <h2>Les reponses utiles avant de demander un devis</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details
              className="faq-item"
              data-reveal
              data-reveal-delay={index * 70}
              key={faq.question}
            >
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
