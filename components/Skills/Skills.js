import { Box, HStack, Tooltip } from "@chakra-ui/react";

import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiChakraui,
  SiTypescript,
  SiJavascript,
  SiSass,
} from "react-icons/si";

import { Typewriter } from "../Typewriter";

import { Subtitle } from "../Subtitle";

import { Container } from "../Container";

export const Skills = () => {
  return (
    <Container>
      <Box
        color="white"
        textAlign="center"
        // maxW="fit-content"
        mx="auto"
        pt={{ lg: "15rem" }}
      >
        <Subtitle>
          <Typewriter words={["Skills"]} loop={1} />
        </Subtitle>
        <Box bg="rgba(50,50,50,0.75)" h="5px" rounded={5}></Box>
        <HStack
          justify="center"
          fontSize="clamp(3rem, 5vw, 5rem)"
          spacing="2rem"
          flexWrap="wrap"
        >
          <Tooltip textTransform="uppercase" label="html">
            <Box
              pt={{ base: "1rem", lg: "2rem" }}
              transition="0.25s all ease"
              _hover={{ color: "#e7537b" }}
            >
              <SiHtml5 />
            </Box>
          </Tooltip>
          <Tooltip textTransform="uppercase" label="css">
            <Box
              pt={{ base: "1rem", lg: "2rem" }}
              transition="0.25s all ease"
              _hover={{ color: "#e7537b" }}
            >
              <SiCss3 />
            </Box>
          </Tooltip>
          <Tooltip textTransform="uppercase" label="javascript">
            <Box
              pt={{ base: "1rem", lg: "2rem" }}
              transition="0.25s all ease"
              _hover={{ color: "#e7537b" }}
            >
              <SiJavascript />
            </Box>
          </Tooltip>
          <Tooltip textTransform="uppercase" label="sass">
            <Box
              pt={{ base: "1rem", lg: "2rem" }}
              transition="0.25s all ease"
              _hover={{ color: "#e7537b" }}
            >
              <SiSass />
            </Box>
          </Tooltip>
          <Tooltip textTransform="uppercase" label="react">
            <Box
              pt={{ base: "1rem", lg: "2rem" }}
              transition="0.25s all ease"
              _hover={{ color: "#e7537b" }}
            >
              <SiReact />
            </Box>
          </Tooltip>
          <Tooltip textTransform="uppercase" label="nextjs">
            <Box
              pt={{ base: "1rem", lg: "2rem" }}
              transition="0.25s all ease"
              _hover={{ color: "#e7537b" }}
            >
              <SiNextdotjs />
            </Box>
          </Tooltip>
          <Tooltip textTransform="uppercase" label="chakraui">
            <Box
              pt={{ base: "1rem", lg: "2rem" }}
              transition="0.25s all ease"
              _hover={{ color: "#e7537b" }}
            >
              <SiChakraui />
            </Box>
          </Tooltip>
          <Tooltip textTransform="uppercase" label="typescript">
            <Box
              pt={{ base: "1rem", lg: "2rem" }}
              transition="0.25s all ease"
              _hover={{ color: "#e7537b" }}
            >
              <SiTypescript />
            </Box>
          </Tooltip>
        </HStack>
      </Box>
    </Container>
  );
};
