import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { FinalCta } from "@/components/final-cta";
import { Icon } from "@/components/ui/icon";
import { SmartImage } from "@/components/ui/smart-image";
import { photo } from "@/data/photos";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why Knot&Kin exists — thoughtful planning for gatherings under 300 guests, made around your people, your story and your piece of Kerala.",
};

const principles = [
  {
    icon: "heart",
    title: "Why we exist",
    text: "Because the moments that matter deserve better than assembly-line planning. We started Knot&Kin to bring care, taste and calm to the celebrations that families remember for decades.",
  },
  {
    icon: "guests",
    title: "Why under 300",
    text: "Under 300 guests, an event stays personal. We can know your plan intimately, look after every guest and sweat every detail. It's a choice, not a limit.",
  },
  {
    icon: "knot",
    title: "How we plan",
    text: "Listen first. Then shape one clear idea, a working budget and a timeline everyone trusts. Nothing proceeds without your approval.",
  },
  {
    icon: "leaf",
    title: "Why Kerala",
    text: "This is home. We understand its venues, its weather, its rituals and its rhythm — and we plan with that understanding built in.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About knot&kin"
        title="We're here to make it feel like yours."
        intro="A planning studio for weddings, celebrations and gatherings under 300 guests — built around the belief that the details make the moment."
        image={photo.heroAbout.src}
        fallback={photo.heroAbout.fallback}
        alt="People gathered in celebration — placeholder photograph"
      />

      {/* editorial collage + story */}
      <Section tone="ivory">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <div className="relative">
              <SmartImage {...photo.galleryPeople} alt="People gathered in celebration — placeholder photograph" className="img-frame aspect-[4/5] w-full" />
              <div className="absolute -bottom-6 -right-3 hidden w-40 rotate-3 rounded-sm border-4 border-white bg-white p-2 shadow-lg sm:block">
                <SmartImage {...photo.galleryDetail} alt="" className="aspect-square w-full" />
              </div>
            </div>
          </Reveal>
          <div>
            <SectionHeading align="left" eyebrow="Our story" title="It started with one question." />
            <Reveal delay={120}>
              <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-ink-soft">
                <p>
                  Why do so many celebrations feel stressful for the people hosting them? Weddings
                  become projects. Birthdays become checklists. And the hosts — the people the day
                  is actually for — end up managing vendors instead of enjoying their own guests.
                </p>
                <p>
                  Knot&amp;Kin exists to change that. We take the logistics, the timelines and the
                  coordination, and hand you back the moment itself.
                </p>
                <p className="accent-italic text-lg text-terracotta">
                  You bring the people. We&apos;ll bring the plan.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* principles */}
      <Section tone="parchment">
        <SectionHeading eyebrow="What we believe" title="The thinking behind the plan." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <div className="h-full rounded-sm border border-line bg-ivory p-8">
                <span className="grid h-12 w-12 place-items-center rounded-full border border-ink/15 text-forest">
                  <Icon name={p.icon} size={21} strokeWidth={1.2} />
                </span>
                <h3 className="mt-5 font-serif text-xl text-ink">{p.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* people */}
      <Section tone="ivory">
        <SectionHeading
          eyebrow="People behind the moments"
          title="A small team that loves small gatherings."
          intro="Team profiles will live here. We're not inventing anyone — these are placeholders until the real people (and their portraits) are ready."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[1, 2, 3].map((n, i) => (
            <Reveal key={n} delay={i * 90}>
              <div className="rounded-sm border border-dashed border-taupe/50 bg-parchment/50 p-7 text-center">
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-ink/15 text-taupe">
                  <Icon name="guests" size={24} />
                </span>
                <h3 className="mt-4 font-serif text-lg text-ink">Team member {n}</h3>
                <p className="mt-1 text-[0.78rem] uppercase tracking-[0.18em] text-taupe">
                  Role · placeholder
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  Replace with a real name, portrait and a line about what they bring to an event.
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <FinalCta
        title="Let's make it feel like yours."
        copy="Tell us who you're gathering and why — we'll take it from there."
      />
    </>
  );
}
