import { assets } from "../../siteAssets";
import { site } from "../../config/site";

const items = [
  {
    title: "Nevíte, jestli se rekonstrukce vyplatí?",
    body: "Krátká konzultace pomůže ujasnit rozsah i další postup.",
  },
  {
    title: "Bojíte se složité koordinace?",
    body: "Projekt vedeme jako jeden celek, ne jako soubor oddělených profesí.",
  },
  {
    title: "Nechcete ztrácet čas nezávazným obíháním firem?",
    body: "Začít můžete krátkou poptávkou a rychlým upřesněním zadání.",
  },
  {
    title: "Nejste si jistí termínem?",
    body: "I to s vámi projdeme hned v úvodu.",
  },
];

export function FaqPreSection() {
  return (
    <section className="border-t border-neutral-200/80 bg-gradient-to-b from-figma-section-bg via-white to-white py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1107px] px-4 sm:px-8">
        <div className="mx-auto max-w-[760px] text-center sm:max-w-[820px]">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-figma-red sm:text-xs">
            Před prvním krokem
          </p>
          <h2 className="mt-3 text-balance text-[1.65rem] font-extrabold leading-[1.12] tracking-tight text-figma-ink sm:mt-4 sm:text-3xl sm:leading-tight lg:text-[2.05rem] lg:leading-[1.1]">
            Na co se lidé často ptají ještě před poptávkou
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-figma-body sm:mt-5 sm:text-lg sm:leading-relaxed">
            Tyto otázky řešíme hned na začátku — <strong className="font-semibold text-figma-ink">bez tlaku</strong> a{" "}
            <strong className="font-semibold text-figma-ink">bez závazků</strong>.
          </p>
        </div>

        <ul className="mt-12 grid list-none gap-4 sm:mt-14 md:grid-cols-2 md:gap-5 lg:mt-16">
          {items.map((item) => (
            <li key={item.title} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-neutral-200/90 bg-white p-6 shadow-sm transition-[border-color,box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-7">
                <h3 className="text-[1.0625rem] font-bold leading-snug text-figma-ink sm:text-lg">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-figma-body sm:mt-3.5 sm:text-[0.9375rem] sm:leading-relaxed">
                  {item.body}
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
            Chci probrat svůj byt
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
