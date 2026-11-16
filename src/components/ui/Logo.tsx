import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  light?: boolean;
  className?: string; // sets the HEIGHT, e.g. "footer__logo"
}

/** AP logo. File lives at public/images/LOGO_white.png (white artwork). */
export default function Logo({ light = false, className = "" }: LogoProps) {
  return (
    <Link href="/" aria-label="AP home" className={`logo ${className}`}>
      <Image
        src="/images/LOGO_white.png"
        alt="AP"
        width={0}
        height={0}
        sizes="200px"
        priority
        className={light ? "logo__img" : "logo__img logo__img--dark"}
      />
    </Link>
  );
}