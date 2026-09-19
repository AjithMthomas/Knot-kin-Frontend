import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { FinalCta } from "@/components/final-cta";
import { generalFaqs } from "@/data/faq";
import { photo } from "@/data/photos";
import { eventCategories } from "@/data/site";
import { ArrowLink } from "@/components/ui/cta";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about planning events with Knot&Kin — event types, guest limits, fast-track 3-day planning, service areas across Kerala and how to start.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Questions"
        title="Everything you might ask."
        intro="Short, honest answers. If something isn't covered, message us — we reply like humans."
        image={photo.heroServices.src}
        fallback={photo.heroServices.fallback}
        alt="An elegant dinner setting — placeholder photograph"
      />

      <Section tone="ivory">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <SectionHeading align="left" eyebrow="General" title="The common questions." />
          <FaqAccordion items={generalFaqs} />
        </div>
      </Section>

      <Section tone="parchment">
        <SectionHeading
          eyebrow="By category"
          title="Questions about specific events."
          intro="Each event category page has its own set of questions."
        />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {eventCategories.map((c) => (
            <ArrowLink key={c.slug} href={`/events/${c.slug}`}>
              {c.name}
            </ArrowLink>
          ))}
        </div>
      </Section>

      <FinalCta
        title="Still wondering about something?"
        copy="Ask us directly — no forms, no pressure. Just an honest conversation about your event."
      />
    </>
  );
}
