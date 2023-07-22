import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectBioProps {
  project: {
    title: string;
    thumbnail: string;
    tech: string;
    repo: string;
    demo: string | null;
  };
}

function ProjectBio({ project }: ProjectBioProps) {
  return (
    <div className="flex flex-col gap-2 rounded bg-primary-100 p-4 text-sm text-white shadow-xl">
      <h4>{project.title}</h4>
      <Image
        src={project.thumbnail}
        alt={project.thumbnail}
        width={200}
        height={200}
        className="rounded-sm bg-white object-contain opacity-90 sm:h-full"
      />
      <p>{project.tech}</p>
      <div className="flex w-full flex-col justify-between">
        <div className="flex gap-2">
          <a
            href={project.repo}
            target="_blank"
            className="rounded bg-primary-200 p-2 text-white hover:bg-tertiary"
          >
            <Github width={20} />
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              className="rounded bg-primary-200 p-2 text-white hover:bg-tertiary"
            >
              <ExternalLink width={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectBio;
