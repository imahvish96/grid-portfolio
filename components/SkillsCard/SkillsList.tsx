import { Card } from "@nextui-org/card";
import Image from "next/image";

import { TECHNOLOGIES } from "@/constants";

export default function SkillList({ skills }: { skills?: string[] }) {
  const items = skills && skills.length ? skills : TECHNOLOGIES.map(tech => tech.img);

  return (
    <div className="flex gap-2 mx-1">
      {items.map((src, i) => (
        <Card
          key={`${src}-${i}`}
          className="flex justify-center items-center h-[56px] w-[56px] overflow-visible bg-transparent border-none"
          shadow="none">
          <div className="flex justify-center items-center h-[36px] w-[36px]">
            <Image alt={`skill-${i}`} className="object-contain" height={40} src={src} width={40} />
          </div>
        </Card>
      ))}
    </div>
  );
}
