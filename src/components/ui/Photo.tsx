"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface PhotoProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  grayscale?: boolean;
  zoom?: boolean;
}

/** Fill-image wrapper. Size it from the outside with `className` (aspect ratio or height). */
export default function Photo({ src, alt, className = "", sizes = "100vw", priority, grayscale, zoom = true }: PhotoProps) {
  return (
    <div className={`relative overflow-hidden bg-neutral-300 ${className}`}>
      <motion.div className="absolute inset-0" whileHover={zoom ? { scale: 1.035 } : undefined} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={`object-cover ${grayscale ? "grayscale" : ""}`} />
      </motion.div>
    </div>
  );
}
