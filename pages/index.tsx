import BioBlock from '../components/BioBlock';
import About from '../components/About';
import Image from 'next/image';
import Layout from '@/components/Layout';
import LearnedSkill from '@/components/LearnedSkill';
import ProjectBio from '@/components/ProjectBio';

export default function Home() {
  const aboutMeText =
    'Currently working as a frontend developer based in The Netherlands. Before that, I studied web development and obtained a Bachelor of Engineering degree in IT & Media Design.';

  const project = [
    {
      title: 'Example',
      thumbnail: '/../public/me.jpeg',
      tech: 'CMS, SSG, Testing',
      repo: '',
      demo: '',
    },
    {
      title: 'Example',
      thumbnail: '/../public/monitoring.png',
      tech: 'React.JS, Tailwind CSS',
      repo: '',
      demo: '',
    },
    {
      title: 'Example',
      thumbnail: '/../public/me.jpeg',
      tech: 'React.JS, Bootstrap',
      repo: '',
      demo: '',
    },
    {
      title: 'Example',
      thumbnail: '/../public/me.jpeg',
      tech: 'Vue 2, Bootstrap, Testing',
      repo: '',
      demo: '',
    },
  ];

  const skills = [
    ['Javascript', '/../public/skills/JavaScript-logo.webp'],
    ['Typescript', '/../public/skills/JavaScript-logo.webp'],
    ['SASS', '/../public/skills/JavaScript-logo.webp'],
    ['React', '/../public/skills/JavaScript-logo.webp'],
    ['Rx.js', '/../public/skills/JavaScript-logo.webp'],
    ['Tailwind CSS', '/../public/skills/JavaScript-logo.webp'],
    ['Vue', '/../public/skills/JavaScript-logo.webp'],
    ['Testing', '/../public/skills/JavaScript-logo.webp'],
  ];

  return (
    <Layout>
      <main className="container flex min-h-screen flex-col items-center justify-between">
        <section
          id="bio"
          className="mx-auto flex min-h-screen flex-col items-center justify-center md:flex-row"
        >
          <div className="text-center sm:text-left">
            <BioBlock />
          </div>
          <Image
            src="/me.jpeg"
            width={500}
            height={500}
            className="ml-0 w-40 rounded-full opacity-80 shadow-inner md:ml-20"
            alt="Zouhair El-Mariami"
          />
        </section>
        <div className="grid grid-cols-12 gap-14 lg:gap-6">
          <section className="col-span-12 flex items-center lg:col-span-5">
            <About aboutMe={aboutMeText} />
          </section>
          <section id="skills" className="col-span-12 lg:col-span-5">
            <div className="flex justify-center"></div>
            <ul className="grid grid-cols-1 gap-10 rounded shadow-2xl sm:grid-cols-3 lg:grid-cols-4">
              {skills.map(([skill, img]) => (
                <LearnedSkill skill={skill} img={img} key={skill} />
              ))}
            </ul>
          </section>
        </div>

        <section className="my-40 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {project.map((project, i) => (
            <ProjectBio project={project} key={i} />
          ))}
        </section>
      </main>
    </Layout>
  );
}
