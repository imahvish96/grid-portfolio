"use client";

import { Key, useState } from "react";
import GridLayout from "react-grid-layout";
import { LinkedinIcon, GithubIcon, TwitterIcon, HouseIcon, UserIcon, FolderIcon } from "@animateicons/react/lucide";
import { Tab, Tabs } from "@nextui-org/react";

import SocialCard from "./SocialCard";
import MailCard from "./MailCard";
import LocationCard from "./LocationCard";
import AnimatedTabLabel from "./AnimatedTabLabel";

import { Contact, About, Toggler, SkillsCard, ProjectCard, ExperienceCard, ResumeDownloadCard } from "./";

import { HOME_LAYOUT, EXP_LAYOUT, ABOUT_LAYOUT } from "@/config/layout";
import "react-resizable/css/styles.css";
import "react-grid-layout/css/styles.css";
import { PROJECT } from "@/constants";
import { Information, Project, Experience } from "@/lib/api";

// grid layout is keyed by these ids, so map API projects onto them in order
const PROJECT_KEYS = ["projectMovieBox", "projectHemolink", "projectInventoryManagement", "projectProjectManagement", "projectChimpleLearning"];

const MyGridLayout = ({ info, projects, experience }: { info: Information | null; projects: Project[]; experience: Experience[] }) => {
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

  const email = info?.email ?? "mahvishfaridi96@gmail.com";

  const SOCIALS = [
    { key: "linkedin", href: "https://www.linkedin.com/in/faridi-mahvish/", brand: "#0A66C2", Icon: LinkedinIcon },
    { key: "github", href: "https://github.com/imahvish96", brand: "#8b5cf6", Icon: GithubIcon },
    { key: "twitter", href: "https://x.com/FaridiSanu72858", brand: "#1d9bf0", Icon: TwitterIcon },
    { key: "email", href: `mailto:${email}`, brand: "#f31260", Icon: null }
  ];

  // normalise projects: API when available, otherwise fall back to constants
  const projectItems = projects.length
    ? projects.map(p => ({ title: p.project_name, description: p.description, stack: p.tech_used, coverPath: p.image_url, link: p.live_link }))
    : PROJECT.map(p => ({ title: p.title, description: p.description, stack: p.stack, coverPath: p.coverPath, link: p.link }));

  const isExp = layout.layoutType === "exp";

  return (
    <>
      <div className="w-full flex justify-center mb-5 flex-col items-center z-50">
        <Tabs radius="lg" onSelectionChange={handleLayoutChange}>
          <Tab key="All" title={<AnimatedTabLabel Icon={HouseIcon} label="Home" />} />
          <Tab key="About" title={<AnimatedTabLabel Icon={UserIcon} label="About" />} />
          <Tab key="Experience" title={<AnimatedTabLabel Icon={FolderIcon} label="Project" />} />
        </Tabs>
      </div>

      <GridLayout className="layout" cols={12} isResizable={false} layout={layout.layout} rowHeight={30} width={1200}>
        {!isExp && [
          <div key="about">
            <About overview={info?.profile_summary} />
          </div>,
          <div key="contact">
            <Contact email={info?.email} message={info?.message} />
          </div>,
          <div key="map">
            <LocationCard />
          </div>,
          <div key="skills">
            <SkillsCard skills={info?.skills} />
          </div>
        ]}

        <div key="mode">
          <Toggler />
        </div>

        {!isExp &&
          SOCIALS.map(social => (
            <div key={social.key}>
              {social.key === "email" ? (
                <MailCard brand={social.brand} hrefLink={social.href} target="_blank" />
              ) : (
                <SocialCard Icon={social.Icon!} brand={social.brand} hrefLink={social.href} target="_blank" />
              )}
            </div>
          ))}

        <div key="experience">
          <ExperienceCard experiences={experience} />
        </div>

        {projectItems.slice(0, PROJECT_KEYS.length).map((project, i) => (
          <div key={PROJECT_KEYS[i]}>
            <ProjectCard
              coverPath={project.coverPath}
              description={project.description}
              link={project.link}
              stack={project.stack}
              title={project.title}
            />
          </div>
        ))}

        <div key="cv">
          <ResumeDownloadCard resumeUrl={info?.resume_url} />
        </div>
      </GridLayout>
    </>
  );
};

export default MyGridLayout;
