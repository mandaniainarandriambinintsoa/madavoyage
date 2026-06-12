"use client";

import { createElement } from "react";
import Script from "next/script";

export function ElevenLabsAgentWidget() {
  const agentId = process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID;

  if (!agentId) return null;

  return (
    <>
      {createElement("elevenlabs-convai", { "agent-id": agentId })}
      <Script
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
        strategy="afterInteractive"
      />
    </>
  );
}
