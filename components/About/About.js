import Link from "next/link";

import { Box, Text, SlideFade, Grid } from "@chakra-ui/react";
import { Container } from "../Container";

import { Typewriter } from "../Typewriter";
import { Subtitle } from "../Subtitle";
import { Skills } from "../Skills/Skills";

import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.25,
  });

  return (
    <Box ref={ref} pt="20vh" pb={{ base: "4rem", lg: "7.5rem" }}>
      <Container>
        <Grid
          id="about"
          pb="3rem"
          fontSize="1.25rem"
          // direction={{ base: "column", lg: "row" }}
          color="rgba(255, 255, 255, 0.75)"
          templateColumns={{ base: "100%", lg: "0.8fr 1.2fr" }}
          gap={{ base: "3rem" }}
        >
          <Box mb="2rem" flexBasis={{ lg: "600px" }} flex="1" mr="2rem">
            <Subtitle mb="2rem">
              <Typewriter loop={1} speed={100} words={["About Me"]} />
            </Subtitle>

            <SlideFade in={inView}>
              <Box lineHeight="180%">
                <Text mb="2rem">
                  I am a motivated <b>front-end developer</b> specialized in
                  various technologies such as Javascript, Typescript, React,
                  Next.js, ChakraUI and SASS. Well-organised, problem solver,
                  independent and creative with high attention to detail and a
                  host of projects that demonstrate just that.{" "}
                  <Text color="#e7537b">
                    <Link href="#contact">
                      Hit me up and let's work on something special.
                    </Link>
                  </Text>
                </Text>
              </Box>
            </SlideFade>
          </Box>

          {/* Image */}
          <Skills />
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
