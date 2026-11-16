import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import Eyebrow from "@/components/ui/Eyebrow";
import { STORY_CARDS } from "@/lib/constants";
import type { StoryCard } from "@/types";

function Card({ card, ratio, sizes }: { card: StoryCard; ratio: string; sizes: string }) {
  return (
    <figure className="intro__card">
      <Photo src={card.src} alt={card.alt} sizes={sizes} className={ratio} />
      <figcaption className="intro__caption">
        <p className="intro__location">{card.location ?? "Sarangpur"}</p>
        <h3 className="intro__card-title">{card.title}</h3>
        <p className="intro__card-text">{card.description}</p>
      </figcaption>
    </figure>
  );
}

export default function Intro() {
  const { grand, traditional, destination } = STORY_CARDS;

  return (
    <section id="stories" className="intro">
      <div className="intro__inner">
        {/* Text block: sits in front of the photo, the heading runs over its left edge */}
        <Reveal className="intro__text">
          <Eyebrow className="intro__eyebrow">An AP Films perspective</Eyebrow>
          <h2 className="heading intro__title">
            Not just how it looked.
            <br />
            How it felt.
          </h2>
          <p className="intro__lead">
            The fleeting glances. The familiar voices. The feeling of being fully there. We make photographs and films that hold onto the honest, beautiful heart of your celebration.
          </p>
        </Reveal>

        {/* Top right photo, spans rows 1-2 */}
        <Reveal delay={0.1} className="intro__item intro__item--grand">
          <Card card={grand} ratio="intro__photo--grand" sizes="(min-width:1024px) 36vw, 100vw" />
        </Reveal>

        {/* Left portrait photo */}
        <Reveal delay={0.05} className="intro__item intro__item--traditional">
          <Card card={traditional} ratio="intro__photo--traditional" sizes="(min-width:1024px) 28vw, 80vw" />
        </Reveal>

        {/* Lower centre photo, offset down from the left one */}
        <Reveal delay={0.1} className="intro__item intro__item--destination">
          <Card card={destination} ratio="intro__photo--destination" sizes="(min-width:1024px) 36vw, 90vw" />
        </Reveal>
      </div>
    </section>
  );
}