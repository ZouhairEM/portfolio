import Layout from '@/components/Layout';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import { Project } from '@/types/content';

export default function ProjectDetails() {
  const router = useRouter();
  const { details } = router.query;
  const detailsString = Array.isArray(details) ? details[0] : details;
  const projectDetails: Project = detailsString
    ? JSON.parse(detailsString)
    : { cover: '', description: '', features: [], title: '', tech: [] };

  return (
    <Layout>
      <main className="container flex flex-col gap-4 py-16">
        <section className="flex transition-colors hover:text-secondary">
          <button
            type="button"
            className="flex gap-2"
            onClick={() => router.push('/', undefined, { scroll: false })}
          >
            <ArrowLeft />
            Back
          </button>
        </section>

        <hr className="border-t-1 mb-4 mt-4 border text-secondary opacity-60" />

        <section>
          <h2 className="text-center sm:text-left">{projectDetails.title}</h2>
          <div className="tech mt-4 flex h-16 flex-wrap gap-2">
            {projectDetails.tech.map((t) => (
              <p
                className="h-1/2 rounded-md border border-secondary border-opacity-60 bg-primary-100 p-2 text-xs group-hover:border-primary-100 group-hover:border-opacity-0 group-hover:bg-opacity-0"
                key={t.name}
              >
                {t.name}
              </p>
            ))}
          </div>
          {projectDetails.cover && (
            <Image
              src={`/static/${projectDetails.cover}`}
              width={500}
              height={500}
              priority
              alt={projectDetails.title}
              className="w-full rounded object-cover object-center py-4"
            />
          )}
          <p>{projectDetails.description}</p>
        </section>

        <section>
          <div className="flex w-full gap-2">
            <a
              href={projectDetails.repo}
              target="_blank"
              className="flex gap-2 rounded p-2 text-white transition-colors hover:text-tertiary"
            >
              <Github width={20} /> Github
            </a>
            {projectDetails.demo && (
              <a
                href={projectDetails.demo ?? ''}
                target="_blank"
                className="flex gap-2 rounded p-2 text-white transition-colors hover:text-tertiary"
              >
                <ExternalLink width={20} /> Live
              </a>
            )}
          </div>
        </section>

        <hr className="border-t-1 mb-4 mt-4 border text-secondary opacity-60" />

        <section>
          <h3 className="text-center sm:text-left">Features</h3>
          <ul className="list-circle p-4">
            {projectDetails.features.map((feature) => (
              <li key={feature.name} className="muted py-1">
                <p className="flex items-center gap-2">
                  {feature.thumbnail && (
                    <Image
                      src={`/static/${feature.thumbnail}`}
                      width={20}
                      height={20}
                      className="col-span-2 rounded-sm opacity-90 shadow-2xl"
                      alt={feature.name}
                    />
                  )}{' '}
                  {feature.name}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </Layout>
  );
}
