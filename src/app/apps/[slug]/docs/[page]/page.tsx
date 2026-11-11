import { notFound } from "next/navigation";
import { apps } from "@/data/apps";
import { appsWithDocs, getDocs } from "@/lib/docs";
import DocsView from "@/app/components/DocsView";

export function generateStaticParams() {
  return appsWithDocs().flatMap((slug) => {
    const pages = new Set([...getDocs(slug, "es"), ...getDocs(slug, "en")].map((p) => p.slug));
    return [...pages].map((page) => ({ slug, page }));
  });
}

export default async function DocPage({ params }: { params: Promise<{ slug: string; page: string }> }) {
  const { slug, page } = await params;
  const app = apps.find((a) => a.id === slug);
  const docs = { es: getDocs(slug, "es"), en: getDocs(slug, "en") };
  if (!app || (!docs.es.length && !docs.en.length)) notFound();
  // sidebar only needs titles; send body for the current page only
  const strip = (list: typeof docs.es) => list.map((p) => (p.slug === page ? p : { ...p, body: "", toc: [] }));
  return <DocsView app={app} page={page} docs={{ es: strip(docs.es), en: strip(docs.en) }} />;
}
