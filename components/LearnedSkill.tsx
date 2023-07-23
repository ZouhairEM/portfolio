import Image from 'next/image';

interface LearnedSkillProps {
  skill: string;
  img: string;
  alt: string;
}

function LearnedSkill({ skill, img, alt }: LearnedSkillProps) {
  return (
    <span className="m-2 flex items-center gap-2 text-white shadow-inner">
      <Image
        src={img}
        width={25}
        height={25}
        className="col-span-2 ml-auto rounded-sm opacity-90 shadow-2xl"
        alt={alt}
      />
      <span className="grid-cols-5">{skill}</span>
    </span>
  );
}

export default LearnedSkill;
