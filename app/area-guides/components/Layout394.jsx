"use client";

import React from "react";

const rentals = [
  {
    name: "Eastlea — Executive house",
    details: "4 bed · 3 bath · Pool · Solar · Garden",
    price: "$2,500/pm",
    image: "/images/hero-home.jpg",
    suburb: "Eastlea",
  },
  {
    name: "Helensvale — Townhouse",
    details: "3 bed · 2 bath · Cluster security",
    price: "$2,000/pm",
    image: "/images/suburb-highlands.jpg",
    suburb: "Helensvale",
  },
  {
    name: "Manresa — Family home",
    details: "3 bed · 2 bath · Borehole · Garden",
    price: "$1,200/pm",
    image: "/images/suburb-borrowdale.jpg",
    suburb: "Manresa",
  },
  {
    name: "Highlands — Modern apartment",
    details: "2 bed · 1 bath · Secure complex",
    price: "$950/pm",
    image: "/images/property-featured.jpg",
    suburb: "Highlands",
  },
  {
    name: "Avondale — Furnished apartment",
    details: "1 bed · 1 bath · Fully furnished",
    price: "$750/pm",
    image: "/images/hero-properties.jpg",
    suburb: "Avondale",
  },
  {
    name: "Borrowdale — Commercial office",
    details: "Open plan · 150sqm · Parking",
    price: "$3,200/pm",
    image: "/images/suburb-borrowdale.jpg",
    suburb: "Borrowdale",
  },
];

export function Layout394() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">For Rent</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Rental listings
          </h2>
          <p className="md:text-md">
            All properties professionally managed. WhatsApp us to book a
            viewing.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {rentals.map((rental, i) => (
            <div key={i} className="flex flex-col border border-border-primary">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={rental.image}
                  alt={rental.name}
                  className="size-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
                <div>
                  <h3 className="mb-1 text-lg font-semibold">{rental.name}</h3>
                  <p className="mb-3 text-sm" style={{ color: "var(--color-warm-gray)" }}>
                    {rental.details}
                  </p>
                  <p className="text-2xl font-bold">{rental.price}</p>
                </div>
                <a
                  href={`https://wa.me/263771681728?text=Hi, I'm interested in renting the ${rental.suburb} property (${rental.price})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block w-full py-3 text-center text-sm font-medium uppercase tracking-widest transition-all hover:-translate-y-0.5"
                  style={{
                    border: "1px solid var(--color-forest)",
                    color: "var(--color-forest)",
                    borderRadius: "var(--radius-btn)",
                  }}
                >
                  Inquire on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
