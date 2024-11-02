"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Styles from "./style.module.css";

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setPosition({
        x: event.clientX,
        y: event.clientY
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const updateFollowerPosition = () => {
      setFollowerPosition(prev => ({
        x: prev.x + (position.x - prev.x) * 0.2, // Increase the easing factor for smoother movement
        y: prev.y + (position.y - prev.y) * 0.2 // Increase the easing factor for smoother movement
      }));
      requestAnimationFrame(updateFollowerPosition); // Use requestAnimationFrame for smoother updates
    };

    updateFollowerPosition(); // Start the animation loop

    return () => cancelAnimationFrame(updateFollowerPosition as any); // Clean up on unmount
  }, [position]);

  return (
    <div>
      {/* Your follower div */}
      <motion.div
        className={Styles["cursor-follower"]}
        style={{
          position: "absolute",
          top: followerPosition.y,
          left: followerPosition.x,
          translate: "-50% -50%", // Centering the div
          transform: "rotate(360deg)",
          zIndex: -1
        }}
        animate={{
          y: [0, -10, 0], // Floating effect
          transform: "rotate(360deg)"
        }}
        transition={{
          duration: 3, // Animation duration
          ease: "easeInOut",
          repeat: Infinity // Repeat indefinitely
        }}
      />
    </div>
  );
};

export default CursorFollower;
