import { Inter } from "next/font/google";
import AspectRatioCard from "./aspect-ratio-card";
import Breadcrumbs from "./breadcrumbs";
import Autobot from "./autobot";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="parent stack py-10">
      <div className="stack max-w-prose">
        <h1 className="text-6xl">Layout Patterns</h1>
        <AspectRatioCard />
        <Autobot />
      </div>
      <div className="stack max-w-prose">
        <h1 className="text-6xl">Component Patterns</h1>
        <Breadcrumbs />
      </div>
    </main>
  );
}
