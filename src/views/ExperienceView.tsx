import { ItemExperience } from '../components';
import { experienceDB } from '../database/experienceDB';

export const ExperienceView = () => {
  return (
    <div className='p-7 card mt-4'>
      <h2 className='card-title'>Mis Experiencias</h2>
      {experienceDB.map((experience) => (
        <ItemExperience experience={experience} key={experience.id} />
      ))}
    </div>
  );
};
