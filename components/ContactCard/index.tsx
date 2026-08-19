"use client";

import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Card } from "@nextui-org/react";
import { useTheme } from "next-themes";

import ContactInfo from "./ContactInfo";

import { CONTACT_INFORMATION } from "@/constants";

const Contact = ({ message, email }: { message?: string; email?: string }) => {
  const { theme } = useTheme();
  const [themeShadow, setThemeShadow] = useState<string>();

  useEffect(() => {
    theme === "dark" ? setThemeShadow("#18181b") : setThemeShadow("#fff");
  }, [theme]);

  // per-field fallback: override welcome message + email from API, keep the rest from constants
  const items = CONTACT_INFORMATION.map(item => {
    if (item.title === "Hey There" && message) return { ...item, content: message };
    if (item.title === "Email" && email) return { ...item, content: email };

    return item;
  });

  return (
    <Card className="h-full border-none bg-background/60 dark:bg-default-100/50">
      <Marquee gradient gradientColor={themeShadow} gradientWidth={80}>
        <ContactInfo items={items} />
      </Marquee>
    </Card>
  );
};

export default Contact;
