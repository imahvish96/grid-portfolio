"use client";

import { Card } from "@nextui-org/react";
import Marquee from "react-fast-marquee";

import SkillList from "./SkillsList";
import ScrambleText from "./ScrambleText";
import styles from "./title.module.css";

const edgeFade = "linear-gradient(to right, transparent 0%, #000 6%, #000 94%, transparent 100%)";

const SkillsCard = ({ skills }: { skills?: string[] }) => {
  return (
    <Card className="h-full border-none bg-background/60 dark:bg-default-100/50 overflow-hidden">
      <div className="mt-6 ml-6">
        <h2 className="font-bold text-2xl">
          <ScrambleText className={styles.title} text="SKILLS" />
        </h2>
        <p className={`text-default-500 mt-1 text-small uppercase ${styles.subtitle}`}>Currently In ❤️ With</p>
      </div>
      <div className="mt-6 flex flex-col gap-3 pb-6" style={{ WebkitMaskImage: edgeFade, maskImage: edgeFade }}>
        <Marquee speed={40}>
          <SkillList skills={skills} />
        </Marquee>
        <Marquee direction="right" speed={40}>
          <SkillList skills={skills} />
        </Marquee>
      </div>
    </Card>
  );
};

export default SkillsCard;
