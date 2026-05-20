"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/app/hooks/useTranslation";

export default function Header() {
  const { t, locale, setLocale } = useTranslation();

  return (
    <header className="relative z-10 py-12 md:py-20">
      <div className="container">
        {/* Top bar: locale toggle */}
        <div className="flex justify-end mb-8">
          <div className="flex items-center gap-1 glass rounded-full px-2 py-1">
            <button
              onClick={() => setLocale("es")}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                locale === "es"
                  ? "bg-white/10 text-white"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLocale("en")}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                locale === "en"
                  ? "bg-white/10 text-white"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Hero */}
        <div className="flex flex-col items-center text-center">
          <div className="glass rounded-2xl p-3 mb-8 animate-float">
            <div className="relative w-16 h-16">
              <Image
                src="/ApplicationHub.png"
                alt="ApplicationHub"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <h1 className="text-display gradient-text mb-4">
            ApplicationHub
          </h1>

          <p className="text-lg text-zinc-400 max-w-md leading-relaxed">
            {t.header.subtitle}
          </p>

          {/* Status dots */}
          <div className="flex items-center gap-3 mt-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-glow" />
            <span className="text-xs text-zinc-500 font-mono">
              9 apps &nbsp;·&nbsp; macOS &nbsp;·&nbsp; iOS &nbsp;·&nbsp; Web
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}