import Photo from "@/components/ui/Photo";
import Reveal from "@/components/ui/Reveal";
import Logo from "@/components/ui/Logo";

/** Files live in public/images. Rename these to match your actual filenames. */
const g = {
  portrait: { src: "/images/team1.png", alt: "Team in safety gear at a solar site" },
  temple: { src: "/images/temple.png", alt: "Temple lit up at night" },
  center: { src: "/images/solar.png", alt: "Aerial view of a solar farm" },
  lodge: { src: "/images/lodge.png", alt: "Lodge interior with mountain view" },
  elephant: { src: "/images/elephant.png", alt: "Close-up of an elephant's eye" },
  safari: { src: "/images/safari.png", alt: "Safari jeeps outside a lodge" },
};

export default function Gallery() {
  return (
    <section className="gallery">
      <div className="gallery__inner">
        {/* Mobile: two-column grid */}
        <div className="gallery__mobile">
          <Photo src={g.portrait.src} alt={g.portrait.alt} sizes="50vw" className="gallery__sq" />
          <div className="gallery__logo-cell gallery__sq">
            <Logo className="gallery__logo" />
          </div>
          <Photo src={g.temple.src} alt={g.temple.alt} sizes="100vw" className="gallery__wide gallery__ratio-2-1" />
          <Photo src={g.center.src} alt={g.center.alt} sizes="100vw" className="gallery__wide gallery__ratio-4-3" />
          <Photo src={g.lodge.src} alt={g.lodge.alt} sizes="100vw" className="gallery__wide gallery__ratio-2-1" />
          <Photo src={g.elephant.src} alt={g.elephant.alt} sizes="50vw" className="gallery__sq" />
          <Photo src={g.safari.src} alt={g.safari.alt} sizes="50vw" className="gallery__sq" />
        </div>

        {/* Desktop: 6 cols x 3 rows of squares (2:1 overall) */}
        <Reveal y={16} className="gallery__desktop">
          {/* Left block */}
          <div className="gallery__cell gallery__cell--portrait">
            <Photo src={g.portrait.src} alt={g.portrait.alt} sizes="17vw" className="gallery__fill" />
          </div>
          <div className="gallery__cell gallery__cell--logo gallery__logo-cell">
            <Logo className="gallery__logo" />
          </div>
          <div className="gallery__cell gallery__cell--temple">
            <Photo src={g.temple.src} alt={g.temple.alt} sizes="33vw" className="gallery__fill" />
          </div>

          {/* Center, full height */}
          <div className="gallery__cell gallery__cell--center">
            <Photo src={g.center.src} alt={g.center.alt} sizes="33vw" className="gallery__fill" />
          </div>

          {/* Right block */}
          <div className="gallery__cell gallery__cell--lodge">
            <Photo src={g.lodge.src} alt={g.lodge.alt} sizes="33vw" className="gallery__fill" />
          </div>
          <div className="gallery__cell gallery__cell--elephant">
            <Photo src={g.elephant.src} alt={g.elephant.alt} sizes="17vw" className="gallery__fill" />
          </div>
          <div className="gallery__cell gallery__cell--safari">
            <Photo src={g.safari.src} alt={g.safari.alt} sizes="17vw" className="gallery__fill" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}