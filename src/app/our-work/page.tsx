"use client";

import { useMemo, useState } from "react";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { WorkCard } from "@/components/ui/cards";
import { photo } from "@/data/photos";
import { FinalCta } from "@/components/final-cta";
import { works, workFilters } from "@/data/work";

export default function OurWorkPage() {
  const [active, setActive] = useState<string>("All");
  const [location, setLocation] = useState<string>("All locations");

  const locationFilters = useMemo(
    () => ["All locations", ...Array.from(new Set(works.map((w) => w.location)))],
    [],
  );
  const shown = useMemo(
    () =>
      works.filter(
        (w) =>
          (active === "All" || w.category === active) &&
          (location === "All locations" || w.location === location),
      ),
    [active, location],
  );

  return (
    <>
      <PageHero
        eyebrow="Portfolio · design placeholders"
        title="Moments we've made."
        intro="A first look at the kinds of events we plan. These are design placeholders — real projects will replace them as they happen."
        image={photo.heroWork.src}
        fallback={photo.heroWork.fallback}
        alt="A long celebration table in the evening — placeholder photograph"
      />

      <Section tone="ivory">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading align="left" eyebrow="Browse the work" title="Filter by category or place." />
        </div>

        <div className="mt-10 space-y-4">
          <div className="-mx-5 overflow-x-auto px-5 pb-2 sm:mx-0 sm:px-0" role="group" aria-label="Filter by category">
            <div className="flex w-max gap-2 sm:flex-wrap">
              {workFilters.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setActive(f)}
                  aria-pressed={active === f}
                  className={`whitespace-nowrap rounded-full border px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.16em] transition-colors ${
                    active === f
                      ? "border-forest bg-forest text-ivory"
                      : "border-ink/20 text-ink-soft hover:border-ink/50"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="-mx-5 overflow-x-auto px-5 pb-2 sm:mx-0 sm:px-0" role="group" aria-label="Filter by location">
            <div className="flex w-max gap-2 sm:flex-wrap">
              {locationFilters.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setLocation(f)}
                  aria-pressed={location === f}
                  className={`whitespace-nowrap rounded-full border px-4 py-2 text-[0.72rem] font-medium tracking-[0.06em] transition-colors ${
                    location === f
                      ? "border-terracotta bg-terracotta/10 text-terracotta"
                      : "border-ink/15 text-taupe hover:border-ink/40"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        {shown.length === 0 ? (
          <p className="mt-16 text-center font-serif text-xl text-taupe">
            Nothing here yet — try another filter.
          </p>
        ) : (
          <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((w, i) => (
              <WorkCard key={w.slug} work={w} index={i} />
            ))}
          </div>
        )}

        <p className="mt-14 rounded-sm border border-dashed border-brass/70 bg-parchment/60 p-5 text-center text-[0.78rem] leading-relaxed text-ink-soft">
          All projects shown are <strong>design placeholders</strong> — not completed events.
          Real work will be added as it happens, with permission.
        </p>
      </Section>

      <FinalCta
        title="Create something like this?"
        copy="Tell us the occasion and the feeling you're after — we'll shape the event around your people."
      />
    </>
  );
}
