"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function DarkModeToggle({ scrolled = false }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("vm-dark");
    if (stored === "true") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem("vm-dark", String(next));
    document.documentElement.classList.toggle("dark", next);
  };

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none"
      style={{
        background: dark ? "var(--color-forest)" : scrolled ? "var(--color-stone)" : "rgba(255,255,255,0.15)",
      }}
    >
      <motion.span
        className="absolute left-0.5 flex size-5 items-center justify-center rounded-full text-xs"
        animate={{ x: dark ? 20 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        style={{ background: dark ? "var(--color-gold)" : "#fff" }}
      >
        {dark ? "🌙" : "☀️"}
      </motion.span>
    </button>
  );
}
