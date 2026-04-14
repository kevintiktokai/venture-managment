"use client";

import React from "react";
import Link from "next/link";
import { BiSolidShieldAlt2, BiWorld, BiDollar, BiSolidHomeHeart, BiSolidBolt, BiTime } from "react-icons/bi";
import { ScrollReveal, StaggerReveal } from "./ScrollReveal";

export function Faq14() {
  const faqs = [
    {
      icon: BiSolidShieldAlt2,
      question: "How do you verify title deeds?",
      answer: "We inspect original documents and confirm ownership directly with the authorities before listing.",
    },
    {
      icon: BiWorld,
      question: "Can I buy from abroad safely?",
      answer: "Yes. We handle all verification, legal paperwork, and remote viewing coordination for diaspora buyers.",
    },
    {
      icon: BiDollar,
      question: "What about USD versus local currency?",
      answer: "Every property shows pricing in both USD and local currency so you know exactly what you're paying.",
    },
    {
      icon: BiSolidHomeHeart,
      question: "Are your agents actually registered?",
      answer: "Yes. We're REIZ-registered and based in Harare with a physical office you can visit anytime.",
    },
    {
      icon: BiSolidBolt,
      question: "What infrastructure details do you provide?",
      answer: "Borehole, solar, and security information is listed for every property so there are no surprises.",
    },
    {
      icon: BiTime,
      question: "How long does the buying process take?",
      answer: "From first contact to closing typically takes four to eight weeks depending on your circumstances.",
    },
  ];

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <ScrollReveal variant="scaleUp" className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-light md:mb-6 md:text-7xl lg:text-8xl">
            Questions
          </h2>
          <p className="md:text-md">
            Common concerns answered. We&apos;re here to make buying clear and
            straightforward.
          </p>
        </ScrollReveal>
        <StaggerReveal className="container grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12 lg:gap-y-16" stagger={0.1}>
          {faqs.map(({ icon: Icon, question, answer }) => (
            <div
              key={question}
              className="flex w-full flex-col items-center text-center p-6 md:p-8 card-hover"
              style={{ borderRadius: "var(--radius-card)", boxShadow: "var(--shadow-card)", background: "var(--color-ivory)" }}
            >
              <div className="rb-5 mb-5 md:mb-6 flex items-center justify-center size-14 rounded-full" style={{ background: "rgba(48,85,104,0.08)" }}>
                <Icon className="size-7" style={{ color: "var(--color-forest)" }} />
              </div>
              <h3 className="mb-3 font-bold md:mb-4 md:text-md">
                {question}
              </h3>
              <p className="text-sm leading-relaxed opacity-75">{answer}</p>
            </div>
          ))}
        </StaggerReveal>
        <ScrollReveal variant="fadeUp" delay={0.3} className="mt-12 text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Still have questions?
          </h4>
          <p className="md:text-md">
            Reach out on WhatsApp or call us directly.
          </p>
          <div className="mt-6 md:mt-8">
            <a
              href="https://wa.me/263771681728"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 text-sm font-medium uppercase tracking-widest transition-all hover:-translate-y-0.5"
              style={{
                border: "1px solid var(--color-forest)",
                color: "var(--color-forest)",
                borderRadius: "var(--radius-btn)",
                boxShadow: "var(--shadow-btn)",
              }}
            >
              Contact us
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
