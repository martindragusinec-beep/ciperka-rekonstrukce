import { assets } from "../../siteAssets";
import { site } from "../../config/site";

const cards = [
  {
    title: "Bojíte se, že se rozpočet během prací navýší",
    body: "Chcete mít jasno v tom, co se bude dít a jaký bude další postup.",
  },
  {
    title: "Nechcete nahánět několik různých řemeslníků",
    body: "Oceníte, když celý projekt dává smysl jako jeden celek.",
  },
  {
    title: "Potřebujete vědět, kdy bude hotovo",
    body: "Nechcete vstupovat do rekonstrukce bez základního rámce a očekávání.",
  },
  {
    title: "Chcete výsledek, který dobře vypadá a vydrží",
    body: "Hledáte řešení, které je funkční i kvalitně provedené.",
  },
];

export function ClientConcernsSection() {
  return (
    <section className="border-t border-neutral-200/80 bg-gradient-to-b from-white via-neutral-50/35 to-neutral-50/80 py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1107px] px-4 sm:px-8">
        <div className="mx-auto flex max-w-[760px] flex-col items-center text-center sm:max-w-[820px]">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-figma-red sm:text-xs">
            Než začnete
          </p>
          <h2 className="mt-3 text-balance text-[1.65rem] font-extrabold leading-[1.12] tracking-tight text-figma-ink sm:mt-4 sm:text-3xl sm:leading-tight lg:text-[2.05rem] lg:leading-[1.1]">
            Co klienti nejčastěji řeší před rekonstrukcí?
          </h2>
          <p className="mt-4 max-w-[36rem] text-balance text-pretty text-base leading-snug text-figma-body sm:mt-5 sm:text-lg sm:leading-snug">
            Nejde jen o vzhled — často jde o chaos kolem{" "}
            <strong className="font-semibold text-figma-ink">ceny, termínů a koordinace</strong>. Potřebujete
            partnera, který má <strong className="font-semibold text-figma-ink">celý proces pod kontrolou</strong>.
          </p>
        </div>

        <ul className="mt-12 grid list-none gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {cards.map((c) => (
            <li key={c.title} className="h-full">
              <div className="group flex h-full flex-col rounded-2xl border border-neutral-200/90 bg-white p-6 shadow-sm transition-[border-color,box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-7">
                <h3 className="text-[1.0625rem] font-bold leading-snug text-figma-ink sm:text-lg">{c.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-figma-body sm:mt-3.5 sm:text-[0.9375rem] sm:leading-relaxed">
                  {c.body}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col items-stretch justify-center gap-3 sm:mt-14 sm:flex-row sm:items-center sm:gap-4 lg:mt-16">
          <a
            href="#form"
            className="btn-figma-primary inline-flex min-h-[3.25rem] w-full items-center justify-center gap-2 px-8 py-3.5 text-base sm:w-auto sm:min-w-[17rem] sm:px-10"
          >
            Chci nezávazné nacenění
            <img src={assets.iconArrow} alt="" className="h-5 w-5 shrink-0 brightness-0 invert" width={20} height={20} />
          </a>
          <a
            href={`tel:${site.phoneTel}`}
            className="btn-figma-secondary inline-flex min-h-[3.25rem] w-full items-center justify-center px-8 py-3.5 text-base sm:w-auto sm:px-8"
          >
            Chci jen konzultaci
          </a>
        </div>
      </div>
    </section>
  );
}
