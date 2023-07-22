import BioBlock from '../components/BioBlock';
import Image from 'next/image';
import Layout from '@/components/Layout';
import LearnedSkill from '@/components/LearnedSkill';
import ProjectBio from '@/components/ProjectBio';

export default function Home() {
  const project = [
    {
      title: 'Monitoring App',
      thumbnail: '/../public/monitoring.png',
      tech: 'React.JS, Tailwind CSS',
      repo: '',
      demo: 'https://zouhairem.github.io/monitoring',
    },
    {
      title: 'CMS Portfolio',
      thumbnail: '/../public/tv_shows_app.png',
      tech: 'CMS, SSG, Testing',
      repo: '',
      demo: null,
    },
    {
      title: 'Pokédex',
      thumbnail: '/../public/pokemon_project.png',
      tech: 'React.JS, Bootstrap',
      repo: '',
      demo: 'https://zouhairem.github.io/pokemon/',
    },
    {
      title: 'TV Shows App',
      thumbnail: '/../public/tv_shows_app.png',
      tech: 'Vue 2, Bootstrap, Testing',
      repo: '',
      demo: 'https://zouhairem.github.io/tvpoc/',
    },
  ];

  const skills = [
    ['HTML', '/../public/skills/html5.png', 'HTML5 logo'],
    ['CSS', '/../public/skills/css3.png', 'CSS3 logo'],
    ['Javascript', '/../public/skills/js.png', 'Javascript logo'],
    ['Typescript', '/../public/skills/typescript.png', 'Typescript logo'],
    ['React.JS', '/../public/skills/reactjs.png', 'React.JS logo'],
    ['Next.JS', '/../public/skills/next.png', 'Next.JS logo'],
    ['Vue.JS', '/../public/skills/vuejs.png', 'Vue.JS logo'],
    ['Angular 2', '/../public/skills/angular2.png', 'Angular 2 logo'],
    ['RxJS', '/../public/skills/rxjs.png', 'RxJS logo'],
    ['Tailwind CSS', '/../public/skills/tailwind.png', 'Tailwind CSS logo'],
    ['Testing', '/../public/skills/testing.png', 'Cypress logo'],
  ];

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
            <div className="flex flex-col gap-2">
              <p>
                I've been working since 2021 and before that I was an eager
                student learning frontend development at Fontys University,
                graduating with a Bachelor of Engineering degree.
              </p>
              <p>
                In my day to day life I like to work out to stay fit mentally,
                join hackatons to keep my skills sharp and watch anime to relax.
              </p>
            </div>
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
            {project.map((project, i) => (
              <ProjectBio project={project} key={i} />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
