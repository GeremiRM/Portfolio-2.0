import dynamic from "next/dynamic";

import { Box } from "@chakra-ui/react";

import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Socials from "../components/Socials/Socials";
import About from "../components/About/About";
import { Contact } from "../components/Contact/Contact";

const DisplacementSphere = dynamic(() =>
  import("../components/DisplacementSphere")
);

export default function Home() {
  return (
    <Box bg="rgb(25,25,25)" pb="4rem">
      <Header />
      <Box mb="20vh">
        <Hero />
      </Box>
      <Box display={{ base: "none", md: "block" }}>
        <Socials />
      </Box>
      <About />
      <Contact />
    </Box>
  );
}
