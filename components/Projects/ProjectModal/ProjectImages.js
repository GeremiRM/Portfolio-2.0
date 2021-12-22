import { useState } from "react";
import { Text, Box, Flex, Image, HStack } from "@chakra-ui/react";

export const ProjectImages = ({ project, slides }) => {
  const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    mt: "-22px",
    p: "16px",
    color: "#e7537b",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    _hover: {
      opacity: 0.8,
      bg: "#e7537b",
      color: "white",
    },
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };
  const setSlide = (slide) => {
    setCurrentSlide(slide);
  };
  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  if (!slides) return <></>;

  return (
    <Flex
      w="full"
      alignItems="center"
      justifyContent="center"
      mx="auto"
      bg="rgba(50,50,50,0.25)"
      backdropFilter="blur(10px)"
      rounded={5}
    >
      <Flex w="full" pos="relative" overflow="hidden">
        <Flex
          maxH={{ base: "40vh", md: "50vh" }}
          w="full"
          {...carouselStyle}
          align="center"
        >
          {slides.map((slide, sid) => (
            <Image
              src={slide}
              key={`slide-${sid}`}
              objectFit="contain"
              boxSize="full"
              shadow="md"
              flex="none"
            />
          ))}
        </Flex>
        <Text {...arrowStyles} left="0" onClick={prevSlide}>
          &#10094;
        </Text>
        <Text {...arrowStyles} right="0" onClick={nextSlide}>
          &#10095;
        </Text>
        <HStack justify="center" pos="absolute" bottom="8px" w="full">
          {slides.map((_, slide) => (
            <Box
              key={`dots-${slide}`}
              cursor="pointer"
              boxSize={["7px", , "15px"]}
              m="0 2px"
              bg={currentSlide === slide ? "#e7537b" : "#e7537b90"}
              rounded="50%"
              display="inline-block"
              transition="background-color 0.6s ease"
              _hover={{ bg: "#e7537b" }}
              onClick={() => setSlide(slide)}
            ></Box>
          ))}
        </HStack>
      </Flex>
    </Flex>
  );
};
