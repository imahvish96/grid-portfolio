import AnimatedCursor from "react-animated-cursor";
import React from "react";

function AnimatedCursorIcon() {
  return (
    <AnimatedCursor
      showSystemCursor
      clickables={[
        "a",
        {
          target: ".current",
          outerStyle: {
            background: "url(/cursor/amiti_cursor.jpeg)", // Soft blue background
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            backgroundPosition: "center"
          },
          outerScale: 1.5, // Increase size on hover
          innerScale: 0.5, // Slightly increase inner cursor,
          innerSize: 0
        },
        {
          target: ".previous_one",
          outerStyle: {
            background: "url(/cursor/gsynergy.jpeg)", // Soft blue background
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            backgroundPosition: "center"
          },
          outerScale: 1.5, // Increase size on hover
          innerScale: 0.5, // Slightly increase inner cursor,
          innerSize: 0
        },
        {
          target: ".previous_two",
          outerStyle: {
            background: "url(/cursor/misemind.jpeg)", // Soft blue background
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            backgroundPosition: "center"
          },
          outerScale: 1.5, // Increase size on hover
          innerScale: 0.5, // Slightly increase inner cursor,
          innerSize: 0
        },
        {
          target: ".previous_three",
          outerStyle: {
            background: "url(/cursor/al_cursor.png)", // Soft blue background
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
            overflow: "visible",
            borderRadius: "0px",
            width: "100%",
            objectFit: "contain"
          },
          outerScale: 1.5, // Increase size on hover
          innerScale: 0.5, // Slightly increase inner cursor,
          innerSize: 0
        }
      ]}
      innerScale={1}
      innerSize={8}
      innerStyle={{
        backgroundColor: "var(--cursor-color)"
      }}
      outerAlpha={0}
      outerScale={2}
      outerSize={35}
      outerStyle={{
        border: "3px solid var(--cursor-color)"
      }}
    />
  );
}

export default AnimatedCursorIcon;
