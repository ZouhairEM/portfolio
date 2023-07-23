import BioBlock from '../components/BioBlock';
import Image from 'next/image';
import Layout from '@/components/Layout';
import LearnedSkill from '@/components/LearnedSkill';
import ProjectBio from '@/components/ProjectBio';
import { useEffect, useState } from 'react';
import { Content } from '@/types/content';
import Link from 'next/link';

export default function Home() {
  const [content, setContent] = useState<Content | null>(null);

  useEffect(() => {
    const getContent = async () => {
      try {
        const query = await fetch('http://localhost:5000/content');
        if (!query.ok) {
          throw new Error('Failed to fetch data from the server.');
        }
        const data = await query.json();
        setContent(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setContent(null);
      }
    };
    getContent();
  }, []);

  const { aboutMe, projects = [], skills = [] } = content ?? {};

  return (
    <Layout>
      <main className="container flex min-h-screen flex-col items-center justify-between">
        <section
          id="bio"
          className="flex min-h-screen w-full flex-col items-center justify-between md:flex-row"
        >
          <BioBlock />
          <Image
            src="/me.jpeg"
            width={150}
            height={150}
            className="ml-0 rounded-full opacity-80 shadow-inner"
            alt="Zouhair El-Mariami"
          />
        </section>
        <div className="grid grid-cols-12 gap-14 lg:gap-10">
          <section
            id="about"
            className="col-span-12 flex flex-col lg:col-span-6"
          >
            <h2 className="mb-2">About me</h2>
            <div
              className="flex flex-col gap-2"
              dangerouslySetInnerHTML={{ __html: aboutMe ?? '' }}
            />
          </section>
          <section id="skills" className="col-span-12 lg:col-span-6">
            <h2 className="mb-2">Skills</h2>
            <ul className="flex flex-wrap gap-2 rounded shadow-2xl">
              {skills.map(([skill, img, alt]) => (
                <LearnedSkill key={skill} skill={skill} img={img} alt={alt} />
              ))}
            </ul>
          </section>
        </div>
        <section id="passion-projects" className="my-40">
          <h2 className="mb-4">Passion projects</h2>
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {projects.map((project, i) => (
              <Link
                href={{
                  pathname: '/project_details',
                  query: {
                    title: JSON.stringify(project.title),
                    details: JSON.stringify(project.details),
                    demo: JSON.stringify(project.demo),
                    repo: JSON.stringify(project.repo),
                  },
                }}
                key={i}
              >
                <ProjectBio project={project} />
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
