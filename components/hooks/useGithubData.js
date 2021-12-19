import { useEffect, useState } from "react";
import { PROJECTS_URLS } from "../Projects/config";

export const useGithubData = () => {
  const [projects, setProjects] = useState([]);
  const [projectsLangs, setProjectsLangs] = useState([]);

  // [{js: 1000, tp: 1000}, {scss: 1}] -> [[1000, 1000], [1]]

  useEffect(() => {
    const getProjectsData = async () => {
      const projectsData = await Promise.all(
        PROJECTS_URLS.map(async (url) => (await fetch(url)).json())
      );

      const projectsLangsData = await Promise.all(
        PROJECTS_URLS.map(async (url) =>
          (await fetch(url + "/languages")).json()
        )
      );

      setProjects(projectsData);
      setProjectsLangs(projectsLangsData);
    };

    getProjectsData();
  }, []);

  return { projects, projectsLangs };
};
