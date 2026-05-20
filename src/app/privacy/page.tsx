"use client";

import Link from "next/link";
import { useTranslation } from "@/app/hooks/useTranslation";

export default function PrivacyPage() {
  const { t, locale } = useTranslation();
  const p = t.privacy;

  return (
    <div className="min-h-screen relative py-12 px-4">
      {/* Ambient background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 0%, rgba(167,139,250,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-10 transition-colors text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          {p.back}
        </Link>

        {/* Content card */}
        <div className="glass-modal rounded-2xl p-8 md:p-10">
          {/* Title block */}
          <div className="mb-10 pb-8 border-b border-white/8">
            <h1 className="text-display text-white mb-3">
              {p.title}
            </h1>
            <p className="text-sm text-zinc-500 mono">
              {p.lastUpdate}: 16 {locale === "es" ? "de febrero de" : "February"} 2026
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-10 text-zinc-300 leading-relaxed">
            <section>
              <h2 className="text-title text-white mb-4">
                <span className="text-violet-400 mr-3">01</span>
                {p.introduction}
              </h2>
              <p className="text-zinc-400">{p.introductionText}</p>
            </section>

            <section>
              <h2 className="text-title text-white mb-4">
                <span className="text-violet-400 mr-3">02</span>
                {p.dataCollected}
              </h2>
              <p className="text-emerald-400 font-medium mb-3">
                {p.dataCollectedText}
              </p>
              <ul className="space-y-2">
                {p.dataCollectedList.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-zinc-400">
                    <span className="text-red-400 mt-0.5 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-title text-white mb-4">
                <span className="text-violet-400 mr-3">03</span>
                {p.storedData}
              </h2>
              <p className="text-zinc-400 mb-3">{p.storedDataText}</p>
              <ul className="space-y-2 mb-3">
                {p.storedDataList.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-zinc-400">
                    <span className="text-violet-400 mt-0.5 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-zinc-500 italic">{p.storedDataNote}</p>
            </section>

            <section>
              <h2 className="text-title text-white mb-4">
                <span className="text-violet-400 mr-3">04</span>
                {p.permissions}
              </h2>
              <p className="text-zinc-400">{p.permissionsText}</p>
            </section>

            <section>
              <h2 className="text-title text-white mb-4">
                <span className="text-violet-400 mr-3">05</span>
                {p.children}
              </h2>
              <p className="text-zinc-400">{p.childrenText}</p>
            </section>

            <section>
              <h2 className="text-title text-white mb-4">
                <span className="text-violet-400 mr-3">06</span>
                {p.changes}
              </h2>
              <p className="text-zinc-400">{p.changesText}</p>
            </section>

            <section>
              <h2 className="text-title text-white mb-4">
                <span className="text-violet-400 mr-3">07</span>
                {p.contact}
              </h2>
              <p className="text-zinc-400 mb-3">{p.contactText}</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <span className="text-zinc-500">{p.contactEmail}: </span>
                  <a href="mailto:info@saraiba.eu" className="text-violet-400 hover:underline">
                    info@saraiba.eu
                  </a>
                </li>
                <li>
                  <span className="text-zinc-500">{p.contactWeb}: </span>
                  <a href="https://saraiba.eu" className="text-violet-400 hover:underline">
                    https://saraiba.eu
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}