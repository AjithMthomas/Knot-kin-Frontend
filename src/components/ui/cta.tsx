import Link from "next/link";
import { Icon } from "./icon";
import { site, whatsappUrl, whatsappIsPlaceholder } from "@/data/site";

/** Primary rounded button. Renders an anchor variant for external/CTA semantics. */
export function CtaButton({
  href,
  children,
  variant = "primary",
  className = "",
  whatsapp = false,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "light" | "ghost-light";
  className?: string;
  whatsapp?: boolean;
  external?: boolean;
}) {
  const cls = `btn btn-${variant} ${className}`;

  if (whatsapp) {
    return (
      <a
        href={whatsappUrl(
          href === "/3-day-events"
            ? "Hello Knot&Kin! I need an event planned soon — possibly within 3 days. Can you help?"
            : `Hello Knot&Kin! I'd like to enquire about planning an event.`,
        )}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
      >
        {children}
        <Icon name="arrow" size={16} className="arrow" />
      </a>
    );
  }
  if (external || href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
        <Icon name="arrow" size={16} className="arrow" />
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
      <Icon name="arrow" size={16} className="arrow" />
    </Link>
  );
}

/** Underlined editorial arrow-link. */
export function ArrowLink({
  href,
  children,
  className = "",
  dark = false,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}) {
  const isExternal = href.startsWith("http");
  const inner = (
    <>
      <span>{children}</span>
      <Icon name="arrow" size={16} className="arrow" />
    </>
  );
  const cls = `link-underline text-sm font-medium tracking-[0.08em] uppercase ${
    dark ? "text-ivory" : "text-ink"
  } ${className}`;
  return isExternal ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

/**
 * WhatsApp float/inline button. If the business number is still the placeholder,
 * we keep the link (so the flow is demonstrable) but note it in the title attr.
 */
export function WhatsappLink({
  message,
  children,
  className = "",
}: {
  message?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      title={whatsappIsPlaceholder ? "Placeholder number — set in src/data/site.ts" : undefined}
    >
      {children}
    </a>
  );
}

export function WhatsappButton({ className = "", label = "WhatsApp Us" }: { className?: string; label?: string }) {
  return (
    <WhatsappLink
      className={`btn btn-outline ${className}`}
      message={`Hello ${site.name}! I'd like to enquire about planning an event.`}
    >
      <Icon name="whatsapp" size={18} />
      {label}
    </WhatsappLink>
  );
}
