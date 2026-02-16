"use client";

import { App } from "@/data/apps";

interface AppCardProps {
  app: App;
  onClick: () => void;
}

export default function AppCard({ app, onClick }: AppCardProps) {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col items-center gap-4 p-6 rounded-2xl bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all duration-300 hover:scale-105 hover:shadow-lg"
    >
      <span className="text-5xl">{app.icon}</span>
      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
        {app.name}
      </h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center line-clamp-2">
        {app.description}
      </p>
    </button>
  );
}
