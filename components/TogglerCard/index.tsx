"use client";

import { Key, useEffect, useRef } from "react";
import { Tabs, Tab } from "@nextui-org/react";
import { SunIcon, MoonIcon } from "@animateicons/react/lucide";
import { useTheme } from "next-themes";
import clsx from "clsx";

import Styles from "./style.module.css";

type IconHandle = { startAnimation: () => void; stopAnimation: () => void };

export default function App({ className, classNames }: any) {
  const { setTheme } = useTheme();
  const sunRef = useRef<IconHandle>(null);
  const moonRef = useRef<IconHandle>(null);

  useEffect(() => {
    setTheme("dark");
  }, []);

  const onChange = (key: Key) => {
    const newTheme = key === "light" ? "light" : "dark";

    setTheme(newTheme);
  };

  const startAll = () => {
    sunRef.current?.startAnimation();
    moonRef.current?.startAnimation();
  };

  const stopAll = () => {
    sunRef.current?.stopAnimation();
    moonRef.current?.stopAnimation();
  };

  return (
    <div className={clsx("flex flex-wrap gap-4 w-full h-full", className, classNames?.base)} onMouseEnter={startAll} onMouseLeave={stopAll}>
      <Tabs
        aria-label="Tabs sizes"
        className="w-full backdrop-blur-md backdrop-saturate-150 "
        defaultSelectedKey={"dark"}
        id={Styles["tabs"]}
        onSelectionChange={onChange}>
        <Tab
          key="light"
          className={Styles["tab-photos"]}
          title={
            <div className="flex items-center justify-center w-full h-full sunny">
              <SunIcon ref={sunRef} size={34} />
            </div>
          }
        />
        <Tab
          key="dark"
          className={Styles["tab-photos"]}
          title={
            <div className="flex items-center justify-center w-full h-full moon">
              <MoonIcon ref={moonRef} size={32} />
            </div>
          }
        />
      </Tabs>
    </div>
  );
}
