import { ProjectType, STATUS } from "@/types/project";

const projects: ProjectType[] = [
  {
    title: "NexusFlow",
    description:
      "Organize boards, streamline tasks, assign members, and track progress",
    imageUrl: "/projects/Nexusflow.png",
    status: STATUS.LIVE,
    projectLink: "https://nexusflow-gilt.vercel.app/",
    githubLink: "https://github.com/waqas60/nexusflow",
    tagsName: ["Node", "Express", "React", "MongoDb"],
  },
  {
    title: "PostShot",
    description:
      "Turn tweets into beautiful, shareable images for LinkedIn, Instagram, and beyond",
    imageUrl: "/projects/coming_soon.png",
    status: STATUS.BUILDING,
    projectLink: "",
    githubLink: "",
    tagsName: ["coming soon"],
  },
];

export default projects;
