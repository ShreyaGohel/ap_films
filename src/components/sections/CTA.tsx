import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { CONTACT, IMAGES } from "@/lib/constants";

export default function CTA() {
  return (
    <section id="contact" className="cta">
      <div className="cta__container">
        <Reveal>
          {/* Size container: the frame measures its text and buttons against this width (cqw units) */}
          <div className="cta__size">
            <div className="cta__frame">
              <div className="cta__media">
                <Photo src={IMAGES.cta} alt="" zoom={false} className="cta__photo" />
              </div>
              <div className="cta__overlay" />

              <div className="cta__content">
                <p className="cta__eyebrow">Wedding film</p>

                <h2 className="heading cta__title">
                  Planning Something Meaningful?
                  <br className="cta__br" /> Let&rsquo;s Talk.
                </h2>

                <p className="cta__text">
                  Tell us about your wedding, the moments you want to remember, and the story you want us to tell. We&rsquo;d love to hear from you.
                </p>

                <div className="cta__actions">
                  <Link href={`mailto:${CONTACT.email}`} className="cta__btn cta__btn--solid">
                    Tell Us About Your Wedding
                  </Link>
                  <a href={CONTACT.whatsapp} className="cta__btn cta__btn--outline">
                    <WhatsAppIcon className="cta__btn-icon" />
                    WhatsApp AP Films
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}