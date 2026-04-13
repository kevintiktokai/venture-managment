"use client";

import React, { useRef, useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RxChevronRight, RxChevronLeft } from "react-icons/rx";

const listings = [
  {
    name: "Borrowdale — Executive home",
    details: "5 bed · 4 bath · Pool · Solar",
    price: "$675,000",
    priceNum: 675000,
    beds: 5,
    image: "/images/hero-home.jpg",
    suburb: "Borrowdale",
    tag: "Premium",
  },
  {
    name: "Milton Park — Family residence",
    details: "4 bed · 3 bath · Double garage",
    price: "$325,000",
    priceNum: 325000,
    beds: 4,
    image: "/images/suburb-borrowdale.jpg",
    suburb: "Milton Park",
    tag: "Popular",
  },
  {
    name: "Hillside — Spacious family home",
    details: "4 bed · 2 bath · Large garden",
    price: "$270,000",
    priceNum: 270000,
    beds: 4,
    image: "/images/suburb-highlands.jpg",
    suburb: "Hillside",
  },
  {
    name: "Monavale — Modern house",
    details: "3 bed · 2 bath · Borehole",
    price: "$190,000",
    priceNum: 190000,
    beds: 3,
    image: "/images/hero-properties.jpg",
    suburb: "Monavale",
    tag: "New",
  },
  {
    name: "Greendale — Townhouse",
    details: "3 bed · 2 bath · Cluster security",
    price: "$235,000",
    priceNum: 235000,
    beds: 3,
    image: "/images/property-featured.jpg",
    suburb: "Greendale",
  },
  {
    name: "Greendale — Compact townhouse",
    details: "2 bed · 1 bath · Cluster security",
    price: "$180,000",
    priceNum: 180000,
    beds: 2,
    image: "/images/property-featured.jpg",
    suburb: "Greendale",
  },
  {
    name: "Highlands — Contemporary villa",
    details: "4 bed · 3 bath · Solar · Pool",
    price: "$420,000",
    priceNum: 420000,
    beds: 4,
    image: "/images/suburb-highlands.jpg",
    suburb: "Highlands",
    tag: "Premium",
  },
  {
    name: "Avondale — Investment property",
    details: "3 bed · 2 bath · Borehole · Solar",
    price: "$295,000",
    priceNum: 295000,
    beds: 3,
    image: "/images/hero-properties.jpg",
    suburb: "Avondale",
  },
];

const PRICE_RANGES = [
  { label: "Any price", max: Infinity },
  { label: "Under $200k", max: 200000 },
  { label: "$200k – $350k", min: 200000, max: 350000 },
  { label: "$350k – $500k", min: 350000, max: 500000 },
  { label: "$500k+", min: 500000, max: Infinity },
];

const BED_OPTIONS = [
  { label: "Any", min: 0 },
  { label: "2+", min: 2 },
  { label: "3+", min: 3 },
  { label: "4+", min: 4 },
  { label: "5+", min: 5 },
];

const ALL_SUBURBS = ["All areas", ...Array.from(new Set(listings.map((l) => l.suburb))).sort()];

export function Product12() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Filter state
  const [suburb, setSuburb] = useState("All areas");
  const [priceIdx, setPriceIdx] = useState(0);
  const [bedsIdx, setBedsIdx] = useState(0);

  const filtered = useMemo(() => {
    const { min: pMin = 0, max: pMax = Infinity } = PRICE_RANGES[priceIdx];
    const { min: bMin = 0 } = BED_OPTIONS[bedsIdx];
    return listings.filter((l) => {
      const suburbOk = suburb === "All areas" || l.suburb === suburb;
      const priceOk = l.priceNum >= pMin && l.priceNum <= pMax;
      const bedsOk = l.beds >= bMin;
      return suburbOk && priceOk && bedsOk;
    });
  }, [suburb, priceIdx, bedsIdx]);

  const hasActiveFilters = suburb !== "All areas" || priceIdx !== 0 || bedsIdx !== 0;

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
  }, [filtered]);

  // Reset scroll position when filters change
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollLeft = 0;
  }, [filtered]);

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector("[data-card]")?.offsetWidth || 360;
    el.scrollBy({ left: direction * (cardWidth + 24), behavior: "smooth" });
  };

  const clearFilters = () => {
    setSuburb("All areas");
    setPriceIdx(0);
    setBedsIdx(0);
  };

  return (
    <section className="py-16 md:py-24 lg:py-28">
      {/* Header */}
      <div className="px-[5%] mb-10 md:mb-14">
        <div className="container">
          <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-[1fr_max-content]">
            <div className="max-w-lg">
              <p className="eyebrow mb-3 md:mb-4">For Sale</p>
              <h2 className="mb-3 text-5xl font-light md:mb-4 md:text-7xl lg:text-8xl">
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
                style={{ borderColor: "var(--color-forest)", color: "var(--color-forest)", borderRadius: "50%" }}
                aria-label="Scroll left"
              >
                <RxChevronLeft className="size-5" />
              </button>
              <button
                onClick={() => scroll(1)}
                disabled={!canScrollRight}
                className="flex size-12 items-center justify-center border transition-all disabled:opacity-30"
                style={{ borderColor: "var(--color-forest)", color: "var(--color-forest)", borderRadius: "50%" }}
                aria-label="Scroll right"
              >
                <RxChevronRight className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Filter Bar ── */}
      <div className="px-[5%] mb-8">
        <div className="container">
          <div
            className="flex flex-wrap items-center gap-3 rounded-sm p-4 md:p-5"
            style={{ background: "var(--color-stone)", border: "1px solid rgba(43,36,32,0.08)", borderRadius: "var(--radius-card)", boxShadow: "var(--shadow-card)" }}
          >
            {/* Suburb */}
            <div className="flex flex-col gap-1">
              <label className="text-xs uppercase tracking-widest opacity-60">Location</label>
              <select
                value={suburb}
                onChange={(e) => setSuburb(e.target.value)}
                className="bg-transparent text-sm font-medium outline-none cursor-pointer pr-6"
                style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-body)" }}
              >
                {ALL_SUBURBS.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div className="h-8 w-px opacity-30" style={{ background: "var(--color-charcoal)" }} />

            {/* Price */}
            <div className="flex flex-col gap-1">
              <label className="text-xs uppercase tracking-widest opacity-60">Price range</label>
              <select
                value={priceIdx}
                onChange={(e) => setPriceIdx(Number(e.target.value))}
                className="bg-transparent text-sm font-medium outline-none cursor-pointer pr-6"
                style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-body)" }}
              >
                {PRICE_RANGES.map((r, i) => (
                  <option key={r.label} value={i}>{r.label}</option>
                ))}
              </select>
            </div>

            <div className="h-8 w-px opacity-30" style={{ background: "var(--color-charcoal)" }} />

            {/* Beds */}
            <div className="flex flex-col gap-1">
              <label className="text-xs uppercase tracking-widest opacity-60">Bedrooms</label>
              <div className="flex gap-2">
                {BED_OPTIONS.map((b, i) => (
                  <button
                    key={b.label}
                    onClick={() => setBedsIdx(i)}
                    className="px-3 py-1 text-xs font-medium uppercase tracking-wider transition-all"
                    style={{
                      borderRadius: "var(--radius-badge)",
                      background: bedsIdx === i ? "var(--color-forest)" : "transparent",
                      color: bedsIdx === i ? "var(--color-ivory)" : "var(--color-charcoal)",
                      border: `1px solid ${bedsIdx === i ? "var(--color-forest)" : "var(--color-warm-gray)"}`,
                      boxShadow: bedsIdx === i ? "var(--shadow-btn)" : "none",
                    }}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Results count + clear */}
            <div className="ml-auto flex items-center gap-4">
              <AnimatePresence mode="wait">
                <motion.span
                  key={filtered.length}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  className="text-sm font-medium"
                  style={{ color: "var(--color-forest)" }}
                >
                  {filtered.length} {filtered.length === 1 ? "property" : "properties"}
                </motion.span>
              </AnimatePresence>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-xs uppercase tracking-widest underline underline-offset-2 opacity-60 hover:opacity-100 transition-opacity"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Listings Carousel ── */}
      {filtered.length === 0 ? (
        <div className="px-[5%]">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <p
                className="mb-2 text-3xl"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-forest)" }}
              >
                No properties found
              </p>
              <p className="text-sm opacity-60 mb-6">Try adjusting your filters</p>
              <button
                onClick={clearFilters}
                className="px-6 py-3 text-xs uppercase tracking-widest transition-all hover:-translate-y-0.5"
                style={{
                  background: "var(--color-forest)",
                  color: "var(--color-ivory)",
                  borderRadius: "var(--radius-btn)",
                  boxShadow: "var(--shadow-btn)",
                }}
              >
                Clear all filters
              </button>
            </motion.div>
          </div>
        </div>
      ) : (
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto px-[5%] pb-4 scrollbar-hide"
          style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch", scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((listing, i) => (
              <motion.div
                key={listing.name}
                data-card
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="flex-shrink-0 group cursor-pointer p-3 transition-all duration-300 hover:-translate-y-1"
                style={{ width: "clamp(280px, 30vw, 380px)", scrollSnapAlign: "start", borderRadius: "var(--radius-card)", boxShadow: "var(--shadow-card)", background: "var(--color-ivory)" }}
              >
                {/* Image with hover overlay */}
                <div className="mb-3 aspect-[5/6] overflow-hidden md:mb-4 relative" style={{ borderRadius: "10px" }}>
                  <img
                    src={listing.image}
                    alt={listing.name}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Hover CTA overlay */}
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-end pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "linear-gradient(to top, rgba(33,37,41,0.85) 0%, rgba(33,37,41,0) 55%)" }}
                  >
                    <a
                      href={`https://wa.me/263771681728?text=Hi, I'm interested in the ${listing.suburb} listing (${listing.price})`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 px-5 py-3 text-xs font-medium uppercase tracking-widest transition-all hover:-translate-y-0.5"
                      style={{ background: "var(--color-forest)", color: "var(--color-ivory)", borderRadius: "var(--radius-btn)", boxShadow: "var(--shadow-btn)" }}
                    >
                      Inquire on WhatsApp
                    </a>
                  </div>
                  {/* Tag badge */}
                  {listing.tag && (
                    <span
                      className="absolute top-3 left-3 px-2 py-1 text-xs uppercase tracking-widest font-medium"
                      style={{ background: "var(--color-forest)", color: "var(--color-ivory)", borderRadius: "var(--radius-badge)" }}
                    >
                      {listing.tag}
                    </span>
                  )}
                </div>
                <div className="flex justify-between md:text-md">
                  <div className="mr-4">
                    <h3 className="font-semibold">{listing.name}</h3>
                    <div className="text-sm opacity-70">{listing.details}</div>
                  </div>
                  <div className="shrink-0 text-md font-semibold md:text-lg">{listing.price}</div>
                </div>
                {/* Mobile-visible CTA (hidden on desktop — desktop uses hover overlay) */}
                <a
                  href={`https://wa.me/263771681728?text=Hi, I'm interested in the ${listing.suburb} listing (${listing.price})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex w-full items-center justify-center gap-2 px-5 py-3 text-xs font-medium uppercase tracking-widest transition-all hover:-translate-y-0.5 md:hidden"
                  style={{ border: "1px solid var(--color-forest)", color: "var(--color-forest)", borderRadius: "var(--radius-btn)" }}
                >
                  Inquire on WhatsApp
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* Scroll hint */}
      {filtered.length > 0 && (
        <div className="px-[5%] mt-6">
          <div className="container">
            <p className="text-sm opacity-50 flex items-center gap-2">
              <span>←</span> Swipe to browse {filtered.length} {filtered.length === 1 ? "listing" : "listings"} <span>→</span>
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
