"use client";

import React from "react";
import { BiSolidShieldAlt2, BiSolidHomeHeart, BiWorld, BiCheckShield, BiBuildings, BiGroup } from "react-icons/bi";

export function Logo6() {
  const trustBadges = [
    { icon: BiSolidShieldAlt2, label: "REIZ Registered" },
    { icon: BiSolidHomeHeart, label: "Title Deed Verified" },
    { icon: BiWorld, label: "Diaspora Trusted" },
    { icon: BiCheckShield, label: "Legal Support" },
    { icon: BiBuildings, label: "60,000+ sqm Managed" },
    { icon: BiGroup, label: "Local Knowledge" },
  ];

  return (
    <section id="relume" className="px-[5%] py-12 md:py-16 lg:py-20">
      <div className="container">
        <h2 className="mx-auto mb-8 w-full max-w-lg text-center text-base font-bold leading-[1.2] md:mb-10 md:text-md md:leading-[1.2] lg:mb-12">
          Trusted by buyers across Harare and beyond
        </h2>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
          {trustBadges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex w-full flex-col items-center justify-center gap-3 justify-self-center px-4 py-6 md:py-8"
              style={{ background: "var(--color-stone)" }}
            >
              <Icon className="size-8 md:size-10" style={{ color: "var(--color-forest)" }} />
              <p
                className="text-xs font-semibold uppercase tracking-widest text-center"
                style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-body)" }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
