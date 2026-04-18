export type ProjectType = {
  title: string;
  description: string;
  projectLink: string;
  githubLink: string;
  tagsName: string[];
  imageUrl: string;
  status: STATUS;
};

export enum STATUS {
  LIVE = "Live",
  BUILDING = "building",
}
