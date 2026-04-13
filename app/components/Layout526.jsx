"use client";

import React from "react";
import Link from "next/link";
import { RxChevronRight } from "react-icons/rx";

export function Layout526() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Suburbs</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Where to buy in Harare
            </h2>
            <p className="md:text-md">
              Each neighborhood has its own character. Here's what you need to
              know.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          {/* Column 1 */}
          <div className="grid grid-cols-1 gap-6 md:gap-8">
            {/* Borrowdale */}
            <div className="relative flex flex-col justify-center p-6 md:p-8 lg:min-h-[32rem]">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <img
                  src="/images/suburb-borrowdale.jpg"
                  className="size-full object-cover"
                  alt="Borrowdale suburb, Harare"
                />
              </div>
              <div className="relative z-10">
                <p className="mb-2 inline-block text-sm font-semibold text-text-alternative">
                  Borrowdale
                </p>
                <h3 className="mb-3 text-2xl font-bold text-text-alternative md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Established, tree-lined streets with strong security presence.
                </h3>
                <p className="text-text-alternative">
                  Premium homes, gated communities, and top-tier schools. Starting from $180k.
                </p>
                <div className="mt-5 flex items-center md:mt-6">
                  <Link
                    href="/suburb-guide"
                    className="flex items-center gap-1 text-sm font-medium text-text-alternative transition-colors hover:opacity-80"
                  >
                    Explore Borrowdale <RxChevronRight />
                  </Link>
                </div>
              </div>
            </div>
            {/* Highlands */}
            <div className="relative flex flex-col p-6 md:p-8">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <img
                  src="/images/suburb-highlands.jpg"
                  className="size-full object-cover"
                  alt="Highlands suburb, Harare"
                />
              </div>
              <div className="relative z-10 flex flex-1 flex-col justify-between">
                <div>
                  <p className="mb-2 inline-block text-sm font-semibold text-text-alternative">
                    Highlands
                  </p>
                  <h3 className="mb-3 text-2xl font-bold text-text-alternative md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                    Premium location with modern infrastructure and reliable solar installations.
                  </h3>
                  <p className="text-text-alternative">
                    Close to town with established boreholes. Our office is here too.
                  </p>
                </div>
                <div className="mt-5 flex items-center md:mt-6">
                  <Link
                    href="/suburb-guide"
                    className="flex items-center gap-1 text-sm font-medium text-text-alternative transition-colors hover:opacity-80"
                  >
                    Explore Highlands <RxChevronRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Column 2 */}
          <div className="grid grid-cols-1 gap-6 md:gap-8">
            {/* Avondale */}
            <div className="relative flex flex-col p-6 md:p-8">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <img
                  src="/images/hero-properties.jpg"
                  className="size-full object-cover"
                  alt="Avondale suburb, Harare"
                />
              </div>
              <div className="relative z-10 flex flex-1 flex-col justify-between">
                <div>
                  <p className="mb-2 inline-block text-sm font-semibold text-text-alternative">
                    Avondale
                  </p>
                  <h3 className="mb-3 text-2xl font-bold text-text-alternative md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                    Growing suburb with good value and improving borehole water systems.
                  </h3>
                  <p className="text-text-alternative">
                    Vibrant community, walkable shops, and excellent value for investors.
                  </p>
                </div>
                <div className="mt-5 flex items-center md:mt-6">
                  <Link
                    href="/suburb-guide"
                    className="flex items-center gap-1 text-sm font-medium text-text-alternative transition-colors hover:opacity-80"
                  >
                    Explore Avondale <RxChevronRight />
                  </Link>
                </div>
              </div>
            </div>
            {/* Mt Pleasant */}
            <div className="relative flex flex-col justify-center p-6 md:p-8 lg:min-h-[32rem]">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <img
                  src="/images/property-featured.jpg"
                  className="size-full object-cover"
                  alt="Mt Pleasant suburb, Harare"
                />
              </div>
              <div className="relative z-10">
                <p className="mb-2 inline-block text-sm font-semibold text-text-alternative">
                  Mt Pleasant
                </p>
                <h3 className="mb-3 text-2xl font-bold text-text-alternative md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Newer development with contemporary homes and active community networks.
                </h3>
                <p className="text-text-alternative">
                  University area with growing rental demand. Ideal for diaspora investors.
                </p>
                <div className="mt-5 flex items-center md:mt-6">
                  <Link
                    href="/suburb-guide"
                    className="flex items-center gap-1 text-sm font-medium text-text-alternative transition-colors hover:opacity-80"
                  >
                    Explore Mt Pleasant <RxChevronRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Column 3 */}
          <div className="grid grid-cols-1 gap-6 md:gap-8">
            {/* Greendale */}
            <div className="relative flex flex-col justify-center p-6 md:p-8 lg:min-h-[32rem]">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <img
                  src="/images/hero-home.jpg"
                  className="size-full object-cover"
                  alt="Greendale suburb, Harare"
                />
              </div>
              <div className="relative z-10">
                <p className="mb-2 inline-block text-sm font-semibold text-text-alternative">
                  Greendale
                </p>
                <h3 className="mb-3 text-2xl font-bold text-text-alternative md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Emerging area with affordable options and developing infrastructure.
                </h3>
                <p className="text-text-alternative">
                  Quiet, family-friendly streets with strong capital growth potential.
                </p>
                <div className="mt-5 flex items-center md:mt-6">
                  <Link
                    href="/suburb-guide"
                    className="flex items-center gap-1 text-sm font-medium text-text-alternative transition-colors hover:opacity-80"
                  >
                    Explore Greendale <RxChevronRight />
                  </Link>
                </div>
              </div>
            </div>
            {/* CTA card */}
            <div className="relative flex flex-col p-6 md:p-8">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <img
                  src="/images/about-team.jpg"
                  className="size-full object-cover"
                  alt="Venture Management team"
                />
              </div>
              <div className="relative z-10 flex flex-1 flex-col justify-between">
                <div>
                  <p className="mb-2 inline-block text-sm font-semibold text-text-alternative">
                    Not sure yet?
                  </p>
                  <h3 className="mb-3 text-2xl font-bold text-text-alternative md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                    Need help choosing the right suburb?
                  </h3>
                  <p className="text-text-alternative">
                    WhatsApp us your budget and lifestyle needs — we'll guide you to the right neighborhood.
                  </p>
                  <div className="mt-5 flex items-center md:mt-6">
                    <a
                      href="https://wa.me/263771681728"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-medium text-text-alternative transition-colors hover:opacity-80"
                    >
                      Ask us on WhatsApp <RxChevronRight />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
