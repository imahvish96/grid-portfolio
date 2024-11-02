import { Card } from "@nextui-org/react";
import Link from "next/link";
import { IoLogoGithub } from "react-icons/io5";

export default function GithubCardIcon() {
  return (
    <Card isBlurred isHoverable className="py-4 h-full border-none bg-background/60 dark:bg-default-100/50">
      <Link className="flex justify-center items-center h-full" href="https://github.com/imahvish96" target="_blank">
        <IoLogoGithub className="w-[75%] h-[75%]" />
      </Link>
    </Card>
  );
}
