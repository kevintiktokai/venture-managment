"use client";

import React from "react";
import Link from "next/link";
import { RxChevronRight } from "react-icons/rx";
import { BiSolidShieldAlt2, BiDollar, BiSolidBolt } from "react-icons/bi";
import { ScrollReveal, StaggerReveal } from "./ScrollReveal";

const cards = [
  {
    icon: BiSolidShieldAlt2,
    label: "Listings",
    title: "Title deed verification process",
    desc: "We inspect documents and confirm ownership before any listing goes live",
    img: "/images/suburb-borrowdale.jpg",
    imgAlt: "Borrowdale neighborhood in Harare",
    link: { href: "/about-us", label: "Learn more" },
  },
  {
    icon: BiDollar,
    label: "Currency",
    title: "Currency clarity for all buyers",
    desc: "USD and local currency pricing shown side by side always",
    img: "/images/suburb-highlands.jpg",
    imgAlt: "Highlands suburb in Harare",
    link: { href: "/properties", label: "Browse listings" },
  },
  {
    icon: BiSolidBolt,
    label: "Infrastructure",
    title: "Infrastructure you can count on",
    desc: "Borehole, solar, and security details listed for every property",
    img: "/images/hero-properties.jpg",
    imgAlt: "Modern property in Harare",
    link: { href: "/suburb-guide", label: "Suburb guide" },
  },
];

export function Layout522() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <ScrollReveal variant="clipUp" className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="eyebrow mb-3 md:mb-4">Verified</p>
            <h2
              className="mb-5 text-5xl font-light md:mb-6 md:text-7xl lg:text-8xl"
              style={{ color: "var(--text-primary)" }}
            >
              How we work
            </h2>
            <p className="md:text-md" style={{ color: "var(--text-secondary)" }}>
              Every listing checked for title deed authenticity and legal
              standing
            </p>
          </div>
        </ScrollReveal>
        <StaggerReveal
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3"
          stagger={0.12}
        >
          {cards.map(({ icon: Icon, label, title, desc, img, imgAlt, link }) => (
            <div
              key={title}
              className="relative flex flex-col card-hover overflow-hidden"
              style={{
                borderRadius: "var(--radius-card)",
                boxShadow: "var(--shadow-card)",
                minHeight: "380px",
              }}
            >
              {/* Background image */}
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/75 via-black/50 to-black/30" />
                <img src={img} className="size-full object-cover" alt={imgAlt} />
              </div>
              {/* Content */}
              <div className="relative z-10 flex flex-1 flex-col justify-end p-6 md:p-8">
                <div className="mb-4">
                  <Icon className="size-10 text-white/80" />
                </div>
                <p className="eyebrow mb-2" style={{ color: "rgba(237,215,192,0.7)" }}>
                  {label}
                </p>
                <h3
                  className="mb-3 text-2xl font-medium leading-tight md:text-3xl"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-ivory)" }}
                >
                  {title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                  {desc}
                </p>
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-sm font-medium transition-colors hover:opacity-80"
                  style={{ color: "var(--color-gold)" }}
                >
                  {link.label} <RxChevronRight />
                </Link>
              </div>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
