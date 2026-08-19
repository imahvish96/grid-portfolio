import { Card } from "@nextui-org/react";
import Image from "next/image";

export default function LocationCard() {
  return (
    <Card className="group relative h-full overflow-hidden">
      <Image
        fill
        alt="Location map"
        className="object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, 33vw"
        src="/location.png"
      />
    </Card>
  );
}
