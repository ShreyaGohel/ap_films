"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import { IMAGES } from "@/lib/constants";

const TESTIMONIALS = [
  {
    title: "More Beautiful Than We Imagined.",
    quote:
      "Every photograph tells a story, and our wedding film brings back emotions we never want to forget. The entire experience felt special, and the final work was something we'll treasure for years to come.",
    author: "A Happy Couple",
    image: { src: IMAGES.aerial, alt: "Aerial view of a palace and its gardens" },
  },
  {
    title: "They Felt Like Family.",
    quote:
      "From the first call to the final delivery, the team stayed calm, kind and completely present. We forgot the camera was there, and that is exactly why the memories feel so real.",
    author: "A Happy Couple",
    image: { src: "/images/memories-2.jpg", alt: "Couple celebrating with their families" },
  },
  {
    title: "Our Day, Exactly As It Felt.",
    quote:
      "Watching our film, we laughed and cried all over again. Every small moment we had missed on the day was there, beautifully told. We could not have asked for more.",
    author: "A Happy Couple",
    image: { src: "/images/memories-3.jpg", alt: "Couple sharing a quiet moment" },
  },
];

const Arrow = ({ dir }: { dir: "left" | "right" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    className="memories__arrow-icon"
  >
    {dir === "left" ? <path d="M19 12H5M12 19l-7-7 7-7" /> : <path d="M5 12h14M12 5l7 7-7 7" />}
  </svg>
);

export default function Memories() {
  const [i, setI] = useState(0);
  const total = TESTIMONIALS.length;
  const t = TESTIMONIALS[i];
  const go = (step: number) => setI((n) => (n + step + total) % total);

  return (
    <section className="memories">
      {/* Heading block */}
      <div className="memories__heading">
        <Reveal>
          <p className="memories__eyebrow">Kind words</p>
          <h2 className="heading memories__title">Memories Worth Coming Back To.</h2>
          <p className="memories__lead">
            The most meaningful part of what we do is knowing that the stories we capture become part of someone&rsquo;s life for years to come.
          </p>
        </Reveal>
      </div>

      {/* Image, overlapping card and arrows */}
      <div className="memories__body">
        <Reveal className="memories__media">
          <div className="memories__frame">
            <AnimatePresence initial={false}>
              <motion.div
                key={i}
                className="memories__slide"
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <Photo
                  src={t.image.src}
                  alt={t.image.alt}
                  sizes="(min-width:1024px) 62vw, 100vw"
                  zoom={false}
                  className="memories__photo"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>

        {/* Card: overlaps the image on phone/tablet, absolutely placed from 1024px */}
        <Reveal delay={0.15} className="memories__card-wrap">
          <div className="memories__card">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                aria-live="polite"
              >
                <h3 className="memories__card-title">{t.title}</h3>
                <p className="memories__quote">{t.quote}</p>
                <p className="memories__author">{t.author}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>

        {/* Arrows */}
        <div className="memories__arrows">
          <button type="button" onClick={() => go(-1)} aria-label="Previous testimonial" className="memories__arrow">
            <Arrow dir="left" />
          </button>
          <button type="button" onClick={() => go(1)} aria-label="Next testimonial" className="memories__arrow">
            <Arrow dir="right" />
          </button>
        </div>
      </div>
    </section>
  );
}