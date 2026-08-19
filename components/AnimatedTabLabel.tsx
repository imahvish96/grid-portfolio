"use client";

import { ComponentType, useRef } from "react";

type IconHandle = { startAnimation: () => void; stopAnimation: () => void };

export default function AnimatedTabLabel({ Icon, label }: { Icon: ComponentType<any>; label: string }) {
  const ref = useRef<IconHandle>(null);

  return (
    <div
      className="flex items-center gap-2"
      onMouseEnter={() => ref.current?.startAnimation()}
      onMouseLeave={() => ref.current?.stopAnimation()}>
      <Icon ref={ref} size={18} />
      <span>{label}</span>
    </div>
  );
}
