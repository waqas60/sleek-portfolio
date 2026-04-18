"use client";
import projects from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { motion } from "motion/react";

export default function Projects({ limit }: { limit?: number }) {
  return (
    <motion.div
      className="my-4 grid grid-cols-1 gap-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
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
    </motion.div>
  );
}
