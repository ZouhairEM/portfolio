import BioBlock from '../components/BioBlock';
import Image from 'next/image';
import Layout from '@/components/Layout';
import LearnedSkill from '@/components/LearnedSkill';
import ProjectBio from '@/components/ProjectBio';
import { useEffect, useState } from 'react';
import { Project, Content } from '@/types/content';
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';

export async function getStaticProps() {
  const about = fs.readdirSync('./content/about').map(function (filename) {
    const aboutContent = fs.readFileSync(`./content/about/${filename}`, 'utf8');

    return {
      ...matter(aboutContent).data,
      slug: filename.slice(0, filename.indexOf('.')),
    };
  });

  const projects = fs
    .readdirSync('./content/projects')
    .map(function (filename) {
      const projectContent = fs.readFileSync(
        `./content/projects/${filename}`,
        'utf8'
      );

      return {
        ...matter(projectContent).data,
        slug: filename.slice(0, filename.indexOf('.')),
      };
    });

  const skills = fs.readdirSync('./content/skill').map(function (filename) {
    const skillContent = fs.readFileSync(`./content/skill/${filename}`, 'utf8');

    return {
      ...matter(skillContent).data,
      slug: filename.slice(0, filename.indexOf('.')),
    };
  });

  return {
    props: {
      about,
      skills,
      projects,
    },
  };
}

interface SSGContent {
  about: Content['about'];
  skills: Content['skills'];
  projects: Content['projects'];
}

export default function Home({ about, skills, projects }: SSGContent) {
  const [, setContent] = useState<Content | null>(null);
  const local = false;
  const SSGData = { about, skills, projects };

  useEffect(() => {
    async function getContent() {
      try {
        if (local) {
          const query = await fetch('http://localhost:5000/localContent');
          const data = await query.json();
          setContent(data);
        }
      } catch (error) {
        setContent(null);
      }
    }

    getContent();
  }, []);

  return (
    <Layout>
      <main className="container mb-0 flex min-h-screen flex-col items-center justify-between p-6 sm:mb-40 sm:p-0">
        <section
          id="bio"
          className="flex min-h-screen w-full flex-col items-center justify-center sm:flex-row sm:justify-between "
        >
          <BioBlock />
          <Image
            src="/me.jpeg"
            width={150}
            height={150}
            className="min-h-[150px] max-h-[150px] ml-0 rounded-full opacity-80 shadow-inner"
            alt="Zouhair El-Mariami"
          />
        </section>
        {SSGData && (
          <>
            <div className="grid w-full grid-cols-3 gap-0 text-center sm:grid-cols-12 sm:gap-14 sm:text-left lg:gap-10">
              <section
                id="about"
                className="col-span-12 flex flex-col sm:col-span-6"
              >
                <h3 className="mb-2">About me</h3>
                <div
                  className="flex flex-col gap-2"
                  dangerouslySetInnerHTML={{ __html: about[0].about ?? '' }}
                />
              </section>
              <section
                id="skills"
                className="col-span-12 my-40 sm:col-span-6 sm:my-0"
              >
                <h3 className="mb-2">Skills</h3>
                <ul className="flex flex-wrap justify-center gap-2 rounded shadow-2xl sm:justify-normal">
                  {skills.map((skill) => (
                    <LearnedSkill
                      key={skill.skill}
                      skill={skill.skill}
                      thumbnail={skill.thumbnail}
                    />
                  ))}
                </ul>
              </section>
            </div>
            <section id="passion-projects" className="mb-40 sm:my-40 sm:mb-0">
              <h3 className="mb-4 text-center sm:text-left">
                Passion projects
              </h3>
              <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {projects.map((project, i: number) => (
                  <Link
                    href={{
                      pathname: `/${project.slug ?? 'project_details'}`,
                      query: {
                        details: JSON.stringify(project),
                      },
                    }}
                    key={i}
                  >
                    <ProjectBio project={project} />
                  </Link>
                ))}
              </div>
            </section>
          </>
        )}
      </main>
    </Layout>
  );
}
