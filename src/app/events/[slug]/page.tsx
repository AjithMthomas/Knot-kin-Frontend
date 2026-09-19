import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { CtaButton } from "@/components/ui/cta";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { FinalCta } from "@/components/final-cta";
import { Icon } from "@/components/ui/icon";
import { photo } from "@/data/photos";
import { eventCategories } from "@/data/site";

const CATEGORY_PHOTO: Record<string, { src: string; fallback: string }> = {
  weddings: photo.weddings,
  birthdays: photo.birthdays,
  "family-milestones": photo.family,
  corporate: photo.corporate,
  "private-celebrations": photo.private,
  entertainment: photo.entertainment,
  "custom-events": photo.custom,
};

export function generateStaticParams() {
  return eventCategories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cat = eventCategories.find((c) => c.slug === slug);
  if (!cat) return {};
  return {
    title: `${cat.name} Planning in Kerala`,
    description: cat.short,
  };
}

export default async function EventCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cat = eventCategories.find((c) => c.slug === slug);
  if (!cat) notFound();

  return (
    <>
      <PageHero
        crumb={{ label: "Events", href: "/events" }}
        eyebrow={`${cat.name} · Kerala`}
        title={cat.name === "Custom Events" ? "An idea that's yours alone." : `${cat.name} in Kerala.`}
        intro={cat.short}
        image={CATEGORY_PHOTO[cat.slug]?.src ?? cat.hero}
        fallback={CATEGORY_PHOTO[cat.slug]?.fallback ?? cat.hero}
        alt={`${cat.name} — placeholder photograph`}
      />

      {/* introduction */}
      <Section tone="ivory">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <SectionHeading align="left" eyebrow="The idea" title="What the day could feel like." />
          <Reveal delay={100}>
            <p className="text-[0.95rem] leading-relaxed text-ink-soft">{cat.intro}</p>
          </Reveal>
        </div>
      </Section>

      {/* suitable event types */}
      <Section tone="parchment">
        <SectionHeading
          eyebrow="What we plan"
          title="Occasions in this category."
        />
        <ul className="mx-auto mt-10 grid max-w-4xl gap-x-10 gap-y-4 sm:grid-cols-2">
          {cat.types.map((t, i) => (
            <Reveal key={t} delay={i * 40}>
              <li className="flex items-center gap-3 border-b border-ink/10 py-3 text-[0.95rem] text-ink">
                <Icon name="sparkle" size={15} className="shrink-0 text-brass" />
                {t}
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* services available */}
      <Section tone="ivory">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <SectionHeading
              align="left"
              eyebrow="How we help"
              title="Services for this category."
              intro="Choose everything, or only what you need."
            />
            <Reveal delay={160}>
              <div className="mt-8">
                <CtaButton href="/plan-my-event">Plan My Event</CtaButton>
              </div>
            </Reveal>
          </div>
          <ul className="space-y-4">
            {cat.services.map((s, i) => (
              <Reveal key={s} delay={i * 60}>
                <li className="flex items-center justify-between gap-4 border-b border-line pb-4 text-[0.95rem] text-ink">
                  {s}
                  <Icon name="check" size={15} className="shrink-0 text-terracotta" />
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      {/* settings */}
      <Section tone="parchment">
        <SectionHeading eyebrow="Where it could happen" title="Suggested settings." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cat.settings.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <div className="h-full rounded-sm border border-line bg-ivory p-7">
                <Icon name="pin" size={20} className="text-terracotta" />
                <h3 className="mt-4 font-serif text-xl text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* example experiences */}
      <Section tone="ivory">
        <SectionHeading
          eyebrow="Imagined for you"
          title="Example event experiences."
          intro="Illustrative concepts we'd love to plan — not past events."
        />
        <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-2">
          {cat.experiences.map((e, i) => (
            <Reveal key={e.title} delay={i * 110}>
              <article className="h-full border-l-2 border-brass/60 pl-6">
                <h3 className="accent-italic text-xl text-ink md:text-2xl">{e.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{e.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* gallery */}
      <Section tone="none" className="bg-forest">
        <SectionHeading
          dark
          eyebrow="Moodboard"
          title="A feel for the details."
          intro="Placeholder styling boards — swap in real photography as it happens."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {cat.gallery.map((g, i) => (
            <Reveal key={g.src} delay={i * 90}>
              <figure className="img-frame aspect-[4/5]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover" />
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="ivory">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading align="left" eyebrow="Good to know" title="Questions, answered." />
          <FaqAccordion items={cat.faqs} />
        </div>
      </Section>

      <FinalCta
        title={`Shall we plan your ${cat.name.toLowerCase().replace(/&/g, "and")} event?`}
        copy="Tell us the occasion, the people and the feeling you're after — we'll bring the plan."
      />
    </>
  );
}
