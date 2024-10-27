import { Tabs, Tab } from "@nextui-org/react";
import Styles from "./style.module.css";
import { IoSunnyOutline } from "react-icons/io5";
import { HiOutlineMoon } from "react-icons/hi2";

export default function App() {
  return (
    <div className="flex flex-wrap gap-4 w-full h-full">
      <Tabs aria-label="Tabs sizes" className="w-full" id={Styles["tabs"]}>
        <Tab
          key="photos"
          className={Styles["tab-photos"]}
          title={
            <div className="flex items-center justify-center w-full h-full">
              <IoSunnyOutline className="w-full h-full" />
            </div>
          }
        />
        <Tab
          key="music"
          className={Styles["tab-photos"]}
          title={
            <div className="flex items-center justify-center w-full h-full">
              <HiOutlineMoon className="w-full h-full" />
            </div>
          }
        />
      </Tabs>
    </div>
  );
}
