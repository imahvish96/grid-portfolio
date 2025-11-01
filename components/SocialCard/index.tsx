import { Card } from "@nextui-org/react";
import Link from "next/link";
import { ReactNode } from "react";

export default function SocialCard({ children, hrefLink, target }: { children: ReactNode; hrefLink: string; target?: string }) {
  return (
    <Card isBlurred isHoverable className="py-4 h-full border-none bg-background/60 dark:bg-default-100/50">
      <Link className="flex justify-center items-center h-full" href={hrefLink} rel="noopener noreferrer" target={target ?? undefined}>
        {children}
      </Link>
    </Card>
  );
}
