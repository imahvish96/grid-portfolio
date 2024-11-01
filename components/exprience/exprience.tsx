import { Card, CardBody, Image, CardFooter, Chip } from "@nextui-org/react";

export default function Experence() {
  return (
    <Card isBlurred className="py-4 px-4 h-full border-none bg-background/60 dark:bg-default-100/50">
      <CardBody className="py-2">
        <p className="text-default-500 mt-3 text-small uppercase">4 Years of</p>
        <h2 className="font-bold text-xl uppercase mt-3">experience</h2>
        <div className="mt-12">
          <div className="flex justify-between mb-12 exp-one">
            <h1 className="text-3xl">Software Engineer</h1>
            <div className="text-right">
              <p>GSynergy India</p>
              <small className="text-default-500 mt-3 text-small">2023-Present</small>
            </div>
          </div>
          <div className="flex justify-between mb-12 exp-two">
            <h1 className="text-3xl line-through text-slate-500">Software Developer</h1>
            <div className="text-right">
              <p>Misemind Tech.</p>
              <small className="text-default-500 mt-3 text-small">2020-2023</small>
            </div>
          </div>
          <div className="flex justify-between exp-three">
            <h1 className="text-3xl line-through text-slate-500">Jr. Software Developer</h1>
            <div className="text-right">
              <p>Alienskart Web </p>
              <small className="text-default-500 mt-3 text-small">2019-2020</small>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
