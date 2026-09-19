import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/ui/section";
import { EnquiryWizard } from "@/components/enquiry-wizard";
import { FinalCta } from "@/components/final-cta";
import { Icon } from "@/components/ui/icon";
import { photo } from "@/data/photos";
import { site, whatsappUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Plan My Event",
  description:
    "Tell Knot&Kin about your event — occasion, date, guests, location and the feeling you're after. Your enquiry opens WhatsApp with everything prefilled.",
};

const sideNotes = [
  {
    icon: "clock",
    title: "Takes about two minutes",
    text: "Ten small questions. Skip what you don't know — except the last step, so we can reach you.",
  },
  {
    icon: "lock",
    title: "Nothing is stored",
    text: "Your answers go straight into a WhatsApp message on your own device. This website has no backend and stores nothing.",
  },
  {
    icon: "sparkle",
    title: "Honest answers, fast",
    text: "We reply with real availability and a realistic timeline — including when 3 days isn't possible.",
  },
];

export default function PlanMyEventPage() {
  return (
    <>
      <PageHero
        eyebrow="Plan my event"
        title="Tell us what you're imagining."
        intro="Ten small questions about the occasion, the people and the feeling. At the end, WhatsApp opens with your enquiry ready to send."
        image={photo.heroContact.src}
        fallback={photo.heroContact.fallback}
        alt="An elegant event setting — placeholder photograph"
      />

      <Section tone="ivory">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <Suspense
            fallback={
              <div className="rounded-sm border border-line bg-ivory-soft p-10 text-center text-sm text-taupe" aria-live="polite">
                Loading your enquiry…
              </div>
            }
          >
            <EnquiryWizard />
          </Suspense>

          <aside className="space-y-6 lg:pt-2">
            {sideNotes.map((n) => (
              <div key={n.title} className="rounded-sm border border-line bg-ivory-soft p-6">
                <span className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 text-forest">
                  <Icon name={n.icon} size={19} strokeWidth={1.2} />
                </span>
                <h2 className="mt-4 font-serif text-lg text-ink">{n.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{n.text}</p>
              </div>
            ))}

            <div className="rounded-sm border border-dashed border-brass/70 bg-parchment/60 p-6">
              <h2 className="font-serif text-lg text-ink">In a hurry?</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Skip the form and message us directly — or use the fast-track flow for events
                needed in days.
              </p>
              <div className="mt-4 flex flex-col gap-2.5">
                <a
                  href={whatsappUrl(`Hello ${site.name}! I'd like to enquire about planning an event.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <Icon name="whatsapp" size={17} />
                  WhatsApp Us
                </a>
                <a href="/3-day-events" className="btn btn-outline">
                  3-Day Events
                  <Icon name="arrow" size={15} className="arrow" />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
