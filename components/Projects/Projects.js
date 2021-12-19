import { useState } from "react";
import { Box, useDisclosure } from "@chakra-ui/react";
import Container from "../Container";
import Subtitle from "../Subtitle";
import { Mobile } from "./Mobile/Mobile";
import { Desktop } from "./Desktop/Desktop";
import { useGithubData } from "../hooks/useGithubData";
import { ProjectModal } from "./ProjectModal";

const Projects = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentModal, setCurrentModal] = useState(0);

  const { projects, projectsLangs } = useGithubData();

  const handleSlideClick = (slideIdx) => {
    setCurrentModal(slideIdx);
    onOpen();
  };

  return (
    <Box>
      <Container>
        <Subtitle>Projects</Subtitle>
        <Box display={{ base: "none", lg: "block" }}>
          <Desktop
            projects={projects}
            projectsLangs={projectsLangs}
            handleClick={handleSlideClick}
          />
        </Box>

        <Box display={{ base: "block", lg: "none" }} mt="2rem">
          <Mobile handleClick={handleSlideClick} projects={projects} />
        </Box>
      </Container>

      <ProjectModal id={currentModal} isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Projects;
