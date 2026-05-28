import { BadgeCheck, HeartHandshake, ShieldCheck, Sparkles, WalletCards } from "lucide-react";
import { trustItems } from "@/data/travel";

const icons = [BadgeCheck, ShieldCheck, HeartHandshake, Sparkles, WalletCards];

export function Trust() {
  return (
    <section id="destinations" className="trust-band">
      <div className="container trust-grid">
        {trustItems.map((item, index) => {
          const Icon = icons[index];
          return (
            <div className="trust-item" key={item}>
              <Icon size={22} aria-hidden="true" />
              <span>{item}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
