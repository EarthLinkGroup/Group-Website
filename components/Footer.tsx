import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { COMPANIES, NAV_LINKS, TAGLINE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="site-footer bg-white">
      <div className="footer-panel">
        <div className="page-container grid gap-12 py-14 md:grid-cols-[1.3fr_0.8fr_1fr] md:py-16">
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-3"
              aria-label="Earthlink Group home"
            >
              <span className="brand-logo-crop brand-logo-footer">
                <Image src="/logo.png" alt="" width={706} height={500} />
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600">
              A connected business group creating opportunities across
              education, sales development and business expansion.
            </p>
            <p className="mt-5 text-sm font-medium text-slate-700">{TAGLINE}</p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-700">
              Explore
            </h2>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    className="text-sm text-slate-600 transition hover:text-navy"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-700">
              Our Brands
            </h2>
            <ul className="mt-5 space-y-3">
              {COMPANIES.map((company) => (
                <li key={company.name}>
                  <a
                    className="inline-flex items-center gap-1.5 text-sm text-slate-600 transition hover:text-navy"
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {company.name}
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200">
          <div className="page-container flex flex-col gap-2 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Earthlink Group. All rights reserved.
            </p>
            <p>Built for a world of possibility.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
