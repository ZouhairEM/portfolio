import { Skill } from '@/types/content';
import Image from 'next/image';

interface ISkill {
  skill: Skill;
}

function LearnedSkill({ skill, thumbnail }: Skill) {
  return (
    <span className="m-2 flex items-center gap-2 text-white shadow-inner">
      <Image
        src={`static/${thumbnail}`}
        width={25}
        height={25}
        className="col-span-2 ml-auto rounded-sm opacity-90 shadow-2xl"
        alt={skill}
      />
      <span className="grid-cols-5">{skill}</span>
    </span>
  );
}

export default LearnedSkill;
