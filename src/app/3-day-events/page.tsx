import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { CtaButton } from "@/components/ui/cta";
import { FinalCta } from "@/components/final-cta";
import { Icon } from "@/components/ui/icon";
import { photo } from "@/data/photos";

export const metadata: Metadata = {
  title: "3-Day Events",
  description:
    "Fast-track event planning in Kerala — suitable events planned in as little as 3 days, subject to availability, scope, location and complexity.",
};

const process = [
  { t: "Tell us today", d: "Message us with the occasion, date, guest count and city." },
  { t: "Confirm the requirements", d: "We check availability and confirm what's possible — honestly." },
  { t: "Coordinate the essentials", d: "Venue, catering, décor, sound and the timeline come together." },
  { t: "Celebrate", d: "You host your people. We run the plan." },
];

const checklist = [
  "Guest count",
  "Event date",
  "Location",
  "Venue status",
  "Event type",
  "Décor needs",
  "Catering",
  "Entertainment",
  "Technical requirements",
];

const examples = [
  { t: "Birthdays", d: "Home, terrace or café — often the easiest to fast-track." },
  { t: "Engagements", d: "Ring ceremonies and small family gatherings." },
  { t: "Private dinners", d: "One table, one evening, zero stress." },
  { t: "Corporate gatherings", d: "Team celebrations, client evenings, offsite dinners." },
  { t: "Office celebrations", d: "Launches, farewells and festival days at work." },
  { t: "Surprise parties", d: "Discreet planning at speed — our speciality." },
  { t: "Small celebrations", d: "Anniversaries, baby showers, naming days." },
  { t: "Family gatherings", d: "Reunions and get-togethers on short notice." },
];

export default function ThreeDayEventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Fast-track planning"
        title="Some moments can't wait."
        intro="Need to bring people together in days rather than months? For suitable events, we compress planning into as little as 3 days — without losing the care that makes it yours."
        image={photo.hero3day.src}
        fallback={photo.hero3day.fallback}
        alt="An intimate evening gathering at dusk — placeholder photograph"
      />

      <Section tone="ivory">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <SectionHeading
            align="left"
            eyebrow="Honest first"
            title="What fast-track really means."
          />
          <Reveal delay={100}>
            <div className="space-y-4 text-[0.95rem] leading-relaxed text-ink-soft">
              <p>
                Fast-track planning is possible when the scope, guest count, location and vendors
                line up. A birthday for forty can often be arranged in days; a multi-day wedding
                usually can&apos;t.
              </p>
              <p>
                When you enquire, we&apos;ll tell you quickly and honestly what&apos;s achievable for
                your date — and what a realistic timeline looks like if three days isn&apos;t
                possible.
              </p>
              <p className="border-l-2 border-terracotta/60 pl-4 text-sm text-ink">
                Three days is not guaranteed for every event. Availability, scope, location and
                execution requirements all play a part.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="parchment">
        <SectionHeading eyebrow="The plan" title="Four steps, three days." />
        <ol className="mt-12 grid gap-6 md:grid-cols-4">
          {process.map((s, i) => (
            <Reveal key={s.t} delay={i * 90}>
              <li className="h-full rounded-sm border border-line bg-ivory p-6">
                <h3 className="mt-1 font-serif text-lg leading-snug text-ink">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.d}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section tone="ivory">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Works well for"
              title="Events that come together quickly."
            />
            <ul className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {examples.map((e, i) => (
                <Reveal key={e.t} delay={i * 50}>
                  <li className="border-b border-line pb-4">
                    <p className="font-serif text-lg text-ink">{e.t}</p>
                    <p className="mt-1 text-[0.82rem] leading-relaxed text-ink-soft">{e.d}</p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delay={140}>
            <div className="rounded-sm border border-line bg-parchment p-8 md:p-9">
              <h3 className="font-serif text-2xl text-ink">Have this ready</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                The more we know today, the faster we can move.
              </p>
              <ul className="mt-6 space-y-3">
                {checklist.map((c) => (
                  <li key={c} className="flex items-center gap-3 text-sm text-ink">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-terracotta/60 text-terracotta">
                      <Icon name="check" size={12} />
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <CtaButton href="/plan-my-event?fasttrack=1" className="w-full">
                  Tell Us What You Need
                </CtaButton>
              </div>
              <p className="mt-4 text-[0.72rem] leading-relaxed text-taupe">
                *Fast-track is subject to availability, scope, location and complexity. We confirm
                feasibility before any commitment.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <FinalCta
        title="Three days or three months — let's talk."
        copy="Tell us the date and the occasion. We'll tell you honestly what's possible."
      />
    </>
  );
}
