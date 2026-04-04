import { memo, useLayoutEffect, useRef, useState } from "react";

type Props = {
  /** Nižší výška na velkých obrazovkách (např. vedle panelu detailů). */
  compact?: boolean;
  /** Počáteční pozice 0–100 (výchozí 50). */
  defaultPosition?: number;
  /** Obrázek „Po“ (celoplošný podklad). */
  imagePo: string;
  /** Obrázek „Před“ (levá část pod posuvníkem). */
  imagePred: string;
};

/**
 * Porovnání před/po — stav držíme uvnitř komponenty, aby se při tažení
 * nepřerenderovávala celá RealizationSection. Ořez „Před“ přes overflow + šířka
 * obrázku místo clip-path (plyulejší kompozice v prohlížeči).
 */
function BeforeAfterSliderInner({ compact, defaultPosition = 50, imagePo, imagePred }: Props) {
  const [position, setPosition] = useState(defaultPosition);
  const rootRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useLayoutEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      setContainerWidth(el.offsetWidth);
    });
    ro.observe(el);
    setContainerWidth(el.offsetWidth);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      className={`relative w-full overflow-hidden bg-neutral-200 shadow-hero ${
        compact
          ? "rounded-2xl h-[min(400px,70vw)] lg:h-full lg:min-h-[280px]"
          : "rounded-3xl h-[min(400px,70vw)]"
      }`}
    >
      <img
        src={imagePo}
        alt="Po rekonstrukci"
        className="absolute inset-0 z-0 h-full w-full select-none object-cover"
        draggable={false}
      />
      <span className="pointer-events-none absolute right-4 top-4 z-[2] rounded-lg bg-figma-red/90 px-3 py-1.5 text-xs font-semibold text-white shadow-sm">
        Po
      </span>

      <div
        className="absolute inset-y-0 left-0 z-[1] overflow-hidden will-change-[width]"
        style={{ width: `${position}%` }}
      >
        <img
          src={imagePred}
          alt=""
          width={containerWidth || undefined}
          className="pointer-events-none absolute left-0 top-0 h-full max-w-none select-none object-cover"
          style={
            containerWidth
              ? { width: `${containerWidth}px` }
              : { width: "100%", height: "100%" }
          }
          draggable={false}
        />
      </div>
      <span className="pointer-events-none absolute left-4 top-4 z-[2] rounded-lg bg-black/60 px-3 py-1.5 text-xs font-semibold text-white shadow-sm">
        Před
      </span>

      <div
        className="pointer-events-none absolute inset-y-0 z-[2] w-1 bg-figma-red shadow-[0_0_0_1px_rgba(0,0,0,0.08)]"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <span className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-white bg-figma-red shadow-lg">
          <span className="flex gap-0.5" aria-hidden>
            <span className="h-4 w-0.5 rounded-sm bg-white" />
            <span className="h-4 w-0.5 rounded-sm bg-white" />
          </span>
        </span>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        className="absolute inset-0 z-10 cursor-ew-resize opacity-0 [touch-action:none]"
        aria-label="Posunout srovnání před a po"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={position}
      />
    </div>
  );
}

export const BeforeAfterSlider = memo(BeforeAfterSliderInner);
