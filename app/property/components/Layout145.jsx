"use client";

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ScrollReveal, StaggerReveal } from "../../components/ScrollReveal";
import { Lightbox } from "../../components/Lightbox";
import { RxZoomIn } from "react-icons/rx";

const galleryImages = [
  { src: "/images/hero-home.jpg", alt: "Living area" },
  { src: "/images/property-featured.jpg", alt: "Main bedroom" },
  { src: "/images/suburb-borrowdale.jpg", alt: "Garden & pool" },
  { src: "/images/suburb-highlands.jpg", alt: "Kitchen" },
  { src: "/images/hero-properties.jpg", alt: "Exterior view" },
];

export function Layout145() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <ScrollReveal variant="fadeUp" className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto flex max-w-lg flex-col items-center text-center">
            <p className="mb-3 font-semibold md:mb-4">Gallery</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              See every angle
            </h2>
            <p className="md:text-md">
              Sunlit interiors, manicured gardens, and detailed shots of every room.
              Click any image to browse full-screen.
            </p>
          </div>
        </ScrollReveal>

        {/* Gallery grid */}
        <StaggerReveal
          className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4"
          stagger={0.08}
        >
          {/* Large featured image */}
          <button
            className="col-span-2 row-span-1 overflow-hidden group relative md:col-span-2 md:row-span-2"
            onClick={() => setLightboxIndex(0)}
            style={{ aspectRatio: "16/9" }}
          >
            <img
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
              <RxZoomIn className="size-8 text-white" />
            </div>
          </button>

          {/* Smaller thumbnails */}
          {galleryImages.slice(1).map((img, i) => (
            <button
              key={i}
              className="overflow-hidden group relative"
              onClick={() => setLightboxIndex(i + 1)}
              style={{ aspectRatio: "4/3" }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                <RxZoomIn className="size-6 text-white" />
              </div>
              {/* "View all" overlay on last thumb */}
              {i === galleryImages.slice(1).length - 1 && (
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ background: "rgba(33,37,41,0.6)" }}
                >
                  <span className="text-sm font-medium uppercase tracking-widest text-white">
                    +{galleryImages.length} photos
                  </span>
                </div>
              )}
            </button>
          ))}
        </StaggerReveal>
      </div>

      {/* Lightbox portal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={galleryImages}
            startIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
