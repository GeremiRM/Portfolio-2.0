import { useState } from "react";
import { Box, useDisclosure } from "@chakra-ui/react";
import Container from "../Container";
import Subtitle from "../Subtitle";
import { Slide } from "./Carousel/Slide";
import { ProjectModal } from "./ProjectModal/ProjectModal";
import { useGithubData } from "../hooks/useGithubData";
import { Carousel } from "./Carousel/Carousel";
// import { test as Test } from "./ProjectModal/test";

const Projects = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentModal, setCurrentModal] = useState(0);

  const { projects, projectsLangs } = useGithubData();

  const handleSlideClick = (slideIdx) => {
    setCurrentModal(slideIdx);
    onOpen();
  };

  const renderProjects = () => {
    return projects.map((project, idx) => (
      <Project
        title={project.name}
        desc={project.description}
        languages={projectsLangs[idx]}
        stars={project.stargazers_count}
        key={idx}
        id={idx}
        updateTime={project.pushed_at}
        handleClick={handleSlideClick}
      />
    ));
  };

  return (
    <Box>
      <Container>
        <Subtitle>Projects</Subtitle>
        <Carousel gap={32}>{renderProjects()}</Carousel>
      </Container>
      <ProjectModal
        id={currentModal}
        isOpen={isOpen}
        onClose={onClose}
        project={projects[currentModal]}
      />
    </Box>
  );
};

export default Projects;
