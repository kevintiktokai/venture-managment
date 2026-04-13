"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { RxChevronLeft, RxChevronRight, RxCross2 } from "react-icons/rx";

export function Lightbox({ images, startIndex = 0, onClose }) {
  const [current, setCurrent] = useState(startIndex);

  const prev = useCallback(() => setCurrent((i) => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent((i) => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [prev, next, onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ background: "rgba(0,0,0,0.95)" }}
      onClick={onClose}
    >
      {/* Main image */}
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current].src}
          alt={images[current].alt || ""}
          className="max-h-[85vh] max-w-[90vw] object-contain"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          style={{ borderRadius: "4px" }}
        />
      </AnimatePresence>

      {/* Close */}
      <button
        className="absolute top-5 right-5 flex size-10 items-center justify-center rounded-full transition-opacity hover:opacity-70"
        style={{ background: "rgba(255,255,255,0.1)", color: "#fff" }}
        onClick={onClose}
        aria-label="Close"
      >
        <RxCross2 className="size-5" />
      </button>

      {/* Prev */}
      {images.length > 1 && (
        <button
          className="absolute left-4 flex size-12 items-center justify-center rounded-full transition-opacity hover:opacity-70"
          style={{ background: "rgba(255,255,255,0.1)", color: "#fff" }}
          onClick={(e) => { e.stopPropagation(); prev(); }}
          aria-label="Previous"
        >
          <RxChevronLeft className="size-6" />
        </button>
      )}

      {/* Next */}
      {images.length > 1 && (
        <button
          className="absolute right-4 flex size-12 items-center justify-center rounded-full transition-opacity hover:opacity-70"
          style={{ background: "rgba(255,255,255,0.1)", color: "#fff" }}
          onClick={(e) => { e.stopPropagation(); next(); }}
          aria-label="Next"
        >
          <RxChevronRight className="size-6" />
        </button>
      )}

      {/* Counter */}
      <div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 px-4 py-1.5 text-xs uppercase tracking-widest"
        style={{ background: "rgba(255,255,255,0.1)", color: "#fff", borderRadius: "2px" }}
      >
        {current + 1} / {images.length}
      </div>

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="absolute bottom-14 left-1/2 flex -translate-x-1/2 gap-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
              className="overflow-hidden transition-opacity"
              style={{
                width: 48,
                height: 36,
                borderRadius: "2px",
                opacity: i === current ? 1 : 0.45,
                border: i === current ? "2px solid var(--color-gold)" : "2px solid transparent",
              }}
            >
              <img src={img.src} alt="" className="size-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </motion.div>
  );
}
