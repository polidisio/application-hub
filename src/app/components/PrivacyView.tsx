"use client";

import Link from "next/link";
import SiteHeader from "./SiteHeader";

export interface PrivacyText {
  title: string; lastUpdate: string; date: string; introduction: string; introductionText: string;
  dataCollected: string; dataCollectedText: string; collectedList?: string[]; notCollectedTitle?: string;
  dataCollectedList: string[]; optOutText?: string;
  storedData: string; storedDataText: string; storedDataList: string[]; storedDataNote: string;
  permissions: string; permissionsText: string; children: string; childrenText: string;
  changes: string; changesText: string; contact: string; contactText: string;
  contactEmail: string; contactWeb: string; back: string;
}

export default function PrivacyView({ p }: { p: PrivacyText }) {

  return (
    <>
      <SiteHeader />
      <div className="px-4 py-10">

      <div className="max-w-3xl mx-auto relative">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted hover:text-fg mb-10 transition-colors text-sm"
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
        <div className="rounded-2xl border border-line bg-surface p-6 sm:p-10">
          {/* Title block */}
          <div className="mb-10 pb-8 border-b border-line">
            <h1 className="text-3xl font-semibold tracking-tight text-fg mb-3">
              {p.title}
            </h1>
            <p className="text-sm text-subtle">
              {p.lastUpdate}: {p.date}
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-10 text-muted leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-fg mb-4">
                <span className="text-accent mr-3">01</span>
                {p.introduction}
              </h2>
              <p className="text-muted">{p.introductionText}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-fg mb-4">
                <span className="text-accent mr-3">02</span>
                {p.dataCollected}
              </h2>
              <p className="text-ok font-medium mb-3">
                {p.dataCollectedText}
              </p>
              {p.collectedList && (
                <ul className="space-y-2 mb-5">
                  {p.collectedList.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted">
                      <span className="text-accent mt-0.5 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5"/>
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {p.notCollectedTitle && (
                <p className="text-ok font-medium mb-3">{p.notCollectedTitle}</p>
              )}
              <ul className="space-y-2">
                {p.dataCollectedList.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-muted">
                    <span className="text-bad mt-0.5 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              {p.optOutText && <p className="text-sm text-muted mt-4">{p.optOutText}</p>}
            </section>

            <section>
              <h2 className="text-xl font-semibold text-fg mb-4">
                <span className="text-accent mr-3">03</span>
                {p.storedData}
              </h2>
              <p className="text-muted mb-3">{p.storedDataText}</p>
              <ul className="space-y-2 mb-3">
                {p.storedDataList.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-muted">
                    <span className="text-accent mt-0.5 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-subtle italic">{p.storedDataNote}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-fg mb-4">
                <span className="text-accent mr-3">04</span>
                {p.permissions}
              </h2>
              <p className="text-muted">{p.permissionsText}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-fg mb-4">
                <span className="text-accent mr-3">05</span>
                {p.children}
              </h2>
              <p className="text-muted">{p.childrenText}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-fg mb-4">
                <span className="text-accent mr-3">06</span>
                {p.changes}
              </h2>
              <p className="text-muted">{p.changesText}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-fg mb-4">
                <span className="text-accent mr-3">07</span>
                {p.contact}
              </h2>
              <p className="text-muted mb-3">{p.contactText}</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <span className="text-subtle">{p.contactEmail}: </span>
                  <a href="mailto:info@saraiba.eu" className="text-accent hover:underline">
                    info@saraiba.eu
                  </a>
                </li>
                <li>
                  <span className="text-subtle">{p.contactWeb}: </span>
                  <a href="https://saraiba.eu" className="text-accent hover:underline">
                    https://saraiba.eu
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
