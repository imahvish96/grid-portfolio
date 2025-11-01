"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Card } from "@nextui-org/react";
import Marquee from "react-fast-marquee";

import SkillList from "./SkillsList";

const SkillsCard = () => {
  const { theme } = useTheme();
  const [themeShadow, setThemeShadow] = useState<string>();

  useEffect(() => {
    theme === "dark" ? setThemeShadow("#18181b") : setThemeShadow("#fff");
  }, [theme]);

  return (
    <Card isBlurred className="h-full border-none bg-background/60 dark:bg-default-100/50">
      <Marquee gradient gradientColor={themeShadow} gradientWidth={80} speed={40} style={{ overflow: "hidden" }}>
        <SkillList />
      </Marquee>
      <div className="mt-8 ml-6">
        <h2 className="font-bold text-2xl">SKILLS</h2>
        <p className="text-default-500 mt-3 text-small uppercase">Currently In ❤️ With</p>
      </div>
    </Card>
  );
};

export default SkillsCard;
