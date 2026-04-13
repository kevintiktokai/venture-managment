"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout370() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Explore</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Five suburbs, five stories
            </h2>
            <p className="md:text-md">
              Each neighbourhood has its own character and investment potential.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <div className="flex flex-col border border-border-primary">
              <div className="flex items-center justify-center">
                <img
                  src="/images/hero-home.jpg.svg"
                  alt="Relume placeholder image 1"
                  className="w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-semibold">Suburb</p>
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    Borrowdale
                  </h3>
                  <p>
                    Established, leafy, and built for families seeking space and
                    security.
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  <Button
                    title="Guide"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Guide
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col border border-border-primary">
              <div className="flex items-center justify-center">
                <img
                  src="/images/hero-home.jpg.svg"
                  alt="Relume placeholder image 2"
                  className="w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-semibold">Suburb</p>
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    Borrowdale
                  </h3>
                  <p>
                    Established, leafy, and built for families seeking space and
                    security.
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  <Button
                    title="Guide"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Guide
                  </Button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 border border-border-primary sm:col-span-2 sm:row-span-1 sm:grid-cols-2">
              <div className="flex items-center justify-center">
                <img
                  src="/images/property-featured.jpg"
                  alt="Relume placeholder image 3"
                  className="size-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-semibold">Suburb</p>
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    Avondale, Mt Pleasant, Greendale
                  </h3>
                  <p>
                    Growing communities with strong infrastructure and emerging
                    investment appeal.
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-4 md:mt-6">
                  <Button
                    title="Guide"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Guide
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
