import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { CtaButton, ArrowLink } from "@/components/ui/cta";
import { ServiceCard } from "@/components/ui/cards";
import { FinalCta } from "@/components/final-cta";
import { Icon } from "@/components/ui/icon";
import { photo } from "@/data/photos";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Event planning, creative direction, décor, venue and catering coordination, photography, sound & lighting, entertainment and event-day execution across Kerala.",
};

const alternating = services.slice(0, 10);

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything that brings an event together."
        intro="Take the complete experience, or pick only the pieces you need — every service works on its own or as part of the whole."
        image={photo.heroServices.src}
        fallback={photo.heroServices.fallback}
        alt="An elegantly set dinner table — placeholder photograph"
      />

      {/* alternating editorial sections */}
      <Section tone="ivory">
        <div className="space-y-20 md:space-y-28">
          {alternating.map((s, i) => (
            <Reveal key={s.slug}>
              <article
                className={`grid items-center gap-8 md:grid-cols-2 md:gap-14 ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="img-frame aspect-[16/10] w-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/images/gallery-${(i % 7) + 1}.svg`}
                    alt={`${s.name} — placeholder moodboard`}
                    loading="lazy"
                  />
                </div>
                <div>
                  <h2 className="font-serif text-2xl text-ink md:text-[2rem]">{s.name}</h2>
                  <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-soft">{s.description}</p>

                  <h3 className="eyebrow mt-7 text-taupe">What&apos;s included</h3>
                  <ul className="mt-3 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                    {s.included.map((inc) => (
                      <li key={inc} className="flex items-start gap-2.5 text-sm text-ink">
                        <Icon name="check" size={14} className="mt-1 shrink-0 text-brass" />
                        {inc}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-6 flex flex-wrap items-center gap-2 text-[0.72rem] uppercase tracking-[0.16em] text-taupe">
                    Suitable for:
                    {s.categories.map((c) => (
                      <span key={c} className="rounded-full bg-parchment px-3 py-1">
                        {c}
                      </span>
                    ))}
                  </p>

                  <div className="mt-7">
                    <ArrowLink href="/plan-my-event">Build my event with this</ArrowLink>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* remaining services grid */}
      <Section tone="parchment">
        <SectionHeading
          eyebrow="And the rest"
          title="Every layer, covered."
          intro="The supporting services that keep the day running."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(10).map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i + 10} />
          ))}
        </div>
      </Section>

      <Section tone="ivory">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading
            eyebrow="Your event, your way"
            title="Need only one service? Or the complete experience?"
            intro="Tell us where you are in the planning — we'll meet you there."
          />
          <Reveal delay={140}>
            <div className="mt-8 flex justify-center">
              <CtaButton href="/plan-my-event">Build My Event</CtaButton>
            </div>
          </Reveal>
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
