import { infoDB } from '../database/infoDB';
export const ContactView = () => {
  return (
    <div className='card p-7 mt-4'>
      <h2 className='card-title'>Contacto</h2>
      <div className='space-y-4'>
        {infoDB.map(({ Icon, description, id, name }) => (
          <div className='flex justify-between text-sm md:text-base' key={id}>
            <div className='text-primary-700 flex dark:text-gray-200'>
              <Icon />
              <label className='ml-1'>{name}</label>
            </div>
            <div className='font-medium text-right text-gray-600 dark:text-gray-300'>
              {description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
