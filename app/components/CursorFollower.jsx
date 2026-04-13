"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorFollower() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring config — dot trails with slight lag
  const springX = useSpring(cursorX, { stiffness: 180, damping: 22 });
  const springY = useSpring(cursorY, { stiffness: 180, damping: 22 });

  useEffect(() => {
    // Only on desktop
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const enter = () => setVisible(true);
    const leave = () => setVisible(false);

    const trackHover = () => {
      document.querySelectorAll("a, button, [data-cursor-hover]").forEach((el) => {
        el.addEventListener("mouseenter", () => setHovered(true));
        el.addEventListener("mouseleave", () => setHovered(false));
      });
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseenter", enter);
    document.addEventListener("mouseleave", leave);
    trackHover();

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseenter", enter);
      document.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed z-[9998] hidden lg:block"
      style={{
        left: springX,
        top: springY,
        translateX: "-50%",
        translateY: "-50%",
        opacity: visible ? 1 : 0,
      }}
    >
      {/* Outer ring */}
      <motion.div
        className="rounded-full border"
        animate={{
          width: hovered ? 44 : 32,
          height: hovered ? 44 : 32,
          opacity: hovered ? 0.6 : 0.35,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{ borderColor: "var(--color-forest)" }}
      />
      {/* Inner dot */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        animate={{ width: hovered ? 6 : 4, height: hovered ? 6 : 4 }}
        transition={{ duration: 0.15 }}
        style={{ background: "var(--color-forest)" }}
      />
    </motion.div>
  );
}
