import { assets } from "../../siteAssets";
import { MultiStepForm } from "./MultiStepForm";

const trustItems = [
  "Jen byty, žádné domy ani komerce",
  "Působení v českých městech",
  "Od návrhu po předání s jedním kontaktem",
] as const;

/**
 * Přechod přes fotku: měkký „vignette“ zleva (text) + jemné zatmavení shora a zdola.
 * Míní tvrdý dvojitý úhel z Figmy, který dělal špinavé střední tóny.
 */
const HERO_OVERLAY_LAYERS = [
  "linear-gradient(115deg, rgba(15, 16, 20, 0.92) 0%, rgba(15, 16, 20, 0.68) 38%, rgba(15, 16, 20, 0.22) 60%, rgba(15, 16, 20, 0) 80%)",
  "linear-gradient(180deg, rgba(8, 9, 12, 0.32) 0%, rgba(8, 9, 12, 0) 42%)",
  "linear-gradient(0deg, rgba(0, 0, 0, 0.22) 0%, rgba(0, 0, 0, 0) 55%)",
].join(", ");

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[calc(100svh-4.5rem)] overflow-hidden sm:min-h-[calc(100svh-5rem)]">
      {/* Fotopozadí */}
      <div className="absolute inset-0 -z-20">
        <img
          src={assets.heroBg}
          alt=""
          className="h-full w-full object-cover object-[center_22%] sm:object-[center_30%] lg:object-[center_25%]"
          width={1920}
          height={1080}
          fetchPriority="high"
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ backgroundImage: HERO_OVERLAY_LAYERS }}
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[inherit] w-full max-w-[1360px] flex-col px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12 xl:px-12">
        {/*
          Druhý sloupec musí být jen široký jako formulář (auto). Dřívější min(100%,960px)
          bralo skoro celou šířku viewportu a levý text se zmáčkl na pár px.
        */}
        <div className="flex min-h-0 w-full flex-1 flex-col justify-start lg:justify-center">
          <div className="grid w-full min-w-0 items-start gap-10 sm:gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-10 xl:gap-14">
          {/* Copy — na mobilu první, na lg vlevo */}
          <div className="hero-animate hero-animate-delay-1 order-1 w-full min-w-0 max-w-none lg:pr-6 xl:pr-10">
            <p className="mb-5 inline-flex max-w-full flex-nowrap items-center gap-x-2 whitespace-nowrap rounded-full border border-white/20 bg-white/[0.07] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white/90 backdrop-blur-md [scrollbar-width:none] sm:mb-6 sm:overflow-visible sm:text-[11px] [&::-webkit-scrollbar]:hidden max-sm:-mx-1 max-sm:max-w-[calc(100%+0.5rem)] max-sm:overflow-x-auto max-sm:px-4 max-sm:py-1.5">
              <span className="shrink-0 text-figma-red">Jarní akce 2026</span>
              <span className="hidden shrink-0 text-white/40 sm:inline">·</span>
              <span className="shrink-0">Nacenění do 48 h</span>
              <span className="shrink-0 text-white/50">+</span>
              <span className="shrink-0">sleva až 50 000 Kč</span>
            </p>

            <h1 className="text-balance text-[1.8rem] font-extrabold leading-[1.12] tracking-[-0.03em] sm:text-[2.65rem] sm:leading-[1.04] lg:text-[3rem] xl:text-[3.15rem] xl:leading-[1.05]">
              <span className="block text-white">
                {/* Mobil: jeden celek + menší řez — méně řádků než pevný zlom po „bytu“ */}
                <span className="block sm:hidden">
                  Rekonstrukce vašeho bytu bez chaosu.
                </span>
                <span className="hidden sm:block">
                  <span className="block">Rekonstrukce vašeho bytu</span>
                  <span className="mt-0.5 block sm:mt-1">bez chaosu.</span>
                </span>
              </span>
              <span className="mt-3 block w-fit max-w-full sm:mt-4">
                <span className="inline-block rounded-2xl bg-figma-red px-4 py-2.5 font-extrabold leading-[1.05] text-white shadow-[0_10px_28px_-6px_rgba(255,37,0,0.5)] sm:rounded-[18px] sm:px-6 sm:py-3">
                  Sleva až 50 000 Kč
                </span>
              </span>
              <span className="mt-3.5 block text-[1.06rem] font-semibold leading-[1.28] text-white/95 sm:mt-4 sm:text-[1.32rem] lg:text-[1.45rem] lg:leading-[1.3]">
                Rozpočet, termín a postup pod kontrolou.
              </span>
            </h1>

            <p className="mt-6 w-full max-w-[400px] text-[0.97rem] leading-[1.55] text-white sm:mt-7 sm:text-lg sm:leading-[1.5]">
              Jedna firma, srozumitelná domluva a jasný plán od prvního návrhu až po předání klíčů.
            </p>

            <ul className="mt-7 max-w-[52ch] space-y-3.5 sm:mt-8 lg:max-w-[min(52ch,100%)] xl:max-w-[56ch]">
              {trustItems.map((label) => (
                <li key={label} className="flex gap-3 text-[0.9375rem] leading-[1.45] text-white/95 sm:text-base sm:leading-[1.4]">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-figma-green">
                    <svg
                      viewBox="0 0 12 12"
                      className="h-3 w-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M2.5 6.5 L5 9 L9.5 3.5" />
                    </svg>
                  </span>
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Formulář — na mobilu pod textem, na lg vpravo */}
          <div className="hero-animate hero-animate-delay-2 order-2 flex w-full justify-center lg:w-[400px] lg:max-w-[400px] lg:shrink-0 lg:justify-self-end">
            <MultiStepForm compact formRootId="form" className="w-full" />
          </div>
          </div>

          {/* Mobil / tablet: odkaz v toku stránky — nepřekrývá formulář */}
          <a
            href="#specialization"
            className="hero-scroll-hint hero-animate-delay-3 mt-8 flex min-h-[44px] flex-col items-center justify-center gap-1.5 pb-[max(0.75rem,env(safe-area-inset-bottom))] text-center text-[11px] font-bold uppercase tracking-[0.16em] text-white/85 no-underline transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent active:text-white lg:hidden"
          >
            <span>Pokračovat níže</span>
            <span className="text-white" aria-hidden>
              <svg className="mx-auto h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </a>
        </div>
      </div>

      {/* Desktop: ukotvení dole u „plné“ výšky hero — na mobilu by překrývalo formulář */}
      <div className="pointer-events-none absolute bottom-6 left-0 right-0 z-10 hidden justify-center lg:bottom-8 lg:flex">
        <a
          href="#specialization"
          className="hero-scroll-hint hero-animate-delay-3 pointer-events-auto flex flex-col items-center gap-1.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white/70 no-underline transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:gap-2 sm:text-[11px]"
        >
          <span>Pokračovat níže</span>
          <span className="hero-scroll-hint-icon text-white" aria-hidden>
            <svg className="mx-auto h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}
