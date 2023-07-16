import Image from 'next/image';

interface LearnedSkillProps {
  skill: string;
  img: string;
}

function LearnedSkill({ skill, img }: LearnedSkillProps) {
  return (
    <li className="flex items-center justify-center gap-4 sm:ml-0">
      <span className="grid grid-cols-5 gap-2 text-white shadow-inner">
        <Image
          src={img}
          width={30}
          height={30}
          className="col-span-2 ml-auto rounded opacity-80 shadow-2xl"
          alt={skill}
        />
        <p className="grid-cols-5">{skill}</p>
      </span>
    </li>
  );
}

export default LearnedSkill;
