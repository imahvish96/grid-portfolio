"use client";

import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Card } from "@nextui-org/react";
import { useTheme } from "next-themes";

import ContactInfo from "./ContactInfo";

const Contact = () => {
  const { theme } = useTheme();
  const [themeShadow, setThemeShadow] = useState<string>();

  useEffect(() => {
    theme === "dark" ? setThemeShadow("#18181b") : setThemeShadow("#fff");
  }, [theme]);

  return (
    <Card isBlurred className="h-full border-none bg-background/60 dark:bg-default-100/50">
      <Marquee gradient gradientColor={themeShadow} gradientWidth={80}>
        <ContactInfo />
      </Marquee>
    </Card>
  );
};

export default Contact;
