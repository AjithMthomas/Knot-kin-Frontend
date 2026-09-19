"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Show smooth initial loading screen animation
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 1400);

    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-forest-deep px-6 transition-opacity duration-700 ease-out ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-label="Loading Knot&Kin"
    >
      <div className="relative flex flex-col items-center text-center">
        {/* Ambient glow behind logo */}
        <div
          aria-hidden="true"
          className="absolute -top-10 h-44 w-44 rounded-full bg-brass/15 blur-3xl animate-pulse"
        />

        {/* Brand logo with text */}
        <div className="relative h-28 w-64 sm:h-36 sm:w-80">
          <Image
            src="/images/logo-with-text.png"
            alt="knot&kin — For the moments that matter."
            fill
            className="object-contain drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
            priority
            unoptimized
          />
        </div>

        {/* Elegant loading progress line */}
        <div className="mt-8 h-[2px] w-48 overflow-hidden rounded-full bg-white/15">
          <div className="h-full w-full bg-gradient-to-r from-brass via-white to-brass animate-[loading-bar_1.6s_ease-in-out_infinite]" />
        </div>

        <p className="accent-italic mt-4 text-sm text-ivory/70 tracking-wider">
          For the moments that matter.
        </p>
      </div>
    </div>
  );
}
