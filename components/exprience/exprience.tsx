"use client";

import { Card, CardBody, Image, CardFooter, Chip } from "@nextui-org/react";
import { myExprience } from "@/config/resume";

export default function Experence() {
  const exp = ["exp-one", "exp-two", "exp-three"];
  return (
    <Card isBlurred className="py-4 px-4 h-full bg-background/60 dark:bg-default-100/50">
      <CardBody className="py-2">
        <p className="text-default-500 mt-3 text-small uppercase">4 Years of</p>
        <h2 className="font-bold text-xl uppercase mt-3">experience</h2>
        <div>
          {/* {myExprience.map((item, index) => (
            <div className={`flex justify-between my-12 ${exp[index]}`} key={index}>
              <h1 className={`text-3xl font-semibold ${!item.duration.includes("Present") ? "line-through text-slate-500" : ""}`}>{item.jobTitle}</h1>
              <div className="text-right">
                <p>{item.company}</p>
                <small className="text-default-500 mt-3 text-small">{item.duration}</small>
              </div>
            </div>
          ))} */}
          <div className="flex justify-between my-12 exp-one">
            <h1 className="text-3xl font-semibold">Software Engineer</h1>
            <div className="text-right">
              <p>GSynergy India</p>
              <small className="text-default-500 mt-3 text-small">2023-Present</small>
            </div>
          </div>
          <div className="flex justify-between mb-12 exp-two">
            <h1 className="text-3xl line-through text-slate-500 font-semibold">Software Developer</h1>
            <div className="text-right">
              <p>Misemind Tech.</p>
              <small className="text-default-500 mt-3 text-small">2020-2023</small>
            </div>
          </div>
          <div className="flex justify-between exp-three">
            <h1 className="text-3xl line-through text-slate-500 font-semibold">Jr. Software Developer</h1>
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
