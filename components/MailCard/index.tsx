"use client";

import { Card } from "@nextui-org/react";
import Link from "next/link";
import { CSSProperties, useRef } from "react";
import { MailIcon } from "@animateicons/react/lucide";
import { GoArrowUpRight } from "react-icons/go";

import styles from "../SocialCard/style.module.css";

type IconHandle = { startAnimation: () => void; stopAnimation: () => void };

export default function MailCard({ hrefLink, target, brand = "#f31260" }: { hrefLink: string; target?: string; brand?: string }) {
  const email = hrefLink.replace("mailto:", "");
  const iconRef = useRef<IconHandle>(null);

  return (
    <Card
      className={`h-full border-none bg-background/60 dark:bg-default-100/50 ${styles.card}`}
      style={{ "--brand": brand } as CSSProperties}
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}>
      <Link className="group flex h-full items-center gap-4 px-6 py-4" href={hrefLink} rel="noopener noreferrer" target={target ?? undefined}>
        <span className={`${styles.icon} shrink-0`}>
          <MailIcon ref={iconRef} size={40} />
        </span>
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-tight">Let&apos;s talk</h2>
          <p className="text-default-500 text-small truncate">{email}</p>
        </div>
        <GoArrowUpRight
          className={`h-6 w-6 shrink-0 text-default-500 ${styles.icon} transition-transform group-hover:-translate-y-1 group-hover:translate-x-1`}
        />
      </Link>
    </Card>
  );
}
