import Link from "next/link";
import { Icon } from "./icon";
import { Reveal } from "./reveal";
import { SmartImage } from "./smart-image";
import { photo } from "@/data/photos";
import type { EventCategory } from "@/data/site";
import type { Service } from "@/data/services";
import type { Work } from "@/data/work";

/** Photo slot per event-category slug. */
const CATEGORY_PHOTO: Record<string, { src: string; fallback: string }> = {
  weddings: photo.weddings,
  birthdays: photo.birthdays,
  "family-milestones": photo.family,
  corporate: photo.corporate,
  "private-celebrations": photo.private,
  entertainment: photo.entertainment,
  "custom-events": photo.custom,
};

/* ---------------- event category card ---------------- */

export function EventCard({ category, index = 0 }: { category: EventCategory; index?: number }) {
  const slot = CATEGORY_PHOTO[category.slug] ?? { src: category.hero, fallback: category.hero };
  return (
    <Reveal delay={(index % 3) * 90}>
      <Link
        href={`/events/${category.slug}`}
        className="ref-card group block"
        aria-label={`${category.name} — explore`}
      >
        <div className="img-frame relative aspect-[4/3] w-full rounded-none">
          <SmartImage
            src={slot.src}
            fallback={slot.fallback}
            alt={`${category.name} — placeholder photograph`}
            className="h-full w-full"
            imgClassName="transition-transform duration-700 group-hover:scale-[1.05]"
          />
          {category.types[0] ? (
            <span className="badge-guests absolute top-4 right-4">
              <Icon name="sparkle" size={14} />
              {category.types[0]}
            </span>
          ) : null}
        </div>
        <div className="p-6">
          <h3 className="font-serif text-2xl text-ink">{category.name}</h3>
          <p className="mt-1.5 flex items-center gap-1.5 text-[0.82rem] text-taupe">
            <Icon name="pin" size={13} />
            Kerala · Under 300 guests
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {category.types.slice(1, 4).map((t) => (
              <span key={t} className="tag-chip">
                {t}
              </span>
            ))}
          </div>
          <span className="mt-5 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-terracotta">
            Explore
            <Icon name="arrow" size={14} className="arrow" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

/* ---------------- service card ---------------- */

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  return (
    <Reveal delay={(index % 3) * 80}>
      <div className="ref-card group h-full p-7">
        <div className="mb-5 flex items-center justify-between">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-parchment text-forest transition-colors duration-500 group-hover:bg-forest group-hover:text-white">
            <Icon name={service.icon} size={22} strokeWidth={1.2} />
          </span>
        </div>
        <h3 className="font-serif text-xl leading-snug text-ink">{service.name}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{service.short}</p>
      </div>
    </Reveal>
  );
}

/* ---------------- portfolio / work card ---------------- */

/** Photo slot per work slug. */
const WORK_PHOTO: Record<string, { src: string; fallback: string }> = {
  "alexy-backwaters": photo.backwaterVows,
  "sana-courtyard": photo.courtyardNikah,
  "arav-terrace": photo.firstBirthday,
  "meridian-launch": photo.launchNight,
  "proposal-marari": photo.proposal,
  "lakshmi-babyshower": photo.babyShower,
  "rooftop-session": photo.rooftopSession,
};

export function WorkCard({ work, index = 0 }: { work: Work; index?: number }) {
  const slot = WORK_PHOTO[work.slug] ?? {
    src: work.gallery[0]?.src ?? "",
    fallback: work.gallery[0]?.src ?? "",
  };
  return (
    <Reveal delay={(index % 3) * 90}>
      <Link
        href={`/our-work/${work.slug}`}
        className="ref-card group block"
        aria-label={`${work.title} — design placeholder case study`}
      >
        <div className="img-frame relative aspect-[4/3] w-full rounded-none">
          <SmartImage
            src={slot.src}
            fallback={slot.fallback}
            alt={work.gallery[0]?.alt ?? ""}
            className="h-full w-full"
            imgClassName="transition-transform duration-700 group-hover:scale-[1.05]"
          />
          {work.guests ? (
            <span className="badge-guests absolute top-4 right-4">
              <Icon name="guests" size={14} />
              {work.guests} guests
            </span>
          ) : null}
          <span className="absolute top-4 left-4 rounded-full bg-forest/85 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white">
            Placeholder
          </span>
        </div>
        <div className="p-6">
          <h3 className="font-serif text-xl leading-snug text-ink transition-colors group-hover:text-terracotta">
            {work.title}
          </h3>
          <p className="mt-1.5 flex items-center gap-1.5 text-[0.82rem] text-taupe">
            <Icon name="pin" size={13} />
            {work.location} · {work.category}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {work.services.slice(0, 3).map((s) => (
              <span key={s} className="tag-chip">
                {s}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
