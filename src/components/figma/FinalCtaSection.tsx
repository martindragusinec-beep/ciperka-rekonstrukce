import { assets } from "../../siteAssets";
import { site } from "../../config/site";

export function FinalCtaSection() {
  return (
    <section
      className="py-16 sm:py-24"
      style={{
        background: "linear-gradient(153.65deg, rgb(16, 24, 40) 0%, rgb(0, 0, 0) 100%)",
      }}
    >
      <div className="mx-auto max-w-[832px] px-4 text-center sm:px-8">
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl sm:leading-[60px]">
            Chcete vědět, kolik bude stát vaše rekonstrukce?
          </h2>
          <p className="max-w-[787px] text-xl font-medium text-white/90">
            Pošlete základní informace a ozveme se s dalším postupem. Rychle, přehledně a bez závazků.
          </p>
        </div>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#form-bottom"
            className="btn-figma-primary h-[60px] px-8 text-lg"
          >
            Chci nezávazné nacenění
            <img src={assets.iconArrow} alt="" className="h-5 w-5 brightness-0 invert" width={20} height={20} />
          </a>
          <a
            href={`tel:${site.phoneTel}`}
            className="btn-figma-secondary-inverse h-[60px] px-8 text-base"
          >
            Chci jen konzultaci
          </a>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-white/75">
          <span>✓ Byty v různých městech po celé ČR</span>
          <span>✓ Ozveme se k vaší konkrétní poptávce</span>
          <span>✓ Bez závazků</span>
        </div>
        <p className="mt-4 text-sm text-white/60">
          Stačí krátké zadání a budete mít jasno v tom, jaký může být další krok.
        </p>
      </div>
    </section>
  );
}
