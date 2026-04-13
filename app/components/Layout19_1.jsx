"use client";

import React from "react";
import Link from "next/link";
import { RxChevronRight } from "react-icons/rx";

export function Layout19_1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Credentials</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Real agents with real experience
            </h2>
            <p className="mb-5 md:mb-6 md:text-md">
              We're REIZ-registered and based right here in Harare. Our team has
              spent years in these neighborhoods. You can visit us, call us, or
              verify us. That's how we work.
            </p>
            <ul className="my-4 list-disc pl-5">
              <li className="my-1 self-start pl-2">
                <p>REIZ registered</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Physical office address</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Years of local experience</p>
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
                About us
              </Link>
              <Link
                href="/about-us"
                className="flex items-center gap-1 text-sm font-medium transition-colors"
                style={{ color: "var(--color-forest)" }}
              >
                Meet the team <RxChevronRight />
              </Link>
            </div>
          </div>
          <div>
            <img
              src="/images/about-team.jpg"
              className="w-full object-cover"
              alt="Venture Management real estate team in Harare"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
