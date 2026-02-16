"use client";

import { App, categoryLabels } from "@/data/apps";
import { useEffect } from "react";

interface AppModalProps {
  app: App;
  onClose: () => void;
}

export default function AppModal({ app, onClose }: AppModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        <div className="p-8">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-5xl">{app.icon}</span>
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                {app.name}
              </h2>
              <span className="inline-block px-3 py-1 mt-1 text-xs font-medium rounded-full bg-zinc-200 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300">
                {categoryLabels[app.category]}
              </span>
            </div>
          </div>

          <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6">
            {app.description}
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
              Instrucciones
            </h3>
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800">
              <p className="text-zinc-700 dark:text-zinc-300 whitespace-pre-line">
                {app.instructions}
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            {app.downloadUrl && (
              <a
                href={app.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 font-medium text-white bg-zinc-900 dark:bg-white dark:text-zinc-900 rounded-full hover:opacity-90 transition-opacity"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
                Descargar
              </a>
            )}
            {app.repoUrl && (
              <a
                href={app.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 font-medium text-zinc-900 dark:text-zinc-100 border-2 border-zinc-300 dark:border-zinc-600 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Repositorio
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
