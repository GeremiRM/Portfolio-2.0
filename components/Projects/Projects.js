import { useState } from "react";
import { useInView } from "react-intersection-observer";

import { Box, useDisclosure, SlideFade } from "@chakra-ui/react";
import { Container } from "../Container";
import { Subtitle } from "../Subtitle";
import { Carousel } from "./Carousel/Carousel";
import { Slide } from "./Carousel/Slide";
import { Typewriter } from "../Typewriter";
import { ProjectModal } from "./ProjectModal/ProjectModal";

import { useGithubData } from "../hooks/useGithubData";

const Projects = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentModal, setCurrentModal] = useState(0);

  const { ref, inView } = useInView({ threshold: 0.1 });

  const { projects, projectsLangs } = useGithubData();

  const handleSlideClick = (slideIdx) => {
    setCurrentModal(slideIdx);
    onOpen();
  };

  const renderProjects = () => {
    return projects.map((project, idx) => (
      <Slide
        title={project.name}
        desc={project.description}
        languages={projectsLangs[idx]}
        stars={project.stargazers_count}
        key={idx}
        id={idx}
        updateTime={project.pushed_at}
        handleClick={handleSlideClick}
        repoUrl={project.html_url}
      />
    ));
  };

  return (
    <>
      <Box ref={ref} py="7.5rem">
        <Container>
          <SlideFade in={inView} offsetX="50vw">
            <Box mb="2rem">
              <Subtitle>
                <Typewriter words={["Projects"]} loop={1} />
              </Subtitle>
            </Box>

            <Carousel gap={32}>{renderProjects()}</Carousel>
          </SlideFade>
        </Container>
      </Box>
      <ProjectModal
        id={currentModal}
        isOpen={isOpen}
        onClose={onClose}
        project={projects[currentModal]}
      />
    </>
  );
};

export default Projects;
