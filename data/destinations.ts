export const destinations = [
  {
    slug: "antananarivo",
    title: "Antananarivo",
    menuLabel: "Visiter Antananarivo",
    region: "Hautes terres centrales",
    image: "/images/madavoyage/destination-antananarivo.webp",
    summary:
      "Capitale en hauteur, Antananarivo mele palais royaux, collines historiques, marches vivants et panoramas urbains.",
    intro:
      "Antananarivo est souvent la premiere rencontre avec Madagascar. La ville se decouvre par ses hauteurs, ses quartiers anciens, ses marches et ses sites royaux autour de la capitale.",
    highlights: ["Rova d'Antananarivo", "Haute-Ville", "Analakely", "Lac Anosy"],
    places: [
      {
        name: "Rova d'Antananarivo",
        description: "Ancien palais royal dominant la Haute-Ville, ideal pour comprendre l'histoire merina."
      },
      {
        name: "Colline royale d'Ambohimanga",
        description: "Site historique majeur aux portes de la capitale, classe au patrimoine mondial de l'UNESCO."
      },
      {
        name: "Marche d'Analakely",
        description: "Quartier vivant pour sentir le rythme quotidien de la capitale et ses commerces populaires."
      },
      {
        name: "Lac Anosy",
        description: "Repere urbain reconnaissable, avec ses jacarandas et son monument central."
      }
    ],
    bestFor: "Culture, histoire, premiere immersion",
    duration: "1 a 2 jours"
  },
  {
    slug: "tsingy-de-bemaraha",
    title: "Tsingy de Bemaraha",
    menuLabel: "Tsingy de Bemaraha",
    region: "Ouest de Madagascar",
    image: "/images/madavoyage/hero-madagascar.webp",
    summary:
      "Un paysage mineral spectaculaire fait d'aiguilles calcaires, de passerelles et de canyons naturels.",
    intro:
      "Les Tsingy de Bemaraha offrent l'un des decors les plus impressionnants de Madagascar, entre formations calcaires acerees, ponts suspendus et forets seches.",
    highlights: ["Grands Tsingy", "Petits Tsingy", "Gorges de Manambolo", "Foret seche"],
    places: [
      {
        name: "Grands Tsingy",
        description: "Parcours aventure avec belvederes, passerelles et reliefs calcaires impressionnants."
      },
      {
        name: "Petits Tsingy",
        description: "Version plus accessible pour une premiere approche des formations rocheuses."
      },
      {
        name: "Manambolo",
        description: "Descente ou balade en pirogue dans les gorges selon l'itineraire choisi."
      }
    ],
    bestFor: "Aventure, paysages rares, photographie",
    duration: "2 a 3 jours"
  },
  {
    slug: "allee-des-baobabs",
    title: "Allee des baobabs",
    menuLabel: "Allee des baobabs",
    region: "Morondava",
    image: "/images/madavoyage/circuit-baobabs.webp",
    summary:
      "L'image iconique de Madagascar, avec ses baobabs geants alignes dans la lumiere de fin de jour.",
    intro:
      "L'Allee des baobabs est une etape incontournable pres de Morondava. Le lieu est particulierement fort au lever ou au coucher du soleil.",
    highlights: ["Baobabs geants", "Coucher de soleil", "Morondava", "Villages de l'ouest"],
    places: [
      {
        name: "Allee principale",
        description: "Le panorama classique, ideal pour les photos de fin de jour."
      },
      {
        name: "Baobab amoureux",
        description: "Deux troncs entrelaces, souvent integres aux circuits dans la region."
      },
      {
        name: "Morondava",
        description: "Ville de depart pratique pour explorer l'ouest et ses paysages secs."
      }
    ],
    bestFor: "Photo, coucher de soleil, voyage iconique",
    duration: "1 jour"
  },
  {
    slug: "plages-paradisiaques",
    title: "Plages paradisiaques",
    menuLabel: "Plages paradisiaques",
    region: "Cotes et iles",
    image: "/images/madavoyage/circuit-lagoon.webp",
    summary:
      "Lagons, sable clair et rythme insulaire pour terminer un circuit par une vraie respiration.",
    intro:
      "Les plages de Madagascar permettent de combiner aventure et repos. Selon la saison, l'itineraire peut viser Nosy Be, Sainte-Marie ou d'autres cotes plus confidentielles.",
    highlights: ["Nosy Be", "Sainte-Marie", "Lagons", "Snorkeling"],
    places: [
      {
        name: "Nosy Be",
        description: "Ile connue pour ses plages, sorties en mer et ambiance tropicale."
      },
      {
        name: "Sainte-Marie",
        description: "Destination plus douce, appreciee pour son charme et ses paysages marins."
      },
      {
        name: "Lagons du nord",
        description: "Eaux calmes, ilots et pauses balneaires selon le circuit."
      }
    ],
    bestFor: "Repos, mer, fin de circuit",
    duration: "3 a 5 jours"
  },
  {
    slug: "lemuriens",
    title: "Lemuriens",
    menuLabel: "Lemuriens et forets",
    region: "Parcs et reserves",
    image: "/images/madavoyage/circuit-wildlife.webp",
    summary:
      "Une immersion dans les forets malgaches pour observer lemuriens, cameleons et biodiversite endemique.",
    intro:
      "Les lemuriens sont au coeur de l'identite naturelle de Madagascar. Les parcs et reserves permettent de les observer avec un guide local, dans le respect des lieux.",
    highlights: ["Andasibe", "Ranomafana", "Guides naturalistes", "Biodiversite"],
    places: [
      {
        name: "Andasibe-Mantadia",
        description: "Reserve celebre pour l'indri-indri et les ambiances de foret humide."
      },
      {
        name: "Ranomafana",
        description: "Parc tropical riche en especes, souvent integre aux circuits nature."
      },
      {
        name: "Sorties nocturnes",
        description: "Observation encadree de petites especes et de cameleons selon les zones."
      }
    ],
    bestFor: "Nature, faune, familles curieuses",
    duration: "2 a 4 jours"
  }
];

export function getDestination(slug: string) {
  return destinations.find((destination) => destination.slug === slug);
}
