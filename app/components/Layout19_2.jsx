"use client";

import React from "react";
import Link from "next/link";
import { RxChevronRight } from "react-icons/rx";

export function Layout19_2() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="eyebrow mb-3 md:mb-4">Diaspora</p>
            <h2 className="mb-5 text-5xl font-light md:mb-6 md:text-7xl lg:text-8xl">
              Buying from abroad made simple
            </h2>
            <p className="mb-5 md:mb-6 md:text-md">
              Remote buying doesn't mean remote support. We handle title
              verification, neighborhood checks, and legal paperwork so you can
              buy with confidence from anywhere.
            </p>
            <ul className="my-4 list-disc pl-5">
              <li className="my-1 self-start pl-2">
                <p>Money transfer guidance</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Remote viewing coordination</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Legal support throughout</p>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Link
                href="/diaspora-buyers"
                className="inline-block px-5 py-2.5 text-xs font-medium uppercase tracking-widest transition-all hover:-translate-y-0.5"
                style={{
                  border: "1px solid var(--color-forest)",
                  color: "var(--color-forest)",
                  borderRadius: "var(--radius-btn)",
                }}
              >
                Diaspora guide
              </Link>
              <Link
                href="/diaspora-buyers"
                className="flex items-center gap-1 text-sm font-medium transition-colors"
                style={{ color: "var(--color-forest)" }}
              >
                How it works <RxChevronRight />
              </Link>
            </div>
          </div>
          <div>
            <img
              src="/images/hero-properties.jpg"
              className="w-full object-cover"
              alt="Buying property from abroad with Venture Management"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
