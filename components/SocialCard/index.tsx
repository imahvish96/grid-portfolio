"use client";

import { Card } from "@nextui-org/react";
import Link from "next/link";
import { CSSProperties, ComponentType, useRef } from "react";

import styles from "./style.module.css";

type IconHandle = { startAnimation: () => void; stopAnimation: () => void };

export default function SocialCard({
  Icon,
  iconSize = 48,
  hrefLink,
  target,
  brand
}: {
  Icon: ComponentType<any>;
  iconSize?: number;
  hrefLink: string;
  target?: string;
  brand: string;
}) {
  const iconRef = useRef<IconHandle>(null);

  return (
    <Card
      className={`py-4 h-full border-none bg-background/60 dark:bg-default-100/50 ${styles.card}`}
      style={{ "--brand": brand } as CSSProperties}
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}>
      <Link className="flex justify-center items-center h-full" href={hrefLink} rel="noopener noreferrer" target={target ?? undefined}>
        <span className={styles.icon}>
          <Icon ref={iconRef} size={iconSize} />
        </span>
      </Link>
    </Card>
  );
}
