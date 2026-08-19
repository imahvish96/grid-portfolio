import { Card, CardBody } from "@nextui-org/react";
import { DownloadIcon, EyeIcon } from "@animateicons/react/lucide";

import { CV, CV_PATH, CV_TITLE } from "@/constants";

export default function ResumeInfoCard({ resumeUrl }: { resumeUrl?: string }) {
  const cvHref = resumeUrl ?? CV_PATH;

  return (
    <Card className="py-4 h-full border-none bg-background/60 dark:bg-default-100/50">
      <CardBody className="px-8">
        <div className="flex justify-between">
          <div>
            <small className="text-default-500">{CV}</small>
            <h4 className="font-bold text-large">{CV_TITLE}</h4>
          </div>
          <div className="flex items-center gap-5">
            <a aria-label="Download CV" className="cursor-pointer" download={"Mahvish_CV.pdf"} href={cvHref}>
              <DownloadIcon size={22} />
            </a>
            <a aria-label="View CV" className="cursor-pointer" href={cvHref} rel="noopener noreferrer" target="_blank">
              <EyeIcon size={22} />
            </a>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
