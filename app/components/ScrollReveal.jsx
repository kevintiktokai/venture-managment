"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * ScrollReveal — wraps children with a scroll-triggered entrance animation.
 *
 * Props:
 *  variant  — animation preset name
 *  delay    — seconds (default 0)
 *  duration — seconds (default 0.8)
 *  once     — only animate once (default true)
 *  className — forwarded to wrapper div
 */

const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 60, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  fadeIn: {
    hidden: { opacity: 0, filter: "blur(6px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -80, filter: "blur(3px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
  },
  slideRight: {
    hidden: { opacity: 0, x: 80, filter: "blur(3px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.88, filter: "blur(6px)" },
    visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
  },
  clipUp: {
    hidden: { opacity: 0, y: 80, clipPath: "inset(20% 0% 0% 0%)" },
    visible: { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" },
  },
  rotateIn: {
    hidden: { opacity: 0, rotate: -3, y: 40, scale: 0.96 },
    visible: { opacity: 1, rotate: 0, y: 0, scale: 1 },
  },
};

export function ScrollReveal({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.85,
  once = true,
  className = "",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-60px 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants[variant]}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerReveal — wraps a list of children with staggered scroll-triggered entrance.
 * Each direct child gets its own delayed animation with a rising, deblurring effect.
 */
export function StaggerReveal({ children, className = "", stagger = 0.12, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{ visible: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
    >
      {React.Children.map(children, (child) => (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50, filter: "blur(4px)", scale: 0.97 },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              scale: 1,
              transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
