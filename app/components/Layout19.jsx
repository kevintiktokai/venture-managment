"use client";

import React from "react";
import Link from "next/link";
import { RxChevronRight } from "react-icons/rx";
import { ScrollReveal } from "./ScrollReveal";

export function Layout19() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <ScrollReveal variant="slideLeft">
            <p className="mb-3 font-semibold md:mb-4">Trust</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Every property verified before listing
            </h2>
            <p className="mb-5 md:mb-6 md:text-md">
              Title deeds matter. We inspect documents and confirm ownership
              with the authorities before any property appears on our site. No
              shortcuts, no exceptions.
            </p>
            <ul className="my-4 list-disc pl-5">
              <li className="my-1 self-start pl-2">
                <p>Title deed verification</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Legal standing confirmed</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Ownership authenticated</p>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Link
                href="/about-us"
                className="inline-block px-5 py-2.5 text-xs font-medium uppercase tracking-widest transition-all hover:-translate-y-0.5"
                style={{
                  border: "1px solid var(--color-forest)",
                  color: "var(--color-forest)",
                  borderRadius: "var(--radius-btn)",
                }}
              >
                Our process
              </Link>
              <Link
                href="/properties"
                className="flex items-center gap-1 text-sm font-medium transition-colors"
                style={{ color: "var(--color-forest)" }}
              >
                View listings <RxChevronRight />
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="slideRight" delay={0.1}>
            <img
              src="/images/property-featured.jpg"
              className="w-full object-cover"
              alt="Verified property in Harare"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
