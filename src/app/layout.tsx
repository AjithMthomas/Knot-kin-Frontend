import type { Metadata, Viewport } from "next";
import { Inter, Ovo, Playfair_Display } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LoadingScreen } from "@/components/loading-screen";

const ovo = Ovo({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-ovo",
  display: "swap",
});

const inter = Inter({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  style: "italic",
  weight: "400",
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Event Planning & Management Across Kerala`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "event management Kerala",
    "wedding planner Kerala",
    "intimate weddings Kochi",
    "corporate events Kerala",
    "3 day event planning",
    "birthday planners Kerala",
    "destination weddings Kerala",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} | Event Planning & Management Across Kerala`,
    description: site.description,
    images: [{ url: "/images/logo.png", width: 500, height: 500, alt: `${site.name} — ${site.tagline}` }],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#f4efe6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${ovo.variable} ${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <LoadingScreen />
        <a
          href="#main"
          className="btn btn-primary sr-only z-[100] fixed top-3 left-3 min-h-0 py-3"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
