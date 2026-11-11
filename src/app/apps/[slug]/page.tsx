import { notFound } from "next/navigation";
import { apps } from "@/data/apps";
import AppDetail from "@/app/components/AppDetail";
import { appsWithDocs } from "@/lib/docs";

export function generateStaticParams() {
  return apps.map((a) => ({ slug: a.id }));
}

export default async function AppPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const app = apps.find((a) => a.id === slug);
  if (!app) notFound();
  return <AppDetail app={app} hasDocs={appsWithDocs().includes(app.id)} />;
}
