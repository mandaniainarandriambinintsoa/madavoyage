"use client";

import { useEffect } from "react";
import Script from "next/script";

const WIDGET_SRC = "https://unpkg.com/@elevenlabs/convai-widget-embed";
const SCRIPT_ID = "madavoyage-elevenlabs-convai-widget";
const WIDGET_SELECTOR = "elevenlabs-convai";
const WIDGET_OWNER_ATTR = "data-madavoyage-elevenlabs-widget";
const WIDGET_OWNER_VALUE = "true";

function ensureSingleWidget(agentId: string) {
  const widgets = Array.from(
    document.querySelectorAll<HTMLElement>(WIDGET_SELECTOR)
  );
  const ownedWidget = widgets.find(
    (widget) => widget.getAttribute(WIDGET_OWNER_ATTR) === WIDGET_OWNER_VALUE
  );
  const activeWidget =
    ownedWidget ?? widgets[0] ?? document.createElement(WIDGET_SELECTOR);

  activeWidget.setAttribute("agent-id", agentId);
  activeWidget.setAttribute(WIDGET_OWNER_ATTR, WIDGET_OWNER_VALUE);

  if (!activeWidget.isConnected) {
    document.body.appendChild(activeWidget);
  }

  for (const widget of widgets) {
    if (widget !== activeWidget) {
      widget.remove();
    }
  }

  return activeWidget;
}

export function ElevenLabsAgentWidget() {
  const agentId = process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID;

  useEffect(() => {
    if (!agentId) return;

    const widget = ensureSingleWidget(agentId);
    const delayedDedupe = window.setTimeout(
      () => ensureSingleWidget(agentId),
      1000
    );

    return () => {
      window.clearTimeout(delayedDedupe);

      if (widget.isConnected) {
        widget.remove();
      }
    };
  }, [agentId]);

  if (!agentId) return null;

  return (
    <Script
      id={SCRIPT_ID}
      src={WIDGET_SRC}
      strategy="afterInteractive"
      onReady={() => {
        ensureSingleWidget(agentId);
      }}
    />
  );
}
