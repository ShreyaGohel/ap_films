"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Photo from "@/components/ui/Photo";
import { IMAGES } from "@/lib/constants";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);

  return (
    <section ref={ref} className="hero">
      <motion.div style={{ y, scale: 1.12 }} className="hero__media">
        <Photo
          src={IMAGES.hero}
          alt="Couple standing in a heritage doorway"
          priority
          grayscale
          zoom={false}
          className="hero__photo"
        />
      </motion.div>
    </section>
  );
}