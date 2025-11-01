"use client";

import { Key, useEffect } from "react";
import { Tabs, Tab } from "@nextui-org/react";
import { HiOutlineMoon } from "react-icons/hi2";
import { IoSunnyOutline } from "react-icons/io5";
import { useTheme } from "next-themes";
import clsx from "clsx";

import Styles from "./style.module.css";

export default function App({ className, classNames }: any) {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");
  }, []);

  const onChange = (key: Key) => {
    const newTheme = key === "light" ? "light" : "dark";

    setTheme(newTheme);
  };

  return (
    <div className={clsx("flex flex-wrap gap-4 w-full h-full", className, classNames?.base)}>
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
              <IoSunnyOutline className="w-[75%] h-[75%]" />
            </div>
          }
        />
        <Tab
          key="dark"
          className={Styles["tab-photos"]}
          title={
            <div className="flex items-center justify-center w-full h-full moon">
              <HiOutlineMoon className="w-[70%] h-[70%]" />
            </div>
          }
        />
      </Tabs>
    </div>
  );
}
