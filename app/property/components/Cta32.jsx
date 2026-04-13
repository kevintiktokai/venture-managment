"use client";

import { Button, Input } from "@relume_io/relume-ui";
import React from "react";

export function Cta32() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container flex flex-col items-center">
        <div className="mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            New properties in your inbox
          </h2>
          <p className="md:text-md">
            Get alerts when listings match your criteria across Harare's best
            suburbs.
          </p>
          <div className="mx-auto mt-6 w-full max-w-sm md:mt-8">
            <form className="rb-4 mb-4 grid max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4">
              <Input id="email" type="email" placeholder="Enter your email" />
              <Button
                title="Subscribe"
                variant="primary"
                size="sm"
                className="items-center justify-center px-6 py-3"
              >
                Subscribe
              </Button>
            </form>
            <p className="text-xs">
              By clicking Subscribe you're confirming that you agree with our
              Terms and Conditions.
            </p>
          </div>
        </div>
        <img
          src="/images/hero-home.jpg.svg"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
      </div>
    </section>
  );
}
