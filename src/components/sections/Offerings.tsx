import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import Button from "@/components/ui/Button";
import Divider from "@/components/ui/Divider";
import Eyebrow from "@/components/ui/Eyebrow";
import { IMAGES, OFFERINGS } from "@/lib/constants";

export default function Offerings() {
  return (
    <section id="offerings" className="offerings">
      <Divider color="#ffffff" variant="valley" className="offerings__divider" />
      <div className="offerings__inner">
        <Reveal className="offerings__text">
          <Eyebrow>What we do</Eyebrow>
          <h2 className="heading offerings__title">
            One story.
            <br />
            Many ways to feel it.
          </h2>

          <ul className="offerings__list">
            {OFFERINGS.map((o) => (
              <li key={o.title} className="offerings__item">
                <h3 className="offerings__item-title">{o.title}</h3>
                <p className="offerings__item-text">{o.description}</p>
              </li>
            ))}
          </ul>

          <Button href="#contact" className="offerings__button">
            Discover Our Services
          </Button>
        </Reveal>

        <Reveal delay={0.1} className="offerings__media">
          <Photo
            src={IMAGES.offerings}
            alt="Dimly lit interior"
            sizes="(min-width:768px) 40vw, 100vw"
            className="offerings__photo"
          />
        </Reveal>
      </div>
    </section>
  );
}