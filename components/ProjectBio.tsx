import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectBioProps {
  project: {
    title: string;
    thumbnail: string;
    tech: string;
    repo: string;
    demo: string;
  };
}

function ProjectBio({ project }: ProjectBioProps) {
  return (
    <div className="flex flex-col gap-4 rounded bg-primary-100 px-6 py-4 text-sm text-white shadow-xl">
      <h3>{project.title}</h3>
      <Image
        src={project.thumbnail}
        alt={project.thumbnail}
        width={200}
        height={200}
        className="rounded object-contain opacity-90 sm:h-full"
      />
      <h4>{project.tech}</h4>
      <div className="flex w-full flex-col justify-between">
        <div className="flex gap-2">
          <a
            href={project.repo}
            target="_blank"
            className="rounded bg-primary-200 p-2 text-white hover:bg-tertiary"
          >
            <Github width={20} />
          </a>
          <a
            href={project.demo}
            target="_blank"
            className="rounded bg-primary-200 p-2 text-white hover:bg-tertiary"
          >
            <ExternalLink width={20} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectBio;
