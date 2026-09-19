"use client";

import { useEffect, useState } from "react";
import { SmartImage } from "@/components/ui/smart-image";
import { heroSlides, photo } from "@/data/photos";

const slides = [
  {
    src: photo.heroHome.src,
    fallback: photo.heroHome.fallback,
    alt: "Wedding ceremony arch beneath open skies — Knot&Kin",
  },
  {
    src: "/images/bg-2.png",
    fallback: "/images/hero-home-dark.svg",
    alt: "Beautiful event setting — Knot&Kin background 2",
  },
  {
    src: "/images/bg-3.png",
    fallback: "/images/hero-about-dark.svg",
    alt: "Elegant celebration backdrop — Knot&Kin background 3",
  },
  {
    src: "/images/bg-4.png",
    fallback: "/images/hero-work-dark.svg",
    alt: "Memorable celebration moment — Knot&Kin background 4",
  },
];

export function HeroSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <SmartImage
            src={slide.src}
            fallback={slide.fallback}
            alt={slide.alt}
            overlay="hero"
            className="absolute inset-0 h-full w-full"
            imgClassName={`h-full w-full object-cover transition-transform duration-[6500ms] ease-out ${
              i === index ? "scale-105" : "scale-100"
            }`}
            priority={i === 0}
          />
        </div>
      ))}

      {/* radial vignette overlay for hero text legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-20 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(16,24,37,0.45)_0%,rgba(16,24,37,0.22)_45%,rgba(16,24,37,0.65)_100%)]"
      />

      {/* slide navigation dot indicators */}
      <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index ? "true" : undefined}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === index ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
