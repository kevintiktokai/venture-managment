"use client";

import React from "react";

export function Header69() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10 max-w-lg text-center">
        <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
          The Lifeline of Your Investment
        </h1>
        <p className="text-text-alternative md:text-md">
          Sales, property management, development &amp; valuations
          across Zimbabwe since 2023.
        </p>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/images/suburb-borrowdale.jpg"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
