"use client";

import { useEffect, useState } from "react";
import { App, categoryLabels } from "@/data/apps";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/app/hooks/useTranslation";

const categoryBadgeClass: Record<string, string> = {
  ios:         "badge badge-ios",
  mac:         "badge badge-mac",
  juego:       "badge badge-mac",
  desarrollo:  "badge badge-desarrollo",
};

interface AppModalProps {
  app: App;
  onClose: () => void;
}

export default function AppModal({ app, onClose }: AppModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<"manual" | "screenshots">("manual");
  const { t, locale } = useTranslation();

  useEffect(() => {
    setIsVisible(true);
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 200);
  };

  const description = locale === "es" ? app.description : app.descriptionEn;
  const features = locale === "es" ? app.features : app.featuresEn;
  const howItWorks = locale === "es" ? app.howItWorks : app.howItWorksEn;
  const howToUse = locale === "es" ? app.howToUse : app.howToUseEn;
  const hasTabs = howToUse || (app.screenshots && app.screenshots.length > 0);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-modal rounded-2xl transition-all duration-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-lg glass hover:bg-white/10 transition-colors z-10 text-zinc-400 hover:text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
          </svg>
        </button>

        <div className="p-8">
          {/* Header */}
          <div className="flex items-start gap-5 mb-6">
            {app.iconImage ? (
              <div
                className="relative w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 flex items-center justify-center"
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
              <div className="w-20 h-20 rounded-2xl glass flex items-center justify-center text-4xl flex-shrink-0">
                {app.icon}
              </div>
            )}
            <div className="min-w-0">
              <h2 className="text-2xl text-white display leading-tight">
                {app.name}
              </h2>
              <div className="mt-2">
                <span className={categoryBadgeClass[app.category]}>
                  {categoryLabels[app.category]}
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-zinc-300 leading-relaxed mb-8">
            {description}
          </p>

          {/* Features */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4">
              {t.common.features}
            </h3>
            <ul className="grid grid-cols-1 gap-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-zinc-300">
                  <span className="text-emerald-400 mt-0.5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* How it works */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4">
              {t.common.howItWorks}
            </h3>
            <div className="p-5 rounded-xl bg-white/5 border border-white/8">
              <p className="text-sm text-zinc-300 leading-relaxed whitespace-pre-line">
                {howItWorks}
              </p>
            </div>
          </div>

          {/* Tabs: Manual / Screenshots */}
          {hasTabs && (
            <div className="mb-8">
              <div className="flex gap-1 p-1 rounded-xl bg-white/5 mb-4">
                {howToUse && (
                  <button
                    onClick={() => setActiveTab("manual")}
                    className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                      activeTab === "manual"
                        ? "bg-white/10 text-white"
                        : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    {t.common.userManual}
                  </button>
                )}
                {app.screenshots && app.screenshots.length > 0 && (
                  <button
                    onClick={() => setActiveTab("screenshots")}
                    className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                      activeTab === "screenshots"
                        ? "bg-white/10 text-white"
                        : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    {t.common.screenshots}
                  </button>
                )}
              </div>

              {activeTab === "manual" && howToUse && (
                <div className="p-5 rounded-xl bg-white/5 border border-white/8">
                  <p className="text-sm text-zinc-300 leading-relaxed whitespace-pre-line">
                    {howToUse}
                  </p>
                </div>
              )}

              {activeTab === "screenshots" && app.screenshots && app.screenshots.length > 0 && (
                <div className="grid grid-cols-2 gap-3">
                  {app.screenshots.map((screenshot, index) => (
                    <div key={index} className="relative aspect-[9/19.5] rounded-2xl overflow-hidden bg-white/5 border border-white/8">
                      <Image
                        src={screenshot}
                        alt={`Screenshot ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Action links */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-white/8">
            {app.website && (
              <Link
                href={app.website}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-glass"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/>
                </svg>
                {t.common.website}
              </Link>
            )}
            {app.appStore && (
              <Link
                href={app.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-glass"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                {t.common.appStore}
              </Link>
            )}
            <Link
              href="/privacy"
              className="btn btn-glass"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              {t.common.privacyPolicy}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}