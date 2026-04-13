"use client";

import React from "react";
import Link from "next/link";
import { RxChevronRight } from "react-icons/rx";
import { BiSolidShieldAlt2, BiDollar, BiSolidBolt } from "react-icons/bi";
import { ScrollReveal, StaggerReveal } from "./ScrollReveal";

export function Layout522() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <ScrollReveal variant="fadeUp" className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Verified</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              How we work
            </h2>
            <p className="md:text-md">
              Every listing checked for title deed authenticity and legal
              standing
            </p>
          </div>
        </ScrollReveal>
        <StaggerReveal className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4" stagger={0.12}>
          {/* Main card */}
          <div className="relative p-6 sm:col-span-2 md:p-8 lg:p-12 overflow-hidden transition-all duration-300 hover:-translate-y-1" style={{ borderRadius: "var(--radius-card)", boxShadow: "var(--shadow-card)" }}>
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-black/50 z-10" />
              <img
                src="/images/suburb-borrowdale.jpg"
                className="size-full object-cover"
                alt="Borrowdale neighborhood in Harare"
              />
            </div>
            <div className="relative z-10">
              <p className="mb-2 inline-block text-sm font-semibold text-text-alternative">
                Listings
              </p>
              <h3 className="mb-5 text-4xl font-bold leading-[1.2] text-text-alternative md:mb-6 md:text-5xl lg:text-6xl">
                Title deed verification process
              </h3>
              <p className="text-text-alternative">
                We inspect documents and confirm ownership before any listing
                goes live
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Link
                  href="/about-us"
                  className="inline-block px-5 py-2.5 text-xs font-medium uppercase tracking-widest transition-all hover:-translate-y-0.5"
                  style={{
                    border: "1px solid rgba(255,255,255,0.5)",
                    color: "var(--color-ivory)",
                    borderRadius: "var(--radius-btn)",
                  }}
                >
                  Learn more
                </Link>
                <Link
                  href="/properties"
                  className="flex items-center gap-1 text-sm font-medium text-text-alternative transition-colors hover:opacity-80"
                >
                  View listings <RxChevronRight />
                </Link>
              </div>
            </div>
          </div>
          {/* Currency card */}
          <div className="relative flex flex-col p-6 md:p-8 lg:p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1" style={{ borderRadius: "var(--radius-card)", boxShadow: "var(--shadow-card)" }}>
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-black/50 z-10" />
              <img
                src="/images/suburb-highlands.jpg"
                className="size-full object-cover"
                alt="Highlands suburb in Harare"
              />
            </div>
            <div className="relative z-10 flex flex-1 flex-col justify-between">
              <div className="mb-3 md:mb-4">
                <BiDollar className="size-12 text-text-alternative" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-text-alternative md:text-2xl">
                Currency clarity for all buyers
              </h3>
              <p className="text-text-alternative">
                USD and local currency pricing shown side by side always
              </p>
              <div className="mt-5 flex items-center md:mt-6">
                <Link
                  href="/properties"
                  className="flex items-center gap-1 text-sm font-medium text-text-alternative transition-colors hover:opacity-80"
                >
                  Browse listings <RxChevronRight />
                </Link>
              </div>
            </div>
          </div>
          {/* Infrastructure card */}
          <div className="relative flex flex-col p-6 md:p-8 lg:p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1" style={{ borderRadius: "var(--radius-card)", boxShadow: "var(--shadow-card)" }}>
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-black/50 z-10" />
              <img
                src="/images/hero-properties.jpg"
                className="size-full object-cover"
                alt="Modern property in Harare"
              />
            </div>
            <div className="relative z-10 flex flex-1 flex-col justify-between">
              <div className="mb-3 md:mb-4">
                <BiSolidBolt className="size-12 text-text-alternative" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-text-alternative md:text-2xl">
                Infrastructure you can count on
              </h3>
              <p className="text-text-alternative">
                Borehole, solar, and security details listed for every property
              </p>
              <div className="mt-5 flex items-center md:mt-6">
                <Link
                  href="/suburb-guide"
                  className="flex items-center gap-1 text-sm font-medium text-text-alternative transition-colors hover:opacity-80"
                >
                  Suburb guide <RxChevronRight />
                </Link>
              </div>
            </div>
          </div>
        </StaggerReveal>
      </div>
    </section>
  );
}
