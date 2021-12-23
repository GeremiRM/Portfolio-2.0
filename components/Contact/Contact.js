import { Box, Flex, Text, SlideFade } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import { Container } from "../Container";
import { Subtitle } from "../Subtitle";
import { Typewriter } from "../Typewriter";
import { ContactForm } from "./ContactForm";

export const Contact = ({}) => {
  const { ref, inView } = useInView({
    threshold: 0.25,
  });

  return (
    <Box ref={ref} pt="5rem">
      <Container>
        <Flex
          align="center"
          color="#eee"
          direction={{ base: "column", xl: "row" }}
        >
          <Subtitle mb="2rem">
            <Text
              fontSize={{ xl: "clamp(5.5rem, 7vw, 8rem)" }}
              mr={{ xl: "6rem" }}
            >
              <Typewriter words={["Contact"]} loop={1} />
            </Text>
          </Subtitle>
          <Box w="100%" flex={{ xl: "1" }}>
            <SlideFade in={inView}>
              <ContactForm />
            </SlideFade>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
