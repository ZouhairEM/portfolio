import BioBlock from '../components/BioBlock';
import About from '../components/About';
import Image from 'next/image';
import Layout from '@/components/Layout';
import LearnedSkill from '@/components/LearnedSkill';
import ProjectBio from '@/components/ProjectBio';

export default function Home() {
  const aboutMeText =
    "Currently I'm working as a consultant frontend developer based in The Netherlands. Before that, I studied web development and obtained a BE degree in IT & Media Design.";

  const project = [
    {
      title: 'Example',
      thumbnail: '/../public/me.jpeg',
      tech: 'Example',
      repo: '',
      demo: '',
    },
  ];

  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <section className="flex flex-col md:flex-row justify-center items-center min-h-screen mx-auto">
          <div className="text-center sm:text-left">
            <BioBlock />
          </div>
          <Image
            src="/me.jpeg"
            width={500}
            height={500}
            className="w-40 rounded-full shadow-inner opacity-80 ml-0 md:ml-20"
            alt="Zouhair El-Mariami"
          />
        </section>
        <section>
          <div className="flex justify-center mb-16">
            <h1 className="font-bold text-4xl text-white text-center border-b-4 border-tertiary">
              About
            </h1>
          </div>
          <About aboutMe={aboutMeText} />
        </section>
        <section id="skills" className="mt-16 sm:mt-32 mb-16 p-6">
          <div className="flex justify-center">
            <h1 className="font-bold text-4xl text-white text-center border-b-4 border-tertiary">
              Skills
            </h1>
          </div>
        </section>
        <section>
          <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-10 bg-primary-100 p-12 shadow-2xl rounded-2xl">
            {[1, 2, 3, 4, 5, 6].map((el, i) => (
              <LearnedSkill skill={'x'} key={i} />
            ))}
          </ul>
        </section>
        <section className="mt-16 sm:mt-32 mb-16 p-6">
          <div className="flex justify-center">
            <h1 className="font-bold text-4xl text-white text-center border-b-4 border-tertiary">
              Work
            </h1>
          </div>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto sm:mx-0 gap-6 gap-y-8 sm:gap-y-10">
          {project.map((project, i) => (
            <ProjectBio project={project} key={i} />
          ))}
        </section>
      </main>
    </Layout>
  );
}
