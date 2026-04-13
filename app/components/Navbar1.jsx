"use client";

import { useMediaQuery } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { RxChevronDown } from "react-icons/rx";
import { DarkModeToggle } from "./DarkModeToggle";

const useNavState = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const openDropdown = () => !isMobile && setIsDropdownOpen(true);
  const closeDropdown = () => !isMobile && setIsDropdownOpen(false);
  const toggleMobileDropdown = () => setIsDropdownOpen((prev) => !prev);

  return {
    isMobileMenuOpen,
    isDropdownOpen,
    isScrolled,
    isMobile,
    toggleMobileMenu,
    openDropdown,
    closeDropdown,
    toggleMobileDropdown,
    animateMobileMenu: isMobileMenuOpen ? "open" : "close",
    animateMobileMenuButtonSpan: isMobileMenuOpen ? ["open", "rotatePhase"] : "closed",
    animateDropdownMenu: isDropdownOpen ? "open" : "close",
    animateDropdownMenuIcon: isDropdownOpen ? "rotated" : "initial",
  };
};

const navLinks = [
  { href: "/properties", label: "For Sale" },
  { href: "/area-guides", label: "For Rent" },
  { href: "/about-us", label: "About Us" },
];

const moreLinks = [
  { href: "/diaspora-buyers", label: "Diaspora Buyers" },
  { href: "/suburb-guide", label: "Suburb Guide" },
  { href: "/about-us#contact", label: "Contact" },
];

export function Navbar1() {
  const nav = useNavState();
  const pathname = usePathname();

  return (
    <header
      className="fixed top-0 z-50 w-full transition-all duration-300"
      style={{
        background: nav.isScrolled
          ? "rgba(247,243,238,0.96)"
          : "rgba(247,243,238,0.0)",
        backdropFilter: nav.isScrolled ? "blur(16px)" : "none",
        borderBottom: nav.isScrolled
          ? "1px solid rgba(43,36,32,0.1)"
          : "1px solid transparent",
      }}
    >
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between px-[5%] py-4 lg:py-5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div
            className="flex h-9 w-9 items-center justify-center"
            style={{ background: "var(--color-forest)", borderRadius: "2px" }}
          >
            <span
              className="text-xs font-bold tracking-wider"
              style={{ color: "var(--color-gold)", fontFamily: "var(--font-display)" }}
            >
              HRP
            </span>
          </div>
          <span
            className="hidden text-base font-medium sm:block transition-colors duration-300"
            style={{
              fontFamily: "var(--font-display)",
              color: nav.isScrolled ? "var(--color-charcoal)" : "var(--color-ivory)",
              letterSpacing: "0.02em",
            }}
          >
            Venture Management
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className="relative px-4 py-2 text-sm font-medium transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-body)",
                  color: nav.isScrolled
                    ? isActive ? "var(--color-forest)" : "var(--color-charcoal)"
                    : isActive ? "var(--color-gold)" : "rgba(247,243,238,0.85)",
                }}
              >
                {label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-4 right-4 h-px"
                    style={{ background: nav.isScrolled ? "var(--color-forest)" : "var(--color-gold)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}

          {/* More dropdown */}
          <div
            className="relative"
            onMouseEnter={nav.openDropdown}
            onMouseLeave={nav.closeDropdown}
          >
            <button
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-200"
              style={{
                fontFamily: "var(--font-body)",
                color: nav.isScrolled
                  ? "var(--color-charcoal)"
                  : "rgba(247,243,238,0.85)",
              }}
            >
              More
              <motion.span
                variants={{ rotated: { rotate: 180 }, initial: { rotate: 0 } }}
                animate={nav.animateDropdownMenuIcon}
                transition={{ duration: 0.2 }}
              >
                <RxChevronDown size={14} />
              </motion.span>
            </button>
            <AnimatePresence>
              {nav.isDropdownOpen && (
                <motion.nav
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-1 min-w-[180px] p-2"
                  style={{
                    background: "var(--color-ivory)",
                    border: "1px solid var(--color-stone)",
                    borderRadius: "4px",
                    boxShadow: "0 8px 24px rgba(43,36,32,0.08)",
                  }}
                >
                  {moreLinks.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className="block px-4 py-2.5 text-sm transition-colors duration-150 hover:bg-stone-100"
                      style={{
                        fontFamily: "var(--font-body)",
                        color: "var(--color-charcoal)",
                        borderRadius: "2px",
                      }}
                    >
                      {label}
                    </Link>
                  ))}
                </motion.nav>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <DarkModeToggle scrolled={nav.isScrolled} />
          <Link
            href="/about-us#contact"
            className="px-5 py-2.5 text-xs font-medium uppercase tracking-widest transition-all duration-200 hover:opacity-80"
            style={{
              fontFamily: "var(--font-body)",
              border: `1px solid ${nav.isScrolled ? "var(--color-forest)" : "rgba(247,243,238,0.5)"}`,
              color: nav.isScrolled ? "var(--color-forest)" : "var(--color-ivory)",
              borderRadius: "2px",
            }}
          >
            Valuation
          </Link>
          <a
            href="https://wa.me/263771681728"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-xs font-medium uppercase tracking-widest transition-all duration-200 hover:opacity-90"
            style={{
              fontFamily: "var(--font-body)",
              background: "var(--color-terracotta)",
              color: "var(--color-ivory)",
              borderRadius: "2px",
            }}
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex size-10 flex-col items-center justify-center lg:hidden"
          onClick={nav.toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {["top", "mid", "bot"].map((id) => (
            <motion.span
              key={id}
              className="my-[3px] block h-0.5 w-5"
              style={{
                background: nav.isScrolled
                  ? "var(--color-charcoal)"
                  : "var(--color-ivory)",
              }}
              animate={
                id === "mid"
                  ? nav.animateMobileMenu
                  : nav.animateMobileMenuButtonSpan
              }
              variants={
                id === "mid"
                  ? {
                      open: { width: 0, transition: { duration: 0.1 } },
                      close: { width: "1.25rem", transition: { delay: 0.3, duration: 0.2 } },
                    }
                  : {
                      open: {
                        translateY: id === "top" ? 8 : -8,
                        transition: { delay: 0.1 },
                      },
                      rotatePhase: {
                        rotate: id === "top" ? -45 : 45,
                        transition: { delay: 0.2 },
                      },
                      closed: {
                        translateY: 0,
                        rotate: 0,
                        transition: { duration: 0.2 },
                      },
                    }
              }
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <motion.div
        variants={{
          open: { height: "100dvh" },
          close: { height: 0 },
        }}
        initial="close"
        animate={nav.animateMobileMenu}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        className="overflow-hidden lg:hidden"
        style={{ background: "var(--color-charcoal)" }}
      >
        <div className="flex flex-col gap-1 px-[5%] pt-8 pb-12">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="py-4 text-2xl font-light border-b"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-ivory)",
                borderColor: "rgba(247,243,238,0.1)",
              }}
              onClick={nav.toggleMobileMenu}
            >
              {label}
            </Link>
          ))}
          {moreLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="py-4 text-2xl font-light border-b"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-ivory)",
                borderColor: "rgba(247,243,238,0.1)",
              }}
              onClick={nav.toggleMobileMenu}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://wa.me/263771681728"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block py-4 text-center text-sm font-medium uppercase tracking-widest"
            style={{
              background: "var(--color-terracotta)",
              color: "var(--color-ivory)",
              borderRadius: "2px",
            }}
          >
            WhatsApp Us
          </a>
        </div>
      </motion.div>
    </header>
  );
}
