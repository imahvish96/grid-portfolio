"use client";

import React, { Key, useState } from "react";
import GridLayout from "react-grid-layout";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoGithub, IoMailOpenOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { Tab, Tabs } from "@nextui-org/react";

import SocialCard from "./social/socialCard";
import Cards from "./ui/card";

import { Contact, About, Toggler, SkillsCard, ProjectCard, ExperienceCard, ResumeDownloadCard } from "./";

import { DEFAULT_LAYOUT, WORK_LAYOUT, ABOUT_LAYOUT } from "@/config/gridLayout";

import "react-resizable/css/styles.css";
import "react-grid-layout/css/styles.css";
import { PROJECT } from "@/constants";

const MyGridLayout = () => {
  const [layout, setLayout] = useState({ layoutType: "defalut", layout: DEFAULT_LAYOUT });

  const handleLayoutChange = (key: Key) => {
    switch (key) {
      case "About":
        setLayout({ layoutType: "about", layout: ABOUT_LAYOUT });
        break;
      case "Experience":
        setLayout({ layoutType: "work", layout: WORK_LAYOUT });
        break;
      default:
        setLayout({ layoutType: "defalut", layout: DEFAULT_LAYOUT });
        break;
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

      <GridLayout className="layout" cols={12} isResizable={false} layout={layout.layout} rowHeight={30} width={1200}>
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
          <ResumeDownloadCard />
        </div>

        {layout.layoutType !== "work" && (
          <div key="linkedin">
            <SocialCard hrefLink="https://www.linkedin.com/in/faridi-mahvish/" target="_blank">
              <CiLinkedin className="w-[75%] h-[75%]" />
            </SocialCard>
          </div>
        )}

        {layout.layoutType !== "work" && (
          <div key="github">
            <SocialCard hrefLink="https://github.com/imahvish96" target="_blank">
              <IoLogoGithub className="w-[75%] h-[75%]" />
            </SocialCard>
          </div>
        )}

        {layout.layoutType !== "work" && (
          <div key="twitter">
            <SocialCard hrefLink="https://x.com/FaridiSanu72858" target="_blank">
              <FaXTwitter className="w-[65%] h-[65%]" />
            </SocialCard>
          </div>
        )}
        {layout.layoutType !== "work" && (
          <div key="email">
            <SocialCard hrefLink="mailto:mahvishfaridi96@gmail.com">
              <IoMailOpenOutline className="w-[85%] h-[85%]" />
            </SocialCard>
          </div>
        )}
        {layout.layoutType !== "work" && (
          <div key="skills">
            <SkillsCard />
          </div>
        )}
        <div key="experience">
          <ExperienceCard />
        </div>
        {PROJECT.map(project => (
          <div key={project.key}>
            <ProjectCard coverPath={project.coverPath} stack={project.stack} title={project.title} />
          </div>
        ))}
        {/* <div key="project">
          <ProjectCard
            coverPath="/project/theMovieBox.png"
            stack={["ReactJs", "CSS", "Material UI", "Axios", "Firebase", "TMDB API"]}
            title="The Moive Box"
          />
        </div>
        <div key="project_two">
          <ProjectCard coverPath="/project/hemolink.png" stack={["ReactJs", "NodeJs", "ExpressJs", "MongoDB"]} title="Hemolink" />
        </div>
        <div key="project_three">
          <ProjectCard
            coverPath="/project/mi-stock.png"
            stack={["NextJs", "TailwindCSS", "Redux", "NodeJs", "PostgreSQL", "AWS"]}
            title="Inventory Management"
          />
        </div>
        <div key="project_four">
          <ProjectCard
            coverPath="/project/project_management.png"
            stack={["NextJs", "TailwindCSS", "ChartJs", "Redux", "AWS"]}
            title="Project Management"
          />
        </div>
        <div key="project_five">
          <ProjectCard
            coverPath="/project/chimple_learning.png"
            stack={["ReactJs", "Ionic", "Capacitor", "xAPI", "Firebase"]}
            title="Chimple Learning"
          />
        </div> */}
      </GridLayout>
    </>
  );
};

export default MyGridLayout;
