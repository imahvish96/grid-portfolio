const MY_OVERVIEW =
  "A dedicated software engineer skilled in React, Node.js, JavaScript, and TypeScript, I specialize in building high-performance web applications. Passionate about tackling challenges, I’m eager to contribute to innovative projects and drive impactful solutions. Ready to elevate your team?";
const MY_NAME = "Mahvish Faridi";
const MY_TITLE = "Software Engineer";
const YEARS_OF_EXPERIENCE = "FIVE";
const YEARS_OF_EXPERIENCE_TITLE = "Years of Experience";
const CV = "2025 CV";
const CV_TITLE = "Resume";
const CV_PATH = "/Mahvish_CV.pdf";

const CONTACT_INFORMATION = [
  {
    title: "Hey There",
    content: "WELCOME TO MY PORTFOLIO– WHERE CREATIVITY MEETS CODING, AND PASSION TURNS INTO DIGITAL SOLUTIONS!."
  },
  {
    title: "Country",
    content: "India"
  },
  {
    title: "Email",
    content: "faridi.mahvish@gmail.com"
  },
  {
    title: "Phone",
    content: "Please Prefer Email"
  }
];

export const EXPERIENCES = [
  {
    id: "current",
    jobTitle: "SDE-II",
    company: "Amiti Software Technologies",
    duration: "2024-Present"
  },
  {
    id: "previous_one",
    jobTitle: "Software Engineer",
    company: "GSynergy India",
    duration: "2023-2024"
  },
  {
    id: "previous_two",
    jobTitle: "Software Developer",
    company: "Misemind Tech.",
    duration: "2020-2023"
  },
  {
    id: "previous_three",
    jobTitle: "Jr. Software Developer",
    company: "Alienskart Web",
    duration: "2019-2020"
  }
];

const TECHNOLOGIES = [
  {
    title: "css",
    img: "/skills/css-icon.svg"
  },
  {
    title: "html",
    img: "/skills/html-icon.svg"
  },
  {
    title: "js",
    img: "/skills/js-icon.svg"
  },
  {
    title: "ts",
    img: "/skills/typescript.webp"
  },
  {
    title: "nextjs",
    img: "/skills/nextjs.webp"
  },
  {
    title: "react",
    img: "/skills/react-icon.svg"
  },
  {
    title: "sass",
    img: "/skills/sass-icon.svg"
  },
  {
    title: "tailwind",
    img: "/skills/tailwind.png"
  },
  {
    title: "nodejs",
    img: "/skills/node-icon.svg"
  },
  {
    title: "redux",
    img: "/skills/redux.png"
  },
  {
    title: "py",
    img: "/skills/python.svg"
  },
  {
    title: "fastapi",
    img: "/skills/fastapi.svg"
  },
  {
    title: "graphQL",
    img: "/skills/graphQL.png"
  },
  {
    title: "npm",
    img: "/skills/npm.png"
  },
  {
    title: "jest",
    img: "/skills/jest.svg",
    price: "$12.20"
  },
  {
    title: "jira",
    img: "/skills/jira.png",
    price: "$12.20"
  },
  {
    title: "mongodb",
    img: "/skills/mongodb.svg"
  },
  {
    title: "mysql",
    img: "/skills/mysql-icon.svg"
  },
  {
    title: "vscode",
    img: "/skills/vscode.png"
  }
];

const PROJECT = [
  {
    key: "projectMovieBox",
    title: "The Moive Box",
    coverPath: "/project/theMovieBox.png",
    stack: ["ReactJs", "CSS", "Material UI", "Axios", "Firebase", "TMDB API"],
    description:
      "The Movie Box is a web application that allows users to search for movies, view details, and create a watchlist. It uses the TMDB API for movie data and Firebase for user authentication and storage.",
    link: "https://the-movie-box.vercel.app/"
  },
  {
    key: "projectHemolink",
    title: "Hemolink",
    coverPath: "/project/hemolink.png",
    stack: ["ReactJs", "NodeJs", "ExpressJs", "MongoDB"],
    description:
      "Hemolink is a web application that allows users to search for movies, view details, and create a watchlist. It uses the TMDB API for movie data and Firebase for user authentication and storage.",
    link: "https://hemolink.vercel.app/"
  },
  {
    key: "projectInventoryManagement",
    title: "Inventory Management",
    coverPath: "/project/mi-stock.png",
    stack: ["NextJs", "TailwindCSS", "Redux", "NodeJs", "PostgreSQL", "AWS"],
    description:
      "Inventory Management is a web application that allows users to manage their inventory, track stock levels, and generate reports. It uses React for the frontend and Node.js for the backend.",
    link: "https://mi-stock.vercel.app/"
  },
  {
    key: "projectProjectManagement",
    title: "Project Management",
    coverPath: "/project/project_management.png",
    stack: ["NextJs", "TailwindCSS", "ChartJs", "Redux", "AWS"],
    description:
      "Project Management is a web application that allows users to manage their projects, track tasks, and generate reports. It uses React for the frontend and Node.js for the backend.",
    link: "https://project-management-mahvish.vercel.app/"
  },
  {
    key: "projectChimpleLearning",
    title: "Chimple Learning",
    coverPath: "/project/chimple_learning.png",
    stack: ["ReactJs", "Ionic", "Capacitor", "xAPI", "Firebase"],
    description:
      "Chimple Learning is a web application that allows users to learn new skills, track progress, and generate reports. It uses React for the frontend and Node.js for the backend.",
    link: "https://chimple-learning.vercel.app/"
  }
];

export {
  MY_OVERVIEW,
  MY_NAME,
  MY_TITLE,
  CONTACT_INFORMATION,
  YEARS_OF_EXPERIENCE,
  YEARS_OF_EXPERIENCE_TITLE,
  CV,
  CV_TITLE,
  CV_PATH,
  TECHNOLOGIES,
  PROJECT
};
