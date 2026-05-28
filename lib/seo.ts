import { siteConfig } from "@/lib/site";
import { circuits, faqs } from "@/data/travel";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Antananarivo",
      addressCountry: "MG"
    },
    sameAs: siteConfig.sameAs
  };
}

export function toursJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Circuits accompagnes a Madagascar",
    itemListElement: circuits.map((circuit, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "TouristTrip",
        name: circuit.title,
        description: circuit.description,
        image: `${siteConfig.url}${circuit.image}`,
        offers: {
          "@type": "Offer",
          priceCurrency: "EUR",
          price: circuit.price.replace(/\D/g, "")
        }
      }
    }))
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}
