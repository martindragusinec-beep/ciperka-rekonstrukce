import { assets } from "../../siteAssets";
import { site } from "../../config/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#1B1B1B]">
      <div className="mx-auto flex h-[72px] max-w-[1171px] items-center justify-between gap-4 px-4 sm:h-20 sm:px-8">
        <a href="#" className="flex shrink-0 items-center py-1 transition-opacity hover:opacity-90">
          <img
            src="/logo-ciperka.svg"
            alt="Čiperka stavby"
            className="h-7 w-auto sm:h-8"
            width={170}
            height={35}
          />
        </a>
        <div className="flex items-center gap-3 sm:gap-6">
          <div className="hidden text-right sm:block">
            <p className="text-xs text-white/70 sm:text-sm">Máte raději rychlou konzultaci?</p>
            <a
              href={`tel:${site.phoneTel}`}
              className="mt-0.5 inline-flex items-center justify-end gap-2 text-sm font-bold text-white transition hover:text-figma-red sm:text-base"
            >
              <img
                src={assets.iconPhone}
                alt=""
                className="h-4 w-4 brightness-0 invert"
                width={16}
                height={16}
              />
              {site.phoneDisplay}
            </a>
          </div>
          <a
            href="#form-bottom"
            className="btn-figma-secondary-inverse h-10 shrink-0 px-4 text-sm sm:h-12 sm:px-5 sm:text-base"
          >
            Chci konzultaci
          </a>
        </div>
      </div>
    </header>
  );
}
