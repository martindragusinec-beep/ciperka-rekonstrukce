import { useId, useState } from "react";
import { site } from "../../config/site";

const questions = [
  "V jakých lokalitách zakázky realizujete?",
  "Rekonstrujete i domy nebo komerční prostory?",
  "Realizujete rekonstrukce i v jiných městech?",
  "Kolik stojí rekonstrukce bytu?",
  "Jak dlouho rekonstrukce trvá?",
  "Umíte zajistit i návrh interiéru?",
  "Pomůžete nám s výběrem materiálů?",
];

const answers: Record<string, string> = {
  "V jakých lokalitách zakázky realizujete?":
    "Působíme v České republice — konkrétní město, dostupnost a harmonogram vždy upřesníme podle vaší poptávky.",
  "Rekonstrujete i domy nebo komerční prostory?":
    "Zaměřujeme se na rekonstrukce bytů. Ostatní typy zakázek řešíme jen výjimečně po domluvě.",
  "Realizujete rekonstrukce i v jiných městech?":
    "Ano — rekonstrukce bytů zajišťujeme v různých městech po celé ČR. Rozsah a logistiku domluvíme individuálně.",
  "Kolik stojí rekonstrukce bytu?":
    "Cena závisí na rozsahu, stavu bytu a materiálech. Pošlete poptávku a připravíme orientační rozpočet.",
  "Jak dlouho rekonstrukce trvá?":
    "Typicky řádově týdny až měsíce podle rozsahu, harmonogram dostanete v nabídce.",
  "Umíte zajistit i návrh interiéru?":
    "Ano, v rámci spolupráce umíme koordinovat návrh a realizaci.",
  "Pomůžete nám s výběrem materiálů?":
    "Ano, poradíme s výběrem a dodávkami tak, aby to ladilo s rozpočtem a termínem.",
};

const itemEase = "duration-300 ease-[cubic-bezier(0.33,1,0.68,1)] motion-reduce:duration-150 motion-reduce:ease-out";

function AccordionChevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-5 w-5 shrink-0 origin-center transition-transform duration-300 ease-[cubic-bezier(0.33,1,0.68,1)] motion-reduce:duration-0 motion-reduce:ease-linear ${
        open ? "rotate-180 text-figma-red" : "rotate-0 text-figma-slate"
      }`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function FaqAccordionSection() {
  const [open, setOpen] = useState<string | null>(null);
  const baseId = useId();

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[832px] px-4 sm:px-8">
        <h2 className="text-center text-3xl font-extrabold text-figma-ink sm:text-4xl sm:leading-[60px]">
          Na co se ptáte nejčastěji
        </h2>
        <div className="mt-10 space-y-3 sm:space-y-3.5">
          {questions.map((q, index) => {
            const isOpen = open === q;
            const panelId = `${baseId}-panel-${index}`;
            return (
              <div
                key={q}
                className={`overflow-hidden rounded-[14px] border bg-white ${itemEase} transition-[border-color,box-shadow] ${
                  isOpen
                    ? "border-neutral-300 shadow-[0_10px_36px_-14px_rgba(0,0,0,0.12)]"
                    : "border-figma-border shadow-sm hover:border-neutral-300 hover:shadow-md"
                }`}
              >
                <button
                  type="button"
                  id={`${baseId}-trigger-${index}`}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : q)}
                  className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-[background-color,color] duration-200 ease-out sm:px-6 sm:py-5 motion-reduce:transition-none ${
                    isOpen
                      ? "bg-neutral-50/90 text-figma-ink"
                      : "text-figma-ink hover:bg-neutral-50/70 active:bg-neutral-100/80"
                  } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-figma-red/25`}
                >
                  <span className="pr-2 text-[15px] font-semibold leading-snug sm:text-base">{q}</span>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-[background-color,border-color] duration-200 ease-out ${
                      isOpen
                        ? "border-figma-red/30 bg-figma-red/8"
                        : "border-neutral-200 bg-white hover:border-figma-red/30 hover:bg-neutral-50"
                    }`}
                    aria-hidden
                  >
                    <AccordionChevron open={isOpen} />
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={`${baseId}-trigger-${index}`}
                  aria-hidden={!isOpen}
                  className={`grid ${itemEase} transition-[grid-template-rows] ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="border-t border-neutral-100 px-5 pb-5 pt-4 text-sm leading-relaxed text-figma-body sm:px-6 sm:text-base">
                      {answers[q] ?? "Kontaktujte nás pro detailní odpověď."}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <p className="mt-8 text-center text-sm text-figma-body">
          Nenašli jste, co potřebujete? Zvolte konzultaci a probereme to s vámi.
        </p>
        <div className="mt-6 flex justify-center">
          <a
            href={`tel:${site.phoneTel}`}
            className="btn-figma-secondary h-[52px] px-8 text-base"
          >
            Chci jen konzultaci
          </a>
        </div>
      </div>
    </section>
  );
}
