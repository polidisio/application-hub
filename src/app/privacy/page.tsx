"use client";

import Link from "next/link";
import { useTranslation } from "@/app/hooks/useTranslation";

export default function PrivacyPage() {
  const { t, locale } = useTranslation();
  const p = t.privacy;

  return (
    <div className="min-h-screen relative py-12 px-4">
      <div className="max-w-3xl mx-auto relative z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-zinc-300 hover:text-white mb-8 transition-colors"
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
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          {p.back}
        </Link>

        <div className="glass-modal rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            {p.title}
          </h1>
          <p className="text-sm text-zinc-400 mb-8">
            {p.lastUpdate}: 16 de febrero de 2026
          </p>

          <div className="space-y-6 text-zinc-300">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                1. {p.introduction}
              </h2>
              <p>
                {p.introductionText}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                2. {p.dataCollected}
              </h2>
              <p className="font-medium text-emerald-400 mb-2">
                {p.dataCollectedText}
              </p>
              <ul className="list-disc list-inside space-y-1">
                {p.dataCollectedList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                3. {p.storedData}
              </h2>
              <p>
                {p.storedDataText}
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                {p.storedDataList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="mt-2">
                {p.storedDataNote}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                4. {p.permissions}
              </h2>
              <p>
                {p.permissionsText}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                5. {p.children}
              </h2>
              <p>
                {p.childrenText}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                6. {p.changes}
              </h2>
              <p>
                {p.changesText}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                7. {p.contact}
              </h2>
              <p>{p.contactText}</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>{p.contactEmail}: info@saraiba.eu</li>
                <li>{p.contactWeb}: <a href="https://saraiba.eu" className="text-purple-400 hover:underline">https://saraiba.eu</a></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
