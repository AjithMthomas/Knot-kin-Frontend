/**
 * Curated photo slots (Unsplash) — plain data, safe to import from
 * both server and client components. Replace `src` with local files at any
 * time (`/images/photo-xxx.jpg`); every SmartImage falls back gracefully
 * to the local SVG moodboard if a photo can't load.
 */
export const photo = {
  heroHome: { src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2000&auto=format&fit=crop", fallback: "/images/hero-home-dark.svg" },
  heroAbout: { src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=2000&auto=format&fit=crop", fallback: "/images/hero-about-dark.svg" },
  heroWork: { src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=2000&auto=format&fit=crop", fallback: "/images/hero-work-dark.svg" },
  heroKerala: { src: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=2000&auto=format&fit=crop", fallback: "/images/hero-kerala-dark.svg" },
  hero3day: { src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2000&auto=format&fit=crop", fallback: "/images/hero-3day-dark.svg" },
  heroEvents: { src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2000&auto=format&fit=crop", fallback: "/images/hero-events.svg" },
  heroServices: { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2000&auto=format&fit=crop", fallback: "/images/hero-services.svg" },
  heroContact: { src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=2000&auto=format&fit=crop", fallback: "/images/hero-contact.svg" },
  ballroom: { src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop", fallback: "/images/space-ballroom.svg" },
  terrace: { src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200&auto=format&fit=crop", fallback: "/images/space-terrace.svg" },
  library: { src: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1200&auto=format&fit=crop", fallback: "/images/space-library.svg" },
  conservatory: { src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1200&auto=format&fit=crop", fallback: "/images/space-conservatory.svg" },
  weddings: { src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop", fallback: "/images/events-weddings.svg" },
  birthdays: { src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1200&auto=format&fit=crop", fallback: "/images/events-birthdays.svg" },
  family: { src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1200&auto=format&fit=crop", fallback: "/images/events-family.svg" },
  corporate: { src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop", fallback: "/images/events-corporate.svg" },
  private: { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop", fallback: "/images/events-private.svg" },
  entertainment: { src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1200&auto=format&fit=crop", fallback: "/images/events-entertainment.svg" },
  custom: { src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop", fallback: "/images/events-custom.svg" },
  backwaterVows: { src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop", fallback: "/images/work-alexy-backwaters.svg" },
  courtyardNikah: { src: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1200&auto=format&fit=crop", fallback: "/images/work-sana-courtyard.svg" },
  firstBirthday: { src: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?q=80&w=1200&auto=format&fit=crop", fallback: "/images/work-arav-terrace.svg" },
  launchNight: { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop", fallback: "/images/work-meridian-launch.svg" },
  proposal: { src: "https://images.unsplash.com/photo-1522098543979-ffc7f79a56c4?q=80&w=1200&auto=format&fit=crop", fallback: "/images/work-proposal-marari.svg" },
  babyShower: { src: "https://images.unsplash.com/photo-1522771930-78848d9293e8?q=80&w=1200&auto=format&fit=crop", fallback: "/images/work-lakshmi-babyshower.svg" },
  rooftopSession: { src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop", fallback: "/images/work-rooftop-session.svg" },
  galleryTable: { src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=1200&auto=format&fit=crop", fallback: "/images/gallery-2.svg" },
  galleryPeople: { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop", fallback: "/images/gallery-1.svg" },
  galleryDetail: { src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop", fallback: "/images/gallery-5.svg" },
  galleryEvening: { src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop", fallback: "/images/gallery-6.svg" },
} as const;

export const heroSlides = [
  {
    src: "/images/bg-2.png",
    fallback: "/images/hero-home-dark.svg",
    alt: "Beautiful event setting — Knot&Kin background 1",
  },
  {
    src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2000&auto=format&fit=crop",
    fallback: "/images/hero-home-dark.svg",
    alt: "Wedding ceremony arch beneath open skies — Knot&Kin",
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
] as const;
