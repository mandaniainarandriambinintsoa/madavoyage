import { Send } from "lucide-react";

export function Reservation() {
  return (
    <section id="reservation" className="section reservation-section">
      <div className="container reservation-layout">
        <div className="reservation-copy">
          <p className="section-label">Reservation</p>
          <h2>Demander une date ou un devis personnalise</h2>
          <p>
            Cette zone peut ensuite devenir un vrai formulaire connecte a un CRM,
            a un email, ou a une base de donnees selon le client.
          </p>
          <div className="reservation-note">
            <strong>Base duplicable</strong>
            <span>Formulaire visuel aujourd'hui, pret pour email, CRM, webhook ou base de donnees ensuite.</span>
          </div>
        </div>
        <form className="quote-form">
          <label>
            Nom complet
            <input name="name" placeholder="Votre nom" />
          </label>
          <label>
            Email
            <input name="email" type="email" placeholder="vous@email.com" />
          </label>
          <label>
            Circuit souhaite
            <select name="tour" defaultValue="">
              <option value="" disabled>
                Choisir un circuit
              </option>
              <option>La route des baobabs</option>
              <option>Nature & faune endemique</option>
              <option>Madagascar complet</option>
            </select>
          </label>
          <label>
            Message
            <textarea name="message" placeholder="Dates, nombre de voyageurs, envies..." rows={5} />
          </label>
          <button className="btn primary" type="button">
            <Send size={18} aria-hidden="true" />
            Envoyer la demande
          </button>
        </form>
      </div>
    </section>
  );
}
