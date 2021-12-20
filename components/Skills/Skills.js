import { Box, Text, HStack, Divider, Tooltip } from "@chakra-ui/react";

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

import Subtitle from "../Subtitle";

import Container from "../Container";

export const Skills = () => {
  return (
    <Container>
      <Box color="white" textAlign="center" maxW="fit-content" mx="auto">
        <Subtitle>Skills</Subtitle>
        <Box bg="rgba(50,50,50,0.75)" h="5px" rounded={5}></Box>
        <HStack
          justify="center"
          fontSize="clamp(3rem, 5vw, 5rem)"
          spacing="1.5rem"
          flexWrap="wrap"
        >
          <Tooltip textTransform="uppercase" label="html">
            <Box pt="1rem">
              <SiHtml5 />
            </Box>
          </Tooltip>
          <Tooltip textTransform="uppercase" label="css">
            <Box pt="1rem">
              <SiCss3 />
            </Box>
          </Tooltip>
          <Tooltip textTransform="uppercase" label="javascript">
            <Box pt="1rem">
              <SiJavascript />
            </Box>
          </Tooltip>
          <Tooltip textTransform="uppercase" label="sass">
            <Box pt="1rem">
              <SiSass />
            </Box>
          </Tooltip>
          <Tooltip textTransform="uppercase" label="react">
            <Box pt="1rem">
              <SiReact />
            </Box>
          </Tooltip>
          <Tooltip textTransform="uppercase" label="nextjs">
            <Box pt="1rem">
              <SiNextdotjs />
            </Box>
          </Tooltip>
          <Tooltip textTransform="uppercase" label="chakraui">
            <Box pt="1rem">
              <SiChakraui />
            </Box>
          </Tooltip>
          <Tooltip textTransform="uppercase" label="typescript">
            <Box pt="1rem">
              <SiTypescript />
            </Box>
          </Tooltip>
        </HStack>
      </Box>
    </Container>
  );
};
