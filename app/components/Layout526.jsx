"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { RxChevronRight } from "react-icons/rx";
import { ScrollReveal } from "./ScrollReveal";

const suburbs = [
  {
    id: "borrowdale",
    name: "Borrowdale",
    tagline: "Premium. Tree-lined. Secure.",
    description: "Established gated communities, top-tier schools, and Harare's most prestigious address. Starting from $180k.",
    priceFrom: "$180k",
    image: "/images/suburb-borrowdale.jpg",
    // SVG position on schematic map (% of viewBox)
    cx: 62, cy: 22,
  },
  {
    id: "highlands",
    name: "Highlands",
    tagline: "Our home base. Infrastructure-ready.",
    description: "Close to town, reliable solar and borehole setups, modern builds. Our office is here.",
    priceFrom: "$220k",
    image: "/images/suburb-highlands.jpg",
    cx: 52, cy: 38,
  },
  {
    id: "avondale",
    name: "Avondale",
    tagline: "Value. Community. Growth.",
    description: "Vibrant, walkable suburb with excellent investment upside and improving infrastructure.",
    priceFrom: "$150k",
    image: "/images/hero-properties.jpg",
    cx: 38, cy: 42,
  },
  {
    id: "mt-pleasant",
    name: "Mt Pleasant",
    tagline: "University area. Rental demand.",
    description: "Newer builds, strong rental yield driven by university proximity. Ideal for diaspora investors.",
    priceFrom: "$160k",
    image: "/images/property-featured.jpg",
    cx: 44, cy: 28,
  },
  {
    id: "greendale",
    name: "Greendale",
    tagline: "Quiet streets. Capital growth.",
    description: "Family-friendly with affordable entry points and strong future development potential.",
    priceFrom: "$130k",
    image: "/images/hero-home.jpg",
    cx: 68, cy: 48,
  },
];

// Simple schematic road paths for a stylised Harare map
const ROADS = [
  "M 40 50 L 80 50",    // horizontal main road
  "M 50 10 L 50 90",    // vertical
  "M 30 30 L 70 70",    // diagonal
  "M 70 30 L 30 70",    // cross diagonal
  "M 20 50 L 40 50",
  "M 55 20 L 75 40",
];

export function Layout526() {
  const [active, setActive] = useState(suburbs[0]);

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 overflow-hidden">
      <div className="container">
        <ScrollReveal variant="rotateIn" className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="eyebrow mb-3 md:mb-4">Suburbs</p>
            <h2 className="mb-5 text-5xl font-light md:mb-6 md:text-7xl lg:text-8xl">
              Where to buy in Harare
            </h2>
            <p className="md:text-md">
              Hover a suburb on the map to explore it. Each neighbourhood has its own character.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* ── Interactive SVG Map ── */}
          <ScrollReveal variant="slideLeft">
            <div
              className="relative rounded-sm overflow-hidden"
              style={{ background: "var(--color-charcoal)", aspectRatio: "1/1", maxWidth: 520 }}
            >
              {/* Background image of active suburb, blurred */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.18 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <img src={active.image} alt="" className="size-full object-cover" />
                </motion.div>
              </AnimatePresence>

              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 size-full"
                style={{ opacity: 0.15 }}
              >
                {ROADS.map((d, i) => (
                  <path key={i} d={d} stroke="var(--color-ivory)" strokeWidth="0.5" fill="none" />
                ))}
              </svg>

              {/* Label: Harare CBD */}
              <div
                className="absolute text-xs uppercase tracking-widest opacity-30"
                style={{ left: "42%", top: "52%", color: "var(--color-ivory)", fontFamily: "var(--font-body)" }}
              >
                CBD
              </div>

              {/* Suburb dots */}
              <svg viewBox="0 0 100 100" className="absolute inset-0 size-full">
                {suburbs.map((s) => {
                  const isActive = active.id === s.id;
                  return (
                    <g
                      key={s.id}
                      onClick={() => setActive(s)}
                      onMouseEnter={() => setActive(s)}
                      style={{ cursor: "pointer" }}
                    >
                      {/* Pulse ring */}
                      {isActive && (
                        <circle
                          cx={s.cx}
                          cy={s.cy}
                          r="5"
                          fill="none"
                          stroke="var(--color-gold)"
                          strokeWidth="0.8"
                          style={{ animation: "mapPulse 1.8s ease-out infinite" }}
                        />
                      )}
                      {/* Dot */}
                      <circle
                        cx={s.cx}
                        cy={s.cy}
                        r={isActive ? 2.8 : 2}
                        fill={isActive ? "var(--color-gold)" : "var(--color-ivory)"}
                        opacity={isActive ? 1 : 0.55}
                        style={{ transition: "all 0.2s" }}
                      />
                      {/* Name label */}
                      <text
                        x={s.cx + 3.5}
                        y={s.cy + 1}
                        fontSize="3"
                        fill={isActive ? "var(--color-gold)" : "var(--color-ivory)"}
                        opacity={isActive ? 1 : 0.55}
                        fontFamily="DM Sans, sans-serif"
                        style={{ transition: "all 0.2s", userSelect: "none" }}
                      >
                        {s.name}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Compass */}
              <div
                className="absolute bottom-4 right-4 text-xs uppercase tracking-widest opacity-30 flex flex-col items-center gap-0.5"
                style={{ color: "var(--color-ivory)" }}
              >
                <span>N</span>
                <div className="h-3 w-px" style={{ background: "var(--color-ivory)" }} />
              </div>
            </div>
          </ScrollReveal>

          {/* ── Detail panel ── */}
          <ScrollReveal variant="slideRight" delay={0.1}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Image */}
                <div className="mb-6 overflow-hidden" style={{ aspectRatio: "16/9", borderRadius: "4px" }}>
                  <img
                    src={active.image}
                    alt={active.name}
                    className="size-full object-cover card-img"
                  />
                </div>

                {/* Content */}
                <p className="mb-1 text-sm font-semibold" style={{ color: "var(--color-forest)" }}>
                  {active.name}
                </p>
                <h3
                  className="mb-3 text-3xl font-light md:text-4xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {active.tagline}
                </h3>
                <p className="mb-4 leading-relaxed opacity-75">{active.description}</p>
                <p className="mb-6 text-sm font-medium">
                  From{" "}
                  <span style={{ color: "var(--color-forest)", fontWeight: 600 }}>
                    {active.priceFrom}
                  </span>
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/suburb-guide"
                    className="inline-block px-5 py-2.5 text-xs font-medium uppercase tracking-widest transition-all hover:-translate-y-0.5"
                    style={{
                      background: "var(--color-forest)",
                      color: "var(--color-ivory)",
                      borderRadius: "var(--radius-btn)",
                    }}
                  >
                    Suburb guide
                  </Link>
                  <Link
                    href="/properties"
                    className="flex items-center gap-1 text-sm font-medium transition-colors"
                    style={{ color: "var(--color-forest)" }}
                  >
                    See listings <RxChevronRight />
                  </Link>
                </div>

                {/* Suburb selector chips */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {suburbs.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setActive(s)}
                      className="px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition-all"
                      style={{
                        borderRadius: "var(--radius-btn)",
                        background: active.id === s.id ? "var(--color-forest)" : "transparent",
                        color: active.id === s.id ? "var(--color-ivory)" : "var(--color-charcoal)",
                        border: `1px solid ${active.id === s.id ? "var(--color-forest)" : "var(--color-warm-gray)"}`,
                      }}
                    >
                      {s.name}
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        @keyframes mapPulse {
          0%   { r: 3; opacity: 0.8; }
          100% { r: 9; opacity: 0; }
        }
      `}</style>
    </section>
  );
}
