"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout384() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Simple</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Three steps to your home
          </h1>
          <p className="md:text-md">
            Pick a property, book your viewing, or message us on WhatsApp.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          <div className="flex flex-col border border-border-primary">
            <div className="block flex-1 p-6 sm:flex sm:flex-col sm:justify-center md:p-8">
              <div>
                <p className="mb-2 font-semibold">Browse</p>
                <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Find the right property for you
                </h2>
                <p>
                  Search by suburb, budget, or features like borehole and solar
                  power.
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Search"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Search
                </Button>
              </div>
            </div>
            <div className="flex size-full flex-col items-center justify-center self-start">
              <img
                src="/images/hero-home.jpg.svg"
                alt="Relume placeholder image 1"
                className="size-full object-cover"
              />
            </div>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 flex-col border border-border-primary sm:grid-cols-2 lg:col-span-2">
            <div className="block p-6 sm:flex sm:flex-col sm:justify-center md:p-8">
              <div>
                <p className="mb-2 font-semibold">Connect</p>
                <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Talk to an agent who knows Harare
                </h2>
                <p>
                  WhatsApp us directly or book a viewing. No delays, no games.
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Message"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Message
                </Button>
              </div>
            </div>
            <div className="flex size-full flex-col items-center justify-center self-start">
              <img
                src="/images/property-featured.jpg"
                alt="Relume placeholder image 2"
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
