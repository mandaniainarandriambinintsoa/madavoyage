# Configuration ElevenLabs - MadaVoyage

Tout le systeme agent est en francais.

## Etat

Le projet local est pret pour un agent ElevenLabs :

- prompt systeme francais : `docs/elevenlabs/madavoyage-agent-system-prompt.md`
- base de connaissance francaise : `docs/elevenlabs/madavoyage-knowledge-base.md`
- schemas tools : `docs/elevenlabs/madavoyage-tools.json`
- widget Next.js : `components/elevenlabs-agent-widget.tsx`
- routes tools securisees :
  - `GET /api/voice/availability`
  - `POST /api/voice/reservation`
  - `POST /api/voice/human-followup`

Agent cree dans ElevenLabs le 2026-06-12 via MCP, puis complete via l'API
ElevenLabs directe.

ID agent :

```txt
agent_5201ktyjbsebe6arhvg4g9jmsfb4
```

L'agent a maintenant :

- LLM principal economique : `gpt-5-nano` avec `reasoning_effort`
  `minimal` ;
- limite de reponse LLM : `350` tokens, temperature `0.25` ;
- LLM de secours : configuration ElevenLabs par defaut ;
- knowledge base texte attachee : `LCf78goVio9caKxSAIoE` ;
- RAG active avec `e5_mistral_7b_instruct` ;
- secret workspace ElevenLabs : `madavoyage_tool_secret` ;
- tools server HTTP attaches :
  - `get_madavoyage_availability` :
    `tool_1701ktykksp2e5bvvndqkpheccy9` ;
  - `create_madavoyage_reservation` :
    `tool_8001ktyknfbwetgtpcyx8g1pagfn` ;
  - `request_human_followup` :
    `tool_6401ktykngqqerytcgt803vmjb09`.

## Agent

Nom recommande : `MadaVoyage - Assistant vocal`

Langue : francais.

Premiere phrase :

```txt
Bonjour, je suis l'assistant vocal de MadaVoyage. Je peux vous aider a choisir
un circuit a Madagascar, verifier un depart ou preparer une demande de
reservation. Qu'est-ce que vous aimeriez organiser ?
```

Objectif :

- conseiller les visiteurs ;
- repondre aux questions depuis la knowledge base ;
- verifier les places restantes ;
- creer une demande de reservation ;
- escalader vers un humain quand la demande sort du cadre.

## Variables d'environnement

Ajouter cote Vercel / local :

```txt
NEXT_PUBLIC_ELEVENLABS_AGENT_ID=agent_5201ktyjbsebe6arhvg4g9jmsfb4
ELEVENLABS_TOOL_SECRET=secret-long-aleatoire
ELEVENLABS_API_KEY=cle-api-elevenlabs-locale-seulement
N8N_VOICE_FOLLOWUP_WEBHOOK_URL=https://n8n.manda-ia.com/webhook/...
```

Variables deja presentes cote MadaVoyage :

```txt
N8N_RESERVATION_WEBHOOK_URL=...
MADAVOYAGE_WEBHOOK_SECRET=...
N8N_AVAILABILITY_WEBHOOK_URL=...
```

Ne jamais exposer `ELEVENLABS_TOOL_SECRET` cote client. La variable
`NEXT_PUBLIC_ELEVENLABS_AGENT_ID` peut etre publique.

## Tools ElevenLabs

Chaque tool doit envoyer le header :

```txt
x-elevenlabs-tool-secret: <ELEVENLABS_TOOL_SECRET>
```

Dans ElevenLabs, ce header reference le secret workspace
`madavoyage_tool_secret` au lieu de stocker la valeur en clair dans chaque
tool.

### Tool 1 - disponibilites

Nom : `get_madavoyage_availability`

ID : `tool_1701ktykksp2e5bvvndqkpheccy9`

Methode : `GET`

URL :

```txt
https://madavoyage.vercel.app/api/voice/availability
```

Quand l'utiliser :

- avant de confirmer qu'un depart a assez de places ;
- avant d'enregistrer une demande sur un depart planifie.

### Tool 2 - reservation

Nom : `create_madavoyage_reservation`

ID : `tool_8001ktyknfbwetgtpcyx8g1pagfn`

Methode : `POST`

URL :

```txt
https://madavoyage.vercel.app/api/voice/reservation
```

Quand l'utiliser :

- uniquement apres recapitulatif et confirmation orale ;
- quand l'agent connait le circuit, le mode, le nombre de voyageurs, le nom et
  l'email.

### Tool 3 - relais humain

Nom : `request_human_followup`

ID : `tool_6401ktykngqqerytcgt803vmjb09`

Methode : `POST`

URL :

```txt
https://madavoyage.vercel.app/api/voice/human-followup
```

Quand l'utiliser :

- demande complexe ;
- voyage sur mesure ;
- prix negocie ;
- accessibilite ou contrainte sensible ;
- demande hors cadre ;
- demande explicite de parler a une personne.

## Widget

Apres creation ou modification de l'agent ElevenLabs :

1. Ajouter ou mettre a jour `NEXT_PUBLIC_ELEVENLABS_AGENT_ID`.
2. Ajouter ou mettre a jour `ELEVENLABS_TOOL_SECRET` cote Vercel.
3. Redeployer le site.

## Verification

Tests a faire apres creation de l'agent :

1. "Bonjour, quels circuits proposez-vous ?"
2. "Je veux voir les baobabs en octobre pour deux personnes."
3. "Est-ce qu'il reste des places ?"
4. "Je veux reserver au nom de Jean Rakoto, email jean@example.com."
5. "Je veux une date sur mesure en septembre."
6. "Je veux parler a quelqu'un."

Resultat attendu :

- l'agent parle en francais ;
- il ne confirme jamais une place sans tool ;
- il recapitule avant reservation ;
- il rappelle que la demande est a confirmer par l'equipe ;
- il n'invente pas de prix ou de date.
