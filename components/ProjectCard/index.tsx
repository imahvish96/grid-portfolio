/* eslint-disable padding-line-between-statements */
import { Card } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

export default function ProjectCard({
  coverPath,
  title,
  stack,
  description,
  link,
  category = "Project"
}: {
  coverPath: string;
  title: string;
  stack: string[];
  description?: string;
  link?: string;
  category?: string;
}) {
  const visibleStack = stack.slice(0, 3);
  const extra = stack.length - visibleStack.length;
  const hasValidImage = /^(https?:\/\/|\/)/.test(coverPath ?? "");

  return (
    <Card className="group relative h-full overflow-hidden border border-default-200/60 bg-background/60 dark:bg-default-100/50">
      <Link className="flex h-full flex-col" href={link ?? "#"} rel="noopener noreferrer" target="_blank">
        {/* preview */}
        <div className="relative h-[58%] w-full overflow-hidden">
          {hasValidImage ? (
            <Image
              fill
              alt={title}
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              src={coverPath}
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-default-200/60 to-default-300/40" />
          )}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background/50 to-transparent" />
        </div>

        {/* info */}
        <div className="flex flex-1 flex-col gap-1 px-4 py-3">
          <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-default-400">{category}</span>
          <h3 className="text-base font-bold leading-tight text-foreground">{title}</h3>
          {description && <p className="line-clamp-1 text-tiny leading-relaxed text-default-500">{description}</p>}

          <div className="mt-auto flex items-end justify-between gap-3 pt-2">
            <div className="flex flex-wrap gap-1.5">
              {visibleStack.map(item => (
                <span
                  key={item}
                  className="rounded-full border border-default-300/50 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-default-500">
                  {item}
                </span>
              ))}
              {extra > 0 && (
                <span className="rounded-full border border-default-300/50 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-default-500">
                  +{extra}
                </span>
              )}
            </div>

            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-default-300/50 text-default-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-violet-500 group-hover:text-violet-500">
              <GoArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </Link>
    </Card>
  );
}
