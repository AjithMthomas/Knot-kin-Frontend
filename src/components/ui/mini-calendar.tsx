"use client";

import { useMemo, useState } from "react";
import { Icon } from "./icon";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const DOW = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

/**
 * Compact month calendar matching the editorial reference.
 * Past dates are disabled; selection is a single YYYY-MM-DD value.
 */
export function MiniCalendar({
  value,
  onChange,
  label = "Preferred date",
}: {
  value: string;
  onChange: (iso: string) => void;
  label?: string;
}) {
  const today = useMemo(() => {
    const t = new Date();
    return new Date(t.getFullYear(), t.getMonth(), t.getDate());
  }, []);

  const [view, setView] = useState(() => {
    const v = value ? new Date(value + "T00:00:00") : today;
    return { y: v.getFullYear(), m: v.getMonth() };
  });

  const cells = useMemo(() => {
    const first = new Date(view.y, view.m, 1);
    const daysInMonth = new Date(view.y, view.m + 1, 0).getDate();
    const lead = first.getDay();
    const out: (Date | null)[] = Array.from({ length: lead }, () => null);
    for (let d = 1; d <= daysInMonth; d++) out.push(new Date(view.y, view.m, d));
    while (out.length % 7 !== 0) out.push(null);
    return out;
  }, [view]);

  const iso = (d: Date) =>
    `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

  const move = (delta: number) =>
    setView((v) => {
      const m = v.m + delta;
      return { y: v.y + Math.floor(m / 12), m: ((m % 12) + 12) % 12 };
    });

  const canGoPrev = new Date(view.y, view.m + 1, 0) >= today;

  return (
    <div className="rounded-lg border border-line bg-white p-5">
      <p className="eyebrow mb-4 flex items-center gap-2 text-ink">
        <Icon name="calendar" size={14} className="text-terracotta" />
        {label}
      </p>

      <div className="mb-3 flex items-center justify-between">
        <button
          type="button"
          onClick={() => move(-1)}
          disabled={!canGoPrev}
          aria-label="Previous month"
          className="grid h-8 w-8 place-items-center rounded-full text-ink transition-colors hover:bg-parchment disabled:opacity-30"
        >
          <Icon name="arrowLeft" size={15} />
        </button>
        <p aria-live="polite" className="text-[0.95rem] font-semibold text-ink">
          {MONTHS[view.m]} {view.y}
        </p>
        <button
          type="button"
          onClick={() => move(1)}
          aria-label="Next month"
          className="grid h-8 w-8 place-items-center rounded-full text-ink transition-colors hover:bg-parchment"
        >
          <Icon name="arrow" size={15} />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center" role="grid" aria-label={`${MONTHS[view.m]} ${view.y}`}>
        {DOW.map((d) => (
          <span key={d} aria-hidden="true" className="pb-1 text-[0.68rem] font-medium tracking-[0.14em] text-taupe">
            {d.toUpperCase()}
          </span>
        ))}
        {cells.map((d, i) => {
          if (!d) return <span key={`x${i}`} aria-hidden="true" />;
          const disabled = d < today;
          const selected = value === iso(d);
          return (
            <button
              key={iso(d)}
              type="button"
              disabled={disabled}
              onClick={() => onChange(iso(d))}
              aria-pressed={selected}
              aria-label={d.toDateString()}
              className={`aspect-square rounded-full text-[0.82rem] transition-colors ${
                selected
                  ? "bg-terracotta font-semibold text-white"
                  : disabled
                    ? "text-taupe/40"
                    : "text-ink hover:bg-parchment"
              }`}
            >
              {d.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
