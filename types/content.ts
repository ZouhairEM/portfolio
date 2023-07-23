export interface Content {
  aboutMe: string;
  projects: Project[];
  skills: string[][];
}

export interface Project {
  title: string;
  thumbnail: string;
  tech: string[];
  repo: string;
  demo: string | null;
  details: {
    cover: string;
    description: string;
    features: string[];
  };
}
