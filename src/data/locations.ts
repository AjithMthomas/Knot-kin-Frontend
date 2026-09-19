/**
 * Kerala service areas & destination-event inspiration.
 * Each location carries its real lat/lng; the map component projects these
 * onto the accurate state boundary (see src/data/kerala-shape.ts).
 * Note: these are service-area suggestions, not confirmed venue partnerships.
 */

export type KkLocationImage = {
  src: string;
  fallback: string;
  caption: string;
};

export type KkLocation = {
  slug: string;
  name: string;
  /** Real-world position (degrees north / east). */
  lat: number;
  lng: number;
  blurb: string;
  eventTypes: string[];
  images: KkLocationImage[];
};

export const locations: KkLocation[] = [
  {
    slug: "kochi",
    name: "Kochi",
    lat: 9.967,
    lng: 76.247,
    blurb: "Contemporary celebrations, corporate gatherings, launches and intimate weddings.",
    eventTypes: ["Weddings", "Corporate", "Entertainment", "Private"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop",
        fallback: "/images/space-ballroom.svg",
        caption: "Waterfront Ballroom",
      },
      {
        src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
        fallback: "/images/work-meridian-launch.svg",
        caption: "City Launch & Gala",
      },
      {
        src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop",
        fallback: "/images/gallery-1.svg",
        caption: "Contemporary Evening",
      },
    ],
  },
  {
    slug: "fort-kochi",
    name: "Fort Kochi",
    lat: 9.948,
    lng: 76.243,
    blurb: "Heritage courtyards and colonial-era venues for one-of-a-kind celebrations.",
    eventTypes: ["Destination", "Weddings", "Entertainment"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=800&auto=format&fit=crop",
        fallback: "/images/work-sana-courtyard.svg",
        caption: "Heritage Courtyard",
      },
      {
        src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop",
        fallback: "/images/gallery-5.svg",
        caption: "Colonial Archway Dinner",
      },
      {
        src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=800&auto=format&fit=crop",
        fallback: "/images/gallery-2.svg",
        caption: "Artisan Tablescape",
      },
    ],
  },
  {
    slug: "thiruvananthapuram",
    name: "Thiruvananthapuram",
    lat: 8.524,
    lng: 76.937,
    blurb: "Capital-city gatherings, ceremonies and corporate events with coastal charm.",
    eventTypes: ["Corporate", "Weddings", "Family"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop",
        fallback: "/images/hero-home-dark.svg",
        caption: "Capital Palace Grounds",
      },
      {
        src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop",
        fallback: "/images/events-corporate.svg",
        caption: "Grand Convention Lawn",
      },
      {
        src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800&auto=format&fit=crop",
        fallback: "/images/space-terrace.svg",
        caption: "Seaside Terrace",
      },
    ],
  },
  {
    slug: "kollam",
    name: "Kollam",
    lat: 8.893,
    lng: 76.614,
    blurb: "Ashtamudi backwater settings for quiet, scenic celebrations.",
    eventTypes: ["Destination", "Family", "Private"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop",
        fallback: "/images/work-alexy-backwaters.svg",
        caption: "Ashtamudi Waterfront Lawn",
      },
      {
        src: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=800&auto=format&fit=crop",
        fallback: "/images/hero-kerala-dark.svg",
        caption: "Lake Pavilion Setup",
      },
      {
        src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop",
        fallback: "/images/events-private.svg",
        caption: "Sunset Lakeside Table",
      },
    ],
  },
  {
    slug: "alappuzha",
    name: "Alappuzha",
    lat: 9.498,
    lng: 76.338,
    blurb: "Backwater celebrations, private dinners and memorable destination events.",
    eventTypes: ["Destination", "Weddings", "Private"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop",
        fallback: "/images/work-alexy-backwaters.svg",
        caption: "Houseboat Deck Ceremony",
      },
      {
        src: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=800&auto=format&fit=crop",
        fallback: "/images/hero-kerala-dark.svg",
        caption: "Vembanad Palm Grove",
      },
      {
        src: "https://images.unsplash.com/photo-1522098543979-ffc7f79a56c4?q=80&w=800&auto=format&fit=crop",
        fallback: "/images/work-proposal-marari.svg",
        caption: "Canalside Evening Light",
      },
    ],
  },
  {
    slug: "kottayam",
    name: "Kottayam",
    lat: 9.591,
    lng: 76.522,
    blurb: "Town-and-country celebrations across heritage homes and church halls.",
    eventTypes: ["Family", "Weddings", "Milestones"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=800&auto=format&fit=crop",
        fallback: "/images/work-sana-courtyard.svg",
        caption: "Ancestral Tharavadu Courtyard",
      },
      {
        src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop",
        fallback: "/images/events-family.svg",
        caption: "Garden Reception",
      },
      {
        src: "https://images.unsplash.com/photo-1522771930-78848d9293e8?q=80&w=800&auto=format&fit=crop",
        fallback: "/images/work-lakshmi-babyshower.svg",
        caption: "Traditional Floral Setup",
      },
    ],
  },
  {
    slug: "kumarakom",
    name: "Kumarakom",
    lat: 9.618,
    lng: 76.429,
    blurb: "Lakeside resorts and slow evenings on Vembanad.",
    eventTypes: ["Destination", "Weddings", "Corporate"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop",
        fallback: "/images/work-alexy-backwaters.svg",
        caption: "Vembanad Lake Resort Lawn",
      },
      {
        src: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=800&auto=format&fit=crop",
        fallback: "/images/hero-kerala-dark.svg",
        caption: "Waterfront Sunset Deck",
      },
      {
        src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800&auto=format&fit=crop",
        fallback: "/images/space-terrace.svg",
        caption: "Lantern-Lit Jetty",
      },
    ],
  },
  {
    slug: "munnar",
    name: "Munnar",
    lat: 10.089,
    lng: 77.059,
    blurb: "Mountain settings for destination weddings, retreats and intimate gatherings.",
    eventTypes: ["Destination", "Weddings", "Corporate"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
        fallback: "/images/hero-3day-dark.svg",
        caption: "Misty Tea Estate Lawn",
      },
      {
        src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=800&auto=format&fit=crop",
        fallback: "/images/space-conservatory.svg",
        caption: "Retreat Pavilion",
      },
      {
        src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800&auto=format&fit=crop",
        fallback: "/images/space-terrace.svg",
        caption: "Mountain Valley Sunset",
      },
    ],
  },
  {
    slug: "marari",
    name: "Marari",
    lat: 9.39,
    lng: 76.242,
    blurb: "Barefoot beach ceremonies and slow coastal celebrations.",
    eventTypes: ["Destination", "Weddings", "Private"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1522098543979-ffc7f79a56c4?q=80&w=800&auto=format&fit=crop",
        fallback: "/images/work-proposal-marari.svg",
        caption: "Barefoot Beach Ceremony",
      },
      {
        src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
        fallback: "/images/hero-kerala-dark.svg",
        caption: "Coconut Grove Sunset",
      },
      {
        src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop",
        fallback: "/images/gallery-6.svg",
        caption: "Sea Breeze Dinner",
      },
    ],
  },
  {
    slug: "varkala",
    name: "Varkala",
    lat: 8.738,
    lng: 76.716,
    blurb: "Cliff-top gatherings above the Arabian Sea.",
    eventTypes: ["Destination", "Private", "Entertainment"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
        fallback: "/images/hero-kerala-dark.svg",
        caption: "Cliff-top Terrace over Sea",
      },
      {
        src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop",
        fallback: "/images/work-rooftop-session.svg",
        caption: "Sunset Acoustic Stage",
      },
      {
        src: "https://images.unsplash.com/photo-1522098543979-ffc7f79a56c4?q=80&w=800&auto=format&fit=crop",
        fallback: "/images/work-proposal-marari.svg",
        caption: "Golden Cliff Backdrop",
      },
    ],
  },
  {
    slug: "wayanad",
    name: "Wayanad",
    lat: 11.685,
    lng: 76.132,
    blurb: "Nature-inspired gatherings, retreats and intimate celebrations.",
    eventTypes: ["Destination", "Corporate", "Weddings"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=800&auto=format&fit=crop",
        fallback: "/images/hero-3day-dark.svg",
        caption: "Forest Edge Amphitheatre",
      },
      {
        src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=800&auto=format&fit=crop",
        fallback: "/images/space-conservatory.svg",
        caption: "Bamboo Grove Sanctuary",
      },
      {
        src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop",
        fallback: "/images/events-family.svg",
        caption: "Hill Retreat Gathering",
      },
    ],
  },
  {
    slug: "kozhikode",
    name: "Kozhikode",
    lat: 11.258,
    lng: 75.78,
    blurb: "Malabar warmth — family celebrations and city events by the sea.",
    eventTypes: ["Weddings", "Family", "Corporate"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop",
        fallback: "/images/space-ballroom.svg",
        caption: "Malabar Coastal Lawn",
      },
      {
        src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=800&auto=format&fit=crop",
        fallback: "/images/events-birthdays.svg",
        caption: "Sea View Banquet",
      },
      {
        src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=800&auto=format&fit=crop",
        fallback: "/images/gallery-2.svg",
        caption: "Culinary Celebration Table",
      },
    ],
  },
  {
    slug: "thrissur",
    name: "Thrissur",
    lat: 10.527,
    lng: 76.214,
    blurb: "Kerala's cultural heart — traditional ceremonies done right.",
    eventTypes: ["Weddings", "Family", "Milestones"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=800&auto=format&fit=crop",
        fallback: "/images/work-sana-courtyard.svg",
        caption: "Heritage Temple Courtyard",
      },
      {
        src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
        fallback: "/images/events-weddings.svg",
        caption: "Traditional Floral Mandap",
      },
      {
        src: "https://images.unsplash.com/photo-1522771930-78848d9293e8?q=80&w=800&auto=format&fit=crop",
        fallback: "/images/work-lakshmi-babyshower.svg",
        caption: "Brass Lamp Lighting",
      },
    ],
  },
  {
    slug: "kannur",
    name: "Kannur",
    lat: 11.875,
    lng: 75.37,
    blurb: "Theyyam country — celebrations with deep cultural roots.",
    eventTypes: ["Weddings", "Family", "Entertainment"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
        fallback: "/images/hero-kerala-dark.svg",
        caption: "Pristine North Beach",
      },
      {
        src: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=800&auto=format&fit=crop",
        fallback: "/images/work-sana-courtyard.svg",
        caption: "Fortside Lawn",
      },
      {
        src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=800&auto=format&fit=crop",
        fallback: "/images/events-entertainment.svg",
        caption: "Cultural Evening Arena",
      },
    ],
  },
  {
    slug: "bekal",
    name: "Bekal",
    lat: 12.395,
    lng: 75.03,
    blurb: "Fort-side beaches for destination events at Kerala's northern edge.",
    eventTypes: ["Destination", "Weddings"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
        fallback: "/images/hero-kerala-dark.svg",
        caption: "Historic Fort Ocean View",
      },
      {
        src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop",
        fallback: "/images/space-ballroom.svg",
        caption: "Luxury Seaside Lawn",
      },
      {
        src: "https://images.unsplash.com/photo-1522098543979-ffc7f79a56c4?q=80&w=800&auto=format&fit=crop",
        fallback: "/images/work-proposal-marari.svg",
        caption: "Golden Sands Ceremony",
      },
    ],
  },
  {
    slug: "kovalam",
    name: "Kovalam",
    lat: 8.4,
    lng: 76.978,
    blurb: "Lighthouse beach evenings and seaside ceremonies.",
    eventTypes: ["Destination", "Private", "Weddings"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
        fallback: "/images/hero-kerala-dark.svg",
        caption: "Lighthouse Beach Sunset",
      },
      {
        src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800&auto=format&fit=crop",
        fallback: "/images/space-terrace.svg",
        caption: "Cliff-side Infinity Lawn",
      },
      {
        src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop",
        fallback: "/images/events-private.svg",
        caption: "Seaside Candlelit Terrace",
      },
    ],
  },
];
