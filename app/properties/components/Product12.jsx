"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { RxChevronRight, RxChevronLeft } from "react-icons/rx";

const listings = [
  {
    name: "Borrowdale — Executive home",
    details: "5 bed · 4 bath · Pool · Solar",
    price: "$675,000",
    image: "/images/hero-home.jpg",
    suburb: "Borrowdale",
  },
  {
    name: "Milton Park — Family residence",
    details: "4 bed · 3 bath · Double garage",
    price: "$325,000",
    image: "/images/suburb-borrowdale.jpg",
    suburb: "Milton Park",
  },
  {
    name: "Hillside — Spacious family home",
    details: "4 bed · 2 bath · Large garden",
    price: "$270,000",
    image: "/images/suburb-highlands.jpg",
    suburb: "Hillside",
  },
  {
    name: "Monavale — Modern house",
    details: "3 bed · 2 bath · Borehole",
    price: "$190,000",
    image: "/images/hero-properties.jpg",
    suburb: "Monavale",
  },
  {
    name: "Greendale — Townhouse",
    details: "3 bed · 2 bath · Cluster security",
    price: "$235,000",
    image: "/images/property-featured.jpg",
    suburb: "Greendale",
  },
  {
    name: "Greendale — Compact townhouse",
    details: "2 bed · 1 bath · Cluster security",
    price: "$180,000",
    image: "/images/property-featured.jpg",
    suburb: "Greendale",
  },
  {
    name: "Highlands — Contemporary villa",
    details: "4 bed · 3 bath · Solar · Pool",
    price: "$420,000",
    image: "/images/suburb-highlands.jpg",
    suburb: "Highlands",
  },
  {
    name: "Avondale — Investment property",
    details: "3 bed · 2 bath · Borehole · Solar",
    price: "$295,000",
    image: "/images/hero-properties.jpg",
    suburb: "Avondale",
  },
];

export function Product12() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector("[data-card]")?.offsetWidth || 360;
    el.scrollBy({ left: direction * (cardWidth + 24), behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24 lg:py-28">
      <div className="px-[5%]">
        <div className="container">
          <div className="mb-12 grid grid-cols-1 items-end gap-6 md:mb-18 md:grid-cols-[1fr_max-content] lg:mb-20">
            <div className="max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">For Sale</p>
              <h2 className="mb-3 text-5xl font-bold md:mb-4 md:text-7xl lg:text-8xl">
                Featured listings
              </h2>
              <p className="md:text-md">
                Verified properties with transparent USD pricing
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => scroll(-1)}
                disabled={!canScrollLeft}
                className="flex size-12 items-center justify-center border transition-all disabled:opacity-30"
                style={{
                  borderColor: "var(--color-forest)",
                  color: "var(--color-forest)",
                  borderRadius: "2px",
                }}
                aria-label="Scroll left"
              >
                <RxChevronLeft className="size-5" />
              </button>
              <button
                onClick={() => scroll(1)}
                disabled={!canScrollRight}
                className="flex size-12 items-center justify-center border transition-all disabled:opacity-30"
                style={{
                  borderColor: "var(--color-forest)",
                  color: "var(--color-forest)",
                  borderRadius: "2px",
                }}
                aria-label="Scroll right"
              >
                <RxChevronRight className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable track — bleeds to edges */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-[5%] pb-4 scrollbar-hide"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {listings.map((listing, i) => (
          <div
            key={i}
            data-card
            className="flex-shrink-0 group"
            style={{
              width: "clamp(280px, 30vw, 380px)",
              scrollSnapAlign: "start",
            }}
          >
            <div className="mb-3 aspect-[5/6] overflow-hidden md:mb-4">
              <img
                src={listing.image}
                alt={listing.name}
                className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex justify-between md:text-md">
              <div className="mr-4">
                <h3 className="font-semibold">{listing.name}</h3>
                <div className="text-sm opacity-70">{listing.details}</div>
              </div>
              <div className="shrink-0 text-md font-semibold md:text-lg">
                {listing.price}
              </div>
            </div>
            <a
              href={`https://wa.me/263771681728?text=Hi, I'm interested in the ${listing.suburb} listing (${listing.price})`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex w-full items-center justify-center gap-2 px-5 py-3 text-xs font-medium uppercase tracking-widest transition-all hover:-translate-y-0.5 md:mt-4"
              style={{
                border: "1px solid var(--color-forest)",
                color: "var(--color-forest)",
                borderRadius: "2px",
              }}
            >
              Inquire on WhatsApp
            </a>
          </div>
        ))}
      </div>

      {/* Scroll indicator dots */}
      <div className="px-[5%] mt-6">
        <div className="container">
          <p className="text-sm opacity-50 flex items-center gap-2">
            <span>←</span> Swipe to browse all {listings.length} listings <span>→</span>
          </p>
        </div>
      </div>
    </section>
  );
}
