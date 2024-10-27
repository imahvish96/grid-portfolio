import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { TiDownload } from "react-icons/ti";
import { FiEye } from "react-icons/fi";
import { FiDownload } from "react-icons/fi";

export default function Cards() {
  return (
    <Card className="py-4 h-full">
      <CardBody className="px-8">
        <div className="flex justify-between">
          <div>
            <small className="text-default-500">2024 CV</small>
            <h4 className="font-bold text-large">Resume</h4>
          </div>

          <div className="flex gap-10">
            <FiDownload className="w-full h-[100%]" />
            <FiEye className="w-full h-[100%]" />
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
