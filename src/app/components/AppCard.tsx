"use client";

import { App } from "@/data/apps";
import Image from "next/image";
import { useTranslation } from "@/app/hooks/useTranslation";

interface AppCardProps {
  app: App;
  onClick: () => void;
}

export default function AppCard({ app, onClick }: AppCardProps) {
  const { t, locale } = useTranslation();
  const description = locale === "es" ? app.description : app.descriptionEn;

  return (
    <button
      onClick={onClick}
      className="group glass-card flex flex-col items-center gap-4 p-8 rounded-3xl transition-all duration-300"
    >
      {app.iconImage ? (
        <div className="relative w-24 h-24 transition-transform duration-300 group-hover:scale-110">
          <Image
            src={app.iconImage}
            alt={app.name}
            fill
            className="object-contain drop-shadow-lg"
          />
        </div>
      ) : (
        <span className="text-5xl transition-transform duration-300 group-hover:scale-110">
          {app.icon}
        </span>
      )}
      <h3 className="text-xl font-semibold text-white">
        {app.name}
      </h3>
      <p className="text-sm text-zinc-300 text-center line-clamp-2">
        {description}
      </p>
      
      <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-sm gradient-text font-medium">
          {t.common.viewMore}
        </span>
      </div>
    </button>
  );
}
