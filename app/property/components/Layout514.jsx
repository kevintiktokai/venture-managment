"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { Fragment, useRef } from "react";
import { RxChevronRight } from "react-icons/rx";

const ConditionalRender = ({ condition, children }) => {
  return condition ? <>{children}</> : null;
};

const useRelume = ({ data }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const getStyles = (index) => {
    const startProgress = index / data.length;
    const endProgress = (index + 1) / data.length;
    const opacity = useTransform(
      scrollYProgress,
      [
        Math.max(0, startProgress - 0.07),
        startProgress,
        endProgress - 0.07,
        Math.min(1, endProgress),
      ],
      [0, 1, 1, 0],
    );
    const y = useTransform(
      scrollYProgress,
      [
        Math.max(0, startProgress - 0.1),
        startProgress,
        endProgress - 0.1,
        Math.min(1, endProgress),
      ],
      [100, 0, 0, -100],
    );
    return { opacity, y };
  };
  return { containerRef, getStyles };
};

const useMobile = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  return { isMobile };
};

const useTablet = () => {
  const isTablet = useMediaQuery("(min-width: 768px)");
  return { isTablet };
};

export function Layout514() {
  const tablet = useTablet();
  const mobile = useMobile();
  const useScroll = useRelume({
    data: [
      {
        heading: "01 Feature one",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        image: {
          src: "/images/property-featured.jpg",
          alt: "Relume placeholder image 1",
        },
        imageMobile: {
          src: "/images/hero-home.jpg",
          alt: "Relume placeholder image 1",
        },
      },
      {
        heading: "02 Feature two",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        image: {
          src: "/images/property-featured.jpg",
          alt: "Relume placeholder image 2",
        },
        imageMobile: {
          src: "/images/hero-properties.jpg",
          alt: "Relume placeholder image 2",
        },
      },
      {
        heading: "03 Feature three",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        image: {
          src: "/images/property-featured.jpg",
          alt: "Relume placeholder image 3",
        },
        imageMobile: {
          src: "/images/suburb-borrowdale.jpg",
          alt: "Relume placeholder image 3",
        },
      },
      {
        heading: "04 Feature four",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        image: {
          src: "/images/property-featured.jpg",
          alt: "Relume placeholder image 4",
        },
        imageMobile: {
          src: "/images/suburb-highlands.jpg",
          alt: "Relume placeholder image 4",
        },
      },
    ],
  });
  return (
    <section
      ref={useScroll.containerRef}
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28"
      ref={useScroll.containerRef}
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-start md:gap-20">
          <div className="hidden md:grid md:grid-cols-1 md:gap-4">
            <div className="h-screen overflow-hidden">
              <img
                src="/images/property-featured.jpg"
                alt="Relume placeholder image 1"
                className="size-full"
              />
            </div>
            <div className="h-screen overflow-hidden">
              <img
                src="/images/property-featured.jpg"
                alt="Relume placeholder image 2"
                className="size-full"
              />
            </div>
            <div className="h-screen overflow-hidden">
              <img
                src="/images/property-featured.jpg"
                alt="Relume placeholder image 3"
                className="size-full"
              />
            </div>
            <div className="h-screen overflow-hidden">
              <img
                src="/images/property-featured.jpg"
                alt="Relume placeholder image 4"
                className="size-full"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-16 md:sticky md:top-20 md:h-[calc(100vh_-10rem)] md:justify-center">
            <div className="flex flex-col">
              <p className="mb-3 font-semibold md:mb-4">Neighbourhood</p>
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                What the area offers
              </h2>
              <p className="md:text-md">
                Borrowdale has everything you need. Water, power, security, and
                proximity to schools and shops.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button title="Explore" variant="secondary">
                  Explore
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
            </div>
            <div className="flex flex-col justify-center gap-y-8">
              <AnimatePresence>
                <Fragment>
                  <ConditionalRender condition={mobile.isMobile}>
                    <div>
                      <h5 className="mb-3 text-xl font-bold">
                        01 Water supply
                      </h5>
                      <p>
                        Solar power with battery backup. Municipal electricity
                        connected. No load-shedding worries.
                      </p>
                      <div className="mt-4">
                        <img
                          src="/images/hero-home.jpg"
                          alt="Relume placeholder image 1"
                          className="size-full"
                        />
                      </div>
                    </div>
                  </ConditionalRender>
                  <ConditionalRender condition={tablet.isTablet}>
                    <motion.div
                      style={{
                        opacity: useScroll.getStyles(0).opacity,
                        y: useScroll.getStyles(0).y,
                      }}
                      initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="md:absolute first:md:relative"
                    >
                      <h5 className="font-bold md:mb-4 md:text-2xl">
                        01 Water supply
                      </h5>
                      <p className="md:text-md">
                        Solar power with battery backup. Municipal electricity
                        connected. No load-shedding worries.
                      </p>
                    </motion.div>
                  </ConditionalRender>
                </Fragment>
                <Fragment>
                  <ConditionalRender condition={mobile.isMobile}>
                    <div>
                      <h5 className="mb-3 text-xl font-bold">02 Power</h5>
                      <p>
                        Solar power with battery backup. Municipal electricity
                        connected. No load-shedding worries.
                      </p>
                      <div className="mt-4">
                        <img
                          src="/images/hero-properties.jpg"
                          alt="Relume placeholder image 2"
                          className="size-full"
                        />
                      </div>
                    </div>
                  </ConditionalRender>
                  <ConditionalRender condition={tablet.isTablet}>
                    <motion.div
                      style={{
                        opacity: useScroll.getStyles(1).opacity,
                        y: useScroll.getStyles(1).y,
                      }}
                      initial={false}
                      animate={{}}
                      transition={{}}
                      className="md:absolute first:md:relative"
                    >
                      <h5 className="font-bold md:mb-4 md:text-2xl">
                        02 Power
                      </h5>
                      <p className="md:text-md">
                        Solar power with battery backup. Municipal electricity
                        connected. No load-shedding worries.
                      </p>
                    </motion.div>
                  </ConditionalRender>
                </Fragment>
                <Fragment>
                  <ConditionalRender condition={mobile.isMobile}>
                    <div>
                      <h5 className="mb-3 text-xl font-bold">03 Security</h5>
                      <p>
                        Walking distance to Borrowdale Shopping Centre. Schools,
                        clinics, and restaurants nearby. Easy access to main
                        roads.
                      </p>
                      <div className="mt-4">
                        <img
                          src="/images/suburb-borrowdale.jpg"
                          alt="Relume placeholder image 3"
                          className="size-full"
                        />
                      </div>
                    </div>
                  </ConditionalRender>
                  <ConditionalRender condition={tablet.isTablet}>
                    <motion.div
                      style={{
                        opacity: useScroll.getStyles(2).opacity,
                        y: useScroll.getStyles(2).y,
                      }}
                      initial={false}
                      animate={{}}
                      transition={{}}
                      className="md:absolute first:md:relative"
                    >
                      <h5 className="font-bold md:mb-4 md:text-2xl">
                        03 Security
                      </h5>
                      <p className="md:text-md">
                        Walking distance to Borrowdale Shopping Centre. Schools,
                        clinics, and restaurants nearby. Easy access to main
                        roads.
                      </p>
                    </motion.div>
                  </ConditionalRender>
                </Fragment>
                <Fragment>
                  <ConditionalRender condition={mobile.isMobile}>
                    <div>
                      <h5 className="mb-3 text-xl font-bold">04 Proximity</h5>
                      <p>
                        Solar power with battery backup. Municipal electricity
                        connected. No load-shedding worries.
                      </p>
                      <div className="mt-4">
                        <img
                          src="/images/suburb-highlands.jpg"
                          alt="Relume placeholder image 4"
                          className="size-full"
                        />
                      </div>
                    </div>
                  </ConditionalRender>
                  <ConditionalRender condition={tablet.isTablet}>
                    <motion.div
                      style={{
                        opacity: useScroll.getStyles(3).opacity,
                        y: useScroll.getStyles(3).y,
                      }}
                      initial={false}
                      animate={{}}
                      transition={{}}
                      className="md:absolute first:md:relative"
                    >
                      <h5 className="font-bold md:mb-4 md:text-2xl">
                        04 Proximity
                      </h5>
                      <p className="md:text-md">
                        Solar power with battery backup. Municipal electricity
                        connected. No load-shedding worries.
                      </p>
                    </motion.div>
                  </ConditionalRender>
                </Fragment>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
