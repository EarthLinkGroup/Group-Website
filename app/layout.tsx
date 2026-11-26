import type { Metadata } from "next";
import { Bitter, Istok_Web, Roboto } from "next/font/google";
import "./globals.css";
import { SITE_URL, TAGLINE } from "@/lib/constants";

const istokWeb = Istok_Web({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-istok-web",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-roboto",
});

const bitter = Bitter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bitter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Earthlink Group | Connecting Opportunities. Building Growth.",
  description:
    "A diversified business group bringing together education, sales development and business expansion to create opportunities and drive sustainable growth.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Earthlink Group | Connecting Opportunities. Building Growth.",
    description:
      "A connected business ecosystem creating opportunities across education, sales development and business expansion.",
    url: SITE_URL,
    siteName: "Earthlink Group",
    type: "website",
    images: [
      {
        url: "/earthlink-og.svg",
        width: 1200,
        height: 630,
        alt: `Earthlink Group — ${TAGLINE}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Earthlink Group | Connecting Opportunities. Building Growth.",
    description:
      "A diversified business group creating opportunities and driving sustainable growth.",
    images: ["/earthlink-og.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${istokWeb.variable} ${roboto.variable} ${bitter.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
