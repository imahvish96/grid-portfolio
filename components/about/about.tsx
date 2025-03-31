"use client";

import { Card } from "@nextui-org/react";
import { MY_OVERVIEW, MY_NAME, MY_TITLE } from "@/constants";

export default function Cards() {
  return (
    <Card isBlurred className="py-4 h-full border-none bg-background/60 dark:bg-default-100/50">
      <div className="flex justify-between p-8">
        <div className="w-full">
          <h2 className="font-bold text-2xl">{MY_NAME}</h2>
          <p className="text-tiny uppercase font-bold">{MY_TITLE}</p>
          <p className="text-default-500 mt-3 text-small " style={{ fontSize: "13px" }}>
            {MY_OVERVIEW}
          </p>
        </div>
      </div>
    </Card>
  );
}
