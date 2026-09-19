export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  included: string[];
  categories: string[];
  icon: string; // line-art icon id
};

export const services: Service[] = [
  {
    slug: "planning",
    name: "Event Planning & Coordination",
    short: "The whole plan, held end to end — from first idea to final goodbye.",
    description:
      "Full-service planning for events under 300 guests. We take your occasion from idea to executed reality — timelines, budgets, vendors, checklists and one steady point of contact throughout.",
    included: [
      "Concept, theme & moodboard",
      "Budget planning & tracking",
      "Vendor sourcing & coordination",
      "Master timeline & run-sheet",
      "Guest list & RSVP tracking",
      "On-call planning support",
    ],
    categories: ["All event types"],
    icon: "plan",
  },
  {
    slug: "creative-direction",
    name: "Creative Direction",
    short: "A clear, personal idea that every detail answers to.",
    description:
      "Every event needs one idea strong enough to organise everything else — colours, materials, menu, music, light. We find that idea with you and carry it through every choice.",
    included: [
      "Creative concept & narrative",
      "Moodboards & palette",
      "Material & texture direction",
      "Stationery & signage design coordination",
      "Styling references for every vendor",
    ],
    categories: ["Weddings", "Corporate", "Private", "Entertainment"],
    icon: "compass",
  },
  {
    slug: "decor",
    name: "Décor & Styling",
    short: "Florals, fabric, light and furniture — the look and feel of the day.",
    description:
      "From single-flower minimalism to full celebratory installations, we design and coordinate décor that belongs to your venue, your culture and your budget.",
    included: [
      "Floral design & installation",
      "Stage & backdrop styling",
      "Tablescapes & seating décor",
      "Entrance & walkway styling",
      "Furniture & prop rentals",
      "Lighting design coordination",
    ],
    categories: ["All event types"],
    icon: "flower",
  },
  {
    slug: "venue",
    name: "Venue Coordination",
    short: "The right space, at the right price, with nothing overlooked.",
    description:
      "We shortlist venues that fit your guest count, vibe and budget, negotiate the details, and coordinate everything the venue needs from us — and everything we need from them.",
    included: [
      "Venue shortlisting & site visits",
      "Availability & rate negotiation",
      "Layout & floor planning",
      "Licences & permissions guidance",
      "Venue vendor coordination",
    ],
    categories: ["All event types"],
    icon: "venue",
  },
  {
    slug: "catering",
    name: "Catering Coordination",
    short: "Menus people talk about on the way home.",
    description:
      "Sadhyas, live counters, canapés or a single long-table dinner — we coordinate caterers and menus around your guests, your traditions and your timings.",
    included: [
      "Menu planning & tastings",
      "Caterer sourcing & coordination",
      "Live counters & stalls",
      "Dietary & cultural requirements",
      "Service staff & timeline",
    ],
    categories: ["All event types"],
    icon: "catering",
  },
  {
    slug: "photography",
    name: "Photography",
    short: "Candid, film-inspired coverage of the people and the in-betweens.",
    description:
      "We coordinate photographers whose style matches your day — quiet, candid and documentary, or full-coverage traditional, or both in one team.",
    included: [
      "Photographer curation",
      "Shot-list planning",
      "Candid & traditional coverage",
      "Same-day edits coordination",
      "Album design coordination",
    ],
    categories: ["Weddings", "Birthdays", "Family", "Corporate", "Private"],
    icon: "camera",
  },
  {
    slug: "videography",
    name: "Videography",
    short: "The day, retold — the vows, the laughter, the pause before the entrance.",
    description:
      "Cinematic and documentary-style videography teams, coordinated around your timeline so the camera is where the moment is.",
    included: [
      "Videographer curation",
      "Films: teaser, highlight, full",
      "Drone coverage coordination",
      "Live-stream coordination",
    ],
    categories: ["Weddings", "Corporate", "Family", "Entertainment"],
    icon: "video",
  },
  {
    slug: "sound-lighting",
    name: "Sound & Lighting",
    short: "The technical layer that makes everything feel effortless.",
    description:
      "PA systems, stage lighting, ambient washes, fairy lights, LED walls and the crews who run them — specified, coordinated and operated for your space.",
    included: [
      "PA & audio coordination",
      "Stage & ambient lighting",
      "LED screens & visuals",
      "Power planning & backups",
      "Technical crew management",
    ],
    categories: ["All event types"],
    icon: "sound",
  },
  {
    slug: "entertainment",
    name: "Entertainment & Artist Management",
    short: "Artists, hosts and moments that carry the evening.",
    description:
      "Bands, singers, DJs, instrumentalists, hosts, magicians and more — curated for your crowd, coordinated down to their rider, soundcheck and set times.",
    included: [
      "Artist curation & booking",
      "Rider & technical needs",
      "Set-list planning",
      "Hosts & emcees",
      "Backline & stage management",
    ],
    categories: ["Entertainment", "Weddings", "Birthdays", "Corporate"],
    icon: "music",
  },
  {
    slug: "guest-management",
    name: "Guest Management",
    short: "Every guest arrives knowing where to be, and feels looked after.",
    description:
      "Invitations, RSVPs, seating, welcome desks and the small courtesies — so the people you love are guests, not logistics.",
    included: [
      "Invitation coordination",
      "RSVP tracking",
      "Seating & table planning",
      "Welcome desk & ushers",
      "Accessibility considerations",
    ],
    categories: ["Weddings", "Family", "Corporate", "Birthdays"],
    icon: "guests",
  },
  {
    slug: "hospitality",
    name: "Hospitality & Transportation",
    short: "Stays, transfers and out-of-town guests, quietly handled.",
    description:
      "Room blocks, airport transfers, guest shuttles and welcome kits — the coordination layer for destination events and outstation guests.",
    included: [
      "Hotel & stay coordination",
      "Airport & local transfers",
      "Guest shuttles",
      "Welcome kits & amenities",
      "Outstation guest support",
    ],
    categories: ["Destination", "Weddings", "Corporate"],
    icon: "travel",
  },
  {
    slug: "event-day",
    name: "Event-Day Execution",
    short: "A calm team running the day so you can live in it.",
    description:
      "On the day itself, our coordinators run the timeline, manage vendors, cue the moments and solve the problems you'll never hear about.",
    included: [
      "Day-of coordinator & team",
      "Timeline & cue management",
      "Vendor arrival & setup oversight",
      "Emergency kit & backup plans",
      "Teardown coordination",
    ],
    categories: ["All event types"],
    icon: "clock",
  },
  {
    slug: "rentals",
    name: "Rentals & Production",
    short: "Stages, tents, furniture and the behind-the-scenes build.",
    description:
      "Tents and mandaps, stages and dance floors, furniture and tableware, generators and more — sourced, delivered and struck on time.",
    included: [
      "Stage & dance floor",
      "Tents, shamianas & mandaps",
      "Furniture & tableware",
      "Generators & power",
      "Delivery & setup crews",
    ],
    categories: ["All event types"],
    icon: "box",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
