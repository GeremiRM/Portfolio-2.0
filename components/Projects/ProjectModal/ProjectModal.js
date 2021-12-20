import {
  Box,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  Button,
  ModalFooter,
  ModalHeader,
  ModalCloseButton,
  Flex,
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
    return data.stack.map((tech) => (
      <Tooltip label={tech.toUpperCase()}>
        <Text mx="0.5rem">{techIcons[tech]}</Text>
      </Tooltip>
    ));
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          bg="rgba(25,25,25,0.75)"
          backdropFilter="blur(20px)"
          color="white"
        >
          <ModalHeader
            fontSize="1.75rem"
            textTransform="uppercase"
            textAlign="center"
          >
            {data.title}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ProjectImages project={data.title} slides={images} />
            <Box mt="2rem">
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
