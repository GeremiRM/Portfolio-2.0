const GITHUB_URL = "https://api.github.com/repos";
const USER = "geremirm";
const PROJECTS = [
  "Spotify-Web-App",
  "Designo-Web-site",
  "Countries-Api",
  "Shortener.com",
  "Shortener.com",
];

// ex: https://api.github.com/repos/ex_user/ex_repo_name
export const PROJECTS_URLS = PROJECTS.map(
  (project) => `${GITHUB_URL}/${USER}/${project}`
);
