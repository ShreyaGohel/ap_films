export default function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`mb-3 text-[11px] tracking-wide text-current opacity-60 md:text-xs ${className}`}>{children}</p>;
}
