"use client";

import Marquee from "react-fast-marquee";
import { Card, Image } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Skills = () => {
  const { theme } = useTheme();
  const [themeShadow, setThemeShadow] = useState<string>();

  useEffect(() => {
    console.log(theme);
    theme === "dark" ? setThemeShadow("#18181b") : setThemeShadow("#fff");
  }, [theme]);

  return (
    <Card isBlurred className="h-full border-none bg-background/60 dark:bg-default-100/50">
      <Marquee gradient gradientColor={themeShadow} gradientWidth={80} speed={40}>
        <SkillCard />
      </Marquee>
      <div className="mt-20 ml-6">
        <h2 className="font-bold text-2xl">SKILLS</h2>
        <p className="text-default-500 mt-3 text-small uppercase">Currently In ❤️ With</p>
      </div>
    </Card>
  );
};

export default Skills;

function SkillCard() {
  const list = [
    {
      title: "css",
      img: "/skills/css-icon.svg",
      price: "$5.50"
    },
    {
      title: "html",
      img: "/skills/html-icon.svg",
      price: "$3.00"
    },
    {
      title: "Raspberry",
      img: "/skills/js-icon.svg",
      price: "$10.00"
    },
    {
      title: "Lemon",
      img: "/skills/typescript.webp",
      price: "$5.30"
    },
    {
      title: "Lemon 2",
      img: "/skills/nextjs.webp",
      price: "$8.00"
    },
    {
      title: "Banana",
      img: "/skills/react-icon.svg",
      price: "$7.50"
    },
    {
      title: "Avocado",
      img: "/skills/sass-icon.svg",
      price: "$15.70"
    },
    {
      title: "Watermelon",
      img: "/skills/tailwind.png",
      price: "$12.20"
    },
    {
      title: "Avocado",
      img: "/skills/node-icon.svg",
      price: "$15.70"
    },
    {
      title: "Watermelon",
      img: "/skills/redux.png",
      price: "$12.20"
    },
    {
      title: "Watermelon",
      img: "/skills/python.svg",
      price: "$12.20"
    },
    {
      title: "Watermelon",
      img: "/skills/fastapi.svg",
      price: "$12.20"
    },
    {
      title: "Watermelon",
      img: "/skills/graphQL.png",
      price: "$12.20"
    },
    {
      title: "Watermelon",
      img: "/skills/npm.png",
      price: "$12.20"
    },
    {
      title: "Watermelon",
      img: "/skills/jest.svg",
      price: "$12.20"
    },
    {
      title: "Watermelon",
      img: "/skills/jira.png",
      price: "$12.20"
    },
    {
      title: "Watermelon",
      img: "/skills/mongodb.svg",
      price: "$12.20"
    },
    {
      title: "Watermelon",
      img: "/skills/mysql-icon.svg",
      price: "$12.20"
    },
    {
      title: "Watermelon",
      img: "/skills/vscode.png",
      price: "$12.20"
    }
  ];

  return (
    <div className="flex gap-2 mx-1 mt-12">
      {list.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isBlurred
          className="flex justify-center items-center h-[80px] w-[80px] overflow-visible border-gray-600 bg-background/60 dark:bg-default-100/50">
          <div className="flex justify-center items-center h-[50px] w-[50px]">
            <Image width="60px" height="60px" alt={item.title} className="object-contain overflow-visible" src={item.img} />
          </div>
        </Card>
      ))}
    </div>
  );
}
