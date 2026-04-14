"use client";

import React from "react";
import Link from "next/link";
import { BiLogoInstagram } from "react-icons/bi";

export function Footer12() {
  return (
    <footer
      className="px-[5%] py-12 md:py-18 lg:py-20"
      style={{ background: "var(--color-charcoal)", color: "var(--color-ivory)" }}
    >
      <div className="container">
        <div
          className="border-b pb-12 md:pb-16"
          style={{ borderColor: "rgba(237,215,192,0.15)" }}
        >
          <div className="mb-12 grid grid-cols-1 gap-x-[8vw] gap-y-12 md:mb-18 md:gap-y-16 lg:mb-20 lg:grid-cols-[1fr_0.5fr]">
            <div className="max-w-md">
              {/* Monogram / wordmark */}
              <div className="mb-6 flex items-center gap-3">
                <span
                  className="text-4xl font-light tracking-tight"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)" }}
                >
                  VM
                </span>
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-[0.18em]"
                    style={{ color: "var(--color-ivory)" }}
                  >
                    Venture Management
                  </p>
                  <p
                    className="text-xs uppercase tracking-widest"
                    style={{ color: "rgba(237,215,192,0.5)" }}
                  >
                    Real Estate
                  </p>
                </div>
              </div>

              <h2
                className="mb-5 text-4xl font-light leading-tight md:text-5xl"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-ivory)" }}
              >
                The Lifeline of Your Investment
              </h2>
              <p style={{ color: "rgba(237,215,192,0.65)" }}>
                Sales, property management, development &amp; valuations across
                Zimbabwe. Office at 68 Ridgeway North, Highlands, Harare.
              </p>

              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                <Link
                  href="/properties"
                  className="inline-block px-6 py-3 text-sm font-medium uppercase tracking-widest transition-all hover:-translate-y-0.5"
                  style={{
                    background: "var(--color-forest)",
                    color: "var(--color-ivory)",
                    borderRadius: "var(--radius-btn)",
                  }}
                >
                  For Sale
                </Link>
                <Link
                  href="/area-guides"
                  className="inline-block px-6 py-3 text-sm font-medium uppercase tracking-widest transition-all hover:-translate-y-0.5"
                  style={{
                    border: "1px solid rgba(237,215,192,0.3)",
                    color: "var(--color-ivory)",
                    borderRadius: "var(--radius-btn)",
                  }}
                >
                  For Rent
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 items-start gap-x-6 gap-y-5 sm:grid-cols-2">
              <ul className="space-y-1">
                {[
                  { label: "For Sale", href: "/properties" },
                  { label: "For Rent", href: "/area-guides" },
                  { label: "Suburb Guide", href: "/suburb-guide" },
                  { label: "Diaspora Buyers", href: "/diaspora-buyers" },
                  { label: "About Us", href: "/about-us" },
                ].map(({ label, href }) => (
                  <li key={label} className="py-2">
                    <Link
                      href={href}
                      className="text-sm font-semibold transition-colors hover:opacity-70"
                      style={{ color: "var(--color-ivory)" }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>

              <ul className="space-y-1">
                <li className="py-2">
                  <p className="text-sm" style={{ color: "rgba(237,215,192,0.6)" }}>
                    +263 77 168 1728
                  </p>
                </li>
                <li className="py-2">
                  <a
                    href="mailto:ange@vm.co.zw"
                    className="text-sm transition-colors hover:opacity-70"
                    style={{ color: "rgba(237,215,192,0.6)" }}
                  >
                    ange@vm.co.zw
                  </a>
                </li>
                <li className="py-2">
                  <p className="text-sm" style={{ color: "rgba(237,215,192,0.6)" }}>
                    68 Ridgeway North
                    <br />
                    Highlands, Harare
                  </p>
                </li>
                <li className="py-2">
                  <a
                    href="https://wa.me/263771681728"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold transition-colors hover:opacity-70"
                    style={{ color: "var(--color-gold)" }}
                  >
                    WhatsApp Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse items-start justify-between pt-6 text-sm md:flex-row md:items-center md:pt-8">
          <p style={{ color: "rgba(237,215,192,0.4)" }}>
            © 2025 Venture Management. All rights reserved.
          </p>
          <div className="mb-4 flex items-center gap-4 md:mb-0">
            <a
              href="https://www.instagram.com/venturemanagementzim"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:opacity-70"
              style={{ color: "var(--color-ivory)" }}
            >
              <BiLogoInstagram className="size-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
