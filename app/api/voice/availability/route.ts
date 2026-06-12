import { NextResponse } from "next/server";
import { verifyVoiceToolRequest } from "@/lib/voice-tool-auth";

export async function GET(request: Request) {
  const auth = verifyVoiceToolRequest(request);
  if (!auth.ok) {
    return NextResponse.json(
      { success: false, message_for_agent: auth.message },
      { status: auth.status }
    );
  }

  const webhookUrl = process.env.N8N_AVAILABILITY_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json(
      {
        success: false,
        message_for_agent:
          "Le service de disponibilites MadaVoyage n'est pas encore configure."
      },
      { status: 503 }
    );
  }

  const response = await fetch(webhookUrl, {
    method: "GET",
    cache: "no-store"
  });

  const text = await response.text();
  const data = text ? JSON.parse(text) : {};

  if (!response.ok) {
    return NextResponse.json(
      {
        success: false,
        message_for_agent:
          data.message || "Je n'arrive pas a verifier les disponibilites pour le moment."
      },
      { status: 502 }
    );
  }

  return NextResponse.json(
    {
      success: true,
      message_for_agent:
        "Les disponibilites MadaVoyage ont ete recuperees. Utilise ces places restantes avant de proposer un depart.",
      inventory: data.inventory || {}
    },
    {
      headers: {
        "Cache-Control": "no-store"
      }
    }
  );
}
