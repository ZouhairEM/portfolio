import Layout from '@/components/Layout';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';

export default function ProjectDetails() {
  const router = useRouter();
  const demo = true;

  return (
    <Layout>
      <section>
        <div className="container flex flex-col gap-4 py-14">
          <button
            type="button"
            className="flex gap-2"
            onClick={() => router.push('/', undefined, { scroll: false })}
          >
            <ArrowLeft />
            Back
          </button>
          <hr className="opacity-60" />
          <h2>Monitoring App</h2>
          <Image
            alt="hero"
            width={1000}
            height={1000}
            src="/monitoring_app.png"
            className="w-full rounded object-cover object-center"
          />
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            deleniti. Sequi ipsam molestias corrupti? Velit sequi autem,
            molestias doloribus laborum dicta, ut quis, quibusdam itaque ipsa id
            provident consequuntur in.
          </p>
          <hr className="opacity-60" />
          <h3>Features</h3>
          <ul className="list-disc px-4">
            <li>i18Next translations</li>
            <li>Tailwind CSS</li>
            <li>Zustand for state management</li>
            <li>i18Next translations</li>
          </ul>

          <div className="flex w-full gap-2">
            <a
              href={''}
              target="_blank"
              className="flex gap-2 rounded bg-primary-200 p-2 text-white hover:bg-tertiary"
            >
              <Github width={20} /> Source Code
            </a>
            {demo && (
              <a
                href={''}
                target="_blank"
                className="flex gap-2 rounded bg-primary-200 p-2 text-white hover:bg-tertiary"
              >
                <ExternalLink width={20} /> Live
              </a>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
