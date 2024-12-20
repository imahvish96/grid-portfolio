import { Card, CardBody } from "@nextui-org/react";

import { FiEye } from "react-icons/fi";
import { FiDownload } from "react-icons/fi";

export default function Cards() {
  return (
    <Card isBlurred className="py-4 h-full border-none bg-background/60 dark:bg-default-100/50">
      <CardBody className="px-8">
        <div className="flex justify-between">
          <div>
            <small className="text-default-500">2024 CV</small>
            <h4 className="font-bold text-large">Resume</h4>
          </div>
          <div className="flex items-center h-full gap-10">
            <FiDownload className="w-[60%] h-[60%]" />
            <FiEye className="w-[60%] h-[60%]" />
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
