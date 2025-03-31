import { Card, CardBody } from "@nextui-org/react";
import { FiEye, FiDownload } from "react-icons/fi";

import { CV, CV_PATH, CV_TITLE } from "@/constants";

export default function ResumeDownloadCard() {
  return (
    <Card isBlurred className="py-4 h-full border-none bg-background/60 dark:bg-default-100/50">
      <CardBody className="px-8">
        <div className="flex justify-between">
          <div>
            <small className="text-default-500">{CV}</small>
            <h4 className="font-bold text-large">{CV_TITLE}</h4>
          </div>
          <div className="flex items-center h-full gap-10">
            <a className="w-[60%] h-[60%]" download={"Mahvish_CV.pdf"} href={CV_PATH}>
              <FiDownload className="w-[100%] h-[100%]" />
            </a>
            <a className="w-[60%] h-[60%]" href={CV_PATH} rel="noopener noreferrer" target="_blank">
              <FiEye className="w-[100%] h-[100%]" />
            </a>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
