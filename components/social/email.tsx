import { Card } from "@nextui-org/react";
import Link from "next/link";
import { IoMailOpenOutline } from "react-icons/io5";

export default function GithubCardIcon() {
  return (
    <Card isBlurred isHoverable className="py-4 h-full border-none bg-background/60 dark:bg-default-100/50">
      <Link href="mailto:mahvishfaridi96@gmail.com" className="flex justify-center items-center h-full">
        <IoMailOpenOutline className="w-[85%] h-[85%]" />
      </Link>
    </Card>
  );
}
