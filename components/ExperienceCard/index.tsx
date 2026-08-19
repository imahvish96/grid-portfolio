import { Card, CardBody } from "@nextui-org/react";

import styles from "./style.module.css";

import { EXPERIENCES, YEARS_OF_EXPERIENCE, YEARS_OF_EXPERIENCE_TITLE } from "@/constants";
import { Experience } from "@/lib/api";

type TimelineItem = { id: string | number; jobTitle: string; company: string; duration: string; isCurrent: boolean };

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const fmtMonthYear = (date?: string | null) => {
  if (!date) return "";
  const d = new Date(date);

  return `${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
};

// LinkedIn-style total: counts the running month, e.g. "3 mos", "1 yr 6 mos"
const totalDuration = (start: string, end: string | null, isCurrent: boolean) => {
  const s = new Date(start);
  const e = isCurrent || !end ? new Date() : new Date(end);
  let months = (e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth()) + (e.getDate() >= s.getDate() ? 1 : 0);
  months = Math.max(months, 1);

  const yrs = Math.floor(months / 12);
  const mos = months % 12;
  const parts: string[] = [];

  if (yrs) parts.push(`${yrs} yr${yrs > 1 ? "s" : ""}`);
  if (mos) parts.push(`${mos} mo${mos > 1 ? "s" : ""}`);

  return parts.join(" ");
};

const toRange = (start: string, end: string | null, isCurrent: boolean) =>
  `${fmtMonthYear(start)} – ${isCurrent ? "Present" : fmtMonthYear(end)} · ${totalDuration(start, end, isCurrent)}`;

export default function ExperienceCard({ experiences }: { experiences?: Experience[] }) {
  const items: TimelineItem[] =
    experiences && experiences.length
      ? [...experiences]
          .sort((a, b) => Number(b.is_current) - Number(a.is_current) || new Date(b.start_date).getTime() - new Date(a.start_date).getTime())
          .map(e => ({ id: e.id, jobTitle: e.designation, company: e.organization, duration: toRange(e.start_date, e.end_date, e.is_current), isCurrent: e.is_current }))
      : EXPERIENCES.map((e, i) => ({ id: e.id, jobTitle: e.jobTitle, company: e.company, duration: e.duration, isCurrent: i === 0 }));

  const years =
    experiences && experiences.length
      ? new Date().getFullYear() - Math.min(...experiences.map(e => new Date(e.start_date).getFullYear()))
      : YEARS_OF_EXPERIENCE;

  return (
    <Card className="h-full bg-background/60 dark:bg-default-100/50">
      <CardBody className="p-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 ${styles.badge}`}>
            <span className="text-3xl font-bold text-white">{years}</span>
          </div>
          <p className="text-tiny font-semibold uppercase leading-tight tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
            Years of
            <br />
            {YEARS_OF_EXPERIENCE_TITLE.replace("Years of ", "")}
          </p>
        </div>

        {/* Experience timeline */}
        <div className="mt-6 flex flex-col">
          {items.map((experience, index) => {
            const isCurrent = experience.isCurrent;
            const isLast = index === items.length - 1;

            return (
              <div key={experience.id} className="relative flex items-center justify-between gap-4 pb-8 last:pb-0">
                {/* vertical connecting line: from this dot's center down to the next dot */}
                {!isLast && (
                  <span className="absolute left-[5px] top-1/2 h-full w-px overflow-hidden bg-default-200/60" aria-hidden="true">
                    <span className={styles.pulse} style={{ animationDelay: `${index * 0.3}s` }} />
                  </span>
                )}

                <div className="flex items-center gap-3">
                  {/* dot on the line */}
                  {isCurrent ? (
                    <span className="relative flex h-3 w-3 shrink-0">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-500 opacity-75" />
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-500 ring-4 ring-cyan-500/20" />
                    </span>
                  ) : (
                    <span className="h-3 w-3 shrink-0 rounded-full border-2 border-default-400 bg-background" />
                  )}
                  <h3 className="text-xl font-bold">{experience.jobTitle}</h3>
                  {isCurrent && (
                    <span className="rounded-full bg-cyan-500/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-cyan-600 ring-1 ring-inset ring-cyan-500/30 dark:text-cyan-400">
                      New
                    </span>
                  )}
                </div>
                <div className="text-right">
                  <p className="text-small font-medium">{experience.company}</p>
                  <small className="text-tiny text-default-500">{experience.duration}</small>
                </div>
              </div>
            );
          })}
        </div>
      </CardBody>
    </Card>
  );
}
