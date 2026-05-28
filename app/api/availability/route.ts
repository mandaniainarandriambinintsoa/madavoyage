import { NextResponse } from "next/server";

export async function GET() {
  const webhookUrl = process.env.N8N_AVAILABILITY_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      { success: false, message: "Availability service is not configured." },
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
      { success: false, message: data.message || "Availability workflow failed." },
      { status: 502 }
    );
  }

  return NextResponse.json(data, {
    headers: {
      "Cache-Control": "no-store"
    }
  });
}
