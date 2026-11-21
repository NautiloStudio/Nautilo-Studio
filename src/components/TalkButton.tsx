import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

type Props = {
  href?: string;
  label?: string;
  tone?: "royal" | "cyan";
  size?: "md" | "sm";
  // Main CTA on service pages: a brighter royal-to-cyan fill, a light that sweeps across it and an
  // arrow that hops on the same beat as the pulse ring around it (see .cta-glow in globals.css).
  shine?: boolean;
};

const tones = {
  royal: "bg-royal text-offwhite",
  cyan: "bg-cyan text-graphite",
};

const circles = {
  royal: "bg-white/15",
  cyan: "bg-graphite/10",
};

export default function TalkButton({
  href = "#contact",
  label = "Talk to us",
  tone = "royal",
  size = "md",
  shine = false,
}: Props) {
  const sizing =
    size === "md"
      ? `gap-3 py-2 pr-2 ${shine ? "pl-7 text-[1.05rem]" : "pl-6 text-base"}`
      : "gap-2 py-2 pl-4 pr-2 text-sm";
  const fill =
    shine && tone === "royal"
      ? "bg-[linear-gradient(110deg,var(--color-royal)_35%,color-mix(in_oklab,var(--color-royal),var(--color-cyan)_45%))] text-offwhite"
      : tones[tone];

  return (
    <a
      href={href}
      className={`group ${shine ? "relative overflow-hidden" : ""} inline-flex items-center rounded-full text-left font-display font-semibold sm:whitespace-nowrap transition-transform duration-150 ease-out active:scale-[0.97] ${fill} ${sizing}`}
    >
      {shine && (
        <span
          aria-hidden
          className="cta-shine pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-[linear-gradient(100deg,transparent,rgba(255,255,255,0.45),transparent)]"
        />
      )}
      {label}
      <span
        className={`${shine ? "cta-hop " : ""}flex shrink-0 items-center justify-center rounded-full transition-transform duration-300 ease-(--ease-out-strong) group-hover:translate-x-0.5 group-hover:-translate-y-px ${circles[tone]} ${
          size === "md" ? "h-9 w-9" : "h-7 w-7"
        }`}
      >
        <ArrowUpRight size={size === "md" ? 18 : 14} weight="bold" aria-hidden />
      </span>
    </a>
  );
}
