import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { CtaButton, ArrowLink } from "@/components/ui/cta";
import { EventCard, ServiceCard, WorkCard } from "@/components/ui/cards";
import { SmartImage } from "@/components/ui/smart-image";
import { photo } from "@/data/photos";
import { KeralaMap } from "@/components/kerala-map";
import { FinalCta } from "@/components/final-cta";
import { HeroSlideshow } from "@/components/hero-slideshow";
import { Icon } from "@/components/ui/icon";
import { eventCategories } from "@/data/site";
import { services } from "@/data/services";
import { works } from "@/data/work";

const approach = [
  {
    n: "01",
    icon: "heart",
    title: "Smaller, more personal",
    text: "We focus on events under 300 guests, giving attention to the details that make gatherings feel meaningful.",
  },
  {
    n: "02",
    icon: "sparkle",
    title: "Your idea, our experience",
    text: "We listen first, then create an event around your people, preferences and purpose.",
  },
  {
    n: "03",
    icon: "knot",
    title: "One coordinated team",
    text: "We help bring planning, creative direction, vendors, logistics and event-day execution together.",
  },
  {
    n: "04",
    icon: "leaf",
    title: "Kerala, our home base",
    text: "We plan with an understanding of Kerala's destinations, local culture, venues, weather and event logistics.",
  },
];

const steps = [
  { n: "01", title: "Tell us what you're planning", text: "The occasion, the feel, the people — as much or as little as you know." },
  { n: "02", title: "We understand your needs", text: "We listen, ask the right questions and understand what matters to you." },
  { n: "03", title: "We shape the concept and plan", text: "A clear concept, a working budget and a plan you can react to." },
  { n: "04", title: "You approve the details", text: "You adjust and approve — nothing is locked without your yes." },
  { n: "05", title: "We coordinate and execute", text: "Vendors, timeline, setup and the day itself — run by our team." },
];

const sizes = [
  { range: "01–50", label: "Intimate" },
  { range: "51–100", label: "Personal" },
  { range: "101–200", label: "Celebratory" },
  { range: "201–299", label: "Full experience" },
];

export default function HomePage() {
  return (
    <>
      {/* ============ 01 · Wedding-invitation hero ============ */}
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-forest-deep">
        <HeroSlideshow />

        <div className="relative z-20 mx-auto w-full max-w-6xl px-5 py-32 text-center sm:px-8">
         

          <Reveal delay={110}>
            <h1 className="hero-brand mt-6 text-[clamp(2.5rem,12vw,3.4rem)] leading-[1.02] text-white sm:text-8xl lg:text-[8.5rem]">
              KNOT&nbsp;<span className="hero-amp">&amp;</span>&nbsp;KIN
            </h1>
          </Reveal>

           <Reveal>
            <p className="eyebrow flex items-center justify-center gap-4 text-white/85">
              <span className="inline-block h-px w-10 bg-white/50" aria-hidden="true" />
              Events · Kerala · Under 300 guests
              <span className="inline-block h-px w-10 bg-white/50" aria-hidden="true" />
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="hero-date mt-7 text-[0.95rem] tracking-[0.5em] text-white/90">KERALA</p>
            <p className="accent-italic mt-3 text-xl text-white/85">For the moments that matter.</p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CtaButton href="/plan-my-event" variant="light">
                Plan My Event
              </CtaButton>
              <CtaButton href="/our-work" variant="ghost-light">
                Explore Our Work
              </CtaButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 02 · Brand introduction ============ */}
      <Section tone="ivory" rail="The story">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
          <div>
            <SectionHeading
              align="left"
              eyebrow="A little about us"
              title="The details make the moment."
            />
            <Reveal delay={120}>
              <p className="mt-6 max-w-lg text-[0.95rem] leading-relaxed text-ink-soft">
                At Knot&amp;Kin, we believe an event is more than a date on a calendar. It&apos;s the
                people, the atmosphere, the little surprises and the memories that stay long after
                everyone goes home.
              </p>
              <p className="mt-4 max-w-lg text-[0.95rem] leading-relaxed text-ink-soft">
                We bring together thoughtful planning, creative ideas and dependable execution to
                create celebrations that feel personal.
              </p>
              <div className="mt-8">
                <ArrowLink href="/about">Our story</ArrowLink>
              </div>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-10">
                <SmartImage {...photo.galleryTable} alt="Warm event table setting — placeholder photograph" className="img-frame aspect-[3/4] w-full" />
                <SmartImage {...photo.galleryDetail} alt="Celebration detail — placeholder photograph" className="img-frame aspect-square w-full" />
              </div>
              <div className="space-y-4">
                <SmartImage {...photo.galleryPeople} alt="People gathered in celebration — placeholder photograph" className="img-frame aspect-square w-full" />
                <SmartImage {...photo.galleryEvening} alt="Kerala evening landscape — placeholder photograph" className="img-frame aspect-[3/4] w-full" />
              </div>
            </div>
            <p className="accent-italic mt-6 text-center text-lg text-terracotta">
              Beautiful moments. Real people. Lasting memories.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* ============ 03 · Fast-track events ============ */}
      <Section tone="parchment">
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            align="left"
            eyebrow="When time is short"
            title="Some moments can't wait."
            intro="Need to bring people together soon? We can help plan suitable events in as little as 3 days, depending on your requirements, location, venue and vendor availability."
          />
          <div>
            <ol className="space-y-0">
              {[
                { n: "01", t: "Tell us the idea", d: "Today, if you can — the occasion, the date, the guest count." },
                { n: "02", t: "Shape the plan", d: "We pull together venue, vendors and styling at speed." },
                { n: "03", t: "Make the moment happen", d: "You celebrate. We run the day." },
              ].map((s, i) => (
                <Reveal key={s.n} delay={i * 100}>
                  <li className="group flex items-baseline gap-6 border-t border-ink/10 py-6 last:border-b">
                    <div>
                      <h3 className="font-serif text-xl text-ink md:text-2xl">{s.t}</h3>
                      <p className="mt-1 text-sm text-ink-soft">{s.d}</p>
                    </div>
                    <Icon name="arrow" size={18} className="arrow ml-auto hidden text-terracotta sm:block" />
                  </li>
                </Reveal>
              ))}
            </ol>
            <Reveal delay={200}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <CtaButton href="/3-day-events" variant="primary">
                  I Need an Event Soon
                </CtaButton>
              </div>
              <p className="mt-5 max-w-md text-[0.75rem] leading-relaxed text-taupe">
                *Fast-track planning is subject to event scope, venue availability, vendor
                availability and execution requirements. Three days is not guaranteed for every
                event.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ============ 04 · Event categories ============ */}
      <Section tone="ivory" id="categories" rail="The occasions">
        <SectionHeading
          eyebrow="What we plan"
          title="Whatever the occasion. Make it yours."
          intro="Seven kinds of celebrations — and every one shaped around the people in the room."
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {eventCategories.slice(0, 6).map((c, i) => (
            <EventCard key={c.slug} category={c} index={i} />
          ))}
        </div>
        <Reveal className="mt-10">
          <div className="rounded-sm border border-dashed border-brass/70 bg-parchment/60 p-8 text-center md:p-10">
            <h3 className="font-serif text-2xl text-ink">Something else in mind?</h3>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-soft">
              Have an idea that doesn&apos;t fit a categor
              y? We can work with you to shape it.
            </p>
            <div className="mt-5 flex justify-center">
              <ArrowLink href="/events/custom-events">Explore custom events</ArrowLink>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ============ 05 · Our approach ============ */}
      <Section tone="none" className="bg-forest">
        <SectionHeading
          dark
          eyebrow="Our approach"
          title="Planned with care. Made around you."
        />
        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {approach.map((a, i) => (
            <Reveal key={a.n} delay={i * 90}>
              <div>
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-ivory/25 text-brass">
                    <Icon name={a.icon} size={21} strokeWidth={1.2} />
                  </span>
                </div>
                <h3 className="mt-5 font-serif text-xl text-ivory">{a.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ivory/70">{a.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ============ 06 · Services preview ============ */}
      <Section tone="ivory" rail="The craft">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="What we do"
            title="Everything that brings an event together."
          />
          <Reveal delay={120}>
            <ArrowLink href="/services" className="shrink-0">
              Explore Our Services
            </ArrowLink>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>
      </Section>

      {/* ============ 07 · Event size ============ */}
      <Section tone="parchment">
        <SectionHeading
          eyebrow="Our focus"
          title="Less than 300 people. More room for meaning."
          intro="We focus on gatherings where every guest, detail and moment still matters. These ranges are a guide, not packages."
        />
        <div className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {sizes.map((s, i) => (
            <Reveal key={s.range} delay={i * 80}>
              <div className="border-l-2 border-terracotta/50 pl-5">
                <p className="font-serif text-3xl text-ink md:text-4xl">{s.range}</p>
                <p className="eyebrow mt-2 text-taupe">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ============ 08 · Our work preview ============ */}
      <Section tone="ivory" rail="The work">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Portfolio"
            title="Moments we've made."
            intro="A look at the kinds of events we're shaping. Design placeholders for now — real stories as they happen."
          />
          <Reveal delay={120}>
            <ArrowLink href="/our-work" className="shrink-0">
              Explore Our Work
            </ArrowLink>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {works.slice(0, 3).map((w, i) => (
            <WorkCard key={w.slug} work={w} index={i} />
          ))}
        </div>
      </Section>

      {/* ============ 09 · Kerala ============ */}
      <Section tone="ivory" id="kerala" rail="The map">
        <SectionHeading
          eyebrow="Where we work"
          title="Kerala is the backdrop. Your story is the reason."
          intro="Tap a marker to explore the places we plan events — from backwaters to hill stations."
        />
        <div className="mt-14">
          <KeralaMap compact />
        </div>
        <Reveal className="mt-10 text-center">
          <ArrowLink href="/kerala">Explore Events Across Kerala</ArrowLink>
        </Reveal>
      </Section>

      {/* ============ 10 · How it works ============ */}
      <Section tone="parchment">
        <SectionHeading
          eyebrow="How it works"
          title="From the first idea to the final goodbye."
        />
        <ol className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <li className="border-t-2 border-terracotta/40 pt-5">
                <h3 className="mt-2 font-serif text-lg leading-snug text-ink">{s.title}</h3>
                <p className="mt-2 text-[0.82rem] leading-relaxed text-ink-soft">{s.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-12 text-center">
          <CtaButton href="/plan-my-event">Start Planning</CtaButton>
        </Reveal>
      </Section>

      {/* ============ 11 · Final conversion ============ */}
      <FinalCta />
    </>
  );
}
