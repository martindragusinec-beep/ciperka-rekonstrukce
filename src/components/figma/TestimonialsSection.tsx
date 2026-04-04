import { assets } from "../../siteAssets";
import { site } from "../../config/site";

const items = [
  {
    img: assets.avatarJN,
    name: "J. N.",
    place: "Brno",
    tag: "Kompletní rekonstrukce",
    quote: "Komunikace byla přehledná a celý postup dával smysl.",
  },
  {
    img: assets.avatarPS,
    name: "P. S.",
    place: "Ostrava",
    tag: "Rekonstrukce koupelny",
    quote: "Oceňujeme, že jsme od začátku věděli, co nás čeká.",
  },
  {
    img: assets.avatarMD,
    name: "M. D.",
    place: "Plzeň",
    tag: "Částečná rekonstrukce",
    quote: "Pomohlo nám, že jsme nemuseli koordinovat více dodavatelů sami.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="border-t border-neutral-200/90 bg-gradient-to-b from-neutral-100 via-neutral-50/95 to-neutral-100 py-16 sm:py-24">
      <div className="mx-auto max-w-[1107px] px-4 sm:px-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-3xl font-extrabold text-figma-ink sm:text-4xl sm:leading-[60px]">
            Co říkají klienti po dokončení
          </h2>
          <p className="max-w-3xl text-figma-body">
            Důvěra nevzniká sliby, ale zkušeností lidí, kteří už mají rekonstrukci za sebou.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <article
              key={t.name}
              className="rounded-2xl border border-neutral-200/90 bg-white p-6 shadow-sm ring-1 ring-black/[0.03]"
            >
              <div className="flex gap-4">
                <div className="relative h-[4.5rem] w-[4.5rem] shrink-0 sm:h-20 sm:w-20">
                  <img
                    src={t.img}
                    alt=""
                    className="h-full w-full rounded-full object-cover ring-2 ring-white shadow-md"
                    width={80}
                    height={80}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="min-w-0 pt-0.5">
                  <h3 className="font-bold text-figma-ink">{t.name}</h3>
                  <p className="text-sm text-figma-body">{t.place}</p>
                  <p className="text-xs text-figma-muted">{t.tag}</p>
                </div>
              </div>
              <div className="mt-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <img key={i} src={assets.iconStar} alt="" className="h-4 w-4" width={16} height={16} />
                ))}
              </div>
              <p className="mt-3 text-base italic leading-relaxed text-figma-slate">„{t.quote}“</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#form-bottom"
            className="btn-figma-primary h-[60px] w-full max-w-xs text-base sm:w-auto sm:px-10"
          >
            Chci nezávazné nacenění
            <img src={assets.iconArrow} alt="" className="h-5 w-5 shrink-0 brightness-0 invert" width={20} height={20} />
          </a>
          <a
            href={`tel:${site.phoneTel}`}
            className="btn-figma-secondary h-[60px] w-full max-w-xs text-base sm:w-auto sm:px-8"
          >
            Chci konzultaci
          </a>
        </div>
      </div>
    </section>
  );
}
