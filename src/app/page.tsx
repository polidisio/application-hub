"use client";

import { useState, useMemo } from "react";
import Header from "./components/Header";
import AppCard from "./components/AppCard";
import AppModal from "./components/AppModal";
import { apps, App, Category } from "@/data/apps";

const categories: { id: Category | "all"; label: string }[] = [
  { id: "all",        label: "All" },
  { id: "ios",       label: "iOS" },
  { id: "mac",       label: "Mac" },
  { id: "desarrollo", label: "Dev" },
  { id: "juego",     label: "Games" },
];

export default function Home() {
  const [selectedApp, setSelectedApp] = useState<App | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");

  const filteredApps = useMemo(
    () =>
      activeCategory === "all"
        ? apps
        : apps.filter((a) => a.category === activeCategory),
    [activeCategory]
  );

  return (
    <div className="min-h-screen relative">
      <Header />

      <main className="relative z-10 pb-20">
        {/* Category filter — sticky */}
        <div className="sticky top-0 z-20 bg-zinc-950/80 backdrop-blur-md border-b border-white/5">
          <div className="container">
            <div className="flex items-center gap-1 py-3 overflow-x-auto scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeCategory === cat.id
                      ? "bg-white/10 text-white"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  {cat.label}
                  {cat.id !== "all" && (
                    <span className="ml-2 text-xs text-zinc-600">
                      {apps.filter((a) => a.category === cat.id).length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="container mt-8">
          {filteredApps.length === 0 ? (
            <div className="text-center py-20 text-zinc-500">
              No apps in this category yet.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredApps.map((app) => (
                <AppCard
                  key={app.id}
                  app={app}
                  onClick={() => setSelectedApp(app)}
                />
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-8">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <p className="mono">
            © 2026 Polidisio ·{" "}
            <a href="/privacy" className="hover:text-zinc-300 transition-colors">
              Privacy Policy
            </a>
          </p>
          </div>
      </footer>

      {selectedApp && (
        <AppModal app={selectedApp} onClose={() => setSelectedApp(null)} />
      )}
    </div>
  );
}