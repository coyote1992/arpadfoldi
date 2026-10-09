import type { Metadata, Viewport } from "next";
import "@fontsource-variable/fraunces/opsz.css";
import "@fontsource-variable/fraunces/opsz-italic.css";
import "@fontsource-variable/hanken-grotesk/index.css";
import "@/kits/dot-space/theme/space.css";
import "./globals.css";
import { ActionBar } from "@/components/ActionBar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { SpaceBackground } from "@/components/space/SpaceBackground";
import { CLUB } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://arpadfolditc.hu"),
  title: {
    default: "Árpádföldi Tenisz Club — salakpályák Budapest XVI. kerületében, 1985 óta",
    template: "%s · Árpádföldi Tenisz Club",
  },
  description:
    "Három salakpálya és egy gyerekpálya Árpádföldön, az Állás utcában. Online pályafoglalás klubtagság nélkül is, gyerekedzés 6 éves kortól, házibajnokság és csapatbajnokság.",
  openGraph: {
    type: "website",
    locale: "hu_HU",
    siteName: "Árpádföldi Tenisz Club",
    images: [{ url: "/img/kristof-920.webp", width: 920, height: 744 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#100b08",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsClub",
  name: CLUB.name,
  sport: "Tennis",
  foundingDate: "1985-03-14",
  email: CLUB.email,
  telephone: "+36302310432",
  url: "https://arpadfolditc.hu/",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Állás utca 35.",
    postalCode: "1162",
    addressLocality: "Budapest",
    addressCountry: "HU",
  },
  geo: { "@type": "GeoCoordinates", latitude: 47.531231, longitude: 19.200104 },
  sameAs: [CLUB.facebook],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu" className="space" suppressHydrationWarning>
      <body>
        <a className="skip" href="#tartalom">
          Ugrás a tartalomra
        </a>
        <SpaceBackground />
        <Header />
        <main id="tartalom">{children}</main>
        <Footer />
        <ActionBar />
        <Reveal />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
