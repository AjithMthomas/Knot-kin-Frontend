import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/ui/section";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms for using the Knot&Kin website — informational use, enquiry flow, no-guarantee language for fast-track planning and intellectual property.",
};

const blocks: { h: string; ps: string[] }[] = [
  {
    h: "1. About these terms",
    ps: [
      "These terms govern your use of this website. By using the site, you accept them. If you don't agree, please don't use the site.",
      `${site.legalName} operates this website from Kerala, India.`,
    ],
  },
  {
    h: "2. Information, not a contract",
    ps: [
      "Content on this site — including service descriptions, event categories, settings, moodboards and portfolio entries — is for general information only. It is not an offer, quotation or guarantee of availability.",
      "Portfolio entries currently shown are clearly labelled design placeholders, not completed projects.",
    ],
  },
  {
    h: "3. Event enquiries & fast-track planning",
    ps: [
      "Submitting an enquiry (including through WhatsApp) does not create a booking or contract. Bookings are formed only through a written agreement signed by both parties.",
      "Fast-track (3-day) planning is subject to event scope, venue availability, vendor availability and execution requirements. Three days is not guaranteed for any event until confirmed by us in writing.",
      "Guest counts: our planning focus is events under 300 guests. Enquiries for 300 or more guests are considered case by case, as stated on the site.",
    ],
  },
  {
    h: "4. Pricing",
    ps: [
      "No prices on this site constitute an offer. Every event is quoted individually after understanding scope, guests, venue and production needs.",
    ],
  },
  {
    h: "5. Intellectual property",
    ps: [
      `The ${site.name} name, wordmark, monogram, website design and copy are the property of ${site.legalName}. Generated moodboard artwork on this site is placeholder imagery intended for design preview only.`,
      "You may share links to this site freely; please don't reuse its content commercially without permission.",
    ],
  },
  {
    h: "6. Liability",
    ps: [
      "The site is provided 'as is'. To the extent permitted by law, we exclude liability for indirect or consequential loss arising from use of the site. Nothing here limits liability that cannot be excluded under Indian law.",
    ],
  },
  {
    h: "7. Governing law",
    ps: [
      "These terms are governed by the laws of India. Courts in Kerala shall have exclusive jurisdiction over disputes arising from the use of this website.",
    ],
  },
  {
    h: "8. Contact",
    ps: [
      `Questions about these terms? Reach us on WhatsApp during ${site.hours}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        intro="The plain-language version — how this website may be used and what it does and doesn't promise."
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
        </div>
      </Section>
    </>
  );
}
