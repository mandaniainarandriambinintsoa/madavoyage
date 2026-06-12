import { NextResponse } from "next/server";
import { verifyVoiceToolRequest } from "@/lib/voice-tool-auth";

const requiredFields = ["circuit", "mode", "travelers", "name", "email"];

function isValidEmail(email: string) {
  return /^\S+@\S+\.\S+$/.test(email);
}

export async function POST(request: Request) {
  const auth = verifyVoiceToolRequest(request);
  if (!auth.ok) {
    return NextResponse.json(
      { success: false, message_for_agent: auth.message },
      { status: auth.status }
    );
  }

  const webhookUrl = process.env.N8N_RESERVATION_WEBHOOK_URL;
  const webhookSecret = process.env.MADAVOYAGE_WEBHOOK_SECRET;

  if (!webhookUrl || !webhookSecret) {
    return NextResponse.json(
      {
        success: false,
        message_for_agent:
          "Le service de reservation MadaVoyage n'est pas encore configure."
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

  for (const field of requiredFields) {
    if (!String(body[field] ?? "").trim()) {
      return NextResponse.json(
        {
          success: false,
          message_for_agent: `Il manque le champ ${field}. Demande cette information au voyageur.`
        },
        { status: 400 }
      );
    }
  }

  if (!isValidEmail(String(body.email))) {
    return NextResponse.json(
      {
        success: false,
        message_for_agent:
          "L'adresse email n'est pas valide. Redemande-la clairement au voyageur."
      },
      { status: 400 }
    );
  }

  const travelers = Number.parseInt(String(body.travelers), 10);
  if (!Number.isFinite(travelers) || travelers < 1 || travelers > 40) {
    return NextResponse.json(
      {
        success: false,
        message_for_agent:
          "Le nombre de voyageurs doit etre compris entre 1 et 40."
      },
      { status: 400 }
    );
  }

  if (body.mode === "custom" && !String(body.customDate ?? "").trim()) {
    return NextResponse.json(
      {
        success: false,
        message_for_agent:
          "Pour une date personnalisee, demande la date ou la periode souhaitee."
      },
      { status: 400 }
    );
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-madavoyage-secret": webhookSecret
    },
    body: JSON.stringify({
      ...body,
      source: "elevenlabs-voice-agent"
    })
  });

  const text = await response.text();
  const data = text ? JSON.parse(text) : {};

  if (!response.ok) {
    return NextResponse.json(
      {
        success: false,
        message_for_agent:
          data.message || "La demande de reservation n'a pas pu etre enregistree."
      },
      { status: 502 }
    );
  }

  return NextResponse.json({
    ...data,
    success: true,
    message_for_agent:
      `La demande de reservation est enregistree avec la reference ${data.reservationId}. Explique que l'equipe MadaVoyage va confirmer les disponibilites et revenir vers le voyageur.`
  });
}
