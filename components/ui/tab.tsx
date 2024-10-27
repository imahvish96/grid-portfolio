import { Tabs, Tab } from "@nextui-org/react";

export default function Toggle() {
  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options" color="primary" variant="bordered">
        <Tab
          key="photos"
          title={
            <div className="flex items-center space-x-2">
              {/* <GalleryIcon /> */}
              <span>Photos</span>
            </div>
          }
        />
        <Tab
          key="music"
          title={
            <div className="flex items-center space-x-2">
              {/* <MusicIcon /> */}
              <span>Music</span>
            </div>
          }
        />
      </Tabs>
    </div>
  );
}
