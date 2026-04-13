"use client";

import React from "react";
import { BiSolidStar } from "react-icons/bi";

export function Testimonial17() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-light md:mb-6 md:text-7xl lg:text-8xl">
            What buyers say
          </h2>
          <p className="md:text-md">
            Real feedback from people who've bought with us.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex w-full flex-col items-start justify-between p-6 md:p-8 transition-all duration-300 hover:-translate-y-1"
            style={{ borderRadius: "var(--radius-card)", boxShadow: "var(--shadow-card)", background: "var(--color-ivory)" }}>
            <div className="rb-5 mb-5 md:mb-6">
              <div className="mb-5 flex md:mb-6">
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
              </div>
              <blockquote className="md:text-md">
                "I was buying from London and terrified of fraud. Harare Realty
                Partners walked me through every step. The title deed
                verification gave me peace of mind I didn't think was possible."
              </blockquote>
            </div>
            <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
              <img
                src="/images/suburb-borrowdale.jpg"
                alt="Testimonial avatar"
                className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
              />
              <div>
                <p className="font-semibold">Kwame Asante</p>
                <p>Diaspora buyer, UK</p>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-between p-6 md:p-8 transition-all duration-300 hover:-translate-y-1"
            style={{ borderRadius: "var(--radius-card)", boxShadow: "var(--shadow-card)", background: "var(--color-ivory)" }}>
            <div className="rb-5 mb-5 md:mb-6">
              <div className="mb-5 flex md:mb-6">
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
              </div>
              <blockquote className="md:text-md">
                "They found me a house in Highlands with solar and borehole
                already installed. No surprises, no hidden costs. Just honest
                dealing."
              </blockquote>
            </div>
            <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
              <img
                src="/images/suburb-borrowdale.jpg"
                alt="Testimonial avatar"
                className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
              />
              <div>
                <p className="font-semibold">Zainab Mtetwa</p>
                <p>Local buyer, Harare</p>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-between p-6 md:p-8 transition-all duration-300 hover:-translate-y-1"
            style={{ borderRadius: "var(--radius-card)", boxShadow: "var(--shadow-card)", background: "var(--color-ivory)" }}>
            <div className="rb-5 mb-5 md:mb-6">
              <div className="mb-5 flex md:mb-6">
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
              </div>
              <blockquote className="md:text-md">
                "The USD pricing clarity saved me from currency confusion. I
                knew exactly what I was paying in both currencies before I
                signed anything."
              </blockquote>
            </div>
            <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
              <img
                src="/images/suburb-borrowdale.jpg"
                alt="Testimonial avatar"
                className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
              />
              <div>
                <p className="font-semibold">David Mutasa</p>
                <p>Investor, South Africa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
