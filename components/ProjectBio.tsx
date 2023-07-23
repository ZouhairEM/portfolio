import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectBioProps {
  project: {
    title: string;
    thumbnail: string;
    tech: string[];
    repo: string;
    demo: string | null;
  };
}
function ProjectBio({ project }: ProjectBioProps) {
  const handleClick = (e: any, link: string) => {
    e.stopPropagation();
    window.open(link, '_blank');
  };

  return (
    <div className="group flex flex-col gap-2 p-4 text-sm text-white transition-colors hover:cursor-pointer hover:bg-primary-100">
      <h4>{project.title}</h4>
      {project.thumbnail ? (
        <Image
          src={project.thumbnail}
          alt={project.thumbnail}
          width={200}
          height={200}
          className="rounded-sm bg-white object-contain opacity-90 sm:h-full"
        />
      ) : (
        <p>Thumbnail not available</p>
      )}

      <div className="tech my-2 flex h-16 flex-wrap gap-2">
        {project.tech.map((t) => (
          <p
            className="h-1/2 rounded-md border border-muted border-opacity-10 bg-primary-100 p-2 text-xs group-hover:border-primary-100"
            key={t}
          >
            {t}
          </p>
        ))}
      </div>

      <div className="flex w-full flex-col justify-between">
        <div className="flex gap-2">
          <span
            className="rounded p-2 text-white transition-colors hover:text-tertiary"
            role="button"
            onClick={(e) => handleClick(e, project.repo)}
          >
            <Github width={20} />
          </span>
          {project.demo && (
            <span
              className="rounded p-2 text-white transition-colors hover:text-tertiary"
              role="button"
              onClick={(e) => handleClick(e, project.demo ?? '')}
            >
              <ExternalLink width={20} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectBio;
