"use client";

import { App } from "@/data/apps";
import Image from "next/image";
import { useTranslation } from "@/app/hooks/useTranslation";

const categoryBadgeClass: Record<string, string> = {
  ios:         "badge badge-ios",
  mac:         "badge badge-mac",
  juego:       "badge badge-mac",
  desarrollo:  "badge badge-desarrollo",
};

interface AppCardProps {
  app: App;
  onClick: () => void;
}

export default function AppCard({ app, onClick }: AppCardProps) {
  const { locale } = useTranslation();
  const description = locale === "es" ? app.description : app.descriptionEn;

  return (
    <button
      onClick={onClick}
      className="glass-card group text-left w-full p-6 rounded-2xl cursor-pointer"
    >
      {/* Icon */}
      <div className="mb-5">
        {app.iconImage ? (
          <div
            className="relative w-16 h-16 rounded-2xl overflow-hidden flex items-center justify-center"
            style={{ background: "rgba(255,255,255,0.06)" }}
          >
            <Image
              src={app.iconImage}
              alt={app.name}
              fill
              className="object-contain"
            />
          </div>
        ) : (
          <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-4xl">
            {app.icon}
          </div>
        )}
      </div>

      {/* Category badge */}
      <span className={categoryBadgeClass[app.category]}>
        {app.category === "desarrollo" ? "Dev" : app.category.toUpperCase()}
      </span>

      {/* Name */}
      <h3 className="mt-3 text-xl text-white display">
        {app.name}
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm text-zinc-400 leading-relaxed line-clamp-3">
        {description}
      </p>

      {/* CTA */}
      <div className="mt-5 flex items-center gap-1 text-sm text-zinc-500 group-hover:text-violet-400 transition-colors">
        <span>{locale === "es" ? "Ver detalles" : "View details"}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
          <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
        </svg>
      </div>
    </button>
  );
}