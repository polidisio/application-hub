"use client";

import { App, categoryLabels } from "@/data/apps";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

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
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors z-10"
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
            {app.iconImage ? (
              <div className="relative w-20 h-20 flex-shrink-0">
                <Image
                  src={app.iconImage}
                  alt={app.name}
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            ) : (
              <span className="text-5xl">{app.icon}</span>
            )}
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
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
              Características
            </h3>
            <ul className="space-y-2">
              {app.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300">
                  <span className="text-green-500 mt-1">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
              Cómo funciona
            </h3>
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800">
              <p className="text-zinc-700 dark:text-zinc-300 whitespace-pre-line">
                {app.howItWorks}
              </p>
            </div>
          </div>

          {app.howToUse && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                Manual de Usuario
              </h3>
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800">
                <p className="text-zinc-700 dark:text-zinc-300 whitespace-pre-line">
                  {app.howToUse}
                </p>
              </div>
            </div>
          )}

          {app.screenshots && app.screenshots.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                Capturas de Pantalla
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {app.screenshots.map((screenshot, index) => (
                  <div key={index} className="relative aspect-[9/19.5] rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                    <Image
                      src={screenshot}
                      alt={`Captura ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="flex items-center justify-center gap-2 px-6 py-3 font-medium text-zinc-900 dark:text-zinc-100 border-2 border-zinc-300 dark:border-zinc-600 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
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
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
