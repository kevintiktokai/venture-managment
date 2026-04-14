"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { BiLogoDribbble, BiLogoLinkedinSquare } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { ScrollReveal, StaggerReveal } from "./ScrollReveal";

const team = [
  {
    name: "Tendai Mwangi",
    role: "Lead broker",
    bio: "Fifteen years in Harare real estate. Knows Borrowdale and Highlands inside out.",
    image: "/images/suburb-borrowdale.jpg",
  },
  {
    name: "Chipo Ndlela",
    role: "Senior agent",
    bio: "Specializes in Mt Pleasant and Avondale. Diaspora buyers trust her process.",
    image: "/images/suburb-borrowdale.jpg",
  },
  {
    name: "Blessing Khumalo",
    role: "Property specialist",
    bio: "Handles valuations and legal verification. Speaks fluent English and Shona.",
    image: "/images/suburb-borrowdale.jpg",
  },
  {
    name: "Nomsa Sibanda",
    role: "Client relations",
    bio: "Your first point of contact. Manages WhatsApp inquiries and viewings daily.",
    image: "/images/suburb-borrowdale.jpg",
  },
  {
    name: "Tafadzwa Nyambi",
    role: "Market analyst",
    bio: "Tracks pricing trends across all five suburbs. Ensures fair valuations always.",
    image: "/images/suburb-borrowdale.jpg",
  },
  {
    name: "Rutendo Chirwa",
    role: "Operations manager",
    bio: "Coordinates title checks and legal support. Keeps every deal moving forward.",
    image: "/images/suburb-borrowdale.jpg",
  },
];

export function Team5() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <ScrollReveal variant="fadeUp" className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="eyebrow mb-3 md:mb-4">Team</p>
          <h2 className="rb-5 mb-5 text-5xl font-light md:mb-6 md:text-7xl lg:text-8xl">
            Our agents
          </h2>
          <p className="md:text-md">
            These are the people who know Harare's neighborhoods like their own homes.
          </p>
        </ScrollReveal>
        <StaggerReveal
          className="grid grid-cols-1 items-start justify-center gap-x-8 gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12"
          stagger={0.1}
        >
          {team.map((member) => (
            <div
              key={member.name}
              className="flex flex-col text-center group p-6 md:p-8 card-hover"
              style={{ borderRadius: "var(--radius-card)", boxShadow: "var(--shadow-card)", background: "var(--color-ivory)" }}
            >
              <div className="rb-5 mb-5 flex w-full items-center justify-center md:mb-6">
                <div className="overflow-hidden rounded-full size-20 min-h-20 min-w-20 ring-3 ring-offset-2" style={{ ringColor: "var(--color-forest)" }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="size-full object-cover card-img"
                  />
                </div>
              </div>
              <div className="mb-3 md:mb-4">
                <h5 className="text-md font-semibold md:text-lg">{member.name}</h5>
                <h6 className="md:text-md">{member.role}</h6>
              </div>
              <p>{member.bio}</p>
              <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-[0.875rem] self-center">
                <a href="#" className="transition-opacity hover:opacity-70">
                  <BiLogoLinkedinSquare className="size-6" />
                </a>
                <a href="#" className="transition-opacity hover:opacity-70">
                  <FaXTwitter className="size-6 p-0.5" />
                </a>
                <a href="#" className="transition-opacity hover:opacity-70">
                  <BiLogoDribbble className="size-6" />
                </a>
              </div>
            </div>
          ))}
        </StaggerReveal>
        <ScrollReveal variant="fadeUp" delay={0.1} className="mx-auto mt-14 w-full max-w-md text-center md:mt-20 lg:mt-24">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            We're hiring
          </h4>
          <p className="md:text-md">
            Join a team that knows Harare and serves it well.
          </p>
          <div className="mt-6 flex items-center justify-center gap-x-4 text-center md:mt-8">
            <Button title="View openings" variant="secondary">
              View openings
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
