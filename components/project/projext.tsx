import { Card, CardBody, Image, CardFooter, Chip } from "@nextui-org/react";

export default function Project() {
  return (
    <Card className="py-4 h-full">
      <CardBody className="py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl overflow-hidden"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width="100%"
        />
      </CardBody>
      <CardFooter className="pb-0 pt-2 px-4 flex-col items-start overflow-visible mt-3 mb-3">
        <h4 className="font-bold text-large">Frontend Radio</h4>
        <div className="mt-3 flex gap-3">
          <Chip color="default">ReactJs</Chip>
          <Chip color="default">Typescript</Chip>
          <Chip color="default">Tailwind</Chip>
          <Chip color="default">AWS</Chip>
        </div>
      </CardFooter>
    </Card>
  );
}
