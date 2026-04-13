"use client";

import React from "react";
import Link from "next/link";

export function Header26() {
  return (
    <section
      className="relative min-h-[92vh] overflow-hidden"
      style={{ background: "var(--color-charcoal)" }}
    >
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-home.jpg"
          onError={(e) => {
            e.currentTarget.src =
              "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=85&auto=format&fit=crop";
          }}
          className="size-full object-cover object-center"
          alt="Luxury home in Harare"
        />
        {/* Gradient overlay — left dark, right transparent */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(43,36,32,0.92) 0%, rgba(43,36,32,0.70) 45%, rgba(43,36,32,0.15) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[92vh] items-end px-[5%] pb-16 md:pb-24 lg:pb-28">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <p
            className="mb-6 text-sm font-medium uppercase tracking-[0.2em]"
            style={{ color: "var(--color-gold)" }}
          >
            Venture Management Real Estate
          </p>

          {/* Headline */}
          <h1
            className="mb-6 text-white"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              fontWeight: 300,
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
            }}
          >
            The Lifeline of
            <br />
            <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>
              Your Investment
            </em>
          </h1>

          {/* Subtext */}
          <p
            className="mb-10 max-w-md text-base leading-relaxed"
            style={{ color: "rgba(247,243,238,0.75)", fontFamily: "var(--font-body)" }}
          >
            Sales, property management, development &amp; valuations across
            Zimbabwe. Trusted by homeowners, investors, and diaspora buyers.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/properties"
              className="inline-block px-8 py-4 text-sm font-medium uppercase tracking-widest transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
              style={{
                background: "var(--color-terracotta)",
                color: "var(--color-ivory)",
                borderRadius: "2px",
                fontFamily: "var(--font-body)",
              }}
            >
              View For Sale
            </Link>
            <Link
              href="/area-guides"
              className="inline-block px-8 py-4 text-sm font-medium uppercase tracking-widest transition-all duration-200 hover:-translate-y-0.5"
              style={{
                border: "1px solid rgba(247,243,238,0.5)",
                color: "var(--color-ivory)",
                borderRadius: "2px",
                fontFamily: "var(--font-body)",
              }}
            >
              For Rent
            </Link>
          </div>

          {/* Trust bar */}
          <div
            className="mt-14 flex flex-wrap items-center gap-8 border-t pt-8"
            style={{ borderColor: "rgba(247,243,238,0.15)" }}
          >
            {[
              { stat: "37+", label: "Active listings" },
              { stat: "60,000+", label: "sqm managed" },
              { stat: "Est. 2023", label: "Highlands, Harare" },
            ].map(({ stat, label }) => (
              <div key={label}>
                <p
                  className="text-2xl font-light"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--color-gold)",
                  }}
                >
                  {stat}
                </p>
                <p
                  className="text-xs uppercase tracking-wider"
                  style={{ color: "rgba(247,243,238,0.55)" }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-[5%] z-10 hidden lg:flex flex-col items-center gap-2">
        <span
          className="text-xs uppercase tracking-widest"
          style={{ color: "rgba(247,243,238,0.4)", writingMode: "vertical-rl" }}
        >
          Scroll to explore
        </span>
        <div
          className="h-12 w-px"
          style={{ background: "rgba(247,243,238,0.2)" }}
        />
      </div>
    </section>
  );
}
