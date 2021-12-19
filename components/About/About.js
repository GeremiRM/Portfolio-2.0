import { Box, Text, Flex } from "@chakra-ui/react";
import Container from "../Container";

import Typewriter from "../Typewriter";
import Subtitle from "../Subtitle";

const About = () => {
  return (
    <Container>
      <Flex
        id="about"
        pb="3rem"
        fontSize="1.25rem"
        direction={{ base: "column", lg: "row" }}
        color="rgba(255, 255, 255, 0.75)"
      >
        <Box mb="2rem">
          <Subtitle mb="2rem">
            <Typewriter loop={1} speed={50} words={["Hi there"]} cursor="|">
              Hi there
            </Typewriter>
          </Subtitle>

          <Box lineHeight="160%">
            <Text mb="2rem">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda, dicta alias. Quibusdam porro explicabo harum autem,
              possimus aliquam, nihil perferendis at voluptate asperiores
              necessitatibus quam, quos voluptas blanditiis. Soluta, in.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              in ipsum sapiente delectus autem fugiat ad eveniet perspiciatis
              accusamus laudantium eligendi aliquid obcaecati vitae quas nulla
              est magni ut reiciendis?
            </Text>
          </Box>
        </Box>

        {/* Image */}
        <Box h="600px" w="100%" bg="rgba(150, 150, 150, 0.25)"></Box>
      </Flex>
    </Container>
  );
};

export default About;
