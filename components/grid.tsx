"use client";

import React, { Key, useState } from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { Contact, About, Github, Email, Linkedin, Twitter, Toggler, Skills, Project, Experence, Resume } from "./";
import Cards from "./ui/card";
import { Tab, Tabs } from "@nextui-org/react";

const MyGridLayout = () => {
  const defaultLayout = [
    { i: "about", x: 0, y: 0, w: 5, h: 7 }, // Big block at top left
    { i: "contact", x: 5, y: 0, w: 7, h: 1 }, // Long horizontal block top right
    { i: "map", x: 5, y: 1, w: 3, h: 6 }, // Block below horizontal one
    { i: "mode", x: 8, y: 1, w: 4, h: 3 }, // Small top-right block
    { i: "cv", x: 8, y: 0, w: 4, h: 3 }, // Small below top-right block
    { i: "linkedin", x: 0, y: 7, w: 2, h: 3 }, // Two small blocks on the left
    { i: "skills", x: 2, y: 7, w: 4, h: 6 }, // Larger middle-left block
    { i: "twitter", x: 0, y: 9, w: 2, h: 3 }, // Small block below left one
    { i: "github", x: 0, y: 7, w: 2, h: 3 }, // Bottom left block
    { i: "experience", x: 6, y: 9, w: 6, h: 11 }, // Bottom right block
    { i: "email", x: 2, y: 9, w: 4, h: 3 }, // Bottom right block
    { i: "project", x: 0, y: 10, w: 6, h: 8 }, // Bottom right block
    { i: "project_two", x: 0, y: 11, w: 6, h: 8 }, // Bottom right block
    { i: "project_three", x: 7, y: 11, w: 6, h: 8 }, // Bottom right block
    { i: "project_four", x: 7, y: 11, w: 6, h: 8 }, // Bottom right block
    { i: "project_five", x: 0, y: 11, w: 6, h: 8 } // Bottom right block
  ];

  const aboutLayout = [
    { i: "about", x: 0, y: 0, w: 5, h: 6 }, // Big block at top left
    { i: "linkedin", x: 5, y: 0, w: 2, h: 3 }, // Two small blocks on the left
    { i: "github", x: 7, y: 0, w: 2, h: 3 }, // Bottom left block
    { i: "twitter", x: 5, y: 1, w: 2, h: 3 }, // Small block below left one
    { i: "email", x: 7, y: 1, w: 2, h: 3 }, // Bottom right block
    { i: "skills", x: 0, y: 3, w: 7, h: 7 }, // Larger middle-left block
    { i: "contact", x: 9, y: 3, w: 5, h: 1 }, // Long horizontal block top right
    { i: "map", x: 9, y: 2, w: 3, h: 6 }, // Block below horizontal one
    { i: "mode", x: 8, y: 5, w: 5, h: 3 }, // Small top-right block
    { i: "cv", x: 8, y: 5, w: 5, h: 3 }, // Small below top-right block
    { i: "experience", x: 6, y: 9, w: 6, h: 11 }, // Bottom right block
    { i: "project", x: 0, y: 10, w: 6, h: 8 }, // The Movie Box
    { i: "project_two", x: 0, y: 11, w: 6, h: 8 }, // Hemolink
    { i: "project_three", x: 8, y: 11, w: 6, h: 8 }, // Inventory management
    { i: "project_four", x: 0, y: 11, w: 6, h: 8 }, // Project management
    { i: "project_five", x: 8, y: 11, w: 6, h: 8 } // Project management
  ];
  const workLayout = [
    { i: "experience", x: 0, y: 0, w: 6, h: 11 }, // Bottom right block
    { i: "cv", x: 6, y: 0, w: 6, h: 3 }, // Small below top-right block
    { i: "mode", x: 6, y: 0, w: 6, h: 3 }, // Small top-right block
    { i: "project_two", x: 0, y: 1, w: 6, h: 8 }, // Hemolink
    { i: "project_three", x: 9, y: 1, w: 6, h: 8 }, // Inventory management
    { i: "project_four", x: 7, y: 1, w: 6, h: 8 }, // Project Management
    { i: "project_five", x: 7, y: 1, w: 6, h: 8 }, // Project Management
    { i: "project", x: 0, y: 2, w: 6, h: 9 }, // The Movie Link
    { i: "about", x: 6, y: 2, w: 6, h: 6 }, // Big block at top left
    { i: "linkedin", x: 0, y: 3, w: 3, h: 3 }, // Two small blocks on the left
    { i: "github", x: 3, y: 2, w: 3, h: 3 }, // Bottom left block
    { i: "twitter", x: 0, y: 3, w: 3, h: 4 }, // Small block below left one
    { i: "email", x: 3, y: 3, w: 3, h: 4 }, // Bottom right block
    { i: "skills", x: 4, y: 3, w: 5, h: 7 }, // Larger middle-left block
    { i: "map", x: 9, y: 2, w: 3, h: 7 }, // Block below horizontal one
    { i: "contact", x: 0, y: 5, w: 12, h: 1 } // Long horizontal block top right
  ];

  const [layout, setLayout] = useState({ layoutType: "defalut", layout: defaultLayout });

  const handleLayoutChange = (key: Key) => {
    if (key === "All") {
      setLayout({ layoutType: "defalut", layout: defaultLayout });
    } else if (key === "About") {
      setLayout({ layoutType: "about", layout: aboutLayout });
    } else {
      setLayout({ layoutType: "work", layout: workLayout });
    }
  };

  return (
    <>
      <div className="w-full flex justify-center mb-5 flex-col items-center z-50">
        <Tabs radius="lg" onSelectionChange={handleLayoutChange}>
          <Tab key="All">Home</Tab>
          <Tab key="About">About</Tab>
          <Tab key="Experience">Project</Tab>
        </Tabs>
      </div>

      <GridLayout className="layout" layout={layout.layout} cols={12} rowHeight={30} width={1200} isResizable={false}>
        {layout.layoutType !== "work" && (
          <div key="about">
            <About />
          </div>
        )}
        {layout.layoutType !== "work" && (
          <div key="contact">
            <Contact />
          </div>
        )}
        {layout.layoutType !== "work" && (
          <div key="map">
            <Cards />
          </div>
        )}
        <div key="mode">
          <Toggler />
        </div>
        <div key="cv">
          <Resume />
        </div>

        {layout.layoutType !== "work" && (
          <div key="linkedin">
            <Linkedin />
          </div>
        )}
        {layout.layoutType !== "work" && (
          <div key="github">
            <Github />
          </div>
        )}
        {layout.layoutType !== "work" && (
          <div key="twitter">
            <Twitter />
          </div>
        )}
        {layout.layoutType !== "work" && (
          <div key="email">
            <Email />
          </div>
        )}
        {layout.layoutType !== "work" && (
          <div key="skills">
            <Skills />
          </div>
        )}
        <div key="experience">
          <Experence />
        </div>
        <div key="project">
          <Project
            coverPath="/project/theMovieBox.png"
            stack={["ReactJs", "CSS", "Material UI", "Axios", "Firebase", "TMDB API"]}
            title="The Moive Box"
          />
        </div>
        <div key="project_two">
          <Project coverPath="/project/hemolink.png" stack={["ReactJs", "NodeJs", "ExpressJs", "MongoDB"]} title="Hemolink" />
        </div>
        <div key="project_three">
          <Project
            coverPath="/project/mi-stock.png"
            stack={["NextJs", "TailwindCSS", "Redux", "NodeJs", "PostgreSQL", "AWS"]}
            title="Inventory Management"
          />
        </div>
        <div key="project_four">
          <Project
            coverPath="/project/project_management.png"
            stack={["NextJs", "TailwindCSS", "ChartJs", "Redux", "AWS"]}
            title="Project Management"
          />
        </div>
        <div key="project_five">
          <Project coverPath="/project/chimple_learning.png" stack={["ReactJs", "Ionic", "Capacitor", "xAPI", "Firebase"]} title="Chimple Learning" />
        </div>
      </GridLayout>
    </>
  );
};

export default MyGridLayout;
