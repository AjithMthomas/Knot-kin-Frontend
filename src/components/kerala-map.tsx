"use client";

import { useMemo, useState } from "react";
import { locations } from "@/data/locations";
import { KERALA_VIEWBOX, keralaPath, projectKerala } from "@/data/kerala-shape";
import { Icon } from "@/components/ui/icon";
import { ArrowLink } from "@/components/ui/cta";

/**
 * Kerala map — geographically accurate state silhouette (official Census 2011
 * boundary, generated into src/data/kerala-shape.ts) with location pins
 * projected from real lat/lng. Markers are buttons: keyboard + touch friendly.
 */
export function KeralaMap({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState<string>("kochi");
  const loc = locations.find((l) => l.slug === active) ?? locations[0];

  const markers = useMemo(
    () => locations.map((l) => ({ ...l, ...projectKerala(l.lat, l.lng) })),
    [],
  );

  return (
    <div
      className={`grid gap-10 ${compact ? "lg:grid-cols-[minmax(0,360px)_1fr]" : "lg:grid-cols-[minmax(0,400px)_1fr]"} lg:gap-14`}
    >
      {/* map + list */}
      <div>
        <div className="relative mx-auto w-full max-w-[320px] lg:max-w-none">
          <svg
            viewBox={`0 0 ${KERALA_VIEWBOX.width} ${KERALA_VIEWBOX.height}`}
            className="h-auto w-full"
            role="img"
            aria-label="Map of Kerala with service-area locations"
          >
            <defs>
              <linearGradient id="kmap-fill" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#2E4A3E" />
                <stop offset="100%" stopColor="#1D2F27" />
              </linearGradient>
            </defs>
            <path
              d={keralaPath}
              fill="url(#kmap-fill)"
              stroke="#AA9475"
              strokeOpacity="0.5"
              strokeWidth="1"
              strokeLinejoin="round"
            />
            {markers.map((l) => {
              const isActive = l.slug === active;
              return (
                <g key={l.slug}>
                  {isActive && (
                    <circle cx={l.x} cy={l.y} r="12" fill="#AA9475" opacity="0.3">
                      <animate attributeName="r" values="8;14;8" dur="2.6s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.35;0.08;0.35" dur="2.6s" repeatCount="indefinite" />
                    </circle>
                  )}
                  <circle
                    cx={l.x}
                    cy={l.y}
                    r={isActive ? 5 : 3.4}
                    fill={isActive ? "#AA9475" : "#F4EFE6"}
                    stroke="#1D2F27"
                    strokeWidth="1"
                    className="cursor-pointer transition-all duration-300"
                  />
                </g>
              );
            })}
          </svg>

          {/* transparent button overlay for each marker — bigger hit area than the dot */}
          {markers.map((l) => (
            <button
              key={l.slug}
              type="button"
              onClick={() => setActive(l.slug)}
              onMouseEnter={() => setActive(l.slug)}
              onFocus={() => setActive(l.slug)}
              aria-pressed={l.slug === active}
              aria-label={`${l.name} — show details`}
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                left: `${(l.x / KERALA_VIEWBOX.width) * 100}%`,
                top: `${(l.y / KERALA_VIEWBOX.height) * 100}%`,
                width: 32,
                height: 32,
              }}
            />
          ))}
        </div>

        {/* mobile-friendly list beside/below the map */}
        <ul className="mt-8 flex flex-wrap gap-2 lg:mt-6" aria-label="Kerala locations">
          {locations.map((l) => (
            <li key={l.slug}>
              <button
                type="button"
                onClick={() => setActive(l.slug)}
                aria-pressed={l.slug === active}
                className={`rounded-full border px-3.5 py-1.5 text-[0.72rem] font-medium uppercase tracking-[0.14em] transition-colors ${
                  l.slug === active
                    ? "border-forest bg-forest text-ivory"
                    : "border-ink/20 text-ink-soft hover:border-ink/50"
                }`}
              >
                {l.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* info panel */}
      <div className="flex flex-col rounded-sm border border-line bg-ivory-soft p-7 md:p-10">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="eyebrow text-taupe">Kerala · Service area</p>
            <h3 className="mt-2 font-serif text-3xl text-ink md:text-4xl">{loc.name}</h3>
          </div>
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-ink/15 text-forest">
            <Icon name="pin" size={20} />
          </span>
        </div>

        <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-ink-soft">{loc.blurb}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {loc.eventTypes.map((t) => (
            <span
              key={t}
              className="rounded-full bg-parchment px-3 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.14em] text-ink-soft"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-9">
          <ArrowLink href={`/plan-my-event?location=${encodeURIComponent(loc.name)}`}>
            Plan an event here
          </ArrowLink>
          <p className="max-w-[16rem] text-[0.72rem] leading-relaxed text-taupe">
            Service-area inspiration — availability varies by venue, date and vendors.
          </p>
        </div>
      </div>
    </div>
  );
}
