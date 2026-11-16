"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Photo from "@/components/ui/Photo";
import { IMAGES } from "@/lib/constants";

export default function Showcase() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1.05, 1.15]);

  return (
    <section ref={ref} className="showcase">
      <motion.div style={{ scale }} className="showcase__media">
        <Photo
          src={IMAGES.night}
          alt="Palace lit up at dusk"
          zoom={false}
          className="showcase__photo"
        />
      </motion.div>
      <div className="showcase__overlay" />

      <div className="showcase__content">
        <p className="showcase__eyebrow">Wedding Film</p>
        <h2 className="heading showcase__title">Couple names</h2>
      </div>
    </section>
  );
}