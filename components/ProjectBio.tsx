import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

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
    <Link href={project.title.toLowerCase().replaceAll(' ', '_')}>
      <div className="flex select-none flex-col gap-2 rounded-md border-[0.05em] border-primary-200 p-4 text-sm text-white shadow-xl transition-colors hover:cursor-pointer hover:border-white hover:bg-primary-200">
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
    </Link>
  );
}

export default ProjectBio;
