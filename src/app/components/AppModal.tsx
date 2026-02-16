"use client";

import { App, categoryLabels } from "@/data/apps";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/app/hooks/useTranslation";

interface AppModalProps {
  app: App;
  onClose: () => void;
}

export default function AppModal({ app, onClose }: AppModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const { t, locale } = useTranslation();

  useEffect(() => {
    setIsVisible(true);
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

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 200);
  };

  const description = locale === "es" ? app.description : app.descriptionEn;
  const features = locale === "es" ? app.features : app.featuresEn;
  const howItWorks = locale === "es" ? app.howItWorks : app.howItWorksEn;
  const howToUse = locale === "es" ? app.howToUse : app.howToUseEn;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
      onClick={handleClose}
    >
      <div
        className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-modal rounded-3xl transition-all duration-300 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors z-10 text-white"
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
              <div className="relative w-24 h-24 flex-shrink-0 glass rounded-2xl p-2">
                <Image
                  src={app.iconImage}
                  alt={app.name}
                  fill
                  className="object-contain"
                />
              </div>
            ) : (
              <span className="text-5xl">{app.icon}</span>
            )}
            <div>
              <h2 className="text-3xl font-bold text-white">
                {app.name}
              </h2>
              <span className="inline-block px-3 py-1 mt-2 text-xs font-medium rounded-full glass text-zinc-300">
                {categoryLabels[app.category]}
              </span>
            </div>
          </div>

          <p className="text-lg text-zinc-300 mb-8">
            {description}
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <span className="w-1 h-6 rounded-full gradient-text" />
              {t.common.features}
            </h3>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-zinc-300">
                  <span className="text-emerald-400 mt-1">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <span className="w-1 h-6 rounded-full gradient-text" />
              {t.common.howItWorks}
            </h3>
            <div className="p-5 rounded-2xl glass">
              <p className="text-zinc-300 whitespace-pre-line">
                {howItWorks}
              </p>
            </div>
          </div>

          {howToUse && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <span className="w-1 h-6 rounded-full gradient-text" />
                {t.common.userManual}
              </h3>
              <div className="p-5 rounded-2xl glass">
                <p className="text-zinc-300 whitespace-pre-line">
                  {howToUse}
                </p>
              </div>
            </div>
          )}

          {app.screenshots && app.screenshots.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <span className="w-1 h-6 rounded-full gradient-text" />
                {t.common.screenshots}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {app.screenshots.map((screenshot, index) => (
                  <div key={index} className="relative aspect-[9/19.5] rounded-xl overflow-hidden glass">
                    <Image
                      src={screenshot}
                      alt={`Screenshot ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-4 pt-4">
            <Link
              href="/privacy"
              className="flex items-center justify-center gap-2 px-6 py-3 font-medium text-white glass rounded-full hover:bg-white/15 transition-all duration-300"
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
              {t.common.privacyPolicy}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
