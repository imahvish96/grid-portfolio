import { Card, CardBody } from "@nextui-org/react";

import { EXPERIENCES, YEARS_OF_EXPERIENCE, YEARS_OF_EXPERIENCE_TITLE } from "@/constants";

export default function ExperienceCard() {
  return (
    <Card isBlurred className="py-4 px-4 h-full bg-background/60 dark:bg-default-100/50">
      <CardBody className="py-2">
        <p className="text-default-500 mt-3 text-small uppercase">{YEARS_OF_EXPERIENCE}</p>
        <h2 className="font-bold text-xl uppercase mt-3">{YEARS_OF_EXPERIENCE_TITLE}</h2>
        <div>
          {EXPERIENCES.map((experience, index) => (
            <div key={index} className={`flex justify-between my-12 ${experience.id}`}>
              <h1 className="text-3xl font-semibold">{experience.jobTitle}</h1>
              <div className="text-right">
                <p>{experience.company}</p>
                <small className="text-default-500 mt-3 text-small">{experience.duration}</small>
              </div>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}
