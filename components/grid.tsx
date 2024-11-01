"use client";

import React from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { Contact, About, Github, Email, Linkedin, Twitter, Toggler, Skills, Project, Experence, Resume } from "./";
import Cards from "./ui/card";
import { Tab, Tabs } from "@nextui-org/react";

const MyGridLayout = () => {
  const layout = [
    { i: "about", x: 0, y: 0, w: 5, h: 7 }, // Big block at top left
    { i: "contact", x: 5, y: 0, w: 7, h: 1 }, // Long horizontal block top right
    { i: "map", x: 5, y: 1, w: 3, h: 6 }, // Block below horizontal one
    { i: "mode", x: 8, y: 1, w: 4, h: 3 }, // Small top-right block
    { i: "cv", x: 8, y: 0, w: 4, h: 3 }, // Small below top-right block
    { i: "linkedin", x: 0, y: 7, w: 2, h: 4 }, // Two small blocks on the left
    { i: "skills", x: 2, y: 7, w: 4, h: 8 }, // Larger middle-left block
    { i: "twitter", x: 0, y: 9, w: 2, h: 4 }, // Small block below left one
    { i: "github", x: 0, y: 7, w: 2, h: 4 }, // Bottom left block
    { i: "experience", x: 6, y: 9, w: 6, h: 13 }, // Bottom right block
    { i: "email", x: 2, y: 9, w: 4, h: 4 }, // Bottom right block
    { i: "project", x: 0, y: 10, w: 6, h: 13 }, // Bottom right block
    { i: "14", x: 7, y: 11, w: 6, h: 13 } // Bottom right block
  ];

  return (
    <>
      <div className="w-full flex justify-center mb-5 flex-col items-center">
        <Tabs radius="lg">
          <Tab>About</Tab>
          <Tab>Project</Tab>
          <Tab>Experience</Tab>
        </Tabs>
      </div>

      <GridLayout
        className="layout"
        layout={layout}
        cols={12} // Defining 12 columns for the grid
        rowHeight={30} // Each row height is 30px
        width={1200} // Total width of the layout in pixels
        isResizable={false}>
        <div key="about">
          <About />
        </div>
        <div key="contact">
          <Contact />
        </div>
        <div key="map">
          <Cards />
        </div>
        <div key="mode">
          <Toggler />
        </div>
        <div key="cv">
          <Resume />
        </div>
        <div key="linkedin">
          <Linkedin />
        </div>
        <div key="github">
          <Github />
        </div>
        <div key="twitter">
          <Twitter />
        </div>
        <div key="email">
          <Email />
        </div>
        <div key="skills">
          <Skills />
        </div>
        <div key="experience">
          <Experence />
        </div>
        <div key="project">
          <Project />
        </div>
        <div key="14">
          <Project />
        </div>
      </GridLayout>
    </>
  );
};

export default MyGridLayout;
