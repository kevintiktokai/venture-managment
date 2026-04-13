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
            <p className="eyebrow mb-3 md:mb-4">Money</p>
            <h1 className="mb-5 text-5xl font-light md:mb-6 md:text-7xl lg:text-8xl">
              How to pay
            </h1>
            <p className="md:text-md">
              We accept international transfers, local deposits, and mobile
              money. No hidden fees, no confusion.
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
              <Button title="Explore" variant="secondary">
                Explore
              </Button>
              <Button
                title="Options"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Options
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
              International transfer
            </TabsTrigger>
            <TabsTrigger
              value="tab-two"
              className="border-0 border-b-[1.5px] border-transparent px-0 py-2 duration-0 data-[state=active]:border-border-primary data-[state=active]:bg-transparent data-[state=active]:text-text-primary"
            >
              Bank to bank
            </TabsTrigger>
            <TabsTrigger
              value="tab-three"
              className="border-0 border-b-[1.5px] border-transparent px-0 py-2 duration-0 data-[state=active]:border-border-primary data-[state=active]:bg-transparent data-[state=active]:text-text-primary"
            >
              Local deposit
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="tab-one"
            className="data-[state=active]:animate-tabs"
          >
            <div className="grid grid-cols-1 border border-border-primary md:grid-cols-2 md:items-center">
              <div className="p-6 md:p-8 lg:p-12">
                <p className="eyebrow mb-3 md:mb-4">Wire</p>
                <h2 className="mb-5 text-4xl font-light leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                  International bank transfer
                </h2>
                <p>
                  Send funds directly from your account to our escrow
                  arrangement. We handle the USD to ZWL conversion at current
                  rates.
                </p>
                <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                  <Button title="Learn" variant="secondary">
                    Learn
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
              <div className="aspect-square">
                <img
                  src="/images/suburb-borrowdale.jpg"
                  className="w-full object-cover"
                  alt="Relume placeholder image 1"
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
                <p className="eyebrow mb-3 md:mb-4">Wire</p>
                <h2 className="mb-5 text-4xl font-light leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                  International bank transfer
                </h2>
                <p>
                  Send funds directly from your account to our escrow
                  arrangement. We handle the USD to ZWL conversion at current
                  rates.
                </p>
                <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                  <Button title="Learn" variant="secondary">
                    Learn
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
              <div className="aspect-square">
                <img
                  src="/images/suburb-borrowdale.jpg"
                  className="w-full object-cover"
                  alt="Relume placeholder image 2"
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
                <p className="eyebrow mb-3 md:mb-4">Wire</p>
                <h2 className="mb-5 text-4xl font-light leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                  International bank transfer
                </h2>
                <p>
                  Send funds directly from your account to our escrow
                  arrangement. We handle the USD to ZWL conversion at current
                  rates.
                </p>
                <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                  <Button title="Learn" variant="secondary">
                    Learn
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
              <div className="aspect-square">
                <img
                  src="/images/suburb-borrowdale.jpg"
                  className="w-full object-cover"
                  alt="Relume placeholder image 3"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
