# MadaVoyage Memory

## Role du projet

MadaVoyage est un projet Next.js autonome, separe de `D:\webApp\manety`.

Objectif : servir de starter premium duplicable pour des projets clients, d'abord dans le voyage/reservation, puis adaptable a d'autres metiers si besoin.

Ne pas fusionner ce projet dans `manety`. `manety` reste un autre sujet.

## Vision produit

Le projet doit fonctionner comme un site portfolio/client :

- landing page premium directement utilisable ;
- architecture simple a cloner pour une variante client ;
- contenu centralise dans `data/` ;
- marque/contact/config centralises dans `lib/site.ts` ;
- sections reutilisables dans `components/sections/` ;
- SEO et GEO prevus des le depart.

## Architecture actuelle

- `app/` : routes Next, layout, page principale, sitemap, robots, styles globaux.
- `components/layout/` : header et elements globaux.
- `components/sections/` : hero, trust, circuits, departs, reservation, footer.
- `data/travel.ts` : circuits, departs, preuves de confiance.
- `lib/site.ts` : nom, URL, description, contact, reseaux.
- `lib/seo.ts` : JSON-LD schema.org pour `TravelAgency` et `TouristTrip`.
- `public/images/madavoyage/` : assets IA copies depuis `assets/`.

## Decisions importantes

- Le projet doit rester standalone et duplicable.
- Direction maintenance/offre apres livraison (2026-05-29) : ne pas creer de dashboard client par defaut pour les sites vitrines simples. Pour un site metier, privilegier contenu centralise dans `data/`, images production dans `public/images/...`, petites modifications via abonnement mensuel, puis push/deploiement Vercel. Offre portfolio retenue : `Avance + suivi` a `1 500 EUR + 149 EUR/mois`, incluant petites modifications raisonnables, uptime, PageSpeed, indexation et rapport SEO/GEO.
- Cas specifique MadaVoyage : les circuits, departs, prix, disponibilites, photos et textes d'itineraire sont du contenu vivant. Si le projet devient un vrai site client exploite au quotidien, prevoir une evolution vers contenu editable : soit mini CMS/admin avec Supabase, soit CMS headless leger, mais seulement quand le volume de modifications justifie la complexite. Ne pas ajouter de base de donnees tant que quelques modifications manuelles mensuelles suffisent.
- Pour les circuits qui changent souvent, garder `data/travel.ts` propre et structure comme source unique temporaire : circuits, departs, prix, durees, images, highlights, CTA et FAQ specifiques doivent rester faciles a migrer plus tard vers une table `circuits`/`departures` ou un CMS.
- Decision Sheet vs Supabase/CRUD (2026-05-29) : un Google Sheet peut depanner pour une liste simple ou un prototype, mais il devient fragile pour MadaVoyage car les circuits ont images, slugs, prix, disponibilites, contenus longs, SEO/GEO et multilingue. Le client ne doit pas toucher directement Supabase ; si le contenu change souvent, construire un mini CRUD simple au-dessus de Supabase. Pour MadaVoyage, l'evolution ideale est donc `data/travel.ts` au depart, puis Supabase + mini admin quand les circuits/departs/prix/photos changent regulierement. Tarif repere : setup CRUD `500-1 000 EUR`, suivi avec CRUD + SEO/GEO `249-399 EUR/mois`.
- Decision business reservation/paiement (2026-05-28) : ne pas faire payer toute la reservation directement au moment de la demande. Le parcours ideal est `pending -> confirmed -> payment_requested -> paid_deposit -> completed`. Le client envoie d'abord une demande, MadaVoyage confirme manuellement la disponibilite/date/prix final, puis envoie un lien de paiement d'acompte seulement apres validation.
- Pour le paiement, viser d'abord un acompte de 20-30% pour bloquer la place, pas le paiement total. Cela evite les problemes de disponibilite guide/voiture/hotel, prix variable selon le nombre de personnes, dates flexibles et besoin de rassurance pour touristes et locaux.
- Moyens de paiement cibles : mobile money local (MVola, Orange Money, Airtel Money) pour Madagascar ; carte bancaire Visa/Mastercard ou virement bancaire pour touristes internationaux. Option technique a etudier en priorite : Papi si onboarding simple, car mobile money + carte bancaire dans une API unifiee ; sinon PayBriq pour demarrer localement sur MVola/Orange Money.
- Architecture future paiement : ajouter une base avec tables `reservations` et `payments`, webhook paiement securise par secret, lien d'acompte envoye apres confirmation, emails client/business via n8n, validation serveur stricte et aucun stockage de donnees sensibles inutiles.
- L'approche visuelle doit suivre principalement `assets/generation_2_reservation_form_full.png`, qui est la reference de direction artistique la plus premium : hero lumineux, header agence, circuits + formulaire de reservation lateral, rassurance, galerie/temoignage, CTA visuel et footer complet.
- Raffinement demande par l'utilisateur : le header ne doit pas avoir de grande barre/background blanc. Il doit flotter sur le hero comme dans la reference, avec navigation blanche et bouton devis en pilule.
- Raffinement demande par l'utilisateur : la carte de reservation ne doit plus compresser la section "Partez a la decouverte de Madagascar". Elle est descendue sous les cartes circuits pour laisser respirer la section.
- Raffinement demande par l'utilisateur : dans les cartes circuits, la zone "a partir de" et le lien doivent rester alignes en bas de chaque carte. Les cards utilisent flex column avec `card-footer` en `margin-top: auto`.
- Raffinement demande par l'utilisateur : le champ "Date de depart" est un vrai `input type="date"`.
- Raffinement demande par l'utilisateur : ajouter un vrai espace vertical entre le label "Pourquoi voyager avec nous ?" et les blocs/icones de rassurance en dessous.
- Raffinement demande par l'utilisateur : le bloc temoignage "Ils nous ont fait confiance" est un carousel client-side avec 3 avis, defilement automatique toutes les 3 secondes, transition smooth `testimonialFade`, et chevrons cliquables precedent/suivant.
- Les images generation 2 et 3 fournies sont des mockups/sections de page, pas des photos finales. Ne pas les utiliser directement comme images de hero ou de cards, sinon on voit du texte et des bouts d'ancienne interface dans le rendu.
- Des visuels bitmap propres ont ete generes et places dans `public/images/madavoyage/` :
  - `hero-madagascar.png`
  - `circuit-baobabs.png`
  - `circuit-wildlife.png`
  - `circuit-lagoon.png`
  - `cta-adventure-highlands.png`
- Priorite a une architecture claire plutot qu'a une plateforme complexe.

## SEO / GEO

La base actuelle inclut :

- metadata Next ;
- Open Graph ;
- canonical ;
- robots ;
- sitemap ;
- JSON-LD `TravelAgency` ;
- JSON-LD `TouristTrip` ;
- JSON-LD `FAQPage` ;
- section FAQ visible en HTML ;
- contenu principal rendu en HTML lisible.

Pour GEO, continuer a privilegier :

- sections avec titres explicites ;
- donnees structurees ;
- contenu concret sur l'offre ;
- pages ou blocs dedies par circuit si le projet grandit ;
- FAQ lisible si on ajoute des questions clients.

## Etat technique

Le build production a ete verifie avec :

```bash
npm run build
```

Resultat : build OK.

Le serveur local a repondu sur :

```txt
http://localhost:3000
```

Le rendu navigateur a aussi ete verifie avec Playwright + Chrome local sur `http://localhost:3001` apres correction des images :

- zero erreur console ;
- zero requete echouee ;
- toutes les images ont une taille naturelle valide ;
- captures generees apres refonte generation 2 : `screenshots-desktop-g2-final.png` et `screenshots-mobile-g2-final.png`.
- captures generees apres raffinement nav/reservation : `screenshots-desktop-nav-booking.png` et `screenshots-mobile-nav-booking.png`.
- capture generee apres carousel temoignages : `screenshots-testimonial-carousel.png`.

Securite npm :

- Next a ete mis a jour de `16.1.6` vers `16.2.6`.
- `postcss` est force via `overrides` en `^8.5.10`.
- `npm audit --audit-level=moderate` retourne 0 vulnerabilite.

## Prochaines pistes

- Si l'utilisateur fournit ses images GPT finales, remplacer les visuels dans `public/images/madavoyage/` en gardant les memes noms ou mettre a jour `data/travel.ts` et les composants concernes.
- Le CTA final utilise maintenant `public/images/madavoyage/cta-adventure-highlands.png`, une image generee type montagnes/brume inspiree de `assets/generation_2_reservation_form_full.png`.
- Raffinement CTA demande par l'utilisateur : cadrer l'image plus bas dans les collines (`object-position: center 82%`) et alleger le voile blanc (`rgba(250, 247, 240, 0.26)`) pour que le paysage reste visible.
- Prochaine grosse session : brancher le formulaire de reservation/devis avec Google Calendar et n8n.
  - L'utilisateur connait deja n8n et a deja un projet n8n.
  - Architecture recommandee : `Frontend -> Next API route /api/reservation -> n8n webhook -> Google Calendar -> emails/notifications`.
  - Eviter d'exposer directement l'URL webhook n8n dans le frontend.
  - Creer `app/api/reservation/route.ts` pour valider les donnees et relayer vers n8n.
  - Stocker l'URL webhook dans `.env.local`, par exemple `N8N_RESERVATION_WEBHOOK_URL`.
  - n8n devra verifier les champs, checker Google Calendar, creer un event provisoire/confirme, envoyer email client et notification agence.
- Ajouter des pages detail par circuit.
- La FAQ existe maintenant ; prochaine etape possible : pages detail par circuit avec FAQ specifique.
- Ajouter une vraie page contact.
- Initialiser Git si le projet devient une base client officielle.
- Remplacer `siteConfig.url` par le vrai domaine avant deployment.
