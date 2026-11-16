import type { SVGProps } from "react";

const base: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true,
};

export const WhatsAppIcon = (p: SVGProps<SVGSVGElement>) => (<svg {...base} {...p}><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>);
export const InstagramIcon = (p: SVGProps<SVGSVGElement>) => (<svg {...base} {...p}><rect width="20" height="20" x="2" y="2" rx="5" /><path d="M16 11.4A4 4 0 1 1 12.6 8 4 4 0 0 1 16 11.4Z" /><path d="M17.5 6.5h.01" /></svg>);
export const YouTubeIcon = (p: SVGProps<SVGSVGElement>) => (<svg {...base} {...p}><path d="M2.5 17a24 24 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24 24 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>);
export const FacebookIcon = (p: SVGProps<SVGSVGElement>) => (<svg {...base} {...p}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>);
