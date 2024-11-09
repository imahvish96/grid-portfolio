"use client";

import { Card, Image } from "@nextui-org/react";

export default function Cards() {
  return (
    <Card isBlurred className="py-4 h-full border-none bg-background/60 dark:bg-default-100/50">
      <div className="flex justify-between">
        <Image alt="Card background" className="object-cover rounded-xl" src="/images/profile.png" width={250} />
        <div className="mt-4 w-1/2">
          <h2 className="font-bold text-2xl">Mahvish Faridy</h2>
          <p className="text-tiny uppercase font-bold">Software Engineer</p>
          <p className="text-default-500 mt-3 text-small" style={{ fontSize: "13px" }}>
            A 4-year experienced developer skilled in React, Node.js, JavaScript, and TypeScript, focused on building high-performance web
            applications. Seeking new challenges to grow and contribute to innovative projects.
          </p>
        </div>
      </div>
    </Card>
  );
}
