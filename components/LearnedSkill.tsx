import Image from 'next/image';

interface LearnedSkillProps {
  skill: string;
}

function LearnedSkill({ skill }: LearnedSkillProps) {
  return (
    <li className="flex gap-4 justify-center items-center ml-10 sm:ml-0">
      <li className="grid grid-cols-5 text-white shadow-inner">
        <Image
          src="/../public/me.jpeg"
          width={30}
          height={30}
          className="ml-auto col-span-2 shadow-2xl opacity-80"
          alt="-"
        />
        <span className="grid-cols-5">{skill}</span>
      </li>
    </li>
  );
}

export default LearnedSkill;
