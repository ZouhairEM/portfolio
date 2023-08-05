import Image from 'next/image';

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
  return (
    <div className="bg-gradient group flex flex-col gap-2 rounded-md border border-secondary border-opacity-100 p-4 text-sm text-white transition-colors hover:cursor-pointer hover:border-opacity-0 hover:bg-primary-100">
      <h4>{project.title}</h4>
      {project.thumbnail && (
        <Image
          src={project.thumbnail}
          alt={project.title}
          width={150}
          height={150}
          className="w-full rounded-sm bg-white   opacity-90 sm:h-full"
        />
      )}

      <div className="bg-tertiary"></div>
      <div className="tech my-2 flex h-16 flex-wrap gap-2">
        {project.tech.map((t) => (
          <p
            className="h-1/2 rounded-md border border-secondary border-opacity-100 bg-primary-100 p-2 text-xs transition-all group-hover:border-primary-100 group-hover:border-opacity-0 group-hover:bg-opacity-0"
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
