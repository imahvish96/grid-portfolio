import { Card } from "@nextui-org/react";
import { IoLogoGithub } from "react-icons/io5";

export default function GithubCardIcon() {
  return (
    <Card isBlurred className="py-4 h-full border-none bg-background/60 dark:bg-default-100/50">
      <div className="flex justify-center items-center h-full">
        <IoLogoGithub className="w-[85%] h-[85%]" />
      </div>
    </Card>
  );
}
