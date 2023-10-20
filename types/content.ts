export interface Content {
  about: {
    about: string;
    layout: string;
    slug: string;
  }[];
  projects: Project[];
  skills: Skill[];
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

export interface Skill{
  layout?: string;
  skill: string;
  slug?: string;
  thumbnail: string;
}
