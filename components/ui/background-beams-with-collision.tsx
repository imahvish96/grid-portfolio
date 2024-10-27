"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";

export const BackgroundBeamsWithCollision = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  const beamsY = [
    {
      initialX: 50,
      translateX: 50,
      duration: 20,
      repeatDelay: 5,
      delay: 2
    },
    {
      initialX: 100,
      translateX: 100,
      duration: 8,
      repeatDelay: 5,
      delay: 1
    },
    {
      initialX: 150,
      translateX: 150,
      duration: 6,
      repeatDelay: 2,
      delay: 2
    },
    {
      initialX: 200,
      translateX: 200,
      duration: 6,
      repeatDelay: 5,
      delay: 1
    },
    {
      initialX: 250,
      translateX: 250,
      duration: 8,
      repeatDelay: 4,
      delay: 3
    },
    {
      initialX: 300,
      translateX: 300,
      duration: 7,
      repeatDelay: 4,
      delay: 2
    },
    {
      initialX: 350,
      translateX: 350,
      duration: 10,
      repeatDelay: 5,
      delay: 3
    },
    {
      initialX: 400,
      translateX: 400,
      duration: 5,
      repeatDelay: 1,
      delay: 2
    },
    {
      initialX: 450,
      translateX: 450,
      duration: 5,
      repeatDelay: 3,
      delay: 3
    },
    {
      initialX: 500,
      translateX: 500,
      duration: 6,
      repeatDelay: 3,
      delay: 3
    },
    {
      initialX: 550,
      translateX: 550,
      duration: 10,
      repeatDelay: 3,
      delay: 2
    },
    {
      initialX: 600,
      translateX: 600,
      duration: 6,
      repeatDelay: 5,
      delay: 1
    },
    {
      initialX: 650,
      translateX: 650,
      duration: 10,
      repeatDelay: 2,
      delay: 1
    },
    {
      initialX: 700,
      translateX: 700,
      duration: 7,
      repeatDelay: 2,
      delay: 1
    },
    {
      initialX: 750,
      translateX: 750,
      duration: 10,
      repeatDelay: 4,
      delay: 3
    },
    {
      initialX: 800,
      translateX: 800,
      duration: 9,
      repeatDelay: 5,
      delay: 3
    },
    {
      initialX: 850,
      translateX: 850,
      duration: 6,
      repeatDelay: 1,
      delay: 1
    },
    {
      initialX: 900,
      translateX: 900,
      duration: 7,
      repeatDelay: 1,
      delay: 2
    },
    {
      initialX: 950,
      translateX: 950,
      duration: 10,
      repeatDelay: 3,
      delay: 2
    },
    {
      initialX: 1000,
      translateX: 1000,
      duration: 5,
      repeatDelay: 4,
      delay: 3
    },
    {
      initialX: 1050,
      translateX: 1050,
      duration: 9,
      repeatDelay: 4,
      delay: 1
    },
    {
      initialX: 1100,
      translateX: 1100,
      duration: 6,
      repeatDelay: 1,
      delay: 1
    },
    {
      initialX: 1150,
      translateX: 1150,
      duration: 8,
      repeatDelay: 2,
      delay: 2
    },
    {
      initialX: 1200,
      translateX: 1200,
      duration: 9,
      repeatDelay: 4,
      delay: 2
    },
    {
      initialX: 1250,
      translateX: 1250,
      duration: 9,
      repeatDelay: 3,
      delay: 2
    },
    {
      initialX: 1300,
      translateX: 1300,
      duration: 6,
      repeatDelay: 3,
      delay: 3
    },
    {
      initialX: 1350,
      translateX: 1350,
      duration: 10,
      repeatDelay: 2,
      delay: 1
    },
    {
      initialX: 1400,
      translateX: 1400,
      duration: 7,
      repeatDelay: 5,
      delay: 2
    },
    {
      initialX: 1450,
      translateX: 1450,
      duration: 9,
      repeatDelay: 1,
      delay: 2
    }
  ];

  const beamsX = [
    {
      initialY: 2,
      translateY: 2,
      duration: 4,
      repeatDelay: 2,
      delay: 3
    },
    {
      initialY: 50,
      translateY: 50,
      duration: 5,
      repeatDelay: 1,
      delay: 2
    },
    {
      initialY: 100,
      translateY: 100,
      duration: 10,
      repeatDelay: 5,
      delay: 3
    },
    {
      initialY: 150,
      translateY: 150,
      duration: 7,
      repeatDelay: 2,
      delay: 2
    },
    {
      initialY: 200,
      translateY: 200,
      duration: 5,
      repeatDelay: 4,
      delay: 2
    },
    {
      initialY: 250,
      translateY: 250,
      duration: 6,
      repeatDelay: 1,
      delay: 3
    },
    {
      initialY: 300,
      translateY: 300,
      duration: 9,
      repeatDelay: 2,
      delay: 3
    },
    {
      initialY: 350,
      translateY: 350,
      duration: 9,
      repeatDelay: 3,
      delay: 2
    },
    {
      initialY: 400,
      translateY: 400,
      duration: 10,
      repeatDelay: 5,
      delay: 2
    },
    {
      initialY: 450,
      translateY: 450,
      duration: 7,
      repeatDelay: 3,
      delay: 2
    },
    {
      initialY: 500,
      translateY: 500,
      duration: 8,
      repeatDelay: 1,
      delay: 2
    },
    {
      initialY: 550,
      translateY: 550,
      duration: 6,
      repeatDelay: 3,
      delay: 1
    },
    {
      initialY: 600,
      translateY: 600,
      duration: 7,
      repeatDelay: 1,
      delay: 1
    },
    {
      initialY: 650,
      translateY: 650,
      duration: 10,
      repeatDelay: 3,
      delay: 2
    },
    {
      initialY: 700,
      translateY: 700,
      duration: 6,
      repeatDelay: 2,
      delay: 1
    },
    {
      initialY: 750,
      translateY: 750,
      duration: 6,
      repeatDelay: 4,
      delay: 1
    }
  ];

  return (
    <div
      ref={parentRef}
      className={cn(
        "h-full dark:from-neutral-950 dark:to-neutral-800 relative flex items-center w-full justify-center overflow-hidden",
        // h-screen if you want bigger
        className
      )}>
      {beamsX.map(beam => (
        <CollisionMechanismX key={beam.initialY + "beam-idx"} beamOptions={beam} containerRef={containerRef} parentRef={parentRef} />
      ))}
      {beamsY.map(beam => (
        <CollisionMechanismY key={beam.initialX + "beam-idx"} beamOptions={beam} containerRef={containerRef} parentRef={parentRef} />
      ))}

      {children}
      <div
        ref={containerRef}
        className="absolute bottom-0 bg-neutral-100 w-full inset-x-0 pointer-events-none"
        style={{
          boxShadow:
            "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
        }}></div>
    </div>
  );
};

const CollisionMechanismY = React.forwardRef<
  HTMLDivElement,
  {
    containerRef: React.RefObject<HTMLDivElement>;
    parentRef: React.RefObject<HTMLDivElement>;
    beamOptions?: {
      initialX?: number;
      translateX?: number;
      initialY?: number;
      translateY?: number;
      rotate?: number;
      className?: string;
      duration?: number;
      delay?: number;
      repeatDelay?: number;
    };
  }
>(({ beamOptions = {} }, ref) => {
  const beamRef = useRef<HTMLDivElement>(null);
  ({
    detected: false,
    coordinates: null
  });
  const [beamKey, setBeamKey] = useState(0);

  return (
    <>
      <motion.div
        key={beamKey}
        ref={beamRef}
        animate="animate"
        initial={{
          translateY: beamOptions.initialY || "-200px",
          translateX: beamOptions.initialX || "0",
          rotate: beamOptions.rotate || 0
        }}
        variants={{
          animate: {
            translateY: beamOptions.translateY || "1800px",
            translateX: beamOptions.translateX || "0",
            rotate: beamOptions.rotate || 0,
            opacity: [1, 0, 0, 1]
          }
        }}
        transition={{
          duration: beamOptions.duration || 8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          delay: beamOptions.delay || 0,
          repeatDelay: beamOptions.repeatDelay || 0
        }}
        className={cn("absolute left-0 top-20 m-auto h-14 w-px rounded-full", beamOptions.className)}
        style={{
          background: "linear-gradient(to top, transparent, gray 40%, gray 60%, transparent)" // Custom gradient using inline style
        }}
      />
    </>
  );
});

const CollisionMechanismX = React.forwardRef<
  HTMLDivElement,
  {
    containerRef: React.RefObject<HTMLDivElement>;
    parentRef: React.RefObject<HTMLDivElement>;
    beamOptions?: {
      initialX?: number;
      translateX?: number;
      initialY?: number;
      translateY?: number;
      rotate?: number;
      className?: string;
      duration?: number;
      delay?: number;
      repeatDelay?: number;
    };
  }
>(({ beamOptions = {} }, ref) => {
  const beamRef = useRef<HTMLDivElement>(null);
  ({
    detected: false,
    coordinates: null
  });
  const [beamKey, setBeamKey] = useState(0);
  return (
    <>
      <motion.div
        key={beamKey}
        ref={beamRef}
        animate="animate"
        initial={{
          translateX: beamOptions.initialX || "-200px",
          translateY: beamOptions.translateY || "0px",
          rotate: beamOptions.rotate || 0
        }}
        variants={{
          animate: {
            translateX: beamOptions.translateX || "1800px",
            translateY: beamOptions.translateY || "0px",
            rotate: beamOptions.rotate || 0,
            opacity: [1, 0, 0, 1]
          }
        }}
        transition={{
          duration: beamOptions.duration || 8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          delay: beamOptions.delay || 0,
          repeatDelay: beamOptions.repeatDelay || 0
        }}
        className={cn(
          "absolute left-20 top-0 m-auto h-px w-14 rounded-full", // Tailwind classes for layout and shape
          beamOptions.className
        )}
        style={{
          background: "linear-gradient(to right, transparent, gray 40%, gray 60%, transparent)" // Custom gradient using inline style
        }}
      />
    </>
  );
});

CollisionMechanismY.displayName = "CollisionMechanismY";
CollisionMechanismX.displayName = "CollisionMechanismX";
