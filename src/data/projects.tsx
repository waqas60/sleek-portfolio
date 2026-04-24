import { ProjectType, STATUS } from "@/types/project";

const projects: ProjectType[] = [
  {
    title: "NexusFlow",
    description:
      "Organize boards, streamline tasks, assign members, and track progress",
    imageUrl: "/Nexusflow.png",
    status: STATUS.LIVE,
    projectLink: "https://nexusflow-gilt.vercel.app/",
    githubLink: "https://github.com/waqas60/nexusflow",
    tagsName: ["Node", "Express", "React", "MongoDb"],
  },
  {
    title: "PostShot",
    description:
      "Turn tweets into beautiful, shareable images for LinkedIn, Instagram, and beyond",
    imageUrl: "/PostShot.png",
    status: STATUS.LIVE,
    projectLink: "https://postshot-app.vercel.app/",
    githubLink: "https://github.com/waqas60/PostShot",
    tagsName: ["TypeScript", "Next", "React", "Radix Ui"],
  },
];

export default projects;
