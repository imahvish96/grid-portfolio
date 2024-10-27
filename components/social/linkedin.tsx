import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { CiLinkedin } from "react-icons/ci";

export default function Linkedin() {
  return (
    <Card className="py-4 h-full">
      <CiLinkedin className="w-full h-[100%]" />
    </Card>
  );
}
