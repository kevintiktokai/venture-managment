"use client";

import React from "react";
import Link from "next/link";

export function Cta31() {
  return (
    <section
      className="px-[5%] py-16 md:py-24 lg:py-28"
      style={{ background: "var(--color-forest)" }}
    >
      <div className="container flex flex-col items-center text-center">
        <h2
          className="mb-5 text-5xl font-light md:mb-6 md:text-7xl lg:text-8xl"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-ivory)" }}
        >
          Ready to find your next property?
        </h2>
        <p className="mb-8 max-w-lg md:text-md" style={{ color: "rgba(237,215,192,0.75)" }}>
          Browse verified listings or speak directly with our team. We're
          available on WhatsApp for local and diaspora buyers alike.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/properties"
            className="inline-block px-8 py-4 text-sm font-medium uppercase tracking-widest transition-all hover:-translate-y-0.5"
            style={{
              background: "var(--color-ivory)",
              color: "var(--color-forest)",
              borderRadius: "var(--radius-btn)",
              boxShadow: "var(--shadow-btn)",
            }}
          >
            Browse properties
          </Link>
          <a
            href="https://wa.me/263771681728"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 text-sm font-medium uppercase tracking-widest transition-all hover:-translate-y-0.5"
            style={{
              border: "1px solid rgba(237,215,192,0.5)",
              color: "var(--color-ivory)",
              borderRadius: "var(--radius-btn)",
            }}
          >
            WhatsApp us
          </a>
        </div>
      </div>
    </section>
  );
}
