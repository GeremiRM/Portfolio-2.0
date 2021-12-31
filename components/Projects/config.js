import {
  SiTypescript,
  SiChakraui,
  SiNextdotjs,
  SiSass,
  SiJavascript,
} from "react-icons/si";

const GITHUB_URL = "https://api.github.com/repos";
const USER = "geremirm";
const PROJECTS = [
  "Spotify-Web-App",
  "Portfolio-2.0",
  "Nextjs-Contentful-Template",
  "Designo-Web-site",
  "Countries-Api",
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
  javascript: <SiJavascript />,
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
    url: "https://countries-api-five.vercel.app/",
    videos: ["video.mp4"],
    stack: ["typescript", "nextjs", "chakraui"],
  },

  "Designo-Web-site": {
    title: "Designo-Web-site",
    desc: `
    A seven page static, completely responsive website made with 
    NextJS and ChakraUI.  
    `,
    images: [
      `${IMAGES_DIR}/Designo-Web-site/1.png`,
      `${IMAGES_DIR}/Designo-Web-site/2.png`,
      `${IMAGES_DIR}/Designo-Web-site/3.png`,
      `${IMAGES_DIR}/Designo-Web-site/4.png`,
      `${IMAGES_DIR}/Designo-Web-site/5.png`,
      `${IMAGES_DIR}/Designo-Web-site/6.png`,
      `${IMAGES_DIR}/Designo-Web-site/7.png`,
    ],
    url: "https://designo-web-site-seven.vercel.app/",
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
    url: "https://shortener-com-theta.vercel.app/",
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
    desc: `
    A Spotify application made with Next.js and sass. Based on the
    design of the Spotify's browser app, it allows the user to: Search,
    save and play a track, album, artist or playlist. It also has an
    integrated player and a lyrics feature.
    `,
    stack: ["typescript", "nextjs", "sass"],
    video: "https://www.youtube.com/embed/v5_NLfxUZ10",
    url: "https://spotify-q56hq53dk-ramosmg.vercel.app/login",
    images: [
      `${IMAGES_DIR}/Spotify-Web-App/1.png`,
      `${IMAGES_DIR}/Spotify-Web-App/2.png`,
      `${IMAGES_DIR}/Spotify-Web-App/3.png`,
      `${IMAGES_DIR}/Spotify-Web-App/4.png`,
      `${IMAGES_DIR}/Spotify-Web-App/5.png`,
      `${IMAGES_DIR}/Spotify-Web-App/6.png`,
      `${IMAGES_DIR}/Spotify-Web-App/7.png`,
      `${IMAGES_DIR}/Spotify-Web-App/8.png`,
      `${IMAGES_DIR}/Spotify-Web-App/9.png`,
      `${IMAGES_DIR}/Spotify-Web-App/10.png`,
      `${IMAGES_DIR}/Spotify-Web-App/11.png`,
      `${IMAGES_DIR}/Spotify-Web-App/12.png`,
    ],
  },

  "Portfolio-2.0": {
    title: "Portfolio-2.0",
    desc: `
    This very website you're currently are on. Based on a design by Hamish
    Williams, it was made with Next.js and ChakraUI, utilizing EmailJS for
    the contact form, framer motion and Chakra for the animations, Typewriter
    for the titles and subtitles, and finally three.js for the 3D model on the
    Hero section. 
    `,
    stack: ["nextjs", "chakraui", "sass", "javascript"],
    url: "https://portfolio-2-0-black.vercel.app/",
    images: [`${IMAGES_DIR}/Portfolio-2.0/1.png`],
  },

  "Nextjs-Contentful-Template": {
    title: "Nextjs-Contentful-Template",
    desc: `
    A blog/news website that makes use of Next.js functionalities like
    Static Generation (getStaticProps and getStaticPaths) and Incremental 
    Static Regeneration (ISR) with data fetched from the Contentful Api. 
    The specifications of the content models and fields in Contentful
    can be found in the Github page. 
    `,
    stack: ["nextjs", "chakraui", "sass", "typescript"],
    url: "https://mundana-blog-template.vercel.app/",
    images: [
      `${IMAGES_DIR}/Nextjs-Contentful-Template/1.png`,
      `${IMAGES_DIR}/Nextjs-Contentful-Template/2.png`,
      `${IMAGES_DIR}/Nextjs-Contentful-Template/3.png`,
      `${IMAGES_DIR}/Nextjs-Contentful-Template/4.png`,
      `${IMAGES_DIR}/Nextjs-Contentful-Template/5.png`,
    ],
  },
};
