import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import Divider from "@/components/ui/Divider";
import { IMAGES } from "@/lib/constants";

export default function Belief() {
  return (
    <section id="about" className="belief">
      <Divider color="#ECE5DB" variant="dip" />

      {/* Heading */}
      <Reveal className="belief__heading">
        <p className="belief__eyebrow">Behind the lens</p>
        <h2 className="heading belief__title">
          We Believe the Best Stories Are Felt,
          <br className="belief__br" /> Not Just Seen.
        </h2>
      </Reveal>

      {/* Photo + overlapping card */}
      <div className="belief__body">
        <Reveal className="belief__media">
          <Photo
            src={IMAGES.team}
            alt="The AP Films team with their cameras"
            sizes="(min-width:768px) 43vw, 100vw"
            className="belief__photo"
          />
        </Reveal>

        <Reveal delay={0.15} className="belief__card-wrap">
          <div className="belief__card">
            <p className="belief__text">
              At AP Films, our approach goes beyond documenting a celebration. We look for the genuine connections, fleeting expressions, and meaningful details that give every wedding its character. With photography and film, we preserve these moments in a way that feels personal, considered, and timeless.
            </p>
            <Link href="#contact" className="belief__button">
              Get to Know Us
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}