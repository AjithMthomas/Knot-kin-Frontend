import type { ReactNode } from "react";
import { Reveal } from "./reveal";

export function Section({
  children,
  className = "",
  id,
  tone = "ivory",
  rail,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "ivory" | "parchment" | "forest" | "none";
  /** Numbered editorial rail label, e.g. "THE STORY" → renders "01 — THE STORY". */
  rail?: string;
}) {
  const tones: Record<string, string> = {
    ivory: "bg-ivory",
    parchment: "bg-parchment",
    forest: "bg-forest text-ivory",
    none: "",
  };
  return (
    <section id={id} className={`${tones[tone]} kk-rail relative py-20 md:py-28 ${className}`}>
      {rail ? <SectionRail label={rail} dark={tone === "forest"} /> : null}
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

/**
 * Vertical numbered label pinned to the section's left edge (desktop only),
 * echoing the editorial "01 — THE SPACES" device from the reference design.
 * Numbering comes from a CSS counter incremented per .kk-rail section (see globals.css).
 */
function SectionRail({ label, dark = false }: { label: string; dark?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`kk-rail-label pointer-events-none absolute top-10 left-4 hidden select-none items-center gap-3 xl:flex ${
        dark ? "text-ivory/40" : "text-taupe/80"
      }`}
    >
      <span className="text-[0.68rem] tracking-[0.3em]" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
        {label.toUpperCase()}
      </span>
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  dark = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "center" | "left";
  dark?: boolean;
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <Reveal className={`max-w-2xl ${alignCls}`}>
      {eyebrow ? (
        <p className={`eyebrow mb-4 ${dark ? "text-ivory/60" : "text-taupe"}`}>{eyebrow}</p>
      ) : null}
      <h2
        className={`font-serif text-3xl leading-[1.15] sm:text-4xl md:text-[2.75rem] ${
          dark ? "text-ivory" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <p className={`mt-5 text-base leading-relaxed ${dark ? "text-ivory/75" : "text-ink-soft"}`}>
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}

export function Hairline() {
  return <div className="hairline my-14 md:my-20" aria-hidden="true" />;
}
