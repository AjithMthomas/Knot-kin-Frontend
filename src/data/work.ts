/**
 * Portfolio — Phase 1 design placeholders.
 * These are NOT completed projects. Titles are generic and clearly marked;
 * replace `isPlaceholder: false` entries with real project information only.
 */

export type Work = {
  slug: string;
  title: string;
  category: string; // filter key: Weddings | Birthdays | Corporate | Private | Destination | Entertainment
  eventCategorySlug: string; // link to event category detail
  location: string;
  guests?: number;
  year: string;
  brief: string;
  concept: string;
  services: string[];
  experience: string;
  gallery: { src: string; alt: string }[];
  isPlaceholder: true;
};

const mk = (
  slug: string,
  title: string,
  category: string,
  eventCategorySlug: string,
  location: string,
  guests: number | undefined,
  year: string,
  brief: string,
  concept: string,
  services: string[],
  experience: string,
  gallery: { src: string; alt: string }[],
): Work => ({
  slug,
  title,
  category,
  eventCategorySlug,
  location,
  guests,
  year,
  brief,
  concept,
  services,
  experience,
  gallery,
  isPlaceholder: true,
});

export const works: Work[] = [
  mk(
    "alexy-backwaters",
    "Ale & Cy — Backwater Vows",
    "Destination",
    "weddings",
    "Alappuzha",
    86,
    "Design placeholder",
    "A lakeside wedding mood board: sunset ceremony deck, floating-diyas welcome, banana-leaf dinner.",
    "Styling concept: single-varietal florals, raw silk drapes, lantern-lit decks, one long family table.",
    ["Complete planning", "Décor & styling", "Catering coordination", "Photography", "Guest management"],
    "Imagined experience: boats arrive at dusk, ceremony at golden hour, dinner under string lights, boats home by ten.",
    [
      { src: "/images/work-alexy-backwaters.svg", alt: "Design placeholder — backwater wedding styling board" },
      { src: "/images/gallery-3.svg", alt: "Design placeholder — ceremony deck detail" },
      { src: "/images/gallery-6.svg", alt: "Design placeholder — dinner tablescape" },
    ],
  ),
  mk(
    "sana-courtyard",
    "Sana & Vikram — Courtyard Nikah",
    "Weddings",
    "weddings",
    "Kochi",
    60,
    "Design placeholder",
    "A minimal Nikah mood board: heritage courtyard, single-flower styling, acoustic duo.",
    "Styling concept: white and green only, floor seating, hand-lettered signage, no stage.",
    ["Planning", "Décor & styling", "Photography", "Sound"],
    "Imagined experience: a quiet afternoon ceremony, chai service, and a family lunch in the shade.",
    [
      { src: "/images/work-sana-courtyard.svg", alt: "Design placeholder — courtyard Nikah styling board" },
      { src: "/images/gallery-2.svg", alt: "Design placeholder — floor seating detail" },
      { src: "/images/gallery-5.svg", alt: "Design placeholder — floral detail" },
    ],
  ),
  mk(
    "arav-terrace",
    "Arav Turns One",
    "Birthdays",
    "birthdays",
    "Kozhikode",
    45,
    "Design placeholder",
    "A first-birthday mood board: terrace garden party, pastel palette, tiny guests of honour.",
    "Styling concept: fabric bunting, balloon-free styling, storybook corner, milk-and-cookies bar.",
    ["Theme direction", "Décor", "Entertainment", "Photography"],
    "Imagined experience: afternoon light, grandparents on the front row, cake at golden hour.",
    [
      { src: "/images/work-arav-terrace.svg", alt: "Design placeholder — first birthday styling board" },
      { src: "/images/gallery-4.svg", alt: "Design placeholder — party table detail" },
      { src: "/images/gallery-1.svg", alt: "Design placeholder — garden styling" },
    ],
  ),
  mk(
    "meridian-launch",
    "Meridian — Launch Night",
    "Corporate",
    "corporate",
    "Kochi",
    180,
    "Design placeholder",
    "A product-launch mood board: gallery-style reveal, press corner, artist interactions.",
    "Production concept: dark hall, one spotlight object, wayfinding in brass, live sketch artist.",
    ["Creative direction", "Stage & AV", "Lighting", "Guest management"],
    "Imagined experience: doors at seven, reveal at eight, conversations until late.",
    [
      { src: "/images/work-meridian-launch.svg", alt: "Design placeholder — launch night stage" },
      { src: "/images/gallery-7.svg", alt: "Design placeholder — reveal moment" },
      { src: "/images/gallery-3.svg", alt: "Design placeholder — press corner" },
    ],
  ),
  mk(
    "proposal-marari",
    "A Proposal at Marari",
    "Private",
    "private-celebrations",
    "Marari",
    2,
    "Design placeholder",
    "A proposal mood board: one lantern-lit deck, hidden violinist, dinner after the yes.",
    "Styling concept: candlelight only, no flowers, menus hand-written the same morning.",
    ["Concept", "Décor", "Music coordination", "Photography"],
    "Imagined experience: a walk on the beach, one question, one very long dinner.",
    [
      { src: "/images/work-proposal-marari.svg", alt: "Design placeholder — private beach dinner" },
      { src: "/images/gallery-5.svg", alt: "Design placeholder — candlelight tablescape" },
      { src: "/images/gallery-2.svg", alt: "Design placeholder — private deck" },
    ],
  ),
  mk(
    "lakshmi-babyshower",
    "Lakshmi's Baby Shower",
    "Private",
    "family-milestones",
    "Thrissur",
    38,
    "Design placeholder",
    "A baby-shower mood board: home courtyard, marigold-and-jasmine styling, sadhya lunch.",
    "Styling concept: family textiles as drapes, brass urulis, a wishes quilt guests signed.",
    ["Planning", "Décor", "Catering coordination", "Photography"],
    "Imagined experience: morning haldi-style games, long sadhya lunch, evening lullaby circle.",
    [
      { src: "/images/work-lakshmi-babyshower.svg", alt: "Design placeholder — baby shower styling board" },
      { src: "/images/gallery-6.svg", alt: "Design placeholder — brass detail" },
      { src: "/images/gallery-4.svg", alt: "Design placeholder — wishes quilt" },
    ],
  ),
  mk(
    "rooftop-session",
    "The Rooftop Session",
    "Entertainment",
    "entertainment",
    "Kochi",
    120,
    "Design placeholder",
    "An intimate gig mood board: rooftop at dusk, acoustic set, city lights as the backdrop.",
    "Production concept: warm wash lighting, no stage barrier, vinyl-record invitations.",
    ["Artist curation", "Sound & lighting", "Guest list", "Event-day execution"],
    "Imagined experience: doors at six, first song at seven, encore at nine-thirty.",
    [
      { src: "/images/work-rooftop-session.svg", alt: "Design placeholder — rooftop session" },
      { src: "/images/gallery-1.svg", alt: "Design placeholder — dusk rooftop" },
      { src: "/images/gallery-7.svg", alt: "Design placeholder — warm stage light" },
    ],
  ),
];

export const workFilters = ["All", "Weddings", "Birthdays", "Corporate", "Private", "Destination", "Entertainment"] as const;

export function getWork(slug: string): Work | undefined {
  return works.find((w) => w.slug === slug);
}
