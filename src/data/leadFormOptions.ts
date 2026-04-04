export const scopeOptions = [
  "Kompletní rekonstrukce bytu",
  "Částečná rekonstrukce bytu",
  "Rekonstrukce koupelny / jádra",
  "Rekonstrukce kuchyně",
  "Více místností",
] as const;

export const apartmentOptions = ["1+kk / 1+1", "2+kk / 2+1", "3+kk / 3+1", "4+kk a větší"] as const;

export const timelineOptions = [
  "Co nejdříve",
  "Do 1–3 měsíců",
  "Do 3–6 měsíců",
  "Jen zjišťuji možnosti",
] as const;

export type ScopeOption = (typeof scopeOptions)[number];
export type ApartmentOption = (typeof apartmentOptions)[number];
export type TimelineOption = (typeof timelineOptions)[number];
