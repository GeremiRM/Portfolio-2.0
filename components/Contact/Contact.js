import { Box, Flex, Text, Grid, Heading } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
// import { useEffect } from "react";
// import { useInView } from "react-intersection-observer";
import { ContactForm } from "./ContactForm";
import Container from "../Container";

export const Contact = ({}) => {
  const MotionFlex = motion(Flex);

  // const { ref, inView } = useInView({
  //   threshold: 0.25,
  //   triggerOnce: true,
  // });

  const controls = useAnimation();

  const card = {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.75,
        delay: 0.5,
        ease: [0.075, 0.82, 0.165, 1],
      },
      scale: 1,
      backgroundColor: ["rgba(0,18,32, 0.95)", "rgba(0,18,32, 0.95)"],
    },
    hidden: { backgroundColor: "#eee" },
  };

  // useEffect(() => {
  //   if (inView) controls.start("visible");
  // }, [controls, inView]);

  return (
    <Box pt="5rem">
      <Container>
        <MotionFlex
          direction="column"
          color="#eee"
          initial="hidden"
          // animate={controls}
          // variants={card}
        >
          <Heading fontFamily="Montserrat" fontSize="2.5rem" mb="2rem">
            Contact
          </Heading>
          <ContactForm />
        </MotionFlex>
      </Container>
    </Box>
  );
};
