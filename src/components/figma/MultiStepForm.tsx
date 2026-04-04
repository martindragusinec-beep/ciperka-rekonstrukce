import { Fragment, useEffect, useState, type ReactNode } from "react";
import { site } from "../../config/site";
import { useLeadForm } from "../../context/LeadFormContext";
import { submitLeadWebhook } from "../../lib/submitLeadWebhook";
import {
  apartmentOptions,
  scopeOptions,
  timelineOptions,
} from "../../data/leadFormOptions";

type MultiStepFormProps = {
  className?: string;
  compact?: boolean;
  /** U `compact`: širší karta (např. embed sekce). Hero nechávej výchozí šířku 400px. */
  compactWide?: boolean;
  formRootId?: string;
};

/** Každý krok: šířka 400px (na úzkém viewportu max. 100 %) */
const FORM_W = "w-full max-w-[400px]";
/** Pevná výška kroků 1–3 jen od tabletu; na mobilu přirozená výška + kompaktní řádky */
const COMPACT_CHOICE_H = "max-sm:h-auto max-sm:max-h-none sm:h-[628px] sm:max-h-[min(628px,82svh)]";

function slugValue(v: string) {
  return v.replace(/[^a-zA-Z0-9]+/g, "-").replace(/^-|-$/g, "");
}

/** text-[16px] na mobilu — iOS nezoomuje input při focusu */
const inputCompact =
  "w-full rounded-lg border-2 border-neutral-200 bg-white px-3 py-2.5 text-[16px] leading-normal outline-none transition-colors placeholder:text-neutral-400 focus:border-figma-red focus:ring-2 focus:ring-figma-red/15 sm:rounded-xl sm:py-2.5 sm:text-[15px]";

/** PSČ: jen čísla, zobrazení XXX XX */
function formatCZPostcode(raw: string): string {
  const d = raw.replace(/\D/g, "").slice(0, 5);
  if (d.length <= 3) return d;
  return `${d.slice(0, 3)} ${d.slice(3)}`;
}

function spacedPhone9(d: string): string {
  const x = d.replace(/\D/g, "").slice(0, 9);
  if (x.length <= 3) return x;
  if (x.length <= 6) return `${x.slice(0, 3)} ${x.slice(3)}`;
  return `${x.slice(0, 3)} ${x.slice(3, 6)} ${x.slice(6)}`;
}

/** Max 9 číslic národní část, nebo +420 a 9 číslic (formátované mezerami) */
function formatCZPhone(raw: string): string {
  const trimmed = raw.trim();
  if (trimmed === "+") return "+";

  const plusPos = trimmed.indexOf("+");
  const hasPlus = plusPos !== -1;

  if (!hasPlus) {
    return spacedPhone9(trimmed.replace(/\D/g, ""));
  }

  let rest = trimmed.slice(plusPos + 1).replace(/\D/g, "");
  if (rest.length === 0) return "+";

  if (!rest.startsWith("420")) {
    if (!"420".startsWith(rest)) {
      return `+${rest.slice(0, 3)}`;
    }
    if (rest.length < 3) return `+${rest}`;
  }

  rest = rest.slice(0, 12);
  if (!rest.startsWith("420")) {
    return `+${rest.slice(0, 3)}`;
  }
  if (rest.length <= 3) return "+420";
  const national = rest.slice(3, 12);
  return (`+420 ${spacedPhone9(national)}`).trimEnd();
}

function isPostcodeComplete(formatted: string): boolean {
  return formatted.replace(/\D/g, "").length === 5;
}

function isPhoneComplete(formatted: string): boolean {
  const d = formatted.replace(/\D/g, "");
  if (d.startsWith("420")) return d.length === 12;
  return d.length === 9;
}

function MsChoice({
  name,
  value,
  selected,
  onSelect,
  children,
  className = "",
}: {
  name: string;
  value: string;
  selected: boolean;
  onSelect: () => void;
  children: ReactNode;
  className?: string;
}) {
  const id = `${name}-${slugValue(value)}`;
  return (
    <label
      htmlFor={id}
      className={`group flex min-h-0 w-full cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-left transition-all duration-200 active:scale-[0.99] motion-reduce:active:scale-100 sm:min-h-[52px] sm:gap-3 sm:rounded-xl sm:border-2 sm:px-4 sm:py-3 ${className} ${
        selected
          ? "border-figma-green bg-figma-green-bg ring-1 ring-figma-green/25 sm:shadow-sm"
          : "border-neutral-200 bg-[#f4f5f7] hover:border-neutral-300 hover:bg-white sm:hover:shadow-md"
      } has-[:focus-visible]:outline-none has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-figma-red/40 has-[:focus-visible]:ring-offset-2`}
    >
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={selected}
        onChange={onSelect}
        className="sr-only"
      />
      <span
        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 bg-white transition-colors sm:h-5 sm:w-5 ${
          selected
            ? "border-figma-green"
            : "border-neutral-300 group-hover:border-figma-green"
        }`}
        aria-hidden
      >
        <span
          className={`h-2 w-2 rounded-full bg-figma-green transition-[transform,opacity] duration-200 sm:h-2.5 sm:w-2.5 ${
            selected
              ? "scale-100 opacity-100"
              : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"
          }`}
        />
      </span>
      <span className="min-w-0 flex-1 text-[12px] font-semibold leading-snug text-figma-ink sm:text-[14px]">
        {children}
      </span>
    </label>
  );
}

function MsBack({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group -ml-1 mb-1 flex w-fit shrink-0 items-center gap-1.5 rounded-lg py-1 text-sm font-medium text-figma-slate transition-colors hover:text-figma-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-figma-red/30"
    >
      <svg
        className="h-4 w-4 transition-transform group-hover:-translate-x-0.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
      </svg>
      Zpět
    </button>
  );
}

function MsStepper({ step }: { step: number }) {
  return (
    <div className="w-full shrink-0">
      <div className="flex items-center justify-between gap-1 sm:gap-2" role="group" aria-label={`Krok ${step} ze 4`}>
        {[1, 2, 3, 4].map((n, i) => (
          <Fragment key={n}>
            <div
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-bold transition-colors duration-200 sm:h-9 sm:w-9 sm:text-xs ${
                step >= n ? "bg-figma-red text-white shadow-sm shadow-figma-red/25 sm:shadow-md" : "bg-neutral-100 text-neutral-400"
              }`}
            >
              {n}
            </div>
            {i < 3 ? (
              <div
                className={`mx-0.5 h-0.5 min-w-0 flex-1 rounded-full sm:mx-1 ${
                  step > n ? "bg-figma-red" : "bg-neutral-200"
                }`}
                aria-hidden
              />
            ) : null}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export function MultiStepForm({
  className = "",
  compact = false,
  compactWide = false,
  formRootId = "form",
}: MultiStepFormProps) {
  const rg = (suffix: string) => `${formRootId}-${suffix}`;

  const {
    step,
    setStep,
    submitted,
    setSubmitted,
    scope,
    setScope,
    apartmentSize,
    setApartmentSize,
    timeline,
    setTimeline,
    name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    postcode,
    setPostcode,
    resetAll,
  } = useLeadForm();

  const [submitBusy, setSubmitBusy] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    setSubmitError(null);
  }, [name, phone, email, postcode]);

  const canSubmitContact =
    name.trim() &&
    email.trim() &&
    isPhoneComplete(phone) &&
    isPostcodeComplete(postcode);

  const handleSubmitContact = async () => {
    if (!canSubmitContact || submitBusy) return;
    setSubmitError(null);
    setSubmitBusy(true);
    try {
      const result = await submitLeadWebhook({
        formId: formRootId,
        scope,
        apartmentSize,
        timeline,
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
        postcode: postcode.trim(),
        submittedAt: new Date().toISOString(),
      });
      if (!result.ok) {
        setSubmitError(result.message);
        return;
      }
      setSubmitted(true);
    } finally {
      setSubmitBusy(false);
    }
  };

  const shellPad = compact ? "gap-0 px-3 py-3.5 sm:px-4 sm:py-4 sm:p-6" : "gap-5 p-6 sm:p-7";
  const shellRadius = compact ? "rounded-xl sm:rounded-[20px]" : "rounded-[20px]";
  const shellShadow = compact
    ? "shadow-[0_10px_24px_-6px_rgba(0,0,0,0.16)] sm:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)]"
    : "shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)]";
  const headerEyebrowCls = compact
    ? "text-[10px] font-bold uppercase tracking-[0.12em] text-figma-red sm:text-[11px] lg:text-xs"
    : "text-[11px] font-bold uppercase tracking-[0.12em] text-figma-red sm:text-xs";
  const headerSubCls = compact ? "mt-0.5 text-xs text-neutral-600 sm:mt-1 sm:text-sm" : "mt-1 text-sm text-neutral-600";
  const choiceStackCls = "flex flex-col gap-2 sm:gap-2.5";
  /** Na mobilu jen seznam; od sm výška karty + scroll + rovnoměrné řádky */
  const choiceFillCls =
    "flex flex-col gap-1.5 overflow-visible sm:min-h-0 sm:flex-1 sm:gap-2.5 sm:overflow-y-auto sm:overscroll-y-contain";
  /** min 44px výška řádku na mobilu — lepší tap, na sm+ rovnoměrné flex řádky */
  const choiceGrowItem = "max-sm:min-h-[44px] max-sm:flex-none sm:flex-1 sm:basis-0 sm:!min-h-0";
  const stepTitleCls = compact
    ? "text-base font-bold tracking-tight text-figma-ink sm:text-lg lg:text-xl"
    : "text-lg font-bold tracking-tight text-figma-ink sm:text-xl";

  const widthCls =
    compact && compactWide
      ? "w-full max-w-[480px] lg:w-[480px]"
      : compact
        ? "w-full max-w-[400px] lg:w-[400px]"
        : FORM_W;
  const compactChoiceBox = compact && !submitted && step >= 1 && step <= 3;
  const compactContactBox = compact && !submitted && step === 4;

  const shellHeightCls = compactChoiceBox ? COMPACT_CHOICE_H : "";

  return (
    <div
      id={formRootId}
      className={`mx-auto flex touch-manipulation flex-col border border-neutral-200/90 bg-white ${shellRadius} ${shellShadow} ${widthCls} ${compact ? "shrink-0" : ""} ${shellPad} ${shellHeightCls} ${className}`.trim()}
    >
      <header className="shrink-0 text-center">
        {submitted ? (
          <>
            <p className={headerEyebrowCls}>Poptávka odeslána</p>
            <p className={headerSubCls}>Níže máte shrnutí dalších kroků</p>
          </>
        ) : (
          <>
            <p className={headerEyebrowCls}>Nezávazná poptávka</p>
            <p className={headerSubCls}>Bez obvolávání · Jasně a přehledně</p>
          </>
        )}
      </header>

      {submitted ? (
        <div className={`ms-step-enter ${compact ? "mt-3 sm:mt-4" : "mt-4"}`}>
          <div className="flex flex-col items-center text-center">
            <div
              className="mb-3 flex h-[3.75rem] w-[3.75rem] shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-figma-red/15 to-figma-red/8 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] ring-[3px] ring-figma-red/20 sm:mb-4 sm:h-[4.25rem] sm:w-[4.25rem]"
              aria-hidden
            >
              <svg
                className="h-8 w-8 text-figma-red sm:h-9 sm:w-9"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <h3 className="text-balance text-base font-bold text-figma-ink sm:text-lg sm:text-[22px]">Děkujeme za kontakt</h3>
            <p className="mt-2 max-w-[22rem] text-xs leading-relaxed text-figma-body sm:text-sm">
              Vaši poptávku zpracujeme jen k rekonstrukci bytu — žádný spam ani obvolávání mimo téma.
            </p>
          </div>

          <div
            className="mx-auto mt-5 max-w-[22rem] rounded-2xl border border-neutral-200/90 bg-gradient-to-b from-neutral-50/90 to-white px-4 py-4 text-left shadow-[0_1px_0_rgba(0,0,0,0.04)] sm:mt-6 sm:px-5 sm:py-5"
          >
            <p className="text-center text-[11px] font-bold uppercase tracking-[0.1em] text-figma-ink/70 sm:text-xs">
              Co bude následovat
            </p>
            <ul className="mt-3.5 space-y-3 text-sm leading-snug text-figma-ink sm:space-y-3.5 sm:text-[15px]">
              <li className="flex gap-3">
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-figma-red/12 text-sm font-bold text-figma-red"
                  aria-hidden
                >
                  ✓
                </span>
                <span className="pt-0.5">Ozve se náš obchodně technický zástupce.</span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-figma-red/12 text-sm font-bold text-figma-red"
                  aria-hidden
                >
                  ✓
                </span>
                <span className="pt-0.5">Nabídka do 48 hodin.</span>
              </li>
            </ul>
          </div>

          <div className={`flex flex-col gap-3 ${compact ? "mt-5 sm:mt-6" : "mt-6"}`}>
            <a
              href={`tel:${site.phoneTel}`}
              className="flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-xl border border-neutral-200/95 bg-white px-4 py-3 text-center text-sm font-medium text-figma-ink shadow-sm transition hover:border-figma-red/35 hover:bg-figma-red/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-figma-red sm:text-[15px]"
            >
              <svg
                className="h-5 w-5 shrink-0 text-figma-red"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>
                Zavolat{" "}
                <span className="font-bold text-figma-red tabular-nums">{site.phoneDisplay}</span>
              </span>
            </a>
            <button
              type="button"
              onClick={resetAll}
              className={`w-full rounded-xl border border-transparent bg-neutral-100/90 text-sm font-medium text-figma-ink/85 transition hover:bg-neutral-200/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-figma-red sm:text-base ${compact ? "py-2.5 sm:py-3" : "py-3"}`}
            >
              Nová poptávka
            </button>
          </div>
        </div>
      ) : compactChoiceBox ? (
        <div className="mt-2 flex flex-col sm:mt-4 sm:min-h-0 sm:flex-1">
          <MsStepper step={step} />
          {step === 1 ? (
            <div className="ms-step-enter flex flex-col pt-3 sm:min-h-0 sm:flex-1 sm:pt-4">
              <div className="shrink-0">
                <h3 className={stepTitleCls}>Jaký je rozsah prací?</h3>
                <p className="mt-1 text-xs leading-relaxed text-figma-body sm:text-sm">Vyberte možnost nejblíž vašemu zadání.</p>
              </div>
              <div className={`mt-2 sm:mt-3 ${choiceFillCls}`} role="radiogroup" aria-label="Rozsah prací">
                {scopeOptions.map((opt) => (
                  <MsChoice
                    key={opt}
                    name={rg("scope")}
                    value={opt}
                    selected={scope === opt}
                    className={choiceGrowItem}
                    onSelect={() => {
                      setScope(opt);
                      setStep(2);
                    }}
                  >
                    {opt}
                  </MsChoice>
                ))}
              </div>
              <p className="shrink-0 pt-2 text-center text-[10px] text-figma-muted sm:pt-3 sm:text-xs">
                Po výběru pokračujeme na velikost bytu.
              </p>
            </div>
          ) : null}
          {step === 2 ? (
            <div className="ms-step-enter flex flex-col pt-3 sm:min-h-0 sm:flex-1 sm:pt-4">
              <MsBack onClick={() => setStep(1)} />
              <div className="shrink-0">
                <h3 className={stepTitleCls}>Jak velký je byt?</h3>
                <p className="mt-1 text-xs text-figma-body sm:text-sm">Stačí orientačně.</p>
              </div>
              <div className={`mt-2 sm:mt-3 ${choiceFillCls}`} role="radiogroup" aria-label="Velikost bytu">
                {apartmentOptions.map((opt) => (
                  <MsChoice
                    key={opt}
                    name={rg("size")}
                    value={opt}
                    selected={apartmentSize === opt}
                    className={choiceGrowItem}
                    onSelect={() => {
                      setApartmentSize(opt);
                      setStep(3);
                    }}
                  >
                    {opt}
                  </MsChoice>
                ))}
              </div>
              <p className="shrink-0 pt-2 text-center text-[10px] text-figma-muted sm:pt-3 sm:text-xs">Další krok: časové preference.</p>
            </div>
          ) : null}
          {step === 3 ? (
            <div className="ms-step-enter flex flex-col pt-3 sm:min-h-0 sm:flex-1 sm:pt-4">
              <MsBack onClick={() => setStep(2)} />
              <div className="shrink-0">
                <h3 className={stepTitleCls}>Kdy to chcete řešit?</h3>
                <p className="mt-1 text-xs text-figma-body sm:text-sm">Ať víme, jak je to pro vás naléhavé.</p>
              </div>
              <div className={`mt-2 sm:mt-3 ${choiceFillCls}`} role="radiogroup" aria-label="Termín">
                {timelineOptions.map((opt) => (
                  <MsChoice
                    key={opt}
                    name={rg("time")}
                    value={opt}
                    selected={timeline === opt}
                    className={choiceGrowItem}
                    onSelect={() => {
                      setTimeline(opt);
                      setStep(4);
                    }}
                  >
                    {opt}
                  </MsChoice>
                ))}
              </div>
              <p className="shrink-0 pt-2 text-center text-[10px] text-figma-muted sm:pt-3 sm:text-xs">Poslední krok: krátký kontakt.</p>
            </div>
          ) : null}
        </div>
      ) : (
        <div className={`mt-2 flex flex-col sm:mt-4 ${compactContactBox ? "sm:min-h-0" : ""}`}>
          <MsStepper step={step} />
          {step === 1 && !compact ? (
            <div className="ms-step-enter mt-4 flex flex-col gap-3 sm:gap-4">
              <div>
                <h3 className="text-lg font-bold tracking-tight text-figma-ink sm:text-xl">Jaký je rozsah prací?</h3>
                <p className="mt-1 text-sm leading-relaxed text-figma-body">Vyberte možnost nejblíž vašemu zadání.</p>
              </div>
              <div className={choiceStackCls} role="radiogroup" aria-label="Rozsah prací">
                {scopeOptions.map((opt) => (
                  <MsChoice
                    key={opt}
                    name={rg("scope")}
                    value={opt}
                    selected={scope === opt}
                    onSelect={() => {
                      setScope(opt);
                      setStep(2);
                    }}
                  >
                    {opt}
                  </MsChoice>
                ))}
              </div>
            </div>
          ) : null}
          {step === 2 && !compact ? (
            <div className="ms-step-enter mt-4 flex flex-col gap-3 sm:gap-4">
              <MsBack onClick={() => setStep(1)} />
              <div>
                <h3 className="text-lg font-bold tracking-tight text-figma-ink sm:text-xl">Jak velký je byt?</h3>
                <p className="mt-1 text-sm text-figma-body">Stačí orientačně.</p>
              </div>
              <div className={choiceStackCls} role="radiogroup" aria-label="Velikost bytu">
                {apartmentOptions.map((opt) => (
                  <MsChoice
                    key={opt}
                    name={rg("size")}
                    value={opt}
                    selected={apartmentSize === opt}
                    onSelect={() => {
                      setApartmentSize(opt);
                      setStep(3);
                    }}
                  >
                    {opt}
                  </MsChoice>
                ))}
              </div>
            </div>
          ) : null}
          {step === 3 && !compact ? (
            <div className="ms-step-enter mt-4 flex flex-col gap-3 sm:gap-4">
              <MsBack onClick={() => setStep(2)} />
              <div>
                <h3 className="text-lg font-bold tracking-tight text-figma-ink sm:text-xl">Kdy to chcete řešit?</h3>
                <p className="mt-1 text-sm text-figma-body">Ať víme, jak je to pro vás naléhavé.</p>
              </div>
              <div className={choiceStackCls} role="radiogroup" aria-label="Termín">
                {timelineOptions.map((opt) => (
                  <MsChoice
                    key={opt}
                    name={rg("time")}
                    value={opt}
                    selected={timeline === opt}
                    onSelect={() => {
                      setTimeline(opt);
                      setStep(4);
                    }}
                  >
                    {opt}
                  </MsChoice>
                ))}
              </div>
            </div>
          ) : null}
          {step === 4 ? (
            <div className={`ms-step-enter flex flex-col ${compact ? "mt-3 gap-2 sm:mt-4 sm:gap-3" : "mt-4 gap-3"}`}>
              <MsBack onClick={() => setStep(3)} />
              <div>
                <h3 className={compact ? stepTitleCls : "text-lg font-bold tracking-tight text-figma-ink sm:text-xl"}>Kontakt</h3>
                <p className="mt-1 text-xs text-figma-body sm:text-sm">Vyplňte a odešlete — ozveme se nezávazně.</p>
              </div>

              <div className={`flex flex-col ${compact ? "gap-1.5 sm:gap-2.5" : "gap-2 sm:gap-2.5"}`}>
                <label className="block w-full min-w-0">
                  <span className="mb-1 block text-[11px] font-medium text-figma-ink sm:text-xs">Jméno a příjmení</span>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputCompact}
                    placeholder="Jan Novák"
                    autoComplete="name"
                  />
                </label>
                <label className="block w-full min-w-0">
                  <span className="mb-1 block text-[11px] font-medium text-figma-ink sm:text-xs">Telefon</span>
                  <input
                    type="tel"
                    inputMode="tel"
                    value={phone}
                    onChange={(e) => setPhone(formatCZPhone(e.target.value))}
                    className={inputCompact}
                    placeholder="+420 601 123 456"
                    autoComplete="tel"
                  />
                </label>
                <label className="block w-full min-w-0">
                  <span className="mb-1 block text-[11px] font-medium text-figma-ink sm:text-xs">E-mail</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputCompact}
                    placeholder="vas@email.cz"
                    autoComplete="email"
                  />
                </label>
                <label className="block w-full min-w-0">
                  <span className="mb-1 block text-[11px] font-medium text-figma-ink sm:text-xs">PSČ</span>
                  <input
                    inputMode="numeric"
                    value={postcode}
                    onChange={(e) => setPostcode(formatCZPostcode(e.target.value))}
                    className={inputCompact}
                    placeholder="140 00"
                    autoComplete="postal-code"
                    maxLength={6}
                  />
                </label>
              </div>

              {submitError ? (
                <p
                  className="mt-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-center text-xs text-red-800"
                  role="alert"
                >
                  {submitError}
                </p>
              ) : null}
              <button
                type="button"
                disabled={!canSubmitContact || submitBusy}
                onClick={() => void handleSubmitContact()}
                className={`btn-figma-primary mt-1 w-full font-bold disabled:opacity-45 ${compact ? "py-2.5 text-sm sm:py-3 sm:text-[15px]" : "py-3 text-sm sm:text-[15px]"}`}
              >
                {submitBusy ? "Odesílám…" : "Odeslat kontakt"}
              </button>
              <p className="text-center text-[9px] leading-snug text-figma-muted sm:text-xs">
                Odesláním souhlasíte se zpracováním osobních údajů v souladu s{" "}
                <a
                  href={site.gdprUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-figma-ink underline underline-offset-2 hover:text-figma-red"
                >
                  podmínkami ochrany osobních údajů (GDPR)
                </a>
                .
              </p>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
