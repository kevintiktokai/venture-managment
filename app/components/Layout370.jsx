"use client";

import React from "react";
import Link from "next/link";
import { RxChevronRight } from "react-icons/rx";
import { ScrollReveal, StaggerReveal } from "./ScrollReveal";

export function Layout370() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <ScrollReveal variant="fadeUp" className="rb-12 mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Process</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Three steps to ownership
            </h2>
            <p className="md:text-md">
              Whether you're local or diaspora, we make it simple and secure
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <StaggerReveal className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4" stagger={0.15}>
            {/* Step 1 */}
            <div className="flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{ borderRadius: "var(--radius-card)", boxShadow: "var(--shadow-card)", background: "var(--color-ivory)" }}>
              <div className="flex items-center justify-center overflow-hidden" style={{ height: "200px" }}>
                <img
                  src="/images/hero-home.jpg"
                  alt="Connect with Venture Management"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-semibold">One</p>
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    Connect with us
                  </h3>
                  <p>WhatsApp, phone, or book a viewing in person</p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  <a
                    href="https://wa.me/263771681728"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-medium transition-colors"
                    style={{ color: "var(--color-forest)" }}
                  >
                    Get in touch <RxChevronRight />
                  </a>
                </div>
              </div>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{ borderRadius: "var(--radius-card)", boxShadow: "var(--shadow-card)", background: "var(--color-ivory)" }}>
              <div className="flex items-center justify-center overflow-hidden" style={{ height: "200px" }}>
                <img
                  src="/images/suburb-highlands.jpg"
                  alt="View and verify properties"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-semibold">Two</p>
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    View &amp; verify
                  </h3>
                  <p>Tour properties and review verified title deed documentation</p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  <Link
                    href="/properties"
                    className="flex items-center gap-1 text-sm font-medium transition-colors"
                    style={{ color: "var(--color-forest)" }}
                  >
                    See listings <RxChevronRight />
                  </Link>
                </div>
              </div>
            </div>
            {/* Step 3 */}
            <div className="grid grid-cols-1 sm:col-span-2 sm:row-span-1 sm:grid-cols-2 overflow-hidden transition-all duration-300 hover:-translate-y-1" style={{ borderRadius: "var(--radius-card)", boxShadow: "var(--shadow-card)", background: "var(--color-ivory)" }}>
              <div className="flex items-center justify-center overflow-hidden">
                <img
                  src="/images/property-featured.jpg"
                  alt="Close with confidence"
                  className="size-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-semibold">Three</p>
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    Close with confidence
                  </h3>
                  <p>
                    Legal support and clear next steps every step of the way
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-4 md:mt-6">
                  <Link
                    href="/about-us#contact"
                    className="flex items-center gap-1 text-sm font-medium transition-colors"
                    style={{ color: "var(--color-forest)" }}
                  >
                    Contact us <RxChevronRight />
                  </Link>
                </div>
              </div>
            </div>
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}
