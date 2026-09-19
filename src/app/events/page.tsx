"use client";

import { useMemo, useState } from "react";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { EventCard } from "@/components/ui/cards";
import { photo } from "@/data/photos";
import { FinalCta } from "@/components/final-cta";
import { CtaButton } from "@/components/ui/cta";
import { eventCategories } from "@/data/site";

const filters = ["All", ...eventCategories.map((c) => c.name)] as const;

export default function EventsPage() {
  const [active, setActive] = useState<string>("All");
  const shown = useMemo(
    () => (active === "All" ? eventCategories : eventCategories.filter((c) => c.name === active)),
    [active],
  );

  return (
    <>
      <PageHero
        eyebrow="Events · Kerala · Under 300 guests"
        title="Whatever the occasion. Make it yours."
        intro="Weddings, birthdays, milestones, corporate gatherings, private celebrations and ideas that don't fit any category — planned with the same care."
        image={photo.heroEvents.src}
        fallback={photo.heroEvents.fallback}
        alt="Celebration tables under open skies — placeholder photograph"
      />

      <Section tone="ivory">
        <SectionHeading
          align="left"
          eyebrow="Browse by category"
          title="Seven kinds of celebrations."
        />

        {/* filters — touch friendly, scrollable on small screens */}
        <div className="mt-10 -mx-5 overflow-x-auto px-5 pb-2 sm:mx-0 sm:px-0" role="group" aria-label="Filter event categories">
          <div className="flex w-max gap-2 sm:flex-wrap">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                aria-pressed={active === f}
                className={`whitespace-nowrap rounded-full border px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.16em] transition-colors ${
                  active === f
                    ? "border-forest bg-forest text-ivory"
                    : "border-ink/20 bg-transparent text-ink-soft hover:border-ink/50"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((c, i) => (
            <EventCard key={c.slug} category={c} index={i} />
          ))}
        </div>
      </Section>

      {/* size guide */}
      <Section tone="parchment">
        <SectionHeading
          eyebrow="A guide, not packages"
          title="Less than 300 people. More room for meaning."
          intro="We focus on gatherings where every guest, detail and moment still matters."
        />
        <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {[
            ["01–50", "Intimate"],
            ["51–100", "Personal"],
            ["101–200", "Celebratory"],
            ["201–299", "Full experience"],
          ].map(([range, label]) => (
            <div key={range} className="border-l-2 border-terracotta/50 pl-5">
              <p className="font-serif text-3xl text-ink md:text-4xl">{range}</p>
              <p className="eyebrow mt-2 text-taupe">{label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* fast-track + custom CTAs */}
      <Section tone="ivory">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-sm border border-line bg-ivory-soft p-8 md:p-10">
            <p className="eyebrow text-taupe">When time is short</p>
            <h3 className="mt-3 font-serif text-2xl text-ink md:text-3xl">
              Some moments can&apos;t wait.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Suitable events can potentially be planned in as little as 3 days — subject to
              availability, scope, location and complexity.
            </p>
            <div className="mt-6">
              <CtaButton href="/3-day-events" variant="primary">
                3-Day Events
              </CtaButton>
            </div>
          </div>
          <div className="rounded-sm border border-dashed border-brass/70 bg-parchment/60 p-8 md:p-10">
            <p className="eyebrow text-taupe">Something different</p>
            <h3 className="mt-3 font-serif text-2xl text-ink md:text-3xl">Custom events.</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Pop-ups, community gatherings, completely new ideas — if it brings people together,
              we&apos;ll help you shape it.
            </p>
            <div className="mt-6">
              <CtaButton href="/events/custom-events" variant="outline">
                Explore Custom Events
              </CtaButton>
            </div>
          </div>
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
