import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionIntro({
  eyebrow,
  title,
  copy
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-medium uppercase tracking-[0.35em] text-cyan-300/80">
        {eyebrow}
      </p>
      <h2 className="section-heading">{title}</h2>
      <p className="section-copy">{copy}</p>
    </div>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-cyan-200">
      {children}
    </span>
  );
}

export function GlowButton({
  href,
  children,
  variant = "primary",
  ...props
}: ComponentProps<typeof Link> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300",
        variant === "primary"
          ? "bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-500 text-slate-950 shadow-glow hover:scale-[1.02]"
          : "border border-white/10 bg-white/5 text-white hover:border-cyan-300/40 hover:bg-white/10"
      )}
      {...props}
    >
      {children}
      <ArrowUpRight className="h-4 w-4" />
    </Link>
  );
}
