import { NextResponse } from "next/server";
import { verifyVoiceToolRequest } from "@/lib/voice-tool-auth";

export async function POST(request: Request) {
  const auth = verifyVoiceToolRequest(request);
  if (!auth.ok) {
    return NextResponse.json(
      { success: false, message_for_agent: auth.message },
      { status: auth.status }
    );
  }

  const webhookUrl = process.env.N8N_VOICE_FOLLOWUP_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json(
      {
        success: false,
        message_for_agent:
          "Le relais humain n'est pas encore configure. Propose au voyageur d'envoyer sa demande via le formulaire du site."
      },
      { status: 503 }
    );
  }

  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message_for_agent: "Le payload JSON est invalide." },
      { status: 400 }
    );
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      ...body,
      source: "elevenlabs-voice-agent",
      receivedAt: new Date().toISOString()
    })
  });

  const text = await response.text();
  const data = text ? JSON.parse(text) : {};

  if (!response.ok) {
    return NextResponse.json(
      {
        success: false,
        message_for_agent:
          data.message || "Je n'arrive pas a transmettre la demande a l'equipe."
      },
      { status: 502 }
    );
  }

  return NextResponse.json({
    success: true,
    message_for_agent:
      "La demande a ete transmise a l'equipe MadaVoyage. Confirme au voyageur qu'un humain pourra reprendre le dossier.",
    data
  });
}
