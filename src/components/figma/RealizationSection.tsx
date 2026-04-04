import { useId, useState } from "react";
import { assets } from "../../siteAssets";
import { BeforeAfterSlider } from "./BeforeAfterSlider";

const tabs = ["Obývací pokoj + ložnice", "Koupelna + kuchyně", "Kuchyňský blok"] as const;

/** Páry Před/Po podle záložky: obývák · koupelna · kuchyň. */
const beforeAfterByTab = [
  assets.beforeAfterObyvak,
  assets.beforeAfterKoupelna,
  assets.beforeAfterKuchyn,
] as const;

const tabPanels = [
  {
    intro:
      "Rekonstrukce obývacího pokoje a ložnice — nové podlahy, elektro a finální úpravy. Rozsah a termín vždy sladíme s vaším bytem.",
    rows: [
      ["Lokalita", "Praha 6"],
      ["Typ bytu", "3+kk, 68 m²"],
      ["Rozsah", "Obývák + ložnice, podlahy, elektro"],
      ["Doba realizace", "8 týdnů"],
    ],
  },
  {
    intro:
      "Kompletní přestavba koupelny včetně rozvodů a obkladů. U kuchyně řešíme jen přípravu (voda, odpad), přesný rozsah doplníme na místě.",
    rows: [
      ["Lokalita", "Brno — centrum"],
      ["Typ bytu", "2+kk, 48 m²"],
      ["Rozsah", "Koupelna + příprava pro kuchyň"],
      ["Doba realizace", "5 týdnů"],
    ],
  },
  {
    intro:
      "Kuchyňská linka a spotřebiče na míru — rozvržení podle vašeho provozu a dispozice bytu.",
    rows: [
      ["Lokalita", "Benešov"],
      ["Typ bytu", "4+kk, 76 m²"],
      ["Rozsah", "Kuchyňská linka, spotřebiče"],
      ["Doba realizace", "4 týdny"],
    ],
  },
] as const;

export function RealizationSection() {
  const [tab, setTab] = useState(0);
  const tabId = useId();
  const beforeAfter = beforeAfterByTab[tab] ?? beforeAfterByTab[0];
  const panel = tabPanels[tab] ?? tabPanels[0];

  return (
    <section className="bg-figma-section-bg py-16 sm:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-8">
        <div className="flex flex-col items-center text-center">
          <p className="text-sm font-bold uppercase tracking-[0.1em] text-figma-red">REALIZACE</p>
          <div className="mt-2 flex w-full flex-col items-center gap-3">
            <h2 className="text-3xl font-extrabold text-figma-ink sm:text-4xl sm:leading-[60px]">
              Podívejte se, jak se byt změní
            </h2>
            <p className="max-w-3xl text-figma-body">
              Každá rekonstrukce je jiná, ale cíl je stejný: funkční, kvalitní a dobře provedený výsledek.
            </p>
          </div>
        </div>

        <div
          className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3"
          role="tablist"
          aria-label="Vybrat ukázku realizace"
        >
          {tabs.map((label, i) => {
            const selected = tab === i;
            return (
              <button
                key={label}
                id={`${tabId}-tab-${i}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`${tabId}-panel`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setTab(i)}
                className={`rounded-full px-4 py-2.5 text-[14px] font-semibold transition-all duration-200 sm:px-5 sm:py-3 sm:text-[15px] ${
                  selected
                    ? "bg-figma-ink text-white shadow-md ring-2 ring-figma-ink ring-offset-2 ring-offset-figma-section-bg"
                    : "border border-neutral-300/90 bg-white text-figma-slate hover:border-neutral-400 hover:bg-neutral-50"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col gap-6 lg:grid lg:grid-cols-[1fr_min(320px,32%)] lg:items-stretch lg:gap-4 xl:grid-cols-[1fr_min(340px,30%)] xl:gap-4">
          <div className="min-h-0 min-w-0 w-full lg:h-full">
            <BeforeAfterSlider
              compact
              key={tab}
              defaultPosition={50}
              imagePo={beforeAfter.po}
              imagePred={beforeAfter.pred}
            />
            <p className="mt-3 text-center text-xs text-figma-muted sm:text-left sm:text-sm">
              Tahem vlevo a vpravo porovnejte stav před a po.
            </p>
          </div>

          <aside
            id={`${tabId}-panel`}
            role="tabpanel"
            aria-labelledby={`${tabId}-tab-${tab}`}
            className="min-h-0 min-w-0 lg:flex lg:h-full lg:flex-col"
          >
            <div className="flex h-full min-h-0 flex-col gap-1 rounded-[15px] border border-neutral-200/80 bg-white p-5 shadow-hero sm:p-7 lg:p-6 xl:p-7">
              <h3 className="text-balance text-xl font-bold leading-snug text-figma-ink sm:text-2xl lg:text-xl lg:leading-snug">
                {tabs[tab]}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-figma-body">{panel.intro}</p>

              <dl className="mt-5 divide-y divide-neutral-100 border-y border-neutral-100">
                {panel.rows.map(([label, value]) => (
                  <div key={label} className="grid grid-cols-1 gap-1 py-3.5 sm:grid-cols-[minmax(0,7.5rem)_1fr] sm:items-baseline sm:gap-4 sm:py-3">
                    <dt className="text-[13px] font-medium uppercase tracking-wide text-figma-muted">{label}</dt>
                    <dd className="break-words text-[15px] font-semibold leading-snug text-figma-ink">{value}</dd>
                  </div>
                ))}
              </dl>

              <a
                href="#form"
                className="btn-figma-primary mt-6 w-full min-w-0 justify-center gap-2 rounded-lg px-4 py-3.5 text-center text-sm leading-snug sm:text-[15px] lg:mt-auto lg:pt-[14px]"
              >
                Chci nacenit rekonstrukci
                <img src={assets.iconArrow} alt="" className="h-5 w-5 shrink-0 brightness-0 invert" width={20} height={20} />
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
