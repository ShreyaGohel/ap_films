import Link from "next/link";

interface ButtonProps { href: string; children: React.ReactNode; variant?: "dark" | "light"; className?: string }

export default function Button({ href, children, variant = "dark", className = "" }: ButtonProps) {
  const styles = variant === "dark" ? "bg-ink text-white hover:bg-neutral-700" : "bg-white text-ink hover:bg-cream";
  return (
    <Link href={href} className={`inline-block px-5 py-2.5 text-xs transition-colors duration-300 md:text-sm ${styles} ${className}`}>
      {children}
    </Link>
  );
}
