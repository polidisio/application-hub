import { notFound, redirect } from "next/navigation";
import { appsWithDocs, getDocs } from "@/lib/docs";

export const generateStaticParams = () => appsWithDocs().map((slug) => ({ slug }));

export default async function DocsIndex({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const first = (getDocs(slug, "es")[0] ?? getDocs(slug, "en")[0])?.slug;
  if (!first) notFound();
  redirect(`/apps/${slug}/docs/${first}`);
}
