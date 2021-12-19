import { Flex } from "@chakra-ui/react";

import { Project } from "./Project";

export const Desktop = ({ projects, projectsLangs, handleClick }) => {
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
        handleClick={handleClick}
      />
    ));
  };

  if (Object.keys(projects).length === 0) return <></>;

  return (
    <Flex flexWrap="wrap" justify="center">
      {renderProjects()}
    </Flex>
  );
};
