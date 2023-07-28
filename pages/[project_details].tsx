import Layout from '@/components/Layout';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import { Project } from '@/types/content';

export default function ProjectDetails() {
  const router = useRouter();
  let { details } = router.query;

  const title =
    typeof router.query.title === 'string'
      ? JSON.parse(router.query.title)
      : '';

  const demo =
    typeof router.query.demo === 'string'
      ? JSON.parse(router.query.demo)
      : null;

  const repo =
    typeof router.query.repo === 'string'
      ? JSON.parse(router.query.repo)
      : null;

  const detailsString = Array.isArray(details) ? details[0] : details;
  const projectDetails: Project['details'] = detailsString
    ? JSON.parse(detailsString)
    : { cover: '', description: '', features: [], tech: [] };

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

        <hr className="mb-4 mt-4 opacity-60 sm:mt-10" />

        <section>
          <div className="flex w-full gap-2">
            <a
              href={repo}
              target="_blank"
              className="flex gap-2 rounded p-2 text-white transition-colors hover:text-tertiary"
            >
              <Github width={20} /> Source Code
            </a>
            {demo && (
              <a
                href={demo ?? ''}
                target="_blank"
                className="flex gap-2 rounded p-2 text-white transition-colors hover:text-tertiary"
              >
                <ExternalLink width={20} /> Live
              </a>
            )}
          </div>
        </section>

        <section>
          <h2 className="text-center sm:text-left">{title}</h2>
          {projectDetails.cover && (
            <Image
              src={projectDetails.cover}
              width={500}
              height={500}
              priority
              alt={title}
              className="w-full rounded object-cover object-center py-4"
            />
          )}
          <div className="tech mt-2 flex h-16 flex-wrap gap-2">
            {projectDetails.tech.map((t) => (
              <p
                className="h-1/2 rounded-md border border-secondary border-opacity-20 bg-primary-100 p-2 text-xs group-hover:border-primary-100 group-hover:border-opacity-0 group-hover:bg-opacity-0"
                key={t}
              >
                {t}
              </p>
            ))}
          </div>
          <p>{projectDetails.description}</p>
        </section>

        <hr className="my-4 opacity-60 sm:my-10" />

        <section>
          <h3 className="text-center sm:text-left">Features</h3>
          <ul className="list-disc p-4">
            {projectDetails.features.map((feature) => (
              <li key={feature} className="muted">
                {feature}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </Layout>
  );
}
