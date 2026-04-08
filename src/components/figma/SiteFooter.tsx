import { assets } from "../../siteAssets";
import { site } from "../../config/site";

/** Kruhy v řádku Info (Figma 3742:5138): mail + social #f7f7f7, telefon bílý; hover #ff2500 + bílé ikony */
const footerIconCircleContact =
  "inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full p-3 transition-colors duration-200 group-hover:bg-figma-red";
const footerIconGlyphContact =
  "h-6 w-6 text-[#1b1b1b] transition-colors duration-200 group-hover:text-white";
const footerSocialLink =
  "inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#f7f7f7] p-3 text-[#1b1b1b] transition-colors duration-200 hover:bg-figma-red hover:text-white";

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.21z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#2e2e2e] text-white">
      <div className="mx-auto max-w-[1280px] px-4 pb-[max(2rem,env(safe-area-inset-bottom))] pt-12 sm:px-8 lg:px-[60px] lg:pb-[max(2.5rem,env(safe-area-inset-bottom))] lg:pt-14">
        {/* Horní řádek: kontakt + sociální sítě */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <div className="flex min-w-0 flex-wrap items-center gap-x-6 gap-y-5">
            <span className="text-base leading-normal text-[#838383]">Kontakt:</span>
            <a
              href={`mailto:${site.email}`}
              className="group flex min-w-[180px] items-center gap-2 no-underline"
            >
              <span className={`${footerIconCircleContact} bg-[#f7f7f7]`} aria-hidden>
                <svg className={footerIconGlyphContact} viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M4 6h16v12H4V6zm0 0 8 6 8-6"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-base font-normal leading-normal text-[#f7f7f7]">{site.email}</span>
            </a>
            <a href={`tel:${site.phoneTel}`} className="group flex min-w-[180px] items-center gap-2 no-underline">
              <span className={`${footerIconCircleContact} bg-white`} aria-hidden>
                <PhoneIcon className={footerIconGlyphContact} />
              </span>
              <span className="text-base font-normal leading-normal text-[#f7f7f7]">{site.phoneDisplay}</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <span className="text-base leading-normal text-[#838383]">Sociální sítě:</span>
            <div className="flex items-center gap-4">
              <a
                href={site.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={footerSocialLink}
                aria-label="Facebook — Čiperka stavby"
              >
                <FacebookIcon className="h-6 w-6" />
              </a>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={footerSocialLink}
                aria-label="Instagram — Čiperka stavby"
              >
                <InstagramIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* CTA banner */}
        <div className="mt-12 flex flex-col gap-5 rounded-2xl bg-[#282928] px-6 py-7 sm:px-9 sm:py-7 lg:mt-14 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <p className="max-w-2xl text-[1.35rem] font-bold leading-snug sm:text-[1.625rem] sm:leading-[1.35]">
            <span className="text-white">Chci rekonstrukci se </span>
            <span className="text-figma-red">slevou až 50 000 Kč</span>
          </p>
          <a
            href="#form-bottom"
            className="btn-figma-primary !rounded-lg inline-flex shrink-0 items-center gap-2.5 px-5 pt-3.5 pb-4 text-left text-sm font-bold leading-snug sm:max-w-none sm:text-base"
          >
            <span className="min-w-0">Chci rekonstrukci se slevou</span>
            <img src={assets.iconArrow} alt="" className="h-6 w-6 shrink-0 brightness-0 invert" width={24} height={24} />
          </a>
        </div>

        {/* Logo + právní text */}
        <div className="mt-12 flex flex-col items-center gap-6 lg:mt-14">
          <div className="w-full">
            <img
              src={assets.logo}
              alt="Čiperka stavby"
              className="h-[38px] w-auto max-w-[187px]"
              width={187}
              height={38}
            />
            <div className="mt-6 h-px w-full bg-white/10" />
          </div>

          <div className="w-full space-y-3 text-left">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-base leading-[26px] text-white">
              <span>
                © Copyright {year} ČIPERKA stavby s.r.o. – Všechna práva vyhrazena.
              </span>
              <span className="hidden h-4 w-px bg-white/25 sm:inline-block" aria-hidden />
              <a
                href={site.gdprUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-white/70 underline-offset-2 transition hover:text-[#f7f7f7] hover:decoration-white"
              >
                Ochrana osobních údajů
              </a>
            </div>
            <p className="text-base leading-normal text-[#838383]">{site.legalLine}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
