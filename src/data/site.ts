/**
 * KNOT&KIN — central business configuration.
 * Replace the placeholder values marked with `placeholder` once real details are available.
 * Nothing else in the site needs to change when these are updated.
 */

export const site = {
  name: "knot&kin",
  legalName: "Knot&Kin", // placeholder — update to registered business name
  tagline: "For the moments that matter.",
  description:
    "Knot&Kin creates thoughtful weddings, private celebrations, corporate events and memorable gatherings for under 300 guests across Kerala.",
  url: "https://knotandkin.in", // placeholder — update when domain is final
  whatsappNumber: "919995065389",
  email: "hello@knotandkin.in", // placeholder
  phoneDisplay: "+91 99950 65389",
  location: "Kerala, India",
  hours: "Monday – Saturday · 9:30 am – 6:30 pm IST",
  social: {
    instagram: "", // placeholder — add when available
    facebook: "",
    pinterest: "",
  },
} as const;

/** True while the real WhatsApp number has not been set in site config. */
export const whatsappIsPlaceholder = !/^\d{10,15}$/.test(site.whatsappNumber);

/** wa.me click-to-chat link with an optional prefilled message. */
export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const nav = [
  { label: "Events", href: "/events" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/our-work" },
  { label: "Kerala", href: "/kerala" },
  { label: "About", href: "/about" },
] as const;

export type EventCategory = {
  slug: string;
  name: string;
  short: string;
  intro: string;
  types: string[];
  services: string[];
  settings: { title: string; text: string }[];
  experiences: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
  hero: string;
  gallery: { src: string; alt: string }[];
};

export const eventCategories: EventCategory[] = [
  {
    slug: "weddings",
    name: "Weddings",
    short: "Intimate weddings, receptions, engagements & traditional celebrations.",
    intro:
      "A wedding is a day of many moments — and every one of them deserves care. We plan intimate weddings, receptions, engagements and traditional Kerala ceremonies with an eye on what the day feels like, not just how it looks.",
    types: [
      "Intimate weddings",
      "Receptions",
      "Engagement ceremonies",
      "Mehndi & haldi",
      "Sangeet evenings",
      "Nikah ceremonies",
      "Traditional Kerala weddings",
      "Destination weddings",
    ],
    services: [
      "Complete wedding planning",
      "Décor & styling",
      "Venue coordination",
      "Catering coordination",
      "Photography & videography",
      "Guest management & hospitality",
      "Event-day coordination",
    ],
    settings: [
      {
        title: "Heritage courtyards",
        text: "Old Kerala homes, temple ponds and tiled roofs for ceremonies rooted in place.",
      },
      {
        title: "Backwater lawns",
        text: "Waterfront venues around Alappuzha and Kumarakom for golden-hour celebrations.",
      },
      {
        title: "Hill-station resorts",
        text: "Misty Munnar and Wayanad settings for destination weddings and intimate guest lists.",
      },
    ],
    experiences: [
      {
        title: "The homecoming wedding",
        text: "A two-day celebration in an ancestral home — moodéh lighting, banana-leaf lunches, a courtyard dinner under string lights.",
      },
      {
        title: "The minimal Nikah",
        text: "A quiet ceremony for 60, single-flower styling, an acoustic duo and a long family table.",
      },
    ],
    faqs: [
      {
        q: "How far in advance should we plan our wedding?",
        a: "Most weddings come to us 4–9 months ahead. Smaller, simpler ceremonies can come together sooner — and some even within our 3-day fast-track, subject to availability.",
      },
      {
        q: "Do you only plan weddings under 300 guests?",
        a: "Yes. Keeping events under 300 guests is what lets us stay personal with every family and detail.",
      },
      {
        q: "Can you handle traditional ceremonies as well as modern receptions?",
        a: "Absolutely — from Nikah and traditional Hindu ceremonies to contemporary receptions, we shape the plan around your rituals and your people.",
      },
    ],
    hero: "/images/events-weddings.svg",
    gallery: [
      { src: "/images/work-alexy-backwaters.svg", alt: "Placeholder — backwater ceremony styling" },
      { src: "/images/work-sana-courtyard.svg", alt: "Placeholder — courtyard dinner tablescape" },
      { src: "/images/gallery-3.svg", alt: "Placeholder — wedding detail" },
    ],
  },
  {
    slug: "birthdays",
    name: "Birthdays",
    short: "Kids' birthdays, milestones, surprise parties & theme celebrations.",
    intro:
      "From a first birthday filled with tiny guests to a milestone dinner for someone special — birthdays are the easiest occasions to make personal, and we love them for it.",
    types: [
      "Kids' birthdays",
      "Milestone birthdays",
      "Surprise parties",
      "Theme celebrations",
      "Private gatherings",
      "60th & 70th celebrations",
    ],
    services: [
      "Theme & creative direction",
      "Décor & styling",
      "Entertainment & games",
      "Cake & dessert coordination",
      "Photography",
      "Event-day coordination",
    ],
    settings: [
      { title: "Home & terrace parties", text: "Your own spaces, transformed — the most personal venue of all." },
      { title: "Café & garden takeovers", text: "Boutique cafés and garden spaces for relaxed daytime celebrations." },
      { title: "Resort day-celebrations", text: "Poolside and lawn celebrations for larger family gatherings." },
    ],
    experiences: [
      {
        title: "The sunrise surprise",
        text: "A 6 am terrace surprise — breakfast table, flower arch, and family arriving in the dark with lanterns.",
      },
      {
        title: "The little explorer party",
        text: "A garden adventure course, craft tables and a cake as the centrepiece of the afternoon.",
      },
    ],
    faqs: [
      {
        q: "Can you plan a birthday on short notice?",
        a: "Often, yes — birthdays are one of our most common 3-day fast-track events, subject to venue and vendor availability.",
      },
      {
        q: "Do you work in homes and apartments?",
        a: "We do. Some of the most memorable birthdays happen in living rooms, terraces and courtyards.",
      },
      {
        q: "Can you manage entertainment for kids?",
        a: "Yes — from storytellers and balloon artists to game hosts and craft stations.",
      },
    ],
    hero: "/images/events-birthdays.svg",
    gallery: [
      { src: "/images/work-arav-terrace.svg", alt: "Placeholder — terrace birthday styling" },
      { src: "/images/gallery-4.svg", alt: "Placeholder — kids party detail" },
      { src: "/images/gallery-6.svg", alt: "Placeholder — dessert table" },
    ],
  },
  {
    slug: "family-milestones",
    name: "Family & Milestones",
    short: "Anniversaries, baby showers, housewarmings, reunions & more.",
    intro:
      "The occasions that families hold closest — anniversaries, baby showers, naming ceremonies, housewarmings and reunions. Small on logistics, enormous on meaning.",
    types: [
      "Anniversaries",
      "Baby showers",
      "Naming ceremonies",
      "Baptisms & communions",
      "Family reunions",
      "Graduation celebrations",
      "Retirement gatherings",
      "Housewarmings",
    ],
    services: [
      "Complete event planning",
      "Décor & styling",
      "Catering coordination",
      "Photography & videography",
      "Guest management",
      "Event-day coordination",
    ],
    settings: [
      { title: "Family homes", text: "Celebrations where the family's own story is the backdrop." },
      { title: "Backwater venues", text: "Quiet waterfront settings for multi-generation gatherings." },
      { title: "Chapel & hall receptions", text: "Community halls and church halls, styled simply and warmly." },
    ],
    experiences: [
      {
        title: "The golden anniversary",
        text: "A 50th anniversary recreated from an old wedding photograph — same flowers, same colours, new memories.",
      },
      {
        title: "The housewarming weekend",
        text: "A two-day open house with sadhya lunch, evening tea and a wall where guests wrote wishes.",
      },
    ],
    faqs: [
      {
        q: "We want a small family-only event. Is that okay?",
        a: "It's ideal. Some of our favourite events have been under 30 guests.",
      },
      {
        q: "Can you coordinate with priests or ceremony requirements?",
        a: "Yes — we coordinate timing, venue and logistics around your ceremony requirements across communities.",
      },
      {
        q: "Do you plan housewarmings outside cities?",
        a: "We plan across Kerala, including towns and villages — location rarely limits a good plan.",
      },
    ],
    hero: "/images/events-family.svg",
    gallery: [
      { src: "/images/work-lakshmi-babyshower.svg", alt: "Placeholder — baby shower styling" },
      { src: "/images/gallery-2.svg", alt: "Placeholder — family gathering" },
      { src: "/images/gallery-5.svg", alt: "Placeholder — celebration detail" },
    ],
  },
  {
    slug: "corporate",
    name: "Corporate Events",
    short: "Team celebrations, launches, conferences & award nights.",
    intro:
      "Corporate events work best when they feel considered, not corporate. We plan team celebrations, launches, offsites and award nights for companies that want their gatherings to feel human.",
    types: [
      "Team celebrations",
      "Annual day events",
      "Product launches",
      "Brand activations",
      "Conferences & seminars",
      "Workshops & offsites",
      "Award nights",
      "Networking evenings",
    ],
    services: [
      "Event planning & production",
      "Creative direction",
      "Stage & AV production",
      "Sound, lighting & LED",
      "Photography & videography",
      "Guest & RSVP management",
      "Hospitality & transport coordination",
    ],
    settings: [
      { title: "Hotel ballrooms", text: "Dependable, scalable settings for conferences and award nights." },
      { title: "Boutique venues", text: "Distinctive spaces in Fort Kochi and beyond for launches and activations." },
      { title: "Resort offsites", text: "Munnar, Wayanad and beachside resorts for team retreats." },
    ],
    experiences: [
      {
        title: "The launch evening",
        text: "A product launch staged as a gallery opening — reveal moment, artist interactions, press corner.",
      },
      {
        title: "The team away-day",
        text: "A resort offsite blending workshops, a long-lunch and an acoustic evening by the water.",
      },
    ],
    faqs: [
      {
        q: "Can you manage AV and technical production?",
        a: "Yes — staging, sound, lighting, LED walls and technical crews are part of our coordination scope.",
      },
      {
        q: "Do you handle guest logistics for outstation teams?",
        a: "We coordinate transport, stay and hospitality for visiting teams across Kerala.",
      },
      {
        q: "Can you work within procurement and invoicing processes?",
        a: "Yes — we're comfortable working with formal quotations, POs and invoicing.",
      },
    ],
    hero: "/images/events-corporate.svg",
    gallery: [
      { src: "/images/work-meridian-launch.svg", alt: "Placeholder — product launch stage" },
      { src: "/images/gallery-1.svg", alt: "Placeholder — corporate gathering" },
      { src: "/images/gallery-7.svg", alt: "Placeholder — award night" },
    ],
  },
  {
    slug: "private-celebrations",
    name: "Private Celebrations",
    short: "Private dinners, proposals, surprises & custom gatherings.",
    intro:
      "A proposal on a quiet deck. A farewell dinner. A just-because celebration. These are the events with no template — and they're often the ones people remember longest.",
    types: [
      "Private dinners",
      "Proposals",
      "Surprise events",
      "Farewell gatherings",
      "Family gatherings",
      "Just-because celebrations",
    ],
    services: [
      "Concept & creative direction",
      "Décor & styling",
      "Private chef & catering coordination",
      "Photography",
      "Music & entertainment",
      "Full coordination",
    ],
    settings: [
      { title: "Private decks & lawns", text: "One-table settings in your own space or a borrowed view." },
      { title: "Boutique restaurants", text: "Takeovers and corners of warm, quiet restaurants." },
      { title: "Houseboat evenings", text: "Slow dinners drifting through the backwaters." },
    ],
    experiences: [
      {
        title: "The backwater proposal",
        text: "A single lantern-lit deck, a violinist hidden until the moment, and a dinner that followed the yes.",
      },
      {
        title: "The farewell table",
        text: "A long table of twenty, each place marked with a note from someone who'll miss them.",
      },
    ],
    faqs: [
      {
        q: "Can you keep a surprise a secret?",
        a: "Discretion is the whole job. We coordinate quietly and stay behind the scenes until the moment.",
      },
      {
        q: "What's the smallest event you'll plan?",
        a: "Two. We've planned dinners for two and we'd happily do it again.",
      },
      {
        q: "Can you plan something outside your usual categories?",
        a: "That's what custom events are for — tell us the idea and we'll shape it with you.",
      },
    ],
    hero: "/images/events-private.svg",
    gallery: [
      { src: "/images/work-proposal-marari.svg", alt: "Placeholder — private beach dinner" },
      { src: "/images/gallery-4.svg", alt: "Placeholder — intimate dinner" },
      { src: "/images/gallery-2.svg", alt: "Placeholder — private celebration" },
    ],
  },
  {
    slug: "entertainment",
    name: "Entertainment",
    short: "Live music, DJs, artist shows & themed evenings.",
    intro:
      "The right artist at the right moment can carry an entire evening. We curate and manage live music, DJs, performers and themed entertainment for private and public gatherings.",
    types: [
      "Live music evenings",
      "DJ nights",
      "Acoustic sets",
      "Artist showcases",
      "Stand-up comedy events",
      "Stage performances",
      "Themed parties",
    ],
    services: [
      "Artist curation & booking coordination",
      "Stage & technical production",
      "Sound & lighting",
      "Theming & styling",
      "Guest list & entry management",
      "Event-day execution",
    ],
    settings: [
      { title: "Courtyard concerts", text: "Heritage courtyards and gardens for seated acoustic evenings." },
      { title: "Rooftop stages", text: "City rooftops for DJ nights and birthday gig-style celebrations." },
      { title: "Resort lawns", text: "Full-moon lawns and beachside stages for destination entertainment." },
    ],
    experiences: [
      {
        title: "The courtyard session",
        text: "A seated acoustic evening — 80 guests, candle lanterns, a singer-songwriter and no phones on the floor.",
      },
      {
        title: "The silent-disco sangeet",
        text: "Three channels, one courtyard, headphones glowing — a neighbourhood-friendly way to dance all night.",
      },
    ],
    faqs: [
      {
        q: "Do you book the artists yourselves?",
        a: "We curate and coordinate artists from our network — singers, bands, DJs, hosts and performers — and manage their requirements end to end.",
      },
      {
        q: "Can you manage sound permissions and noise rules?",
        a: "We coordinate with venues on sound limits and timings, and plan the set around them.",
      },
      {
        q: "Can entertainment be added to another event type?",
        a: "Yes — entertainment is often one layer of a wedding, birthday or corporate plan.",
      },
    ],
    hero: "/images/events-entertainment.svg",
    gallery: [
      { src: "/images/work-rooftop-session.svg", alt: "Placeholder — rooftop live session" },
      { src: "/images/gallery-6.svg", alt: "Placeholder — stage styling" },
      { src: "/images/gallery-3.svg", alt: "Placeholder — artist moment" },
    ],
  },
  {
    slug: "custom-events",
    name: "Custom Events",
    short: "Have an idea that doesn't fit a category? Let's shape it.",
    intro:
      "A pop-up supper club. A neighbourhood festival. A product that isn't a product. If your idea doesn't fit a category, it's probably exactly the kind of event we'd love to plan.",
    types: [
      "Pop-up experiences",
      "Community gatherings",
      "Club & society events",
      "Cultural programmes",
      "Charity fundraisers",
      "Completely new ideas",
    ],
    services: [
      "Concept development",
      "Creative direction",
      "Full planning & coordination",
      "Vendor curation",
      "Production & logistics",
      "Event-day execution",
    ],
    settings: [
      { title: "Found spaces", text: "Warehouses, courtyards, islands, rooftops — the less obvious the better." },
      { title: "Public-adjacent venues", text: "Halls and grounds for community and cultural gatherings." },
      { title: "Wherever the idea lives", text: "We plan around the concept, not the other way round." },
    ],
    experiences: [
      {
        title: "The monsoon supper club",
        text: "A one-night-only dinner during the first rains — one long table, lantern light, a menu built around the season.",
      },
      {
        title: "The street reunion",
        text: "A closed-lane evening for an entire neighbourhood — food stalls, string lights and decades of stories.",
      },
    ],
    faqs: [
      {
        q: "How do we start with an unusual idea?",
        a: "Tell us the feeling you're after and roughly how many people. We'll come back with a shape, a setting and a plan.",
      },
      {
        q: "Do custom events cost more?",
        a: "Not necessarily — custom describes the idea, not the budget. Costs follow scope, guests and production needs.",
      },
      {
        q: "Is there an event size limit for custom events?",
        a: "We stay under 300 guests across everything we plan, including custom events.",
      },
    ],
    hero: "/images/events-custom.svg",
    gallery: [
      { src: "/images/gallery-5.svg", alt: "Placeholder — pop-up styling" },
      { src: "/images/gallery-1.svg", alt: "Placeholder — community gathering" },
      { src: "/images/gallery-7.svg", alt: "Placeholder — custom event detail" },
    ],
  },
];

export const guestRanges = [
  "1–50",
  "51–100",
  "101–150",
  "151–200",
  "201–250",
  "251–299",
] as const;

export const atmosphereOptions = [
  "Elegant",
  "Minimal",
  "Traditional",
  "Modern",
  "Luxury",
  "Boho",
  "Fun & colorful",
  "Nature-inspired",
  "Corporate",
  "Not sure yet",
] as const;

export const serviceOptions = [
  "Complete event planning",
  "Décor & styling",
  "Venue coordination",
  "Catering coordination",
  "Photography",
  "Videography",
  "Sound & lighting",
  "Entertainment",
  "Guest management",
  "Hospitality",
  "Event-day coordination",
  "Custom requirements",
] as const;

export const budgetOptions = [
  "Under ₹1 lakh",
  "₹1–2 lakh",
  "₹2–5 lakh",
  "₹5–10 lakh",
  "₹10–25 lakh",
  "Prefer to discuss",
] as const;

export const occasionOptions = [
  "Wedding",
  "Engagement",
  "Birthday",
  "Anniversary",
  "Corporate Event",
  "Product Launch",
  "Private Dinner",
  "Baby Celebration",
  "Family Gathering",
  "Entertainment Event",
  "Destination Event",
  "Custom Event",
  "Other",
] as const;

export const venueStatusOptions = [
  "Yes, venue confirmed",
  "No, I need a venue",
  "Still deciding",
  "Event will be at home",
  "Other",
] as const;

export const keralaDistricts = [
  "Thiruvananthapuram",
  "Kollam",
  "Pathanamthitta",
  "Alappuzha",
  "Kottayam",
  "Idukki",
  "Ernakulam",
  "Thrissur",
  "Palakkad",
  "Malappuram",
  "Kozhikode",
  "Wayanad",
  "Kannur",
  "Kasaragod",
] as const;
