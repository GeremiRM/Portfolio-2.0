import dynamic from "next/dynamic";

import { Box, Heading, Flex, Stack } from "@chakra-ui/react";

import styles from "../../styles/Home.module.scss";
import { BiCaretDown } from "react-icons/bi";

import { motion } from "framer-motion";

import Typewriter from "../Typewriter";

const DisplacementSphere = dynamic(() => import("../DisplacementSphere"));

export default function Hero() {
  const MotionBox = motion(Box);
  const MotionFlex = motion(Flex);

  return (
    <Box position="relative">
      <MotionBox>
        {/* Background Sphere */}
        <DisplacementSphere
          className={styles.introBackground}
          theme={{
            rgbBackground: "25 25 25",
            themeId: "light",
            colorWhite: "#ffffff",
          }}
        />
      </MotionBox>
      <MotionFlex
        align="center"
        justify="center"
        minH="100vh"
        p={{ base: "0 0.5rem 0 2rem" }}
        position="relative"
      >
        <Stack w={{ base: "100%", md: "80%" }}>
          <Heading
            color="rgba(255,255,255, 0.75)"
            fontFamily="Rajdhani"
            fontSize="2.25rem"
            fontWeight="600"
            letterSpacing="3px"
            textShadow="-4px 3px 2px rgba(50,50,50, 1)"
            textTransform="uppercase"
          >
            Geremi Ramos
          </Heading>
          <Stack spacing="-1rem" pb="10vh">
            <Flex align="center">
              <Heading
                fontFamily="Montserrat"
                fontSize={{
                  base: "3.5rem",
                  md: "5rem",
                  lg: "7rem",
                  xl: "9rem",
                }}
                mr="1.5rem"
                letterSpacing="2px"
                textShadow="-4px 3px 2px rgba(50,50,50, 1)"
              >
                <Typewriter words={["Software"]} loop={1} speed={80} />
              </Heading>
              <Box bg="#e7537a80" flex="1" h="2.5px"></Box>
            </Flex>
            <Heading
              color="#e7537b"
              fontFamily="Montserrat"
              fontSize={{ base: "3.5rem", md: "5rem", lg: "7rem", xl: "9rem" }}
              letterSpacing="2px"
              textShadow="-4px 3px 2px rgba(50,50,50, 1)"
            >
              <Typewriter
                cursor={true}
                loop={false}
                words={["Developer"]}

                // speed={50}
              />
            </Heading>
          </Stack>
        </Stack>
        <MotionBox
          position="absolute"
          bottom="2rem"
          left="calc(50% - 1rem)"
          fontSize="2rem"
        >
          <BiCaretDown />
        </MotionBox>
      </MotionFlex>
    </Box>
  );
}
