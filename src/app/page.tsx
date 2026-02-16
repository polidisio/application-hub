"use client";

import { useState } from "react";
import Header from "./components/Header";
import AppCard from "./components/AppCard";
import AppModal from "./components/AppModal";
import { apps, App } from "@/data/apps";

export default function Home() {
  const [selectedApp, setSelectedApp] = useState<App | null>(null);

  return (
    <div className="min-h-screen relative">
      <Header />

      <main className="max-w-5xl mx-auto px-4 pb-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
          {apps.map((app) => (
            <AppCard
              key={app.id}
              app={app}
              onClick={() => setSelectedApp(app)}
            />
          ))}
        </div>
      </main>

      {selectedApp && (
        <AppModal app={selectedApp} onClose={() => setSelectedApp(null)} />
      )}
    </div>
  );
}
