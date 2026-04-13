"use client";

import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout503() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Our services</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Four ways we serve you
            </h2>
            <p className="md:text-md">
              From finding your first home to managing a commercial portfolio —
              Venture Management covers the full property lifecycle.
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
              <Button title="Explore" variant="secondary">
                Explore
              </Button>
              <Button
                title="Learn"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Learn
              </Button>
            </div>
          </div>
        </div>
        <Tabs defaultValue="tab-one" className="flex flex-col items-center">
          <TabsList className="no-scrollbar relative mb-12 flex w-screen flex-nowrap items-center gap-x-6 overflow-auto px-[5vw] md:mb-16 md:w-auto md:max-w-full md:px-0">
            <TabsTrigger
              value="tab-one"
              className="border-0 border-b-[1.5px] border-transparent px-0 py-2 duration-0 data-[state=active]:border-border-primary data-[state=active]:bg-transparent data-[state=active]:text-text-primary"
            >
              Sales
            </TabsTrigger>
            <TabsTrigger
              value="tab-two"
              className="border-0 border-b-[1.5px] border-transparent px-0 py-2 duration-0 data-[state=active]:border-border-primary data-[state=active]:bg-transparent data-[state=active]:text-text-primary"
            >
              Property Management
            </TabsTrigger>
            <TabsTrigger
              value="tab-three"
              className="border-0 border-b-[1.5px] border-transparent px-0 py-2 duration-0 data-[state=active]:border-border-primary data-[state=active]:bg-transparent data-[state=active]:text-text-primary"
            >
              Development
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="tab-one"
            className="data-[state=active]:animate-tabs"
          >
            <div className="grid grid-cols-1 border border-border-primary md:grid-cols-2 md:items-center">
              <div className="p-6 md:p-8 lg:p-12">
                <p className="mb-3 font-semibold md:mb-4">Sales</p>
                <h2 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                  Residential &amp; commercial sales
                </h2>
                <p>
                  We match buyers and sellers across Harare's top suburbs —
                  Borrowdale, Highlands, Avondale, Milton Park, and more.
                  Transparent USD pricing, no hidden fees.
                </p>
                <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                  <Button title="View listings" variant="secondary">
                    View listings
                  </Button>
                  <Button
                    title="WhatsApp us"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    WhatsApp us
                  </Button>
                </div>
              </div>
              <div className="aspect-square">
                <img
                  src="/images/hero-home.jpg"
                  className="size-full object-cover"
                  alt="Sales — residential home Harare"
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="tab-two"
            className="data-[state=active]:animate-tabs"
          >
            <div className="grid grid-cols-1 border border-border-primary md:grid-cols-2 md:items-center">
              <div className="p-6 md:p-8 lg:p-12">
                <p className="mb-3 font-semibold md:mb-4">Property Management</p>
                <h2 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                  60,000+ sqm under management
                </h2>
                <p>
                  We manage residential and commercial properties across
                  Zimbabwe — handling tenants, maintenance, and rent collection
                  so you don't have to.
                </p>
                <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                  <Button title="Learn more" variant="secondary">
                    Learn more
                  </Button>
                  <Button
                    title="Get a quote"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Get a quote
                  </Button>
                </div>
              </div>
              <div className="aspect-square">
                <img
                  src="/images/suburb-highlands.jpg"
                  className="size-full object-cover"
                  alt="Property management — Highlands Harare"
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="tab-three"
            className="data-[state=active]:animate-tabs"
          >
            <div className="grid grid-cols-1 border border-border-primary md:grid-cols-2 md:items-center">
              <div className="p-6 md:p-8 lg:p-12">
                <p className="mb-3 font-semibold md:mb-4">Development &amp; Valuations</p>
                <h2 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                  Unlock the value in your land
                </h2>
                <p>
                  From site valuations to project development, we bring
                  commercial expertise rooted in hospitality and retail
                  management to every project we take on.
                </p>
                <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                  <Button title="Discuss a project" variant="secondary">
                    Discuss a project
                  </Button>
                  <Button
                    title="Valuations"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Valuations
                  </Button>
                </div>
              </div>
              <div className="aspect-square">
                <img
                  src="/images/property-featured.jpg"
                  className="size-full object-cover"
                  alt="Development — property Harare"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
