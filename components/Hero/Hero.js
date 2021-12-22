import dynamic from "next/dynamic";

import { useEffect } from "react";

import Link from "next/link";

import { Box, Heading, Flex, Stack } from "@chakra-ui/react";

import styles from "../../styles/Home.module.scss";
import { BiCaretDown } from "react-icons/bi";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Typewriter from "../Typewriter";
import Title from "../Title";

const DisplacementSphere = dynamic(() => import("./DisplacementSphere"));

export default function Hero() {
  const MotionBox = motion(Box);
  const MotionFlex = motion(Flex);

  return (
    <Box
      position="relative"
      maxW={{ base: "500px", sm: "none", lg: "1000px", xl: "1400px" }}
      mx="auto"
    >
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
              <Title mr="1.5rem">
                <Typewriter words={["Software"]} loop={1} speed={80} />
              </Title>

              {/* Separator */}
              <Box bg="#e7537a80" flex="1" h="2.5px" maxW="400px"></Box>
            </Flex>
            <Title color="#e7537b">
              <Typewriter
                cursor={true}
                loop={false}
                words={["Developer"]}

                // speed={50}
              />
            </Title>
          </Stack>
        </Stack>
        <MotionBox
          initial={{ y: "-40px" }}
          animate={{ y: "0px" }}
          transition={{
            repeat: Infinity,
            type: "tween",
            repeatType: "reverse",
            duration: "0.5",
          }}
          position="absolute"
          bottom="2rem"
          left="calc(50% - 1rem)"
          fontSize="3rem"
          cursor="pointer"
          _hover={{ color: "#e7537b" }}
        >
          <Link href="#about" passHref>
            <a>
              <BiCaretDown />
            </a>
          </Link>
        </MotionBox>
      </MotionFlex>
    </Box>
  );
}
