import { BadgeSkill } from '../components';
import { skillDB } from '../database/skillsDB';

export const SkillsView = () => {
  return (
    <div className='p-7 card flow-root mt-4'>
      <h2 className='card-title'>Tecnologias que más uso</h2>
      <div className='flex flex-wrap justify-around gap-2'>
        {skillDB.map((skill) => (
          <BadgeSkill skill={skill} key={skill.id} />
        ))}
      </div>
    </div>
  );
};
