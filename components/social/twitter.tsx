import { Card } from "@nextui-org/react";
import { CiTwitter } from "react-icons/ci";

export default function Linkedin() {
  return (
    <Card isBlurred shadow="sm" className="py-4 h-full border-none bg-background/60 dark:bg-default-100/50">
      <div className="flex justify-center items-center h-full">
        <CiTwitter className="w-[85%] h-[85%]" />
      </div>
    </Card>
  );
}
