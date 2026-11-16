import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import Divider from "@/components/ui/Divider";
import Eyebrow from "@/components/ui/Eyebrow";
import { InstagramIcon } from "@/components/ui/Icons";

/** Replace with your Instagram profile link. */
const INSTAGRAM_URL = "https://www.instagram.com/";

/**
 * Images live in /public/images. Rename these to your real file names (and extensions).
 * Paths start with /images and do not include "public".
 * `href` is where each picture links to (an Instagram post, a film page, etc.).
 */
const MOMENTS = [
  { src: "/images/moment-1.png", alt: "Couple sitting together on a yacht at sunset", href: "https://www.instagram.com/p/POST_ID_1/" },
  { src: "/images/moment-2.png", alt: "Couple seated in an ornate palace doorway", href: "https://www.instagram.com/p/POST_ID_2/" },
  { src: "/images/moment-3.png", alt: "Couple holding hands beside a waterfall", href: "https://www.instagram.com/p/POST_ID_3/" },
  { src: "/images/moment-4.png", alt: "Couple on the dunes at sunset, red gown in the wind", href: "https://www.instagram.com/p/POST_ID_4/" },
  { src: "/images/moment-5.png", alt: "Couple portrait against a soft wall", href: "https://www.instagram.com/p/POST_ID_5/" },
];

export default function Moments() {
  return (
    <section className="moments">
      <Divider color="#ffffff" variant="tilt" />

      <div className="moments__inner">
        <Reveal>
          <Eyebrow className="moments__eyebrow">Follow our journey</Eyebrow>

          <h2 className="heading moments__title">
            More Stories,
            <br />
            More Moments.
          </h2>

          <div className="moments__row">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="moments__button"
            >
              <InstagramIcon className="moments__button-icon" />
              Follow Us on Instagram
            </a>

            <p className="moments__lead">
              Discover the celebrations, behind-the-scenes moments, and stories we&rsquo;re honoured to capture.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Auto-scrolling strip: loops forever, pauses on hover, each picture is a link */}
      <Reveal delay={0.1} className="moments__strip">
        <div className="marquee">
          <ul className="marquee-track moments__track">
            {[0, 1].map((copy) =>
              MOMENTS.map((m) => (
                <li
                  key={`${copy}-${m.src}`}
                  aria-hidden={copy === 1}
                  className="moments__item"
                >
                  <a
                    href={m.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={copy === 1 ? undefined : `Open: ${m.alt}`}
                    tabIndex={copy === 1 ? -1 : undefined}
                    className="moments__link"
                  >
                    <Photo
                      src={m.src}
                      alt={copy === 1 ? "" : m.alt}
                      sizes="(min-width:768px) 20vw, 46vw"
                      className="moments__photo"
                    />
                  </a>
                </li>
              ))
            )}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}