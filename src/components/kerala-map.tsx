"use client";

import { useMemo, useState } from "react";
import { locations, type KkLocationImage } from "@/data/locations";
import { KERALA_VIEWBOX, keralaPath, projectKerala } from "@/data/kerala-shape";
import { Icon } from "@/components/ui/icon";
import { ArrowLink } from "@/components/ui/cta";
import { SmartImage } from "@/components/ui/smart-image";

/**
 * Kerala map — geographically accurate state silhouette (official Census 2011
 * boundary, generated into src/data/kerala-shape.ts) with location pins
 * projected from real lat/lng. Markers are buttons: keyboard + touch friendly.
 */
export function KeralaMap({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState<string>("kochi");
  const [selectedImage, setSelectedImage] = useState<KkLocationImage | null>(null);
  const loc = locations.find((l) => l.slug === active) ?? locations[0];

  const markers = useMemo(
    () => locations.map((l) => ({ ...l, ...projectKerala(l.lat, l.lng) })),
    [],
  );

  return (
    <>
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

          {/* Destination Highlights & Gallery */}
          {loc.images && loc.images.length > 0 && (
            <div key={loc.slug} className="mt-8 transition-all duration-500">
              <p className="eyebrow mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-taupe">
                Setting & Venue Highlights
              </p>
              <div className="grid grid-cols-3 gap-3">
                {loc.images.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSelectedImage(img)}
                    className="group relative overflow-hidden rounded-xl border border-line bg-parchment text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-forest"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <SmartImage
                        src={img.src}
                        fallback={img.fallback}
                        alt={`${loc.name} - ${img.caption}`}
                        className="h-full w-full"
                        imgClassName="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/50 to-transparent p-2 pt-5 transition-opacity duration-300">
                      <p className="line-clamp-1 text-[0.68rem] font-medium tracking-wide text-white drop-shadow-sm">
                        {img.caption}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

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

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-line bg-ivory p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-ink/70 text-white transition-colors hover:bg-ink"
              aria-label="Close preview"
            >
              <Icon name="close" size={20} />
            </button>
            <div className="aspect-[16/10] w-full overflow-hidden rounded-xl">
              <SmartImage
                src={selectedImage.src}
                fallback={selectedImage.fallback}
                alt={selectedImage.caption}
                className="h-full w-full"
                imgClassName="h-full w-full object-cover"
              />
            </div>
            <div className="mt-4 flex items-center justify-between px-2 pb-1">
              <div>
                <p className="eyebrow text-terracotta">{loc.name} · Venue Inspiration</p>
                <h4 className="mt-0.5 font-serif text-xl text-ink">{selectedImage.caption}</h4>
              </div>
              <ArrowLink href={`/plan-my-event?location=${encodeURIComponent(loc.name)}`}>
                Plan Here
              </ArrowLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
