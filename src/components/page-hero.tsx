import { Reveal } from "@/components/ui/reveal";
import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import { SmartImage } from "@/components/ui/smart-image";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  fallback,
  alt = "",
  crumb,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image?: string;
  fallback?: string;
  alt?: string;
  crumb?: { label: string; href: string };
}) {
  return (
    <header className="relative overflow-hidden bg-forest-deep">
      {image && fallback ? (
        <>
          <SmartImage
            src={image}
            fallback={fallback}
            alt={alt}
            overlay="hero"
            className="absolute inset-0 h-full w-full"
            priority
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-forest-deep/95 via-forest-deep/35 to-transparent"
          />
        </>
      ) : null}

      <div
        className={`relative mx-auto w-full max-w-6xl px-5 sm:px-8 ${
          image ? "pt-40 pb-16 md:pt-52 md:pb-20" : "pt-32 pb-14 md:pt-44 md:pb-20"
        }`}
      >
        {crumb ? (
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-6">
              <Link
                href={crumb.href}
                className={`inline-flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.22em] transition-colors ${
                  image ? "text-white/80 hover:text-white" : "text-taupe hover:text-terracotta"
                }`}
              >
                <Icon name="arrowLeft" size={13} />
                {crumb.label}
              </Link>
            </nav>
          </Reveal>
        ) : null}

        <Reveal delay={crumb ? 60 : 0}>
          <p
            className={`eyebrow flex items-center gap-3 ${
              image ? "text-white/80" : "text-taupe"
            }`}
          >
            {image ? <span className="inline-block h-px w-10 bg-white/50" aria-hidden="true" /> : null}
            {eyebrow}
          </p>
          <h1
            className={`mt-5 max-w-3xl leading-[1.04] ${
              image
                ? "ghost-title text-4xl sm:text-6xl lg:text-[4.4rem]"
                : "font-serif text-4xl text-ink sm:text-5xl md:text-[3.4rem]"
            }`}
          >
            {title}
          </h1>
        </Reveal>
        {intro ? (
          <Reveal delay={140}>
            <p
              className={`mt-6 max-w-xl text-base leading-relaxed ${
                image ? "text-white/80" : "text-ink-soft"
              }`}
            >
              {intro}
            </p>
          </Reveal>
        ) : null}
      </div>
    </header>
  );
}
