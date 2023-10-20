export interface Content {
  aboutMe: string[];
  projects: Project[];
  skills: string[][];
}

export interface Project {
  layout: string;
  title: string;
  thumbnail: string;
  cover: string;
  description: string;
  tech: {
    name: string;
  }[];
  features: {
    name: string;
    thumbnail?: string;
  }[];
  repo: string;
  demo?: string | null;
  slug: string;
}
