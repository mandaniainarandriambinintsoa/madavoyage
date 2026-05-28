export const circuits = [
  {
    title: "La route des baobabs",
    duration: "8 jours / 7 nuits",
    price: "a partir de 1 280 EUR",
    image: "/images/madavoyage/circuit-baobabs.webp",
    description:
      "Un itineraire iconique entre allees de baobabs, villages de l'ouest et couchers de soleil inoubliables.",
    tags: ["Morondava", "Baobabs", "Culture locale"],
    places: ["Antananarivo", "Morondava", "Tsingy de Bemaraha", "Plages de Kirindy"]
  },
  {
    title: "Nature & faune endemique",
    duration: "10 jours / 9 nuits",
    price: "a partir de 1 590 EUR",
    image: "/images/madavoyage/circuit-wildlife.webp",
    description:
      "Une immersion guidee dans les parcs, forets tropicales et reserves ou observer lemuriens et cameleons.",
    tags: ["Andasibe", "Ranomafana", "Biodiversite"],
    places: ["Antananarivo", "Andasibe", "Ranomafana", "Isalo"]
  },
  {
    title: "Madagascar complet",
    duration: "15 jours / 14 nuits",
    price: "a partir de 2 350 EUR",
    image: "/images/madavoyage/circuit-lagoon.webp",
    description:
      "Un grand voyage du centre aux plages, pense pour decouvrir les paysages, rencontres et saveurs du pays.",
    tags: ["Hauts plateaux", "Sud", "Plages"],
    places: ["Nosy Be", "Sainte-Marie", "Isalo", "Hauts plateaux"]
  }
];

export const departures = [
  {
    season: "Saison verte",
    date: "12 juin 2026",
    places: "6 places",
    style: "Petit groupe",
    price: "1 280 EUR",
    bestFor: "Photographie & paysages"
  },
  {
    season: "Grande saison",
    date: "24 aout 2026",
    places: "4 places",
    style: "Confort",
    price: "1 590 EUR",
    bestFor: "Faune & parcs nationaux"
  },
  {
    season: "Fin d'annee",
    date: "18 octobre 2026",
    places: "8 places",
    style: "Premium local",
    price: "2 350 EUR",
    bestFor: "Circuit complet"
  }
];

export const bookingDepartures = [
  {
    id: "baobabs-june-2026",
    circuitTitle: "La route des baobabs",
    date: "12 juin 2026",
    isoDate: "2026-06-12",
    returnDate: "19 juin 2026",
    placesLeft: 6,
    style: "Petit groupe",
    price: "1 280 EUR",
    note: "Ideal photo & paysages"
  },
  {
    id: "baobabs-october-2026",
    circuitTitle: "La route des baobabs",
    date: "18 octobre 2026",
    isoDate: "2026-10-18",
    returnDate: "25 octobre 2026",
    placesLeft: 8,
    style: "Premium local",
    price: "1 360 EUR",
    note: "Couchers de soleil"
  },
  {
    id: "wildlife-august-2026",
    circuitTitle: "Nature & faune endemique",
    date: "24 aout 2026",
    isoDate: "2026-08-24",
    returnDate: "2 septembre 2026",
    placesLeft: 4,
    style: "Confort",
    price: "1 590 EUR",
    note: "Faune & parcs nationaux"
  },
  {
    id: "wildlife-september-2026",
    circuitTitle: "Nature & faune endemique",
    date: "14 septembre 2026",
    isoDate: "2026-09-14",
    returnDate: "23 septembre 2026",
    placesLeft: 5,
    style: "Petit groupe",
    price: "1 640 EUR",
    note: "Forets tropicales"
  },
  {
    id: "complete-july-2026",
    circuitTitle: "Madagascar complet",
    date: "6 juillet 2026",
    isoDate: "2026-07-06",
    returnDate: "20 juillet 2026",
    placesLeft: 5,
    style: "Confort",
    price: "2 350 EUR",
    note: "Grand itineraire"
  },
  {
    id: "complete-november-2026",
    circuitTitle: "Madagascar complet",
    date: "9 novembre 2026",
    isoDate: "2026-11-09",
    returnDate: "23 novembre 2026",
    placesLeft: 7,
    style: "Premium local",
    price: "2 480 EUR",
    note: "Centre, sud & plages"
  }
];

export const trustItems = [
  "Guides locaux certifies",
  "Paiement securise",
  "Dates flexibles",
  "Assistance avant depart",
  "Voyage responsable"
];

export const reasons = [
  {
    title: "Expertise locale",
    description: "Une equipe passionnee et des partenaires de confiance sur place."
  },
  {
    title: "Circuits sur-mesure",
    description: "Des voyages personnalises selon vos envies et votre budget."
  },
  {
    title: "Accompagnement",
    description: "Un suivi avant, pendant et apres votre sejour."
  },
  {
    title: "Voyage responsable",
    description: "Un tourisme durable qui respecte la nature et les populations."
  }
];

export const galleryItems = [
  {
    title: "Tsingy de Bemaraha",
    image: "/images/madavoyage/hero-madagascar.webp"
  },
  {
    title: "Allee des baobabs",
    image: "/images/madavoyage/circuit-baobabs.webp"
  },
  {
    title: "Plages paradisiaques",
    image: "/images/madavoyage/circuit-lagoon.webp"
  },
  {
    title: "Lemuriens",
    image: "/images/madavoyage/circuit-wildlife.webp"
  }
];

export const testimonials = [
  {
    quote:
      "Un voyage inoubliable grace a MadaVoyage ! Organisation parfaite et guides exceptionnels.",
    author: "Sophie et Marc",
    origin: "France"
  },
  {
    quote:
      "Le circuit etait fluide, rassurant et tres bien rythme. Nous avons decouvert Madagascar sans stress.",
    author: "Claire D.",
    origin: "Belgique"
  },
  {
    quote:
      "Des paysages incroyables, des conseils justes et une equipe locale vraiment attentionnee.",
    author: "Nicolas et Aina",
    origin: "La Reunion"
  }
];

export const faqs = [
  {
    question: "Quelle est la meilleure periode pour voyager a Madagascar ?",
    answer:
      "La saison seche, de mai a octobre, est souvent la plus confortable pour les circuits. Certaines regions restent interessantes toute l'annee selon l'itineraire choisi."
  },
  {
    question: "Les circuits sont-ils accompagnes par un guide local ?",
    answer:
      "Oui, les circuits proposes sont concus avec un accompagnement local pour faciliter les trajets, les visites et la comprehension des lieux traverses."
  },
  {
    question: "Peut-on demander une date personnalisee ?",
    answer:
      "Oui, le formulaire permet de demander une date sur mesure, un depart prive ou une adaptation du circuit selon le nombre de voyageurs."
  },
  {
    question: "Le site peut-il etre adapte pour un autre client ?",
    answer:
      "Oui, l'architecture separe les donnees, les sections et la configuration de marque pour permettre une duplication rapide vers une autre agence ou un autre metier."
  }
];
