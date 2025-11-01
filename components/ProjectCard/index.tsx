/* eslint-disable padding-line-between-statements */
import { Card, CardBody, CardFooter, Chip } from "@nextui-org/react";

export default function ProjectCard({ coverPath, title, stack }: { coverPath: string; title: string; stack: string[] }) {
  return (
    <Card isBlurred isFooterBlurred className="p-0 h-full">
      <CardBody className="p-0 h-full" style={{ backgroundImage: `url(${coverPath})`, backgroundSize: "cover" }} />

      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <div className="flex flex-col justify-between items-left w-full">
          <h4 className="font-bold text-large text-white light:text-black">{title}</h4>
          <div className="flex gap-3 mt-3">
            {stack.map(item => (
              <Chip key={item} color="primary">
                {item}
              </Chip>
            ))}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
