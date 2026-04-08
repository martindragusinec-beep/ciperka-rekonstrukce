/**
 * Veřejné soubory z `public/` — prefix podle Vite `base` (např. `/rekonstrukce-bytu/` na Hostingeru).
 * @param path cesta bez úvodního lomítka, např. `images/hero-bg.png`
 */
export function publicUrl(path: string): string {
  const clean = path.replace(/^\/+/, "");
  return `${import.meta.env.BASE_URL}${clean}`.replace(/([^:]\/)\/+/g, "$1");
}
