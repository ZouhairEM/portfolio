import Image from 'next/image';

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
    <div className="flex flex-col items-center rounded-2xl bg-primary-100 p-6 text-white text-sm shadow-xl">
      <p className="text-white">{project.title}</p>
      <Image
        src={project.thumbnail}
        alt={project.thumbnail}
        width={200}
        height={100}
        className="w-10/12/12 sm:w-full rounded-2xl shadow-inner my-3 opacity-80"
      />
      <div className="flex flex-col justify-between h-28">
        <div className="text-white my-4">
          Tech used:
          <i className="ml-1 leading-5 text-secondary">{project.tech}</i>
        </div>
        <div className="py-2 mx-auto sm:mx-0">
          <a
            href={project.repo}
            target="_blank"
            className="mr-2 rounded-lg border border-secondary bg-primary-200 p-2 px-3 text-white hover:bg-tertiary"
          >
            Source Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            className="rounded-lg border border-secondary bg-primary-200 p-2 px-3 text-white hover:bg-tertiary"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectBio;
