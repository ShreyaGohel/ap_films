"use client";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "@/components/ui/Logo";
import { NAV_LINKS } from "@/lib/constants";

/** White logo on the left, dark nav links on the right, overlaid on the hero. */
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header id="top" className="header">
      <div className="header__inner">
        <Logo light className="header__logo" />

        {/* Desktop nav */}
        <nav aria-label="Primary" className="header__nav">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="header__link">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="header__toggle"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
            className="header__bar"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }}
            className="header__bar"
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="header__mobile"
          >
            {NAV_LINKS.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.06 * i + 0.1 }}
              >
                <Link href={l.href} onClick={() => setOpen(false)} className="header__mobile-link">
                  {l.label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}