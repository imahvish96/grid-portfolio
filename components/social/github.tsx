import { Card } from "@nextui-org/react";
import { IoLogoGithub } from "react-icons/io5";

export default function GithubCardIcon() {
  return (
    <Card className="py-4 h-full">
      <IoLogoGithub className="w-full h-[100%]" />
    </Card>
  );
}
