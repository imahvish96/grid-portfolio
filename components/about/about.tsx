"use client";

import { Card, Image } from "@nextui-org/react";

export default function Cards() {
  return (
    <Card isBlurred className="py-4 h-full border-none bg-background/60 dark:bg-default-100/50">
      <div className="flex justify-between p-8">
        {/* <Image alt="Card background" className="object-cover rounded-xl" src="/images/profile.png" width={200} /> */}
        <div className="w-full">
          <h2 className="font-bold text-2xl">Mahvish Faridy</h2>
          <p className="text-tiny uppercase font-bold">Software Engineer</p>
          <p className="text-default-500 mt-3 text-small " style={{ fontSize: "13px" }}>
            A dedicated software engineer skilled in React, Node.js, JavaScript, and TypeScript, I specialize in building high-performance web
            applications. Passionate about tackling challenges, I’m eager to contribute to innovative projects and drive impactful solutions. Ready to
            elevate your team?
          </p>
        </div>
      </div>
    </Card>
  );
}
