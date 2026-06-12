# ElevenLabs Agents - plan MadaVoyage / service client vocal

Mise a jour : 2026-06-12.

## Correction importante

Apres analyse de la video de Nate Herk et du projet MadaVoyage, le chemin le
plus direct n'est pas Vapi en premier. Pour ce besoin, ElevenLabs Agents peut
deja faire le coeur du produit :

- agent vocal web ;
- knowledge base / RAG ;
- voix ElevenLabs native ;
- tools HTTP vers des APIs externes ;
- widget integre sur site ;
- historique de conversation ;
- analyse et collecte de donnees ;
- webhooks post-call ;
- telephonie via Twilio ou SIP.

Vapi reste interessant si on veut une plateforme plus neutre entre plusieurs
providers, mais pour une TPE qui demande "avec ElevenLabs", on peut repondre
oui directement.

## Ce que montre la video Nate Herk

Video : `Building Realistic Voice Agents Has Never Been Easier`

- URL : https://www.youtube.com/watch?v=-cdexJWN8YA
- Chaine : Nate Herk | AI Automation
- Date YouTube : 2026-05-04
- Duree : environ 32 min
- Sous-titres recuperes localement :
  `assets/reference-videos/nate-herk-elevenlabs-agents/Nate_Herk_AI_Automation--cdexJWN8YA.en-orig.vtt`

Le pattern de la video :

1. Recuperer une base de connaissance depuis des transcripts.
2. Creer un agent ElevenLabs.
3. Configurer prompt, voix, knowledge base et tools.
4. Integrer l'agent sur un site web.
5. Ajouter des actions externes selon le besoin.
6. Reutiliser le meme agent sur site ou telephone.

Pour MadaVoyage, les "transcripts YouTube" de la demo deviennent :

- contenu du site ;
- circuits ;
- departs et disponibilites ;
- destinations ;
- FAQ ;
- regles de reservation ;
- conditions d'escalade humaine.

## Mapping avec le projet local

Le projet local a deja les bonnes briques :

- `data/travel.ts` : circuits, departs, FAQ, preuves, tarifs.
- `data/destinations.ts` : destinations et details.
- `lib/site.ts` : contact, marque, URL, adresse.
- `app/api/availability/route.ts` : disponibilites via n8n.
- `app/api/reservation/route.ts` : reservation via n8n avec secret serveur.
- `D:/webApp/n8n/scripts/workflow-builders/create-madavoyage-reservation-workflow.js`
  : workflow n8n reservation + email + calendrier + inventaire.

Conclusion : MadaVoyage est deja pret pour un agent vocal web. Il manque surtout
la couche ElevenLabs : agent, knowledge base exportee, tools et widget.

## Architecture recommandee

```text
Visiteur sur MadaVoyage
  -> Widget ElevenLabs Agents
  -> Agent vocal MadaVoyage
  -> Knowledge base ElevenLabs
       - circuits
       - departs
       - destinations
       - FAQ
       - regles de reservation
  -> Server tools ElevenLabs
       - get_availability -> Next API /api/availability
       - create_reservation -> Next API /api/reservation
       - request_human_followup -> n8n ou Next API
  -> n8n
       - Google Calendar
       - Gmail client/agence
       - inventaire staticData
  -> Post-call webhook
       - resume
       - transcript
       - intention
       - lead score
       - prochaines actions
```

Pour le telephone :

```text
Numero Twilio ou SIP
  -> ElevenLabs Agent
  -> memes tools
  -> meme n8n
```

## Tools ElevenLabs a creer

### `get_madavoyage_availability`

But : recuperer les places restantes avant de proposer une date.

Endpoint cible :

```txt
GET https://<domain>/api/availability
```

Reponse attendue :

```json
{
  "success": true,
  "inventory": {
    "baobabs-june-2026": { "placesLeft": 6 }
  }
}
```

### `create_madavoyage_reservation`

But : creer une demande de reservation apres confirmation orale.

Endpoint cible :

```txt
POST https://<domain>/api/reservation
```

Arguments minimum :

```json
{
  "circuit": "La route des baobabs",
  "mode": "scheduled",
  "travelers": "2",
  "name": "Nom client",
  "email": "client@example.com",
  "phone": "+33...",
  "selectedDeparture": {
    "id": "baobabs-october-2026",
    "label": "18 octobre 2026 - 25 octobre 2026",
    "isoDate": "2026-10-18",
    "returnIsoDate": "2026-10-25",
    "price": "1 360 EUR",
    "style": "Premium local"
  }
}
```

Regle : l'agent ne doit appeler ce tool qu'apres avoir confirme oralement :

- circuit ;
- date ou demande sur mesure ;
- nombre de voyageurs ;
- nom ;
- email ;
- telephone si disponible.

### `request_human_followup`

But : escalader vers l'agence quand le besoin est flou, sensible ou hors cadre.

Champs utiles :

```json
{
  "name": "Nom si connu",
  "email": "Email si connu",
  "phone": "Telephone si connu",
  "summary": "Resume court",
  "priority": "normal|urgent",
  "reason": "custom_trip|price_negotiation|medical_accessibility|complaint|other"
}
```

## Prompt systeme recommande

```txt
Tu es l'assistant vocal de MadaVoyage, une agence locale a Madagascar.
Tu aides les visiteurs a comprendre les circuits, choisir une destination,
verifier les departs disponibles et creer une demande de reservation.

Langue principale : francais.
Ton : chaleureux, clair, rassurant, professionnel, phrases courtes.

Regles :
- Reponds uniquement sur MadaVoyage, Madagascar, les circuits, les departs,
  la preparation voyage et la reservation.
- Utilise la knowledge base pour les informations stables.
- Utilise get_madavoyage_availability avant de confirmer une disponibilite.
- Ne promets jamais une place sans verification tool.
- Avant create_madavoyage_reservation, recapitule et demande confirmation.
- La reservation est une demande a confirmer par l'equipe, pas un paiement final.
- Si l'utilisateur demande un humain, un prix special, une urgence ou une
  demande complexe, utilise request_human_followup.
- Si tu ne sais pas, dis-le et propose un rappel par l'equipe.
- Ne donne pas de conseils medicaux, juridiques ou administratifs sensibles.
```

## Knowledge base a exporter

Creer un document texte/markdown a injecter dans ElevenLabs avec :

- Presentation MadaVoyage.
- Contact et zone : Antananarivo, Madagascar.
- Les 3 circuits.
- Les 6 departs reservables.
- Les 5 destinations.
- FAQ.
- Regles de reservation.
- Politique de confirmation humaine.

Nom propose :

```txt
assets/elevenlabs/madavoyage-knowledge-base.md
```

## Integration widget

ElevenLabs permet d'integrer rapidement l'agent via widget HTML :

```html
<elevenlabs-convai agent-id="AGENT_ID"></elevenlabs-convai>
<script src="https://unpkg.com/@elevenlabs/convai-widget-embed" async type="text/javascript"></script>
```

Pour une integration Next.js propre :

- mettre l'agent id dans `.env.local` ;
- creer un composant `components/elevenlabs-agent-widget.tsx` ;
- charger le script cote client ;
- afficher le widget sur les pages pertinentes ;
- garder les endpoints n8n proteges cote serveur.

## Ce qu'il faut verifier avant prod

- Les tools peuvent-ils appeler `/api/reservation` avec un secret stocke dans
  les headers ElevenLabs.
- Si non, creer une route dediee `/api/voice/reservation` avec un secret
  specifique ElevenLabs.
- Tester accents francais, malgache, anglais.
- Tester bruit, interruptions et silences.
- Tester double reservation sur places limitees.
- Activer post-call webhook vers n8n ou Supabase.
- Ajouter quota/rate limit pour eviter de bruler les credits.
- Mentionner que l'utilisateur parle a une IA.

## Reponse commerciale courte

Oui, c'est faisable directement avec ElevenLabs Agents. Ce n'est plus seulement
du text-to-speech : ElevenLabs gere maintenant l'agent vocal, la voix, la base
de connaissance, les tools et l'integration web/telephone. Pour que ce soit
fiable, je connecterai l'agent a n8n et Supabase : ElevenLabs parle avec le
client, n8n execute les actions metier, Supabase/n8n garde l'historique et les
reservations. On peut livrer un MVP web vocal, puis brancher le numero
telephone via Twilio ou SIP.

## Sources

- Video Nate Herk : https://www.youtube.com/watch?v=-cdexJWN8YA
- ElevenLabs Agents quickstart : https://elevenlabs.io/docs/eleven-agents/quickstart
- ElevenLabs server tools : https://elevenlabs.io/docs/eleven-agents/customization/tools/server-tools
- ElevenLabs knowledge base : https://elevenlabs.io/docs/eleven-agents/customization/knowledge-base
- ElevenLabs post-call webhooks : https://elevenlabs.io/docs/eleven-agents/workflows/post-call-webhooks
- ElevenLabs Twilio native integration : https://elevenlabs.io/docs/eleven-agents/phone-numbers/twilio-integration/native-integration
- ElevenLabs SIP trunking : https://elevenlabs.io/docs/eleven-agents/phone-numbers/sip-trunking
