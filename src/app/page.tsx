import HomeView from "./components/HomeView";
import { appsWithDocs } from "@/lib/docs";

export default function Home() {
  return <HomeView docSlugs={appsWithDocs()} />;
}
