"use client";

import React, { useEffect, useState } from "react";
// import MyComponent from "../components/MyComponent";
import Marquee from "react-fast-marquee";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { GoNorthStar } from "react-icons/go";
import { useTheme } from "next-themes";

const Skills = () => {
  const { theme } = useTheme();
  const [themeShadow, setThemeShadow] = useState<string>();

  useEffect(() => {
    console.log(theme);
    theme === "dark" ? setThemeShadow("#18181b") : setThemeShadow("#fff");
  }, [theme]);
  return (
    <Card isBlurred className="h-full border-none bg-background/60 dark:bg-default-100/50">
      <Marquee gradient gradientWidth={80} gradientColor={themeShadow}>
        <SkillCard />
      </Marquee>
    </Card>
  );
};

export default Skills;

function SkillCard() {
  const list = [
    {
      title: "Hey There",
      content: "WELCOME TO MY PORTFOLIO– WHERE CREATIVITY MEETS CODING, AND PASSION TURNS INTO DIGITAL SOLUTIONS!."
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
