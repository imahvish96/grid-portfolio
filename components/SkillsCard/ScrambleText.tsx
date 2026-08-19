"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const CHARS = "!<>-_\\/[]{}=+*^?#ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const rand = (n: number) => Math.floor(Math.random() * n);

type QueueItem = { to: string; start: number; end: number; char: string };

export default function ScrambleText({ text, className }: { text: string; className?: string }) {
  const [output, setOutput] = useState(text);
  const rafRef = useRef<number | null>(null);
  const frameRef = useRef(0);
  const queueRef = useRef<QueueItem[]>([]);

  const update = useCallback(() => {
    const queue = queueRef.current;
    let complete = 0;
    let str = "";

    for (const item of queue) {
      if (frameRef.current >= item.end) {
        complete++;
        str += item.to;
      } else if (frameRef.current >= item.start) {
        if (!item.char || Math.random() < 0.3) item.char = CHARS[rand(CHARS.length)];
        str += item.char;
      } else {
        str += item.to === " " ? " " : CHARS[rand(CHARS.length)];
      }
    }

    setOutput(str);

    if (complete === queue.length) {
      rafRef.current = null;

      return;
    }

    frameRef.current += 1;
    rafRef.current = requestAnimationFrame(update);
  }, []);

  const start = useCallback(() => {
    queueRef.current = text.split("").map(ch => {
      const startF = rand(12);

      return { to: ch, start: startF, end: startF + 8 + rand(12), char: "" };
    });
    frameRef.current = 0;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    update();
  }, [text, update]);

  useEffect(() => () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <span className={className} onMouseEnter={start}>
      {output}
    </span>
  );
}
