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
    : { cover: '', description: '', features: [] };

  return (
    <Layout>
      <main className="container flex flex-col gap-4 py-14">
        <section className="transition-colors hover:text-secondary">
          <button
            type="button"
            className="flex gap-2"
            onClick={() => router.push('/', undefined, { scroll: false })}
          >
            <ArrowLeft />
            Back
          </button>
        </section>

        <hr className="opacity-60" />

        <section>
          <h2>{title}</h2>
          <Image
            src={projectDetails.cover}
            width={500}
            height={500}
            priority
            alt={title}
            className="w-full rounded object-cover object-center py-4"
          />
          <p>{projectDetails.description}</p>
        </section>

        <hr className="opacity-60" />

        <section>
          <h3>Features</h3>
          <ul className="list-disc px-4">
            {projectDetails.features.map((feature) => (
              <li key={feature} className="muted">
                {feature}
              </li>
            ))}
          </ul>
        </section>

        <hr className="opacity-60" />

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
      </main>
    </Layout>
  );
}
