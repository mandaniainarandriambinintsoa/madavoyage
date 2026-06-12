export function verifyVoiceToolRequest(request: Request) {
  const expectedSecret = process.env.ELEVENLABS_TOOL_SECRET;

  if (!expectedSecret) {
    return {
      ok: false,
      status: 503,
      message: "Les outils vocaux ne sont pas configures."
    };
  }

  const bearer = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "");
  const headerSecret = request.headers.get("x-elevenlabs-tool-secret");
  const providedSecret = headerSecret || bearer;

  if (providedSecret !== expectedSecret) {
    return {
      ok: false,
      status: 401,
      message: "Requete outil vocale non autorisee."
    };
  }

  return { ok: true, status: 200, message: "Autorise." };
}
