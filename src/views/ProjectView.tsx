import { ItemProject } from '../components';
import { projectDB } from '../database/projectDB';

export const ProjectView = () => {
  return (
    <div className='p-7 card mt-4'>
      <h2 className='card-title'>Proyectos</h2>
      {projectDB.map((project) => (
        <ItemProject project={project} key={project.id} />
      ))}
    </div>
  );
};
