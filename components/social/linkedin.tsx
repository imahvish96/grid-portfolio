import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { CiLinkedin } from "react-icons/ci";

export default function Linkedin() {
  return (
    <Card isBlurred isHoverable className="py-4 h-full bg-background/60 dark:bg-default-100/50">
      <div className="flex justify-center items-center h-full">
        <CiLinkedin className="w-[85%] h-[85%]" />
      </div>
    </Card>
  );
}
