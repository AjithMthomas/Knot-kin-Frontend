import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { CtaButton, WhatsappButton } from "@/components/ui/cta";
import { site } from "@/data/site";

export function FinalCta({
  title = "Let's make something worth remembering.",
  copy = "Whether you have three days or three months, tell us what you're imagining.",
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <Section tone="forest" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full border border-white/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full border border-white/10"
      />
      <div className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-white/60">Plan my event</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-white sm:text-4xl md:text-[2.75rem]">
            {title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/75">{copy}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CtaButton href="/plan-my-event" variant="light">
              Plan My Event
            </CtaButton>
            <WhatsappButton label="WhatsApp Us" />
          </div>
          <p className="accent-italic mt-10 text-lg text-white/80">Together, we make it happen.</p>
          <p className="mt-6 text-[0.72rem] uppercase tracking-[0.22em] text-white/40">
            {site.name} — {site.tagline}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
