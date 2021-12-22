import { Box, Flex, Text, Grid, Heading } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ContactForm } from "./ContactForm";
import Container from "../Container";
import Subtitle from "../Subtitle";
import Typewriter from "../Typewriter";

export const Contact = ({}) => {
  const MotionFlex = motion(Flex);

  const { ref, inView } = useInView({
    threshold: 0.25,
  });

  const controls = useAnimation();

  const card = {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.75,
        delay: 0.25,
        ease: [0.075, 0.82, 0.165, 1],
      },
      top: "0",
      scale: 1,
    },
    hidden: { opacity: 0, scale: 0 },
  };

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <Box pt="5rem" ref={ref}>
      <Container>
        <MotionFlex
          position="relative"
          direction={{ base: "column", xl: "row" }}
          align="center"
          color="#eee"
          initial="hidden"
          animate={controls}
          variants={card}
        >
          <Subtitle mb="2rem">
            <Text
              fontSize={{ xl: "clamp(5.5rem, 7vw, 8rem)" }}
              mr={{ xl: "6rem" }}
            >
              <Typewriter words={["Contact"]} />
            </Text>
          </Subtitle>
          <Box w="100%" flex={{ xl: "1" }}>
            <ContactForm />
          </Box>
        </MotionFlex>
      </Container>
    </Box>
  );
};
