export const SITE_URL = "https://earthlinkgroup.com";
export const CONTACT_EMAIL = "info@earthlinkgroup.com";
export const TAGLINE = "Connecting Opportunities. Building Growth.";

export interface Company {
  slug: string;
  name: string;
  url: string;
  description: string;
  logoImage: string | null;
  logoBackground: "transparent" | "asosales" | null;
}

export const COMPANIES: Company[] = [
  {
    slug: "earthlink-study",
    name: "Earthlink Study",
    url: "https://earthlinkstudy.com",
    description:
      "Earthlink Study helps students explore opportunities to study abroad and make informed decisions about their education. From discovering international programs and destinations to understanding the steps involved in applying, it supports students as they plan their next academic move.",
    logoImage: "/logo-study.png",
    logoBackground: "transparent",
  },
  {
    slug: "asosales",
    name: "ASOSales",
    url: "https://asosales.com",
    description:
      "ASOSales helps founders, sales leaders and growing teams build stronger, more consistent sales practices. Through practical sales consultancy and training, it focuses on improving pipelines, strengthening customer conversations and giving teams a repeatable process they can use and refine.",
    logoImage: "/asosales-logo.png",
    logoBackground: "asosales",
  },
  {
    slug: "earthlink-ventures",
    name: "Earthlink Ventures",
    url: "https://earthlinkventures.com",
    description:
      "Earthlink Ventures supports organizations looking to expand and pursue sustainable growth. It focuses on identifying strategic opportunities, connecting businesses with people and markets, and turning growth ambitions into practical next steps.",
    logoImage: "/logo-ventures.png",
    logoBackground: "transparent",
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/#about" },
  { label: "Our Brands", href: "/#brands" },
  { label: "Contact", href: "/contact" },
];

