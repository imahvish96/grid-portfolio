"use client";

import React from "react";
// import MyComponent from "../components/MyComponent";
import Marquee from "react-fast-marquee";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { GoNorthStar } from "react-icons/go";

const Skills = () => (
  <Card className="h-full">
    <Marquee gradient gradientWidth={80} gradientColor={"#18181b"}>
      <SkillCard />
    </Marquee>
  </Card>
);

export default Skills;

function SkillCard() {
  const list = [
    {
      title: "Hey There",
      content: "Welcome to my portfolio – where creativity meets code, and passion turns into digital solutions!"
    },
    {
      title: "Country",
      content: "India"
    },
    {
      title: "Email",
      content: "sZ9kA@example.com"
    },
    {
      title: "Phone",
      content: "1234567890"
    }
  ];

  return (
    <div className="flex gap-2 mt-1">
      {list.map((item, index) => (
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <p className="font-bold">{item.title}: </p>
            <p>{item.content}</p>
          </div>
          <GoNorthStar className="text-xs" />
        </div>
      ))}
    </div>
  );
}
