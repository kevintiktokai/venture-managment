"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export function Header26() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // Parallax: image moves up at 40% of scroll speed
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  // Content fades + drifts up slightly on scroll
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[92vh] overflow-hidden"
      style={{ background: "var(--color-charcoal)" }}
    >
      {/* Parallax background image */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y: bgY, scale: 1.1 }}
      >
        <img
          src="/images/hero-home.jpg"
          onError={(e) => {
            e.currentTarget.src =
              "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=85&auto=format&fit=crop";
          }}
          className="size-full object-cover object-center"
          alt="Luxury home in Harare"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(43,36,32,0.92) 0%, rgba(43,36,32,0.70) 45%, rgba(43,36,32,0.15) 100%)",
          }}
        />
      </motion.div>

      {/* Content — also drifts up gently */}
      <motion.div
        className="relative z-10 flex min-h-[92vh] items-end px-[5%] pb-16 md:pb-24 lg:pb-28"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="max-w-2xl">
          {/* Eyebrow — slides in from left */}
          <motion.p
            className="mb-6 text-sm font-medium uppercase tracking-[0.2em]"
            style={{ color: "var(--color-gold)" }}
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Venture Management Real Estate
          </motion.p>

          {/* Headline — staggered lines */}
          <motion.h1
            className="mb-6 text-white"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              fontWeight: 300,
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
            }}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            The Lifeline of
            <br />
            <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>
              Your Investment
            </em>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="mb-10 max-w-md text-base leading-relaxed"
            style={{ color: "rgba(247,243,238,0.75)", fontFamily: "var(--font-body)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
          >
            Sales, property management, development &amp; valuations across
            Zimbabwe. Trusted by homeowners, investors, and diaspora buyers.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.38 }}
          >
            <Link
              href="/properties"
              className="inline-block px-8 py-4 text-sm font-medium uppercase tracking-widest transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
              style={{
                background: "var(--color-terracotta)",
                color: "var(--color-ivory)",
                borderRadius: "2px",
                fontFamily: "var(--font-body)",
              }}
            >
              View For Sale
            </Link>
            <Link
              href="/area-guides"
              className="inline-block px-8 py-4 text-sm font-medium uppercase tracking-widest transition-all duration-200 hover:-translate-y-0.5"
              style={{
                border: "1px solid rgba(247,243,238,0.5)",
                color: "var(--color-ivory)",
                borderRadius: "2px",
                fontFamily: "var(--font-body)",
              }}
            >
              Area Guides
            </Link>
          </motion.div>

          {/* Trust bar with animated counters */}
          <motion.div
            className="mt-14 flex flex-wrap items-center gap-8 border-t pt-8"
            style={{ borderColor: "rgba(247,243,238,0.15)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.55 }}
          >
            {[
              { stat: "37+", label: "Active listings" },
              { stat: "60,000+", label: "sqm managed" },
              { stat: "Est. 2023", label: "Highlands, Harare" },
            ].map(({ stat, label }) => (
              <div key={label}>
                <p
                  className="text-2xl font-light"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)" }}
                >
                  {stat}
                </p>
                <p
                  className="text-xs uppercase tracking-wider"
                  style={{ color: "rgba(247,243,238,0.55)" }}
                >
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 right-[5%] z-10 hidden lg:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
      >
        <span
          className="text-xs uppercase tracking-widest"
          style={{ color: "rgba(247,243,238,0.4)", writingMode: "vertical-rl" }}
        >
          Scroll to explore
        </span>
        <motion.div
          className="w-px origin-top"
          style={{ background: "rgba(247,243,238,0.2)" }}
          initial={{ scaleY: 0, height: 48 }}
          animate={{ scaleY: 1, height: 48 }}
          transition={{ delay: 1.3, duration: 0.8, ease: "easeOut" }}
        />
      </motion.div>
    </section>
  );
}
