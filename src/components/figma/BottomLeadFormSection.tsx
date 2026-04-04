import { assets } from "../../siteAssets";
import { MultiStepForm } from "./MultiStepForm";

/**
 * Zatmavení přes fotku kuchyně — čitelný text vlevo, jemná viditelnost interiéru vpravo.
 */
const BOTTOM_LEAD_OVERLAY = [
  "linear-gradient(105deg, rgba(14, 14, 16, 0.94) 0%, rgba(14, 14, 16, 0.78) 38%, rgba(14, 14, 16, 0.52) 68%, rgba(14, 14, 16, 0.42) 100%)",
  "linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.08) 42%, rgba(0, 0, 0, 0.48) 100%)",
].join(", ");

/**
 * Druhý výskyt poptávky (4. sekce stránky) — tmavé pozadí, copy vlevo, formulář vpravo.
 * `formRootId="form-bottom"` — sdílený stav s hero přes LeadFormContext.
 */
export function BottomLeadFormSection() {
  return (
    <section
      className="relative isolate overflow-hidden border-t border-white/10 bg-[#1c1c1e] py-16 sm:py-20 lg:py-24"
      aria-labelledby="bottom-form-heading"
    >
      <div className="pointer-events-none absolute inset-0 -z-20">
        <img
          src={assets.beforeAfterKuchyn.po}
          alt=""
          className="h-full w-full object-cover object-[center_42%] sm:object-[center_38%]"
          width={1600}
          height={1000}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ backgroundImage: BOTTOM_LEAD_OVERLAY }}
        aria-hidden
      />

      {/* Pulz uprostřed sekce (nad pozadím, pod obsahem) */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
        aria-hidden
      >
        <div className="flex select-none items-center text-[clamp(4.5rem,15vw,9.5rem)] font-extralight leading-none tracking-[-0.12em] text-figma-red/45">
          <span className="bottom-lead-pulse-chevron">›</span>
          <span className="bottom-lead-pulse-chevron [animation-delay:0.18s]">›</span>
          <span className="bottom-lead-pulse-chevron [animation-delay:0.36s]">›</span>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,480px)] lg:items-center lg:gap-12 xl:gap-16">
          <div className="relative z-10 flex w-full max-w-xl flex-col items-start gap-5 text-left lg:max-w-none">
            <h2
              id="bottom-form-heading"
              className="text-balance text-[1.75rem] font-extrabold leading-[1.1] tracking-tight text-white sm:text-[2.25rem] sm:leading-[1.08] lg:text-[2.5rem] lg:leading-[1.06] xl:text-[2.75rem] xl:leading-[1.05]"
            >
              <span className="block">Nacenění do 48 hodin</span>
              <span className="mt-2 block sm:mt-2.5">
                a{" "}
                <span className="font-extrabold text-figma-red drop-shadow-[0_0_32px_rgba(255,37,0,0.45)]">sleva až 50 000 Kč</span>
              </span>
            </h2>

            <p className="max-w-md text-base leading-relaxed text-white/85 sm:text-lg">
              Vyplňte krátký formulář — bez obvolávání, jen k vaší poptávce, slevu v nabídce promítneme podle rozsahu prací.
            </p>

            <ul className="flex w-full max-w-md flex-col gap-2.5 text-left text-sm text-white/80 sm:text-base">
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 text-figma-red" aria-hidden>
                  ✓
                </span>
                <span>Orientační rozpočet a další krok obvykle do 48 hodin</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 text-figma-red" aria-hidden>
                  ✓
                </span>
                <span>Jeden kontakt místo koordinace více dodavatelů</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 text-figma-red" aria-hidden>
                  ✓
                </span>
                <span>Nové poptávky rekonstrukcí bytů v České republice</span>
              </li>
            </ul>

            <p className="max-w-md text-xs leading-relaxed text-white/45 sm:text-sm">
              Podmínky slevy upřesníme v nabídce — platí na vybrané položky podle rozsahu projektu.
            </p>
          </div>

          <div className="relative z-10 flex w-full justify-center lg:w-auto lg:justify-end lg:justify-self-end">
            <MultiStepForm
              compact
              compactWide
              formRootId="form-bottom"
              className="w-full scroll-mt-[4.5rem] sm:scroll-mt-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
