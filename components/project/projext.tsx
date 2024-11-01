import { Card, CardBody, Image, CardFooter, Chip } from "@nextui-org/react";

export default function Project() {
  return (
    <Card isBlurred isFooterBlurred className="p-0">
      <CardBody className="p-0">
        <Image
          alt="Card background"
          className="object-cover rounded-xl overflow-hidden p-0"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width="100%"
        />
      </CardBody>
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <div className="flex flex-col justify-between items-left w-full">
          <h4 className="font-bold text-large">Frontend Radio</h4>
          <div className="flex gap-3 mt-3">
            <Chip color="default">ReactJs</Chip>
            <Chip color="default">Typescript</Chip>
            <Chip color="default">Tailwind</Chip>
            <Chip color="default">AWS</Chip>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
