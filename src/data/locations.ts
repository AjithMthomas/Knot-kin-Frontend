/**
 * Kerala service areas & destination-event inspiration.
 * Each location carries its real lat/lng; the map component projects these
 * onto the accurate state boundary (see src/data/kerala-shape.ts).
 * Note: these are service-area suggestions, not confirmed venue partnerships.
 */

export type KkLocation = {
  slug: string;
  name: string;
  /** Real-world position (degrees north / east). */
  lat: number;
  lng: number;
  blurb: string;
  eventTypes: string[];
};

export const locations: KkLocation[] = [
  {
    slug: "kochi",
    name: "Kochi",
    lat: 9.967,
    lng: 76.247,
    blurb: "Contemporary celebrations, corporate gatherings, launches and intimate weddings.",
    eventTypes: ["Weddings", "Corporate", "Entertainment", "Private"],
  },
  {
    slug: "fort-kochi",
    name: "Fort Kochi",
    lat: 9.948,
    lng: 76.243,
    blurb: "Heritage courtyards and colonial-era venues for one-of-a-kind celebrations.",
    eventTypes: ["Destination", "Weddings", "Entertainment"],
  },
  {
    slug: "thiruvananthapuram",
    name: "Thiruvananthapuram",
    lat: 8.524,
    lng: 76.937,
    blurb: "Capital-city gatherings, ceremonies and corporate events with coastal charm.",
    eventTypes: ["Corporate", "Weddings", "Family"],
  },
  {
    slug: "kollam",
    name: "Kollam",
    lat: 8.893,
    lng: 76.614,
    blurb: "Ashtamudi backwater settings for quiet, scenic celebrations.",
    eventTypes: ["Destination", "Family", "Private"],
  },
  {
    slug: "alappuzha",
    name: "Alappuzha",
    lat: 9.498,
    lng: 76.338,
    blurb: "Backwater celebrations, private dinners and memorable destination events.",
    eventTypes: ["Destination", "Weddings", "Private"],
  },
  {
    slug: "kottayam",
    name: "Kottayam",
    lat: 9.591,
    lng: 76.522,
    blurb: "Town-and-country celebrations across heritage homes and church halls.",
    eventTypes: ["Family", "Weddings", "Milestones"],
  },
  {
    slug: "kumarakom",
    name: "Kumarakom",
    lat: 9.618,
    lng: 76.429,
    blurb: "Lakeside resorts and slow evenings on Vembanad.",
    eventTypes: ["Destination", "Weddings", "Corporate"],
  },
  {
    slug: "munnar",
    name: "Munnar",
    lat: 10.089,
    lng: 77.059,
    blurb: "Mountain settings for destination weddings, retreats and intimate gatherings.",
    eventTypes: ["Destination", "Weddings", "Corporate"],
  },
  {
    slug: "marari",
    name: "Marari",
    lat: 9.39,
    lng: 76.242,
    blurb: "Barefoot beach ceremonies and slow coastal celebrations.",
    eventTypes: ["Destination", "Weddings", "Private"],
  },
  {
    slug: "varkala",
    name: "Varkala",
    lat: 8.738,
    lng: 76.716,
    blurb: "Cliff-top gatherings above the Arabian Sea.",
    eventTypes: ["Destination", "Private", "Entertainment"],
  },
  {
    slug: "wayanad",
    name: "Wayanad",
    lat: 11.685,
    lng: 76.132,
    blurb: "Nature-inspired gatherings, retreats and intimate celebrations.",
    eventTypes: ["Destination", "Corporate", "Weddings"],
  },
  {
    slug: "kozhikode",
    name: "Kozhikode",
    lat: 11.258,
    lng: 75.78,
    blurb: "Malabar warmth — family celebrations and city events by the sea.",
    eventTypes: ["Weddings", "Family", "Corporate"],
  },
  {
    slug: "thrissur",
    name: "Thrissur",
    lat: 10.527,
    lng: 76.214,
    blurb: "Kerala's cultural heart — traditional ceremonies done right.",
    eventTypes: ["Weddings", "Family", "Milestones"],
  },
  {
    slug: "kannur",
    name: "Kannur",
    lat: 11.875,
    lng: 75.37,
    blurb: "Theyyam country — celebrations with deep cultural roots.",
    eventTypes: ["Weddings", "Family", "Entertainment"],
  },
  {
    slug: "bekal",
    name: "Bekal",
    lat: 12.395,
    lng: 75.03,
    blurb: "Fort-side beaches for destination events at Kerala's northern edge.",
    eventTypes: ["Destination", "Weddings"],
  },
  {
    slug: "kovalam",
    name: "Kovalam",
    lat: 8.4,
    lng: 76.978,
    blurb: "Lighthouse beach evenings and seaside ceremonies.",
    eventTypes: ["Destination", "Private", "Weddings"],
  },
];
