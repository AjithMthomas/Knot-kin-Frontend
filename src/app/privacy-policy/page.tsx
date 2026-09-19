import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/ui/section";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Knot&Kin handles information: this website stores no personal data — enquiries are sent by you, from your own device, through WhatsApp.",
};

const blocks: { h: string; ps: string[] }[] = [
  {
    h: "1. The short version",
    ps: [
      "This website does not collect, store or transmit your personal information to any server. There is no backend, no database and no analytics connected to your enquiry.",
      "When you complete the event enquiry form, your answers are combined into a message on your own device. WhatsApp opens with that message prefilled, and you choose whether to send it.",
    ],
  },
  {
    h: "2. What we receive",
    ps: [
      "If you choose to send an enquiry through WhatsApp, Knot&Kin receives whatever you include in that message — typically your name, phone number, event details and any additional information you add.",
      "We use this only to respond to your enquiry and plan your event. We do not sell, rent or share it with third parties for marketing.",
    ],
  },
  {
    h: "3. WhatsApp & third-party services",
    ps: [
      "The enquiry flow uses WhatsApp's click-to-chat feature (wa.me), operated by WhatsApp LLC / Meta. Once your message opens in WhatsApp, their privacy policy applies to that conversation and any data they process.",
      "This website loads fonts from Google Fonts. These requests are made by your browser and are governed by Google's privacy policy.",
    ],
  },
  {
    h: "4. Cookies & analytics",
    ps: [
      "Phase 1 of this website sets no cookies of its own and includes no analytics or tracking scripts.",
    ],
  },
  {
    h: "5. Your choices",
    ps: [
      "You decide what to include in your enquiry message — the only required details are your name and mobile number.",
      "You can ask us to correct or delete the information you've sent us at any time by contacting us through WhatsApp.",
    ],
  },
  {
    h: "6. Changes",
    ps: [
      "If the website later adds forms, analytics or other data handling, this policy will be updated before those changes go live.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        intro="Plain language, because it's a short policy — this site doesn't store your data."
        image="/images/hero-contact.svg"
        alt=""
      />
      <Section tone="ivory">
        <div className="mx-auto max-w-3xl space-y-10">
          {blocks.map((b) => (
            <div key={b.h}>
              <h2 className="font-serif text-2xl text-ink">{b.h}</h2>
              {b.ps.map((p) => (
                <p key={p.slice(0, 24)} className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
                  {p}
                </p>
              ))}
            </div>
          ))}
          <div className="rounded-sm border border-line bg-ivory-soft p-6 text-sm leading-relaxed text-ink-soft">
            Questions about this policy? Message us on WhatsApp — {site.location} · {site.hours}.
          </div>
        </div>
      </Section>
    </>
  );
}
