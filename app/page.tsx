import { Inter } from "next/font/google";
import AspectRatioCard from "./aspect-ratio-card";
import Breadcrumbs from "./breadcrumbs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="parent stack">
      <div className="stack">
        <h1 className="text-6xl">Layout Patterns</h1>
        <AspectRatioCard />
      </div>
      <div className="stack">
        <h1 className="text-6xl">Component Patterns</h1>
        <Breadcrumbs />
      </div>
    </main>
  );
}
