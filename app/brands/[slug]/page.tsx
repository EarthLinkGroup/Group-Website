import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { COMPANIES } from "@/lib/constants";

export function generateStaticParams() {
  return COMPANIES.filter(
    ({ logoImage, logoBackground }) => logoImage && logoBackground,
  ).map(({ slug }) => ({ slug }));
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const company = COMPANIES.find((item) => item.slug === slug);

  if (!company?.logoImage || !company.logoBackground) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="brand-detail-page">
        <div className="page-container">
          <Link className="brand-detail-back" href="/#brands">
            <ArrowLeft size={16} aria-hidden="true" />
            Back to brands
          </Link>
          <section className="brand-detail-content">
            <div
              className={`brand-detail-logo brand-detail-logo-${company.logoBackground}`}
            >
              <Image
                src={company.logoImage}
                alt={`${company.name} logo`}
                width={240}
                height={240}
                priority
              />
            </div>
            <div className="brand-detail-copy">
              <h1>{company.name}</h1>
              <p>{company.description}</p>
              <a
                className="button button-primary"
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View website
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
