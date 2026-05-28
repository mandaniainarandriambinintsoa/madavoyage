# Design System — MadaVoyage

Landing page minimaliste pour une agence de voyage à Madagascar.

## Direction artistique

Style : premium, naturel, rassurant, orienté tourisme organisé.

Ambiance :
- nature malgache
- circuits accompagnés
- réservation simple
- confiance et sécurité
- expérience locale

## Palette couleurs

```css
:root {
  --color-primary: #2F5D3A;
  --color-primary-dark: #173B28;
  --color-primary-light: #6E9B5C;

  --color-sand: #F5EFE6;
  --color-cream: #FAF7F0;
  --color-white: #FFFFFF;

  --color-text: #1F2933;
  --color-muted: #6B7280;
  --color-border: #E5E7EB;

  --color-gold: #C98A3A;
  --color-warning: #D97706;
}
```

## Typographie

Titres :
- Serif élégante : `Playfair Display`, `Cormorant Garamond`, ou `Georgia`
- Usage : hero, titres de sections, noms des circuits

Textes :
- Sans-serif lisible : `Inter`, `Montserrat`, `Poppins`, ou `Arial`
- Usage : paragraphes, navigation, formulaires, boutons

Échelle recommandée :

```css
--text-xs: 12px;
--text-sm: 14px;
--text-base: 16px;
--text-lg: 18px;
--text-xl: 24px;
--text-2xl: 32px;
--text-hero: clamp(48px, 7vw, 88px);
```

## Layout

Largeur max :
```css
--container: 1180px;
```

Espacements :
```css
--space-section: 88px;
--space-card: 24px;
--radius-card: 18px;
--radius-pill: 999px;
```

Grille :
- Desktop : 3 colonnes pour les circuits
- Tablette : 2 colonnes
- Mobile : 1 colonne

## Composants principaux

### 1. Header / Navigation

Éléments :
- logo
- Accueil
- Destinations
- Circuits
- À propos
- Contact
- bouton “Demander un devis”

Style :
- header blanc ou transparent selon la version
- bouton vert arrondi
- navigation simple

### 2. Hero

Contenu :
- label : `MADAGASCAR`
- titre : `Une destination unique comme nulle autre`
- texte court
- CTA : `Découvrir nos circuits`

Image :
- baobabs, plage, mer turquoise ou coucher de soleil

### 3. Section Circuits

Chaque carte contient :
- image
- durée : `8 jours / 7 nuits`
- titre
- description courte
- tags
- prix
- bouton : `Voir les départs disponibles`

Circuits proposés :
1. La route des baobabs
2. Nature & faune endémique
3. Madagascar complet

### 4. Réservation / Départs

Version recommandée : **3 départs proposés par circuit**.

Chaque carte départ contient :
- saison
- date
- places disponibles
- meilleure période
- type de voyage
- prix
- bouton `Réserver ce départ`

Ajouter aussi :
- lien secondaire : `Demander une date personnalisée`

### 5. Réassurance

Icônes + textes :
- Paiement sécurisé
- Annulation flexible
- Accompagnement personnalisé
- Satisfaction garantie
- Voyage responsable

### 6. CTA final

Titre :
`Prêt à vivre l’aventure Malgache ?`

Bouton :
`Demander un devis gratuit`

### 7. Footer

Colonnes :
- description agence
- liens utiles
- informations de contact
- newsletter

## Boutons

Primaire :
```css
.btn-primary {
  background: #2F5D3A;
  color: white;
  border-radius: 999px;
  padding: 14px 26px;
  font-weight: 600;
}
```

Secondaire :
```css
.btn-secondary {
  background: white;
  color: #2F5D3A;
  border: 1px solid #2F5D3A;
  border-radius: 999px;
  padding: 14px 26px;
}
```

## Images à intégrer localement

Place les images dans ton projet :

```txt
/public/images/
```

Puis appelle-les comme ceci :

```html
<img src="/images/generation_3_creneaux_hero.png" alt="Paysage Madagascar" />
```

## Assets fournis

### Génération 2 — avec formulaire de réservation

- `assets/generation_2_reservation_form_full.png`
- `assets/generation_2_reservation_form_hero.png`
- `assets/generation_2_reservation_form_circuits_reservation.png`
- `assets/generation_2_reservation_form_why_travel.png`
- `assets/generation_2_reservation_form_gallery_testimonial.png`
- `assets/generation_2_reservation_form_cta_footer.png`

### Génération 3 — avec 3 créneaux proposés

- `assets/generation_3_creneaux_full.png`
- `assets/generation_3_creneaux_hero.png`
- `assets/generation_3_creneaux_circuits.png`
- `assets/generation_3_creneaux_creneaux.png`
- `assets/generation_3_creneaux_trust_cta.png`
- `assets/generation_3_creneaux_footer.png`

## Recommandation finale

Garder la logique de la génération 3 comme base principale :
- circuits fixes
- 3 créneaux proposés
- bouton de réservation clair
- option date personnalisée

Utiliser la génération 2 comme inspiration pour :
- formulaire de réservation
- galerie
- témoignage client
- footer plus complet
