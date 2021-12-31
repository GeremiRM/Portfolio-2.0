import { Box } from "@chakra-ui/react";

import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Socials from "../components/Socials/Socials";
import About from "../components/About/About";
import { Contact } from "../components/Contact/Contact";
import { Skills } from "../components/Skills/Skills";

import Projects from "../components/Projects/Projects";

export default function Home() {
  return (
    <Box
      bg="linear-gradient(353deg, rgba(231,83,123,0.15) 0%, rgba(25,25,25,1) 0%);"
      pb="4rem"
      color="white"
    >
      <Header />
      <Box id="home">
        <Hero />
      </Box>

      <Box id="about">
        <About />
      </Box>
      {/* 
      <Box>
        <Skills />
      </Box> */}
      <Box id="projects">
        <Projects />
      </Box>
      <Box id="contact">
        <Contact />
      </Box>

      <Box display={{ base: "none", md: "block" }}>
        <Socials />
      </Box>
    </Box>
  );
}
