import { assets } from "../../siteAssets";
import { site } from "../../config/site";

export function MidCtaBanner() {
  return (
    <section className="relative overflow-hidden bg-[#2e2e2e] py-16 sm:py-24 lg:py-28">
      {/* Jemná textura, stejná černá báze jako patička */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url(${assets.promoBannerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/35"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[896px] px-4 text-center sm:px-8">
        <div className="flex flex-col items-center gap-3 sm:gap-4">
          <h2 className="text-balance text-3xl font-extrabold leading-tight text-white sm:text-4xl sm:leading-[1.15]">
            Teď je ideální čas začít
          </h2>
          <p className="max-w-[800px] text-lg font-medium leading-snug text-white/90 sm:text-xl">
            Získejte nezávazné nacenění do 48 hodin a{" "}
            <span className="font-extrabold text-figma-red drop-shadow-[0_0_24px_rgba(255,37,0,0.35)]">sleva až 50 000 Kč</span>{" "}
            k nové rekonstrukci.
          </p>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-white/70">
          Slevu lze uplatnit dle rozsahu rekonstrukce na vybrané položky projektu.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 sm:items-stretch">
          <a
            href="#form-bottom"
            className="btn-figma-primary-invert inline-flex min-h-[3.25rem] items-center justify-center whitespace-nowrap px-8 py-3.5 text-base font-bold sm:px-10 sm:text-lg"
          >
            <span className="inline-flex items-center gap-2">
              Chci rezervovat slevu
              <img
                src={assets.iconArrow}
                alt=""
                className="h-4 w-4 shrink-0"
                width={16}
                height={16}
                aria-hidden
              />
            </span>
          </a>
          <a
            href={`tel:${site.phoneTel}`}
            className="btn-figma-secondary-inverse inline-flex min-h-[3.25rem] items-center justify-center px-8 py-3.5 text-base sm:px-8"
          >
            Chci jen konzultaci
          </a>
        </div>
        <p className="mt-6 text-xs leading-relaxed text-white/55">
          Platí pro nové poptávky rekonstrukcí bytů; konkrétní podmínky podle lokality.
        </p>
      </div>
    </section>
  );
}
