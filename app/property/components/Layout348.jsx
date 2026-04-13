"use client";

import { Button } from "@relume_io/relume-ui";
import { clsx } from "clsx";
import React, { useEffect, useState } from "react";
import { RxChevronRight } from "react-icons/rx";

const useScrollSection = () => {
  const [activeSection, setActiveSection] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const sectionHeight = window.innerHeight;
      const currentScrollPosition = window.scrollY + sectionHeight / 2;
      const currentSection = Math.floor(currentScrollPosition / sectionHeight);
      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const getOverlayClassNames = () => {
    return clsx(
      "fixed inset-0 -z-10 bg-[#e5e5e5] transition-opacity duration-300",
      {
        "opacity-100": activeSection === 0 || activeSection === 2,
        "opacity-0": activeSection !== 0 && activeSection !== 2,
      },
    );
  };
  const getImageClassNames = (index) => {
    return clsx("absolute w-full", {
      "opacity-100": activeSection === index,
      "opacity-0": activeSection !== index,
    });
  };
  return {
    getOverlayClassNames,
    getImageClassNames,
  };
};

export function Layout348() {
  const useScroll = useScrollSection();
  return (
    <section id="relume" className="px-[5%]">
      <div className="container">
        <div className="relative grid gap-x-12 py-16 sm:gap-y-12 md:grid-cols-2 md:py-0 lg:gap-x-20">
          <div className="sticky top-0 hidden h-screen md:flex md:flex-col md:items-center md:justify-center">
            <img
              src="/images/hero-home.jpg"
              className={useScroll.getImageClassNames(0)}
              alt="Relume placeholder image 1"
            />
            <img
              src="/images/hero-properties.jpg"
              className={useScroll.getImageClassNames(1)}
              alt="Relume placeholder image 2"
            />
            <img
              src="/images/suburb-borrowdale.jpg"
              className={useScroll.getImageClassNames(2)}
              alt="Relume placeholder image 3"
            />
            <img
              src="/images/suburb-highlands.jpg"
              className={useScroll.getImageClassNames(3)}
              alt="Relume placeholder image 4"
            />
          </div>
          <div className="grid grid-cols-1 gap-12 md:block">
            <div>
              <div className="flex flex-col items-start justify-center md:h-screen">
                <p className="eyebrow mb-3 md:mb-4">Diaspora</p>
                <h2 className="rb-5 mb-5 text-5xl font-light md:mb-6 md:text-7xl lg:text-8xl">
                  Buying from abroad made simple
                </h2>
                <p className="md:text-md">
                  You're in London, New York, or Australia. We handle the rest.
                  Virtual viewings, secure payments, legal guidance.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Start" variant="secondary">
                    Start
                  </Button>
                  <Button
                    title="More"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    More
                  </Button>
                </div>
                <div className="mt-10 block w-full md:hidden">
                  <img
                    src="/images/hero-home.jpg"
                    className="w-full"
                    alt="Relume placeholder image 1"
                  />
                </div>
                <div className={useScroll.getOverlayClassNames()} />
              </div>
            </div>
            <div>
              <div className="flex flex-col items-start justify-center md:h-screen">
                <p className="eyebrow mb-3 md:mb-4">Diaspora</p>
                <h2 className="rb-5 mb-5 text-5xl font-light md:mb-6 md:text-7xl lg:text-8xl">
                  Buying from abroad made simple
                </h2>
                <p className="md:text-md">
                  You're in London, New York, or Australia. We handle the rest.
                  Virtual viewings, secure payments, legal guidance.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Start" variant="secondary">
                    Start
                  </Button>
                  <Button
                    title="More"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    More
                  </Button>
                </div>
                <div className="mt-10 block w-full md:hidden">
                  <img
                    src="/images/hero-properties.jpg"
                    className="w-full"
                    alt="Relume placeholder image 2"
                  />
                </div>
                <div className={useScroll.getOverlayClassNames()} />
              </div>
            </div>
            <div>
              <div className="flex flex-col items-start justify-center md:h-screen">
                <p className="eyebrow mb-3 md:mb-4">Diaspora</p>
                <h2 className="rb-5 mb-5 text-5xl font-light md:mb-6 md:text-7xl lg:text-8xl">
                  Buying from abroad made simple
                </h2>
                <p className="md:text-md">
                  You're in London, New York, or Australia. We handle the rest.
                  Virtual viewings, secure payments, legal guidance.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Start" variant="secondary">
                    Start
                  </Button>
                  <Button
                    title="More"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    More
                  </Button>
                </div>
                <div className="mt-10 block w-full md:hidden">
                  <img
                    src="/images/suburb-borrowdale.jpg"
                    className="w-full"
                    alt="Relume placeholder image 3"
                  />
                </div>
                <div className={useScroll.getOverlayClassNames()} />
              </div>
            </div>
            <div>
              <div className="flex flex-col items-start justify-center md:h-screen">
                <p className="eyebrow mb-3 md:mb-4">Diaspora</p>
                <h2 className="rb-5 mb-5 text-5xl font-light md:mb-6 md:text-7xl lg:text-8xl">
                  Buying from abroad made simple
                </h2>
                <p className="md:text-md">
                  You're in London, New York, or Australia. We handle the rest.
                  Virtual viewings, secure payments, legal guidance.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Start" variant="secondary">
                    Start
                  </Button>
                  <Button
                    title="More"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    More
                  </Button>
                </div>
                <div className="mt-10 block w-full md:hidden">
                  <img
                    src="/images/suburb-borrowdale.jpg"
                    className="w-full"
                    alt="Relume placeholder image 4"
                  />
                </div>
                <div className={useScroll.getOverlayClassNames()} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
