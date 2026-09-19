import Link from "next/link";
import Image from "next/image";
import { nav, site, whatsappUrl } from "@/data/site";
import { Icon } from "@/components/ui/icon";

export function Footer() {
  return (
    <footer className="bg-forest text-white">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <span className="relative block h-14 w-14 drop-shadow-[0_2px_10px_rgba(10,16,26,0.4)]">
              <Image
                src="/images/logo-mark.svg"
                alt="knot&kin — For the moments that matter."
                width={70}
                height={85}
                className="h-full w-full object-contain object-left"
                unoptimized
              />
            </span>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              Thoughtful planning for weddings, celebrations and gatherings under 300 guests —
              across Kerala.
            </p>
            <a
              href={whatsappUrl(`Hello ${site.name}! I'd like to enquire about planning an event.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-transform duration-300 hover:scale-[1.03]"
            >
              <Icon name="whatsapp" size={18} />
              WhatsApp us
            </a>
          </div>

          <nav aria-label="Footer">
            <h2 className="eyebrow mb-5 text-white/50">Explore</h2>
            <ul className="space-y-3 text-sm">
              {[{ label: "Home", href: "/" }, ...nav, { label: "FAQ", href: "/faq" }].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/85 transition-colors hover:text-brass">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow mb-5 text-white/50">Plan an event</h2>
            <ul className="space-y-3 text-sm text-white/85">
              <li>
                <Link href="/plan-my-event" className="transition-colors hover:text-brass">
                  Plan My Event
                </Link>
              </li>
              <li>
                <Link href="/3-day-events" className="transition-colors hover:text-brass">
                  3-Day Events
                </Link>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="pin" size={15} className="mt-0.5 shrink-0 text-brass" />
                <span>{site.location}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="clock" size={15} className="mt-0.5 shrink-0 text-brass" />
                <span>{site.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/15 pt-7 text-[0.78rem] text-white/55 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="transition-colors hover:text-brass">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-brass">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
