import { Card } from "@nextui-org/react";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";

export default function Linkedin() {
  return (
    <Card isBlurred isHoverable shadow="sm" className="py-4 h-full border-none bg-background/60 dark:bg-default-100/50">
      <Link className="flex justify-center items-center h-full" href="https://x.com/FaridiSanu72858" target="_blank">
        <FaXTwitter className="w-[65%] h-[65%]" />
      </Link>
    </Card>
  );
}
