/**
 * Odeslání leadu na HTTP webhook (Zapier, Make, n8n, vlastní endpoint).
 * URL nastavte v `VITE_LEAD_WEBHOOK_URL` — bez ní se nic nevolá (vhodné pro lokální vývoj).
 *
 * Pozn.: URL je v klientském bundlu viditelná. Pro citlivější integraci použijte vlastní API
 * (serverless funkci), která na webhook přepošle data s tajným klíčem mimo prohlížeč.
 */

export type LeadWebhookPayload = {
  /** Např. `form` (hero) nebo `form-bottom` (sekce dole) */
  formId: string;
  scope: string | null;
  apartmentSize: string | null;
  timeline: string | null;
  name: string;
  phone: string;
  email: string;
  postcode: string;
  submittedAt: string;
};

function getWebhookUrl(): string | undefined {
  const u = import.meta.env.VITE_LEAD_WEBHOOK_URL;
  return typeof u === "string" && u.trim().length > 0 ? u.trim() : undefined;
}

/** Bez nastavené URL vrátí `{ skipped: true }` — UI může stejně ukázat díky. */
export async function submitLeadWebhook(
  payload: LeadWebhookPayload,
): Promise<{ ok: true; skipped?: boolean } | { ok: false; message: string }> {
  const url = getWebhookUrl();
  if (!url) {
    if (import.meta.env.DEV) {
      console.warn(
        "[lead] VITE_LEAD_WEBHOOK_URL není nastavené — poptávka se jen uloží do UI (webhook se nevolá).",
      );
    }
    return { ok: true, skipped: true };
  }

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const secret = import.meta.env.VITE_LEAD_WEBHOOK_SECRET;
  if (typeof secret === "string" && secret.length > 0) {
    headers.Authorization = `Bearer ${secret}`;
    headers["X-Webhook-Secret"] = secret;
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      const hint = text ? ` — ${text.slice(0, 120)}` : "";
      return {
        ok: false,
        message: `Server vrátil ${res.status}${hint}`,
      };
    }

    return { ok: true };
  } catch (e) {
    const message = e instanceof Error ? e.message : "Neznámá chyba sítě";
    return { ok: false, message };
  }
}
