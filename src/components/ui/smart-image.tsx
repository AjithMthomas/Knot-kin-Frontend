"use client";

import { useState } from "react";

/**
 * SmartImage — renders a real photograph with graceful fallback.
 *
 * Phase 1 uses curated Unsplash photos (free to embed per their license).
 * If the network/image is unavailable, it falls back to the local generated
 * SVG moodboard so the layout never breaks. Swap `src` for local files
 * (e.g. /images/photo-xxx.jpg) whenever real photography is available.
 *
 * `overlay` darkens the image for text legibility (reference-style hero treatment).
 */
export function SmartImage({
  src,
  fallback,
  alt = "",
  overlay = "none",
  className = "",
  imgClassName = "",
  priority = false,
}: {
  src: string;
  fallback: string;
  alt?: string;
  overlay?: "none" | "soft" | "hero";
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const finalSrc = failed ? fallback : src;

  const overlayCls =
    overlay === "hero"
      ? "bg-gradient-to-t from-[#101825]/90 via-[#16202f]/35 to-[#16202f]/15"
      : overlay === "soft"
        ? "bg-[#16202f]/35"
        : "";

  return (
    <span className={`block overflow-hidden ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={finalSrc}
        alt={alt}
        onError={() => setFailed(true)}
        loading={priority ? "eager" : "lazy"}
        className={`h-full w-full object-cover ${imgClassName}`}
      />
      {overlayCls ? <span aria-hidden="true" className={`absolute inset-0 ${overlayCls}`} /> : null}
    </span>
  );
}
