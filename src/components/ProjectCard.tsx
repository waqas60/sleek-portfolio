import { ProjectType } from "@/types/project";
import { FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard(project: ProjectType) {
  return (
    <div className="flex gap-4 rounded-xl border  border-neutral-200 p-2 transition-all duration-300 hover:border-neutral-300 dark:border-neutral-600 dark:hover:border-neutral-500">
      <Image
        src={project.imageUrl}
        width={280}
        height={160}
        alt={project.title}
        className="rounded-md pointer-events-none select-none h-40"
      />

      <div className="flex flex-col justify-center gap-3">
        <div className="flex items-center justify-between gap-1">
          <h1 className="text-sm font-semibold text-neutral-800 dark:text-neutral-50">
            <Link href={project.projectLink} target="_blank">
              {project.title}
            </Link>
          </h1>

          <div className="flex items-center gap-4">
            <Link href={project.projectLink} target="_blank">
              <GoArrowUpRight size={15} className="cursor-pointer" />
            </Link>
            <Link href={project.githubLink} target="_blank">
              <FaGithub size={15} className="cursor-pointer" />
            </Link>
          </div>
        </div>

        <div>
          <p className="text-[11px] text-neutral-500">{project.description}</p>
        </div>

        <div className="flex items-center gap-2">
          {project.tagsName.map((tag, index) => {
            return (
              <span key={index} className="rounded-full p-2 text-[10px] italic">
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
