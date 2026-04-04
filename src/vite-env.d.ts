/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** POST JSON s tělem `LeadWebhookPayload` (viz `submitLeadWebhook.ts`) */
  readonly VITE_LEAD_WEBHOOK_URL?: string;
  /** Volitelně: Bearer + hlavička `X-Webhook-Secret` (jednoduchá ochrana endpointu) */
  readonly VITE_LEAD_WEBHOOK_SECRET?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
