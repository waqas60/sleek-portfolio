import projects from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects({ limit }: { limit?: number }) {
  return (
    <div className="my-4 grid grid-cols-1 gap-4">
      <h1 className="text-md font-semibold">Projects</h1>

      {(limit ? projects.slice(0, limit) : projects).map((project, index) => {
        return (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            projectLink={project.projectLink}
            githubLink={project.githubLink}
            tagsName={project.tagsName}
            imageUrl={project.imageUrl}
          />
        );
      })}
    </div>
  );
}
