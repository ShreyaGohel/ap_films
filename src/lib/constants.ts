import type { NavLink, Offering, Photo, StoryCard } from "@/types";

/**
 * Placeholder images (picsum). To use your real assets, drop files in /public/images
 * and replace each value, e.g. src: "/images/hero.jpg".
 */
export const img = (seed: string, w = 1200, h = 800) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const IMAGES = {
  hero: "/images/hero_image.jpg", 
  night: "/images/night.png",
  offerings: "/images/offerings.png",
  team: "/images/team.png",
  aerial: "/images/aerial.png",
  cta: "/images/cta_image.jpg",
} as const;

export const FOOTER_LINKS: NavLink[] = [
  { label: "Weddings", href: "#stories" },
  { label: "Films", href: "#offerings" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const CONTACT = {
  phone: "+91 (999) 999-9999",
  phoneHref: "tel:+919999999999",
  email: "apfilms@gmail.com",
  whatsapp: "https://wa.me/919999999999",
  blurb: "AP Films captures weddings through photography and cinema, preserving the moments, emotions, and stories that matter.",
};

export const STORY_CARDS = {
  grand: {
    location: "Sarangpur",
    title: "Neha/Vatsal",
    description: "Two hearts at the centre, and a circle of love around them what a beautiful way to begin forever.",
    src: "/images/grand.jpg",          // top-right card (wide)
    alt: "Wedding party in a grand hall",
  },
  traditional: {
    location: "Sarangpur",
    title: "Neha/Vatsal",
    description: "Two hearts at the centre, and a circle of love around them what a beautiful way to begin forever.",
    src: "/images/traditional.jpg",    // left card (tall portrait)
    alt: "Couple in traditional attire",
  },
  destination: {
    location: "Sarangpur",
    title: "Neha/Vatsal",
    description: "Two hearts at the centre, and a circle of love around them what a beautiful way to begin forever.",
    src: "/images/destination.jpg",    // bottom-middle card (wide)
    alt: "Couple walking on a beach",
  },
};

/** Gallery mosaic tiles (2 rows x 6 columns on desktop). */
export const GALLERY: Record<"portrait" | "center" | "lake" | "desert" | "road" | "bridge", Photo> = {
  portrait: { src: img("ap-g-portrait", 500, 600), alt: "Groom adjusting his jacket" },
  center: { src: img("ap-g-center", 900, 1100), alt: "Silhouette in a steel-framed hall" },
  lake: { src: img("ap-g-lake", 900, 500), alt: "Lake and reeds in soft light" },
  desert: { src: img("ap-g-desert", 900, 500), alt: "Open desert landscape" },
  road: { src: img("ap-g-road", 500, 600), alt: "Forest road" },
  bridge: { src: img("ap-g-bridge", 500, 600), alt: "Bridge towers against the sky" },
};

export const OFFERINGS: Offering[] = [
  { title: "Wedding photography", description: "Candid, editorial and portrait work that holds the feeling of the day." },
  { title: "Cinematic films", description: "Short films with real sound, made to be watched again and again." },
  { title: "Albums and heirlooms", description: "Hand-finished albums and prints made to be passed down." },
];

export const MOMENTS: Photo[] = [
  { src: img("ap-m1", 640, 800), alt: "Sunlit bamboo forest" },
  { src: img("ap-m2", 640, 800), alt: "Mountain road with a tunnel" },
  { src: img("ap-m3", 640, 800), alt: "Close-up of bamboo stalks" },
  { src: img("ap-m4", 640, 800), alt: "Snow-covered peaks" },
  { src: img("ap-m5", 640, 800), alt: "Harvest field under a wide sky" },
];

export const NAV_LINKS: NavLink[] = FOOTER_LINKS;
