import Link from "next/link";
import { STORE_URL, SITE_NAME, DISCORD_URL } from "./seo-config";

export function DiscordIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M20.32 4.37a19.8 19.8 0 0 0-4.93-1.53.07.07 0 0 0-.08.04c-.2.38-.43.87-.6 1.25a18.27 18.27 0 0 0-5.42 0c-.16-.39-.4-.87-.6-1.25a.08.08 0 0 0-.08-.04c-1.7.3-3.35.81-4.93 1.53a.07.07 0 0 0-.03.03C.55 9.05-.32 13.58.11 18.06a.08.08 0 0 0 .03.06 19.9 19.9 0 0 0 6 3.03.08.08 0 0 0 .08-.03c.46-.63.87-1.3 1.23-2a.08.08 0 0 0-.04-.11c-.65-.25-1.27-.55-1.87-.9a.08.08 0 0 1 0-.13l.37-.29a.07.07 0 0 1 .08-.01c3.93 1.8 8.18 1.8 12.06 0a.07.07 0 0 1 .08 0l.37.3a.08.08 0 0 1 0 .13c-.6.35-1.22.65-1.87.9a.08.08 0 0 0-.04.1c.36.7.78 1.38 1.23 2a.08.08 0 0 0 .08.04 19.84 19.84 0 0 0 6.01-3.03.08.08 0 0 0 .03-.06c.5-5.18-.84-9.67-3.55-13.66a.06.06 0 0 0-.03-.03ZM8.02 15.33c-1.18 0-2.16-1.08-2.16-2.42 0-1.33.96-2.42 2.16-2.42 1.21 0 2.18 1.1 2.16 2.42 0 1.34-.96 2.42-2.16 2.42Zm7.97 0c-1.18 0-2.15-1.08-2.15-2.42 0-1.33.95-2.42 2.15-2.42 1.21 0 2.18 1.1 2.16 2.42 0 1.34-.95 2.42-2.16 2.42Z" />
    </svg>
  );
}

export function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
      style={{ filter: "drop-shadow(0 0 6px rgba(255,31,107,0.45))" }}
    >
      <g fill="none" strokeWidth="15" strokeLinecap="round">
        <path
          d="M70 26 A32 32 0 1 0 70 74"
          stroke="#29e0e0"
          transform="translate(-3 -3)"
          opacity="0.95"
        />
        <path
          d="M70 26 A32 32 0 1 0 70 74"
          stroke="#ff1f6b"
          transform="translate(2.5 2.5)"
        />
      </g>
    </svg>
  );
}

export function InstallButton({
  children = "Cài đặt miễn phí",
  size = "md",
  className = "",
}: {
  children?: React.ReactNode;
  size?: "md" | "lg";
  className?: string;
}) {
  const sizes = size === "lg" ? "h-13 px-7 text-base" : "h-10 px-5 text-sm";
  return (
    <a
      href={STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#22d3ee] to-[#38bdf8] font-semibold text-[#06222a] lime-glow transition-all duration-300 hover:scale-[1.03] hover:brightness-110 ${sizes} ${className}`}
    >
      {children}
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-bg-100/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2.5">
          <BrandLogo className="h-9 w-9" />
          <span className="text-base font-bold tracking-tight text-fg-100">
            Auto ĐKMH
          </span>
        </Link>
        <div className="hidden items-center gap-8 text-sm text-fg-300 md:flex">
          <Link href="/#features" className="transition hover:text-fg-100">
            Tính năng
          </Link>
          <Link href="/#process" className="transition hover:text-fg-100">
            Quy trình
          </Link>
          <Link href="/blog" className="transition hover:text-fg-100">
            Blog
          </Link>
          <Link href="/#faq" className="transition hover:text-fg-100">
            FAQ
          </Link>
        </div>
        <InstallButton size="md">Bắt đầu</InstallButton>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-5 py-10 text-sm text-fg-400 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <BrandLogo className="h-7 w-7" />
          <span className="font-semibold text-fg-200">{SITE_NAME}</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#5865F2]/40 bg-[#5865F2]/10 px-4 py-2 font-medium text-fg-100 transition hover:bg-[#5865F2]/20"
          >
            <DiscordIcon className="h-4 w-4 text-[#7d8aff]" />
            Tham gia Discord
          </a>
          <a
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg-200 transition hover:text-lime-100"
          >
            Chrome Web Store ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
