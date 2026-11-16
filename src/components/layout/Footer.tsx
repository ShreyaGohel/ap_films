import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/ui/Logo";
import { CONTACT, FOOTER_LINKS } from "@/lib/constants";

const SOCIALS = [
  { label: "WhatsApp", href: CONTACT.whatsapp, icon: "/images/whatsapp.png" },
  { label: "Instagram", href: "#", icon: "/images/instagram.png" },
  { label: "YouTube", href: "#", icon: "/images/youtube.png" },
  { label: "Facebook", href: "#", icon: "/images/facebook.png" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* Logo + nav */}
        <div className="footer__top">
          <Logo className="footer__logo" />
          <nav aria-label="Footer" className="footer__nav">
            {FOOTER_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="footer__link">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Blurb + socials | contact */}
        <div className="footer__middle">
          <div className="footer__about">
            <p className="footer__blurb">{CONTACT.blurb}</p>
            <ul className="footer__socials">
              {SOCIALS.map(({ label, href, icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__social"
                  >
                    <Image src={icon} alt="" width={30} height={30} className="footer__social-icon" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__contact">
            <p><a href={CONTACT.phoneHref}>{CONTACT.phone}</a></p>
            <p><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></p>
          </div>
        </div>

        {/* Copyright */}
        <p className="footer__copy">
          AP FILMS ©{new Date().getFullYear()}, All rights reserved.
        </p>
      </div>
    </footer>
  );
}