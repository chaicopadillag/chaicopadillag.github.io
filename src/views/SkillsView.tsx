import { BadgeSkill } from '../components';
import {
  skillDBs,
  skillsAgileMethodologies,
  skillsCloudAndDevOpsTools,
  skillsFrameworks,
  skillsProgrammingLanguages,
  skillsTools,
} from '../database/skillsDB';

export const SkillsView = () => {
  return (
    <div className='p-4 card flow-root mt-4'>
      <h2 className='card-title'>Mis Skills</h2>
      <div className='space-y-2'>
        <h2 className='font-medium'>Lenguajes de programación</h2>
        <div className='flex flex-wrap justify-around gap-2'>
          {skillsProgrammingLanguages.map((skill) => (
            <BadgeSkill skill={skill} key={skill.id} />
          ))}
        </div>
      </div>
      <div className='mt-4 space-y-2'>
        <h2 className='font-medium'>Frameworks & Libraries</h2>
        <div className='flex flex-wrap justify-around gap-2'>
          {skillsFrameworks.map((skill) => (
            <BadgeSkill skill={skill} key={skill.id} />
          ))}
        </div>
      </div>
      <div className='mt-4 space-y-2'>
        <h2 className='font-medium'>Bases de datos</h2>
        <div className='flex flex-wrap justify-around gap-2'>
          {skillDBs.map((skill) => (
            <BadgeSkill skill={skill} key={skill.id} />
          ))}
        </div>
      </div>
      <div className='mt-4 space-y-2'>
        <h2 className='font-medium'>Cloud & DevOps Tools</h2>
        <div className='flex flex-wrap justify-around gap-2'>
          {skillsCloudAndDevOpsTools.map((skill) => (
            <BadgeSkill skill={skill} key={skill.id} />
          ))}
        </div>
      </div>
      <div className='mt-4 space-y-2'>
        <h2 className='font-medium'>Metodologías ágiles</h2>
        <div className='flex flex-wrap justify-around gap-2'>
          {skillsAgileMethodologies.map((skill) => (
            <BadgeSkill skill={skill} key={skill.id} />
          ))}
        </div>
      </div>
      <div className='mt-4 space-y-2'>
        <h2 className='font-medium'>Software y herramientas</h2>
        <div className='flex flex-wrap justify-around gap-2'>
          {skillsTools.map((skill) => (
            <BadgeSkill skill={skill} key={skill.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
