import { Card } from "@nextui-org/card";
import { Image } from "@nextui-org/react";

import { TECHNOLOGIES } from "@/constants";

export default function SkillList() {
  return (
    <div className="flex gap-2 mx-1 mt-12">
      {TECHNOLOGIES.map(tech => (
        <Card
          key={tech.title}
          isBlurred
          className="flex justify-center items-center h-[80px] w-[80px] overflow-visible border-gray-600 bg-background/60 dark:bg-default-100/50"
          shadow="sm">
          <div className="flex justify-center items-center h-[50px] w-[50px]">
            <Image alt={tech.title} className="object-contain overflow-visible" height="60px" src={tech.img} width="60px" />
          </div>
        </Card>
      ))}
    </div>
  );
}
