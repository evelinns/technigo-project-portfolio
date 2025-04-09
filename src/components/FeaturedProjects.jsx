import { FeaturedProjectsCard } from "./FeaturedProjectsCard";
import projectsData from "../data.json"

export const FeaturedProjects = () => {
  const projectsInfo = projectsData.projects;
  console.log(projectsInfo)

  return <div>
    <h2>Featured Projects</h2>
    <div className="project-wrapper">
    {projectsInfo.map((project) => (
      <FeaturedProjectsCard img={project.image} title={project.name} netlify={project.netlify} github={project.github} />
    ))}
    </div>
  </div>
}