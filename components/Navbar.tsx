"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header sticky top-0 z-50 border-b border-slate-100 bg-white/95 text-navy backdrop-blur-md">
      <nav
        className="page-container flex h-[80px] items-center justify-between"
        aria-label="Main navigation"

      >
        
        <Link
          href="/#home"
          className="brand-lockup inline-flex items-center gap-3"
          aria-label="Earthlink Group home"
          onClick={closeMenu}
        >
          <Image
            className="site-logo"
            src="/logo.png"
            alt=""
            width={2048}
            height={768}
            sizes="(max-width: 767px) 112px, 150px"
          />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          <div className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link text-base text-slate-600 transition hover:text-navy"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link className="button button-primary" href="/contact">
            Partner with us
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-navy transition hover:bg-slate-50 lg:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>
      <div
        id="mobile-navigation"
        className={`mobile-navigation ${menuOpen ? "is-open" : ""} lg:hidden`}
        hidden={!menuOpen}
      >
        <div className="page-container flex flex-col gap-1 pb-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-3 text-base text-slate-600 transition hover:bg-slate-50 hover:text-navy"
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          <Link
            className="button button-primary mt-3 self-start"
            href="/contact"
            onClick={closeMenu}
          >
            Partner with us
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </header>
  );
}
