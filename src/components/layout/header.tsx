"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { nav, site } from "@/data/site";
import { Icon } from "@/components/ui/icon";
import { WhatsappLink } from "@/components/ui/cta";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const overDark = !scrolled && !open;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    const raf = requestAnimationFrame(onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // lock body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // escape closes menu
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? "border-b border-line/80 bg-white/95 backdrop-blur-sm"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8 md:h-[5.5rem]">
          {/* left: brand logo & desktop navigation */}
          <div className="flex items-center gap-8 lg:gap-12">
            <Link
              href="/"
              className="group relative shrink-0"
              aria-label={`${site.name} — home`}
            >
              <span className="relative block h-14 w-14 md:h-16 md:w-16 drop-shadow-[0_2px_10px_rgba(10,16,26,0.55)]">
                <Image
                  src={overDark ? "/images/logo-mark.svg" : "/images/logo-mark-slate.svg"}
                  alt="knot&kin"
                  width={64}
                  height={78}
                  className="h-full w-full object-contain object-left transition-opacity duration-500"
                  priority
                  unoptimized
                />
              </span>
            </Link>

            <nav aria-label="Primary" className="hidden items-center gap-6 xl:flex 2xl:gap-8">
              {nav.map((item) => {
                const active = pathname === item.href || pathname.startsWith(item.href + "/");
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`text-[0.7rem] font-medium uppercase tracking-[0.22em] transition-colors duration-500 ${
                      overDark
                        ? "text-white/90 hover:text-white"
                        : active
                          ? "text-terracotta"
                          : "text-ink hover:text-terracotta"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* right: mobile hamburger / desktop CTA */}
          <div className="flex items-center justify-end gap-3">
            <div className="hidden sm:block">
              <Link
                href="/plan-my-event"
                className={`btn min-h-0 px-6 py-2.5 text-[0.7rem] transition-all duration-500 ${
                  overDark
                    ? "border border-white/70 bg-transparent text-white hover:bg-white hover:text-ink"
                    : "btn-primary"
                }`}
              >
                Plan My Event
                <Icon name="arrow" size={14} className="arrow" />
              </Link>
            </div>
            <button
              type="button"
              className={`grid h-11 w-11 place-items-center transition-colors duration-500 xl:hidden ${
                overDark ? "text-white" : "text-ink"
              }`}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <Icon name={open ? "close" : "menu"} size={24} strokeWidth={1.4} />
            </button>
          </div>
        </div>
      </header>

      {/* mobile drawer */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-ivory transition-all duration-500 xl:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        hidden={!open}
      >
        <div className="flex h-full flex-col overflow-y-auto px-6 pt-24 pb-10">
          <nav aria-label="Mobile" className="flex flex-col">
            {[{ label: "Home", href: "/" }, ...nav, { label: "FAQ", href: "/faq" }, { label: "Contact", href: "/plan-my-event" }].map(
              (item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`border-b border-line/70 py-4 font-serif text-2xl text-ink transition-all duration-500 ${
                    open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                  }`}
                  style={{ transitionDelay: open ? `${80 + i * 45}ms` : "0ms" }}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="mt-8 flex flex-col gap-3">
            <Link href="/plan-my-event" onClick={closeMenu} className="btn btn-primary w-full">
              Plan My Event
              <Icon name="arrow" size={16} className="arrow" />
            </Link>
            <WhatsappLink
              className="btn btn-whatsapp w-full"
              message={`Hello ${site.name}! I'd like to enquire about planning an event.`}
            >
              <Icon name="whatsapp" size={18} className="text-white" />
              <span className="text-white">WhatsApp Us</span>
            </WhatsappLink>
          </div>

          <p className="accent-italic mt-auto pt-10 text-sm text-taupe">{site.tagline}</p>
        </div>
      </div>
    </>
  );
}
