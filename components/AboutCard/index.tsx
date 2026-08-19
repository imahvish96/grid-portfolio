import { Card } from "@nextui-org/react";
import { MY_OVERVIEW, MY_FIRST_NAME, MY_LAST_NAME, MY_TITLE } from "@/constants";

import styles from "./style.module.css";

const HIGHLIGHT_CLASS = "font-semibold text-default-800 dark:text-white";

const HIGHLIGHTS = [
  { word: "high-performance web applications", className: HIGHLIGHT_CLASS },
  { word: "software engineer", className: HIGHLIGHT_CLASS },
  { word: "TypeScript", className: HIGHLIGHT_CLASS },
  { word: "JavaScript", className: HIGHLIGHT_CLASS },
  { word: "Node.js", className: HIGHLIGHT_CLASS },
  { word: "React", className: HIGHLIGHT_CLASS }
];

function highlightOverview(text: string) {
  const escaped = HIGHLIGHTS.map(h => h.word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const regex = new RegExp(`(${escaped.join("|")})`, "gi");

  return text.split(regex).map((part, i) => {
    const match = HIGHLIGHTS.find(h => h.word.toLowerCase() === part.toLowerCase());

    return match ? (
      <span key={i} className={match.className}>
        {part}
      </span>
    ) : (
      part
    );
  });
}

export default function AboutCard({ overview }: { overview?: string }) {
  const summary = overview ?? MY_OVERVIEW;

  return (
    <Card className=" h-full border-none bg-background/60 dark:bg-default-100/50">
      <div className="flex justify-between p-6">
        <div className="w-full">
          <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-cyan-500/15 px-3 py-1 text-tiny font-bold uppercase text-cyan-600 dark:text-cyan-400 ring-1 ring-inset ring-cyan-500/30">
            {MY_TITLE}
          </div>
          <div className="ml-1 mt-1">
            <h2 className="inline-block font-bold text-2xl">{MY_FIRST_NAME}</h2>
            <h2 className={`inline-block ml-1 font-bold text-2xl ${styles.lastName}`} data-text={MY_LAST_NAME}>
              {MY_LAST_NAME}
            </h2>
          </div>
          <p className="text-default-500 mt-2 text-small ml-1" style={{ fontSize: "13px" }}>
            {highlightOverview(summary)}
          </p>
          <div className="inline-flex gap-1.5 mt-2">
            <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-green-500/15 px-3 py-1 text-tiny font-bold uppercase text-green-600 dark:text-green-400 ring-1 ring-inset ring-green-500/30">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Open To Work
            </div>
            <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-foreground/5 px-3 py-1 text-tiny font-bold uppercase text-foreground/80 ring-1 ring-inset ring-foreground/15">
              React * Node * Typescript
            </div>
            <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-foreground/5 px-3 py-1 text-tiny font-bold uppercase text-foreground/80 ring-1 ring-inset ring-foreground/15">
              Remote
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
