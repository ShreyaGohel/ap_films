const PATHS = {
  slant: "M0,0 H100 V9 L22,28 L0,8 Z",
  wave: "M0,0 H100 V14 C78,26 58,8 34,17 C18,23 8,18 0,13 Z",
  curve: "M0,0 H100 V16 Q50,2 0,16 Z",
  tilt: "M0,0 H100 V10 L0,26 Z",
  dip: "M0,0 H100 V6 L22.5,30 L0,12 Z",
  // Matches the design: both ends at the top, lowest point at 77% width
  valley: "M0,0 H100 L77,30 Z",
} as const;

interface DividerProps {
  color: string;
  variant?: keyof typeof PATHS;
  className?: string;
}

/** Paints the colour of the section ABOVE over the top edge of this one, giving the uneven edges in the design. */
export default function Divider({
  color,
  variant = "wave",
  className = "h-8 md:h-16",
}: DividerProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 100 30"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute inset-x-0 top-0 z-10 block w-full ${className}`}
    >
      <path d={PATHS[variant]} fill={color} />
    </svg>
  );
}