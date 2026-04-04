import { assets } from "../../siteAssets";

const pillars = [
  {
    title: "Pouze byty",
    body: "Domy ani komerce — řešíme jen rekonstrukce bytů v ČR. Úzké zaměření znamená přesnější rozpočet a méně překvapení.",
  },
  {
    title: "Postup od A do Z",
    body: "Od návrhu po předání s jedním kontaktem. Rychlejší domluva, přehledný plán a méně chaosu na stavbě.",
  },
] as const;

function CheckIcon() {
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-figma-green shadow-sm shadow-figma-green/20 sm:h-10 sm:w-10">
      <svg viewBox="0 0 12 12" className="h-3.5 w-3.5 text-white sm:h-4 sm:w-4" fill="none" aria-hidden>
        <path
          d="M2.5 6.5 L5 9 L9.5 3.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function SpecializationSection() {
  return (
    <section
      id="specialization"
      className="scroll-mt-[4.5rem] border-t border-neutral-200/80 bg-gradient-to-b from-white via-neutral-50/50 to-figma-section-bg py-12 sm:scroll-mt-20 sm:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1107px] px-4 sm:px-8">
        <div className="mx-auto max-w-[760px] text-center sm:max-w-[820px]">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-figma-red sm:text-xs">
            Proč právě my
          </p>
          <h2 className="mt-2 text-balance text-[1.65rem] font-extrabold leading-[1.12] tracking-tight text-figma-ink sm:mt-3 sm:text-3xl sm:leading-tight lg:text-[2.05rem] lg:leading-[1.1]">
            Specializujeme se pouze na rekonstrukce bytů
          </h2>
          <p className="mt-3 text-pretty text-base leading-relaxed text-figma-body sm:mt-4 sm:text-lg sm:leading-relaxed">
            Neděláme všechno pro všechny — jen{" "}
            <strong className="font-semibold text-figma-ink">rekonstrukce bytů v ČR</strong>. Rychlejší domluva,
            přesnější rozpočet a <strong className="font-semibold text-figma-ink">méně chaosu na stavbě</strong>.
          </p>
        </div>

        <ul className="mt-8 grid list-none gap-3 sm:mt-9 sm:grid-cols-2 sm:gap-4 lg:mt-10">
          {pillars.map((item) => (
            <li key={item.title} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-neutral-200/90 bg-white p-5 text-left shadow-sm transition-[border-color,box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-3.5">
                  <CheckIcon />
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-bold leading-snug text-figma-ink sm:text-xl">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-figma-body sm:text-[0.9375rem] sm:leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8 rounded-2xl border border-neutral-200/90 bg-white/90 p-5 shadow-sm ring-1 ring-black/[0.03] sm:mt-9 sm:p-6 lg:mt-10">
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:items-center md:justify-between md:gap-6 md:text-left">
            <p className="max-w-xl text-base leading-relaxed text-figma-body sm:text-lg">
              Úzké zaměření = méně chaosu v hlavě i na papíře. Celý proces je díky tomu{" "}
              <span className="font-semibold text-figma-ink">rychlejší a přehlednější</span>.
            </p>
            <a
              href="#form"
              className="btn-figma-primary inline-flex min-h-[3.25rem] w-full shrink-0 items-center justify-center gap-2 px-8 py-3.5 text-base sm:text-lg md:w-auto md:min-w-[17.5rem]"
            >
              Chci zjistit další postup
              <img src={assets.iconArrow} alt="" className="h-5 w-5 shrink-0 brightness-0 invert" width={20} height={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
