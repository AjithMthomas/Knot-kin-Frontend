import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ArrowLink } from "@/components/ui/cta";
import { FinalCta } from "@/components/final-cta";
import { Icon } from "@/components/ui/icon";
import { photo } from "@/data/photos";
import { getWork, works } from "@/data/work";

const WORK_PHOTO: Record<string, { src: string; fallback: string }> = {
  "alexy-backwaters": photo.backwaterVows,
  "sana-courtyard": photo.courtyardNikah,
  "arav-terrace": photo.firstBirthday,
  "meridian-launch": photo.launchNight,
  "proposal-marari": photo.proposal,
  "lakshmi-babyshower": photo.babyShower,
  "rooftop-session": photo.rooftopSession,
};
import { eventCategories } from "@/data/site";

export function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) return {};
  return {
    title: `${work.title} — Design Placeholder`,
    description: work.brief,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) notFound();

  const related = eventCategories.find((c) => c.slug === work.eventCategorySlug);

  return (
    <>
      <PageHero
        crumb={{ label: "Our Work", href: "/our-work" }}
        eyebrow={`${work.category} · ${work.location} · Design placeholder`}
        title={work.title}
        intro={work.brief}
        image={WORK_PHOTO[work.slug]?.src ?? work.gallery[0]?.src}
        fallback={WORK_PHOTO[work.slug]?.fallback ?? work.gallery[0]?.src}
        alt={work.gallery[0]?.alt ?? ""}
      />

      <Section tone="ivory">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* meta rail */}
          <Reveal>
            <aside className="space-y-7 lg:sticky lg:top-28">
              <div>
                <p className="eyebrow text-taupe">Event category</p>
                <p className="mt-1.5 font-serif text-xl text-ink">{work.category}</p>
              </div>
              <div>
                <p className="eyebrow text-taupe">Location</p>
                <p className="mt-1.5 flex items-center gap-2 font-serif text-xl text-ink">
                  <Icon name="pin" size={17} className="text-terracotta" />
                  {work.location}
                </p>
              </div>
              {work.guests ? (
                <div>
                  <p className="eyebrow text-taupe">Guest count</p>
                  <p className="mt-1.5 font-serif text-xl text-ink">{work.guests} guests</p>
                </div>
              ) : null}
              <div>
                <p className="eyebrow text-taupe">Status</p>
                <p className="mt-1.5 inline-block rounded-full bg-parchment px-3.5 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-ink-soft">
                  Design placeholder
                </p>
              </div>
              {related ? (
                <div className="pt-2">
                  <ArrowLink href={`/events/${related.slug}`}>
                    Explore {related.name}
                  </ArrowLink>
                </div>
              ) : null}
            </aside>
          </Reveal>

          {/* body */}
          <div className="space-y-14">
            <Reveal>
              <div>
                <h2 className="font-serif text-2xl text-ink md:text-3xl">The brief</h2>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-soft">{work.brief}</p>
              </div>
            </Reveal>
            <Reveal>
              <div>
                <h2 className="font-serif text-2xl text-ink md:text-3xl">The concept</h2>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-soft">{work.concept}</p>
              </div>
            </Reveal>
            <Reveal>
              <div>
                <h2 className="font-serif text-2xl text-ink md:text-3xl">Services provided</h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {work.services.map((s) => (
                    <li
                      key={s}
                      className="rounded-full bg-parchment px-4 py-2 text-[0.75rem] font-medium uppercase tracking-[0.14em] text-ink-soft"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal>
              <div>
                <h2 className="font-serif text-2xl text-ink md:text-3xl">The experience</h2>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-soft">{work.experience}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* gallery */}
      <Section tone="parchment">
        <SectionHeading eyebrow="Gallery" title="How it could look." intro="Placeholder styling boards." />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {work.gallery.map((g, i) => (
            <Reveal key={g.src} delay={i * 90}>
              <figure className="img-frame aspect-[4/5]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={g.src} alt={g.alt} loading="lazy" />
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      <FinalCta
        title="Create something like this?"
        copy="Tell us the occasion and the feeling you're after — we'll shape the event around your people."
      />
    </>
  );
}
