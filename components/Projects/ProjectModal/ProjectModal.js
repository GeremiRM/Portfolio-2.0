import {
  Box,
  Flex,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalCloseButton,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ProjectImages } from "./ProjectImages";

import { PROJECTS_DATA, techIcons } from "../config";

export const ProjectModal = ({ id, isOpen, onClose, project }) => {
  const [data, setData] = useState(null);
  const [images, setImages] = useState(null);

  useEffect(() => {
    if (project) {
      setData(PROJECTS_DATA[project.name]);
      setImages(PROJECTS_DATA[project.name].images);
    }
  }, [project]);

  if (!data || !images) return <></>;

  const renderTechIcons = () => {
    return data.stack.map((tech, idx) => (
      <Tooltip key={idx} label={tech.toUpperCase()}>
        <Text mx="0.5rem">{techIcons[tech]}</Text>
      </Tooltip>
    ));
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
        size="full"
      >
        <ModalOverlay />
        <ModalContent
          bg="rgba(50,50,50,0.25)"
          backdropFilter="blur(10px)"
          color="white"
          py="2rem"
          maxW={{ md: "80vw", lg: "70rem" }}
        >
          <ModalHeader
            fontSize="clamp(2.25rem, 3vw, 3.5rem)"
            textTransform="uppercase"
            textAlign="center"
            fontFamily="Montserrat"
            fontWeight="800"
          >
            {data.title}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ProjectImages project={data.title} slides={images} />
            <Box
              mt="2rem"
              w={{ base: "100%", md: "80%" }}
              textAlign="center"
              mx="auto"
              maxW="1200px"
            >
              <Text lineHeight="1.75rem">{data.desc}</Text>
            </Box>
          </ModalBody>

          <ModalFooter display="block">
            <Box
              textAlign="center"
              mb="1.25rem"
              textTransform="uppercase"
              fontWeight="700"
            >
              <Text>Tech Stack: </Text>
            </Box>
            <Flex justify="center" fontSize="1.75rem" w="100%">
              {renderTechIcons()}
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
