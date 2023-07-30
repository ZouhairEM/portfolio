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
  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    link: string
  ) => {
    e.stopPropagation();
    window.open(link, '_blank');
  };

  return (
    <div className="bg-gradient group flex flex-col gap-2 rounded-md border border-secondary border-opacity-100 p-4 text-sm text-white transition-colors hover:cursor-pointer hover:border-opacity-0 hover:bg-primary-100">
      <h4>{project.title}</h4>
      {project.thumbnail && (
        <Image
          src={project.thumbnail}
          alt={project.title}
          width={200}
          height={200}
          className="w-full rounded-sm bg-white object-contain opacity-90 sm:h-full"
        />
      )}

      <div className="tech my-2 flex h-16 flex-wrap gap-2">
        {project.tech.map((t) => (
          <p
            className="h-1/2 rounded-md border border-secondary border-opacity-20 bg-primary-100 p-2 text-xs group-hover:border-primary-100 group-hover:border-opacity-0 group-hover:bg-opacity-0"
            key={t}
          >
            {t}
          </p>
        ))}
      </div>
    </div>
  );
}

export default ProjectBio;
