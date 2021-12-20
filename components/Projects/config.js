import { SiTypescript, SiChakraui, SiNextdotjs, SiSass } from "react-icons/si";

const GITHUB_URL = "https://api.github.com/repos";
const USER = "geremirm";
const PROJECTS = [
  "Spotify-Web-App",
  "Designo-Web-site",
  "Countries-Api",
  "Shortener.com",
  "Shortener.com",
];

// ex: https://api.github.com/repos/ex_user/ex_repo_name
export const PROJECTS_URLS = PROJECTS.map(
  (project) => `${GITHUB_URL}/${USER}/${project}`
);

export const techIcons = {
  typescript: <SiTypescript />,
  chakraui: <SiChakraui />,
  nextjs: <SiNextdotjs />,
  sass: <SiSass />,
};

const IMAGES_DIR = "/images/projects";

export const PROJECTS_DATA = {
  "Countries-Api": {
    title: "Countries-Api",
    desc: `An app that uses the Countries REST API to get and display all the 
      countries data in cards, including their official name, flag, population, etc. 
      Made with Next.js, it utilizes Next routing capabilities to dynamically
      create a separate page for each country with more information than the one available
      in the cards. It also includes a filter, search bar and light/dark mode toggle.`,
    images: [
      `${IMAGES_DIR}/Countries-Api/1.png`,
      `${IMAGES_DIR}/Countries-Api/2.png`,
      `${IMAGES_DIR}/Countries-Api/3.png`,
      `${IMAGES_DIR}/Countries-Api/4.png`,
    ],
    videos: ["video.mp4"],
    stack: ["typescript", "nextjs", "chakraui"],
  },
  "Designo-Web-site": {
    title: "Designo-Web-site",
    desc: `A seven page website made with NextJS and ChakraUI`,
    images: [
      `${IMAGES_DIR}/Designo-Web-site/1.png`,
      `${IMAGES_DIR}/Designo-Web-site/2.png`,
      `${IMAGES_DIR}/Designo-Web-site/3.png`,
      `${IMAGES_DIR}/Designo-Web-site/4.png`,
    ],
    videos: ["video.mp4"],
    stack: ["typescript", "nextjs", "chakraui"],
  },
  "Shortener.com": {
    title: "Shortener",
    desc: `A landing page for Shortify, a link shortener website.
      Made with Next.js and ChakraUI, it makes use of
      the Shortener API to shorten any valid link given to the input, 
      saving the last 10 shortened links in the user's local storage. 
    `,
    images: [
      `${IMAGES_DIR}/Shortener/1.png`,
      `${IMAGES_DIR}/Shortener/2.png`,
      `${IMAGES_DIR}/Shortener/3.png`,
      `${IMAGES_DIR}/Shortener/4.png`,
      `${IMAGES_DIR}/Shortener/5.png`,
      `${IMAGES_DIR}/Shortener/6.png`,
    ],
    videos: ["video.mp4"],
    stack: ["typescript", "nextjs", "chakraui"],
  },
  "Spotify-Web-App": {
    title: "Spotify-Web-App",
    stack: ["typescript", "nextjs", "chakraui", "sass"],
    images: [
      `${IMAGES_DIR}/Spotify-Web-App/1.png`,
      `${IMAGES_DIR}/Spotify-Web-App/2.png`,
      `${IMAGES_DIR}/Spotify-Web-App/3.png`,
      `${IMAGES_DIR}/Spotify-Web-App/4.png`,
    ],
  },
};
