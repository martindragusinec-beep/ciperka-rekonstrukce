import { Fragment, type ReactNode } from "react";
import { assets } from "../../siteAssets";
import { site } from "../../config/site";

/**
 * Sekce „Jak spolupráce probíhá“ — 3 vizuální varianty kroků.
 *
 * - `PROCESS_SECTION_SHOW_ALL_VARIANTS` — `true` = náhled všech 3 pod sebou (pro výběr).
 *   Poté nastav na `false` a zvol jednu variantu číslem v `PROCESS_SECTION_LAYOUT_VARIANT`.
 *
 * Varianty: **1** mřížka · **2** časová osa · **3** pás se šipkami (na `lg`).
 */
export type ProcessSectionStepsVariant = 1 | 2 | 3;

/** `true` = zobrazí varianty 1+2+3 najednou; po výběru nastav `false`. */
export const PROCESS_SECTION_SHOW_ALL_VARIANTS = false;

const steps = [
  {
    n: "01",
    title: "Krátká konzultace a upřesnění zadání",
    body: "Společně si ujasníme, co chcete řešit a jaký může být další krok.",
  },
  {
    n: "02",
    title: "Zaměření bytu a návrh řešení",
    body: "Navážeme konkrétním posouzením bytu a možného rozsahu rekonstrukce.",
  },
  {
    n: "03",
    title: "Cenová nabídka a harmonogram",
    body: "Dostanete jasnější představu o dalším postupu, rozpočtu a navazujících krocích.",
  },
  {
    n: "04",
    title: "Realizace a předání",
    body: "Projekt směřuje k hotovému výsledku bez zbytečného chaosu.",
  },
] as const;

/** Aktivní varianta kroků — viz JSDoc nad typem `ProcessSectionStepsVariant`. */
export const PROCESS_SECTION_LAYOUT_VARIANT: ProcessSectionStepsVariant = 3;

function StepCard({
  s,
  className = "",
}: {
  s: (typeof steps)[number];
  className?: string;
}) {
  return (
    <div
      className={`flex h-full flex-col rounded-2xl border border-neutral-200/90 bg-white p-6 shadow-sm transition-[border-color,box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-7 ${className}`.trim()}
    >
      <span className="inline-flex w-fit min-w-[2.75rem] items-center justify-center rounded-xl bg-figma-red/10 px-2.5 py-1.5 text-sm font-extrabold tabular-nums text-figma-red ring-1 ring-figma-red/15">
        {s.n}
      </span>
      <h3 className="mt-4 text-[1.0625rem] font-bold leading-snug text-figma-ink sm:mt-5 sm:text-lg">{s.title}</h3>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-figma-body sm:mt-3 sm:text-[0.9375rem] sm:leading-relaxed">
        {s.body}
      </p>
    </div>
  );
}

function stepBlockTopMargin(topSpacing: boolean) {
  return topSpacing ? "mt-12 sm:mt-14 lg:mt-16" : "mt-0";
}

function ProcessStepsVariantGrid({ topSpacing = true }: { topSpacing?: boolean }) {
  return (
    <ol
      className={`${stepBlockTopMargin(topSpacing)} grid list-none gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6`}
    >
      {steps.map((s) => (
        <li key={s.n} className="h-full">
          <StepCard s={s} />
        </li>
      ))}
    </ol>
  );
}

function ProcessStepsVariantTimeline({ topSpacing = true }: { topSpacing?: boolean }) {
  return (
    <ol className={`${stepBlockTopMargin(topSpacing)} list-none space-y-0`}>
      {steps.map((s, i) => (
        <li key={s.n} className="relative flex gap-5 sm:gap-6">
          {i < steps.length - 1 ? (
            <span
              className="absolute left-[1.125rem] top-[3.25rem] h-[calc(100%-0.5rem)] w-px bg-gradient-to-b from-neutral-200 via-neutral-200 to-transparent sm:left-[1.25rem]"
              aria-hidden
            />
          ) : null}
          <div className="relative z-[1] flex shrink-0 flex-col items-center">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-figma-red text-sm font-extrabold tabular-nums text-white shadow-md ring-4 ring-white sm:h-10 sm:w-10 sm:text-base">
              {i + 1}
            </span>
          </div>
          <div className="min-w-0 flex-1 pb-10 pt-0.5 sm:pb-12">
            <h3 className="text-[1.0625rem] font-bold leading-snug text-figma-ink sm:text-lg">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-figma-body sm:mt-2.5 sm:text-[0.9375rem] sm:leading-relaxed">
              {s.body}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function ArrowBetween() {
  return (
    <span className="hidden shrink-0 text-figma-red/40 lg:inline" aria-hidden>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mx-1">
        <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function ProcessStepsVariantHorizontal({ topSpacing = true }: { topSpacing?: boolean }) {
  const tm = stepBlockTopMargin(topSpacing);
  return (
    <>
      <ol className={`${tm} flex list-none flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-5 lg:hidden`}>
        {steps.map((s) => (
          <li key={s.n} className="h-full">
            <StepCard s={s} className="p-5 sm:p-6" />
          </li>
        ))}
      </ol>
      <ol
        className={`${tm} hidden list-none items-stretch gap-0 lg:flex lg:justify-between`}
        aria-label="Kroky spolupráce"
      >
        {steps.map((s, i) => (
          <Fragment key={s.n}>
            <li className="min-w-0 flex-1 max-lg:hidden">
              <div className="flex h-full flex-col rounded-xl border border-neutral-200/90 bg-white p-5 text-center shadow-sm transition-[border-color,box-shadow] duration-200 hover:border-neutral-300 hover:shadow-md">
                <span className="mx-auto inline-flex min-w-[2.5rem] items-center justify-center rounded-lg bg-figma-red/10 px-2 py-1 text-xs font-extrabold tabular-nums text-figma-red">
                  {s.n}
                </span>
                <h3 className="mt-3 text-sm font-bold leading-snug text-figma-ink">{s.title}</h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-figma-body">{s.body}</p>
              </div>
            </li>
            {i < steps.length - 1 ? (
              <li className="flex items-center max-lg:hidden" aria-hidden>
                <ArrowBetween />
              </li>
            ) : null}
          </Fragment>
        ))}
      </ol>
    </>
  );
}

function ProcessStepsByVariant({ variant }: { variant: ProcessSectionStepsVariant }): ReactNode {
  switch (variant) {
    case 1:
      return <ProcessStepsVariantGrid />;
    case 2:
      return <ProcessStepsVariantTimeline />;
    case 3:
      return <ProcessStepsVariantHorizontal />;
    default:
      return <ProcessStepsVariantGrid />;
  }
}

function VariantPreviewLabel({
  n,
  title,
  subtitle,
  isFirst,
}: {
  n: 1 | 2 | 3;
  title: string;
  subtitle: string;
  isFirst: boolean;
}) {
  return (
    <div
      className={
        isFirst
          ? "mt-10 sm:mt-12"
          : "mt-14 border-t border-dashed border-neutral-300/90 pt-12 sm:mt-16 sm:pt-14"
      }
    >
      <div className="rounded-xl border border-figma-red/25 bg-gradient-to-br from-figma-red/[0.06] to-white px-4 py-3 text-center shadow-sm sm:px-5">
        <p className="text-sm font-extrabold text-figma-ink sm:text-base">
          Varianta {n} — {title}
        </p>
        <p className="mt-1 text-xs leading-snug text-figma-muted sm:text-sm">{subtitle}</p>
      </div>
    </div>
  );
}

function ProcessStepsAllVariantsPreview() {
  return (
    <div className="w-full">
      <VariantPreviewLabel
        n={1}
        title="Mřížka karet"
        subtitle="2 sloupce od sm, 4 od lg"
        isFirst
      />
      <div className="mt-6">
        <ProcessStepsVariantGrid topSpacing={false} />
      </div>

      <VariantPreviewLabel
        n={2}
        title="Časová osa"
        subtitle="Svislá čára a číslované kruhy"
        isFirst={false}
      />
      <div className="mt-6">
        <ProcessStepsVariantTimeline topSpacing={false} />
      </div>

      <VariantPreviewLabel n={3} title="Pás se šipkami" subtitle="Pod lg mřížka; od lg jeden řádek + šipky" isFirst={false} />
      <div className="mt-6">
        <ProcessStepsVariantHorizontal topSpacing={false} />
      </div>
    </div>
  );
}

export function ProcessSection() {
  const v = PROCESS_SECTION_LAYOUT_VARIANT;
  const showAll = PROCESS_SECTION_SHOW_ALL_VARIANTS;

  return (
    <section className="border-t border-neutral-200/80 bg-gradient-to-b from-neutral-50/60 via-white to-white py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1107px] px-4 sm:px-8">
        <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-figma-red sm:text-xs">
            Od prvního kontaktu po předání
          </p>
          <h2 className="mt-3 text-balance text-[1.65rem] font-extrabold leading-[1.12] tracking-tight text-figma-ink sm:mt-4 sm:text-3xl sm:leading-tight lg:text-[2.05rem] lg:leading-[1.1]">
            Jak spolupráce probíhá krok za krokem
          </h2>
          <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-figma-body sm:mt-5 sm:text-lg sm:leading-relaxed">
            Aby byl celý proces <strong className="font-semibold text-figma-ink">přehledný</strong>, držíme se jasného
            postupu od prvního kontaktu po <strong className="font-semibold text-figma-ink">finální předání</strong>.
          </p>
        </div>

        {showAll ? <ProcessStepsAllVariantsPreview /> : <ProcessStepsByVariant variant={v} />}

        <div className="mt-12 flex flex-col items-stretch justify-center gap-3 sm:mt-14 sm:flex-row sm:items-center sm:gap-4 lg:mt-16">
          <a
            href="#form"
            className="btn-figma-primary inline-flex min-h-[3.25rem] w-full items-center justify-center gap-2 px-8 py-3.5 text-base sm:w-auto sm:min-w-[17rem] sm:px-10"
          >
            Chci vědět další postup
            <img src={assets.iconArrow} alt="" className="h-5 w-5 shrink-0 brightness-0 invert" width={20} height={20} />
          </a>
          <a
            href={`tel:${site.phoneTel}`}
            className="btn-figma-secondary inline-flex min-h-[3.25rem] w-full items-center justify-center px-8 py-3.5 text-base sm:w-auto sm:px-8"
          >
            Chci konzultaci
          </a>
        </div>
      </div>
    </section>
  );
}
