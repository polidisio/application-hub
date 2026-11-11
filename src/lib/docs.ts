import fs from "node:fs";
import path from "node:path";
import { slugify } from "./slug";

export type Lang = "es" | "en";
export interface TocItem { id: string; text: string; level: 2 | 3 }
export interface DocPage { slug: string; title: string; order: number; body: string; toc: TocItem[] }

const ROOT = path.join(process.cwd(), "content");

function parse(slug: string, raw: string): DocPage {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  const meta: Record<string, string> = {};
  m?.[1].split("\n").forEach((l) => {
    const i = l.indexOf(":");
    if (i > 0) meta[l.slice(0, i).trim()] = l.slice(i + 1).trim();
  });
  const body = (m ? m[2] : raw).trim();
  const toc: TocItem[] = [];
  let fence = false;
  for (const line of body.split("\n")) {
    if (line.startsWith("```")) fence = !fence;
    const h = !fence && line.match(/^(##|###) (.+)$/);
    if (h) toc.push({ id: slugify(h[2]), text: h[2], level: h[1].length as 2 | 3 });
  }
  return { slug, title: meta.title ?? slug, order: Number(meta.order ?? 99), body, toc };
}

export function getDocs(app: string, lang: Lang): DocPage[] {
  const dir = path.join(ROOT, app, lang);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => parse(f.slice(0, -3), fs.readFileSync(path.join(dir, f), "utf8")))
    .sort((a, b) => a.order - b.order || a.slug.localeCompare(b.slug));
}

// carpetas que empiezan por "_" son borradores: no se publican
// ponytail: reads disk per call; fine for SSG, add cache if used at request time
export function appsWithDocs(): string[] {
  return fs.existsSync(ROOT) ? fs.readdirSync(ROOT).filter((d) => !d.startsWith("_") && fs.statSync(path.join(ROOT, d)).isDirectory()) : [];
}
