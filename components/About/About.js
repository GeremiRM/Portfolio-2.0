import { Box, Text, Flex, SlideFade } from "@chakra-ui/react";
import { Container } from "../Container";

import { Typewriter } from "../Typewriter";
import { Subtitle } from "../Subtitle";

import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.25,
  });

  return (
    <Box ref={ref} pt="20vh" pb="7.5rem">
      <Container>
        <Flex
          id="about"
          pb="3rem"
          fontSize="1.25rem"
          direction={{ base: "column", lg: "row" }}
          color="rgba(255, 255, 255, 0.75)"
        >
          <Box mb="2rem" flexBasis={{ lg: "600px" }} flex="1" mr="2rem">
            <Subtitle mb="2rem">
              <Typewriter loop={1} speed={100} words={["Hi there"]} />
            </Subtitle>

            <SlideFade in={inView}>
              <Box lineHeight="160%">
                <Text mb="2rem">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Assumenda, dicta alias. Quibusdam porro explicabo harum autem,
                  possimus aliquam, nihil perferendis at voluptate asperiores
                  necessitatibus quam, quos voluptas blanditiis. Soluta, in.
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia, in ipsum sapiente delectus autem fugiat ad eveniet
                  perspiciatis accusamus laudantium eligendi aliquid obcaecati
                  vitae quas nulla est magni ut reiciendis?
                </Text>
              </Box>
            </SlideFade>
          </Box>

          {/* Image */}
          <Box
            h="600px"
            bg="rgba(150, 150, 150, 0.25)"
            w="100%"
            mt="2rem"
            maxW={{ lg: "350px" }}
          ></Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default About;
