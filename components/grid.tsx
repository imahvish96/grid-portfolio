"use client";

import React, { Key, useState } from "react";
import GridLayout from "react-grid-layout";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoGithub, IoMailOpenOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { Tab, Tabs } from "@nextui-org/react";

import SocialCard from "./SocialCard";
import LocationCard from "./LocationCard";

import { Contact, About, Toggler, SkillsCard, ProjectCard, ExperienceCard, ResumeDownloadCard } from "./";

import { HOME_LAYOUT, EXP_LAYOUT, ABOUT_LAYOUT } from "@/config/layout";
import "react-resizable/css/styles.css";
import "react-grid-layout/css/styles.css";
import { PROJECT } from "@/constants";

const MyGridLayout = () => {
  const [layout, setLayout] = useState({ layoutType: "defalut", layout: HOME_LAYOUT });

  const handleLayoutChange = (key: Key) => {
    switch (key) {
      case "About":
        setLayout({ layoutType: "about", layout: ABOUT_LAYOUT });
        break;
      case "Experience":
        setLayout({ layoutType: "exp", layout: EXP_LAYOUT });
        break;
      default:
        setLayout({ layoutType: "home", layout: HOME_LAYOUT });
        break;
    }
  };

  const SOCIALS = [
    {
      key: "linkedin",
      href: "https://www.linkedin.com/in/faridi-mahvish/",
      icon: <CiLinkedin className="w-[75%] h-[75%]" />
    },
    {
      key: "github",
      href: "https://github.com/imahvish96",
      icon: <IoLogoGithub className="w-[75%] h-[75%]" />
    },
    {
      key: "twitter",
      href: "https://x.com/FaridiSanu72858",
      icon: <FaXTwitter className="w-[65%] h-[65%]" />
    },
    {
      key: "email",
      href: "mailto:mahvishfaridi96@gmail.com",
      icon: <IoMailOpenOutline className="w-[85%] h-[85%]" />
    }
  ];

  const isExp = layout.layoutType === "exp";

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
        {!isExp && [
          <div key="about">
            <About />
          </div>,
          <div key="contact">
            <Contact />
          </div>,
          <div key="map">
            <LocationCard />
          </div>,
          <div key="skills">
            <SkillsCard />
          </div>
        ]}

        <div key="mode">
          <Toggler />
        </div>

        {!isExp &&
          SOCIALS.map(social => (
            <div key={social.key}>
              <SocialCard hrefLink={social.href} target="_blank">
                {social.icon}
              </SocialCard>
            </div>
          ))}

        <div key="experience">
          <ExperienceCard />
        </div>

        {PROJECT.map(project => (
          <div key={project.key}>
            <ProjectCard coverPath={project.coverPath} stack={project.stack} title={project.title} />
          </div>
        ))}

        <div key="cv">
          <ResumeDownloadCard />
        </div>
      </GridLayout>
    </>
  );
};

export default MyGridLayout;
