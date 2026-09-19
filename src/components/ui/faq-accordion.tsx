"use client";

import { useState } from "react";
import { Icon } from "./icon";
import type { Faq } from "@/data/faq";

export function FaqAccordion({ items, dark = false }: { items: Faq[]; dark?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={`divide-y ${dark ? "divide-ivory/15" : "divide-line"}`}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-button-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className={`flex w-full items-center justify-between gap-6 py-5 text-left transition-colors ${
                  dark ? "text-ivory hover:text-brass" : "text-ink hover:text-terracotta"
                }`}
              >
                <span className="font-serif text-lg leading-snug md:text-xl">{item.q}</span>
                <span
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-colors ${
                    dark ? "border-ivory/30" : "border-ink/20"
                  }`}
                >
                  <Icon name={isOpen ? "minus" : "plus"} size={14} />
                </span>
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-button-${i}`}
              hidden={!isOpen}
              className="pb-6 pr-10"
            >
              <p className={`max-w-3xl text-[0.95rem] leading-relaxed ${dark ? "text-ivory/70" : "text-ink-soft"}`}>
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
