import { NextResponse } from "next/server";

const requiredFields = ["circuit", "mode", "travelers", "name", "email"];

function isValidEmail(email: string) {
  return /^\S+@\S+\.\S+$/.test(email);
}

export async function POST(request: Request) {
  const webhookUrl = process.env.N8N_RESERVATION_WEBHOOK_URL;
  const webhookSecret = process.env.MADAVOYAGE_WEBHOOK_SECRET;

  if (!webhookUrl || !webhookSecret) {
    return NextResponse.json(
      { success: false, message: "Reservation service is not configured." },
      { status: 503 }
    );
  }

  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: "Invalid JSON payload." }, { status: 400 });
  }

  for (const field of requiredFields) {
    if (!String(body[field] ?? "").trim()) {
      return NextResponse.json({ success: false, message: `Missing field: ${field}` }, { status: 400 });
    }
  }

  if (!isValidEmail(String(body.email))) {
    return NextResponse.json({ success: false, message: "Invalid email." }, { status: 400 });
  }

  if (body.mode === "custom" && !String(body.customDate ?? "").trim()) {
    return NextResponse.json({ success: false, message: "Missing custom date." }, { status: 400 });
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-madavoyage-secret": webhookSecret
    },
    body: JSON.stringify(body)
  });

  const text = await response.text();
  const data = text ? JSON.parse(text) : {};

  if (!response.ok) {
    return NextResponse.json(
      { success: false, message: data.message || "Reservation workflow failed." },
      { status: 502 }
    );
  }

  return NextResponse.json(data);
}
