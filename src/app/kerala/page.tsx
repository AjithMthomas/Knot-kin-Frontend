import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { KeralaMap } from "@/components/kerala-map";
import { FinalCta } from "@/components/final-cta";
import { Reveal } from "@/components/ui/reveal";
import { Icon } from "@/components/ui/icon";
import { photo } from "@/data/photos";

export const metadata: Metadata = {
  title: "Kerala",
  description:
    "From backwaters to hill stations — the places across Kerala where Knot&Kin plans weddings, celebrations and corporate gatherings under 300 guests.",
};

const destinations = [
  {
    icon: "wave",
    name: "The backwaters",
    text: "Alappuzha, Kumarakom, Kollam — houseboat decks, lakeside lawns and dinners that drift.",
  },
  {
    icon: "mountain",
    name: "The hills",
    text: "Munnar and Wayanad — mist, tea gardens and resort lawns for destination gatherings.",
  },
  {
    icon: "sun",
    name: "The coast",
    text: "Marari, Varkala, Kovalam, Bekal — beach ceremonies and barefoot evenings.",
  },
  {
    icon: "home",
    name: "The heritage towns",
    text: "Fort Kochi, Thrissur, Kottayam — courtyards, heritage homes and cultural depth.",
  },
];

export default function KeralaPage() {
  return (
    <>
      <PageHero
        eyebrow="Where we work"
        title="Kerala is the backdrop. Your story is the reason."
        intro="God's Own Country gives an event its setting — the water, the hills, the light. We plan across all fourteen districts for gatherings under 300 guests."
        image={photo.heroKerala.src}
        fallback={photo.heroKerala.fallback}
        alt="Kerala backwater landscape — placeholder photograph"
      />

      <Section tone="ivory">
        <SectionHeading
          eyebrow="Explore the map"
          title="Places we plan events."
          intro="Tap a marker or a place name to see what each setting suits. Availability varies by venue, date and vendors."
        />
        <div className="mt-14">
          <KeralaMap />
        </div>
      </Section>

      <Section tone="parchment">
        <SectionHeading eyebrow="Four settings" title="Kerala, by mood." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((d, i) => (
            <Reveal key={d.name} delay={i * 90}>
              <div className="h-full rounded-sm border border-line bg-ivory p-7">
                <span className="grid h-12 w-12 place-items-center rounded-full border border-ink/15 text-forest">
                  <Icon name={d.icon} size={21} strokeWidth={1.2} />
                </span>
                <h3 className="mt-5 font-serif text-xl text-ink">{d.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{d.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="ivory">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <SectionHeading
            align="left"
            eyebrow="Good to know"
            title="A note on seasons & venues."
          />
          <Reveal delay={100}>
            <div className="space-y-4 text-[0.95rem] leading-relaxed text-ink-soft">
              <p>
                October to March is celebration season — pleasant evenings and high demand for
                venues. Monsoon months (June–August) bring dramatic beauty and softer rates, with
                indoor and covered options planned carefully.
              </p>
              <p>
                We work with venues across the state rather than tying to a fixed list — so the
                venue follows the event, not the other way round.
              </p>
              <p className="border-l-2 border-terracotta/60 pl-4 text-sm text-ink">
                Location notes on this page are for inspiration and service-area discovery, not a
                guarantee of specific venue availability.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <FinalCta
        title="Where in Kerala is your moment?"
        copy="Tell us the place — or let us suggest one. Either way, the plan starts with a conversation."
      />
    </>
  );
}
