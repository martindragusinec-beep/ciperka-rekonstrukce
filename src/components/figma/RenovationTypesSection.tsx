import { assets } from "../../siteAssets";
import { site } from "../../config/site";

const tiles: { emoji: string; label: string; badge?: string }[] = [
  { emoji: "🏠", label: "Kompletní rekonstrukce bytů", badge: "Nejčastější" },
  { emoji: "🔨", label: "Částečná rekonstrukce" },
  { emoji: "🚿", label: "Koupelny a jádra" },
  { emoji: "🍳", label: "Rekonstrukce kuchyní" },
  { emoji: "💼", label: "Investiční projekty" },
  { emoji: "📍", label: "Česká města" },
];

export function RenovationTypesSection() {
  return (
    <section className="border-t border-neutral-200/80 bg-figma-section-bg py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1107px] px-4 sm:px-8">
        <div className="mx-auto max-w-[760px] text-center sm:max-w-[820px]">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-figma-red sm:text-xs">
            Typy rekonstrukcí
          </p>
          <h2 className="mt-3 text-balance text-[1.65rem] font-extrabold leading-[1.12] tracking-tight text-figma-ink sm:mt-4 sm:text-3xl sm:leading-tight lg:text-[2.05rem] lg:leading-[1.1]">
            Děláme tyto typy rekonstrukcí
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-figma-body sm:mt-5 sm:text-lg sm:leading-relaxed">
            Zaměřujeme se výhradně na <strong className="font-semibold text-figma-ink">byty</strong> — žádné rodinné
            domy ani komerční prostory.
          </p>
        </div>

        <ul className="mt-10 grid list-none gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-4">
          {tiles.map((t) => (
            <li key={t.label} className="min-h-0">
              <div className="relative flex h-full min-h-[4.5rem] flex-col justify-center rounded-2xl border-2 border-figma-green-ring bg-figma-green-bg px-4 py-4 shadow-sm transition-[border-color,box-shadow] duration-200 hover:border-figma-green/50 hover:shadow-md sm:min-h-0 sm:px-5 sm:py-4">
                {t.badge ? (
                  <span className="absolute -right-1 -top-2 rounded-full bg-figma-red px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-sm">
                    {t.badge}
                  </span>
                ) : null}
                <div className="flex items-center gap-3">
                  <span className="text-2xl leading-none" aria-hidden>
                    {t.emoji}
                  </span>
                  <span className="text-left text-sm font-semibold leading-snug text-figma-green-fg sm:text-[0.9375rem]">
                    {t.label}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-figma-body sm:mt-10 sm:text-base">
          Vyberte typ, který je vám nejbližší — v poptávce ho společně upřesníme a navrhneme{" "}
          <span className="font-semibold text-figma-ink">další krok</span>.
        </p>

        <div className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
          <a
            href="#form-bottom"
            className="btn-figma-primary inline-flex min-h-[3.25rem] w-full items-center justify-center gap-2 px-8 py-3.5 text-base sm:w-auto sm:min-w-[17rem]"
          >
            Chci nezávaznou konzultaci
            <img src={assets.iconArrow} alt="" className="h-5 w-5 shrink-0 brightness-0 invert" width={20} height={20} />
          </a>
          <a
            href={`tel:${site.phoneTel}`}
            className="btn-figma-secondary-neutral inline-flex min-h-[3.25rem] w-full items-center justify-center px-8 py-3.5 text-base sm:w-auto sm:min-w-[12rem]"
          >
            Zavolat: {site.phoneDisplay}
          </a>
        </div>

        <p className="mt-6 text-center text-xs leading-relaxed text-figma-muted sm:mt-8">
          Nezávazně · Odpověď obvykle do 48 h · Bez skrytých poplatků
        </p>
      </div>
    </section>
  );
}
