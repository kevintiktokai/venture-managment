"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout19() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Our story</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Born from hospitality. Built for real estate.
            </h2>
            <p className="mb-5 md:mb-6 md:text-md">
              Venture Management was founded in 2023 by a team with roots in
              hospitality and retail management. We brought that same dedication
              to service into Zimbabwe's property market — combining commercial
              insight with genuine local knowledge to deliver results that matter
              to our clients.
            </p>
            <ul className="my-4 list-disc pl-5">
              <li className="my-1 self-start pl-2">
                <p>Sales — residential &amp; commercial across Harare</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Property management — 60,000+ sqm under management</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Development &amp; valuations for investors and owners</p>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Learn more" variant="secondary">
                Learn more
              </Button>
              <Button
                title="Contact us"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Contact us
              </Button>
            </div>
          </div>
          <div>
            <img
              src="/images/suburb-borrowdale.jpg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
