import { FC } from 'react';
import { SkillType } from '../types/SkillsType';

type SkillProp = {
  skill: SkillType;
};

export const BadgeSkill: FC<SkillProp> = ({ skill }) => {
  const { Icon, level, name } = skill;
  return (
    <div className='inline-flex text-sm cursor-pointer' title={name}>
      <div className='flex rounded-l-lg bg-primary-500 hover:bg-primary-600 dark:bg-slate-700 dark:hover:bg-slate-900 transition-all ease-in p-2 text-white'>
        <Icon />
        <label className='ml-1'>{name}</label>
      </div>
      <div className='inline-flex rounded-r-lg text-primary-600  p-2 bg-primary-200 dark:bg-slate-600 dark:text-gray-400'>{level}</div>
    </div>
  );
};
