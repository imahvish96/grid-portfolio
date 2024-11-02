import { Card } from "@nextui-org/react";
import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";

export default function Linkedin() {
  return (
    <Card isBlurred isHoverable className="py-4 h-full bg-background/60 dark:bg-default-100/50">
      <Link className="flex justify-center items-center h-full" href="https://www.linkedin.com/in/faridi-mahvish/" target="_blank">
        <CiLinkedin className="w-[75%] h-[75%]" />
      </Link>
    </Card>
  );
}
