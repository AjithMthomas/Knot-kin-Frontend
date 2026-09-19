import { CtaButton } from "@/components/ui/cta";

export default function NotFound() {
  return (
    <section className="bg-ivory py-32 md:py-44">
      <div className="mx-auto max-w-xl px-5 text-center sm:px-8">
        <p className="eyebrow text-taupe">404</p>
        <h1 className="mt-4 font-serif text-4xl text-ink md:text-5xl">
          This moment isn&apos;t on the plan.
        </h1>
        <p className="mt-5 text-[0.95rem] leading-relaxed text-ink-soft">
          The page you&apos;re looking for doesn&apos;t exist — but plenty of good ones do.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <CtaButton href="/">Back to Home</CtaButton>
          <CtaButton href="/plan-my-event" variant="outline">
            Plan My Event
          </CtaButton>
        </div>
        <p className="accent-italic mt-10 text-lg text-taupe">For the moments that matter.</p>
      </div>
    </section>
  );
}
