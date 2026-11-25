import {
  ArrowRight,
  ArrowUpRight,
  Lightbulb,
  Network,
  Sprout,
} from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { COMPANIES } from "@/lib/constants";

const values = [
  {
    title: "Innovation",
    description: "We embrace new perspectives and practical ideas.",
    icon: Lightbulb,
  },
  {
    title: "Opportunity",
    description: "We open doors by bringing the right people together.",
    icon: Network,
  },
  {
    title: "Growth",
    description: "We build with lasting progress in mind.",
    icon: Sprout,
  },
];

const advantages = [
  {
    number: "01",
    title: "Diverse expertise",
    description:
      "Different businesses working across complementary industries, each bringing a distinct perspective.",
  },
  {
    number: "02",
    title: "Connected opportunities",
    description:
      "Creating meaningful connections between people, organizations and markets.",
  },
  {
    number: "03",
    title: "Sustainable growth",
    description:
      "Building businesses and opportunities with long-term impact at their core.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home" className="hero-section">
          <div className="hero-image">
            <Image
              src="/hero-architecture.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="hero-image-content"
            />
          </div>
          <div className="hero-shade" aria-hidden="true" />
          <div className="hero-content">
            <div className="hero-copy">
              <h1 className="hero-title">
                Connecting Opportunities.
                <span>Building Growth.</span>
              </h1>
              <div className="hero-actions">
                <a className="button button-light" href="#brands">
                  Explore Our Brands
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
                <a className="button button-outline-light" href="#about">
                  Discover Our Story
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
            <a className="hero-discover" href="#about" aria-label="Scroll to discover">
              <span />
            </a>
          </div>
        </section>

        <section id="about" className="story-section section-padding">
          <div className="page-container story-layout">
            <div className="story-image-wrap">
              <Image
                src="/group-team.jpg"
                alt="A team working together around a table"
                fill
                sizes="(min-width: 900px) 50vw, 100vw"
                className="story-image"
              />
            </div>
            <div className="story-copy">
              <h2 className="section-heading">Who We Are</h2>
              <p className="story-lead">
                Earthlink Group is a business group built around the belief
                that meaningful growth comes from connecting people,
                opportunities and ideas.
              </p>
              <p className="story-description">
                Through our specialized brands, we operate across education,
                sales development and business expansion, helping individuals
                and organizations unlock new possibilities.
              </p>
              <div className="values-list">
                {values.map(({ title, description, icon: Icon }) => (
                  <div className="value-item" key={title}>
                    <span className="value-icon">
                      <Icon size={20} strokeWidth={1.6} aria-hidden="true" />
                    </span>
                    <div>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="vision-section">
          <div className="vision-image">
            <Image
              src="/global-learning.jpg"
              alt="Students learning together"
              fill
              sizes="(min-width: 900px) 52vw, 100vw"
              className="vision-image-content"
            />
          </div>
          <div className="vision-copy">
            <h2>Our Vision</h2>
            <div className="vision-rule" />
            <p>
              To build a connected business ecosystem that creates
              opportunities, empowers people and drives sustainable economic
              growth across markets.
            </p>
          </div>
        </section>

        <section id="brands" className="brands-section section-padding">
          <div className="page-container">
            <div className="brands-heading">
              <h2 className="section-heading">Our Brands</h2>
            </div>
            <div className="brand-logo-grid">
              {COMPANIES.map(
                ({ slug, name, logoImage, logoBackground }) =>
                  logoImage && logoBackground ? (
                    <div className="brand-logo-item" key={name}>
                      <a
                        className={`brand-logo-link brand-logo-link-${logoBackground}`}
                        href={`/brands/${slug}`}
                        aria-label={`Learn about ${name}`}
                      >
                        <Image
                          src={logoImage}
                          alt={`${name} logo`}
                          width={140}
                          height={140}
                          className="brand-logo-image"
                        />
                      </a>
                      <a className="brand-see-link" href={`/brands/${slug}`}>
                        See Brand
                        <ArrowRight size={16} aria-hidden="true" />
                      </a>
                    </div>
                  ) : null,
              )}
            </div>
          </div>
        </section>

        <section className="advantages-section section-padding">
          <div className="page-container">
            <div className="advantages-heading">
              <h2 className="section-heading">Growth works better, together.</h2>
            </div>
            <div className="advantages-grid">
              {advantages.map(({ number, title, description }) => (
                <article className="advantage" key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
