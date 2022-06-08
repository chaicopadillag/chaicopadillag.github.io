import { FC } from 'react';
import { ProjectType } from '../types/ProjectType';

type ProjectProp = {
  project: ProjectType;
};
export const ItemProject: FC<ProjectProp> = ({ project }) => {
  const { id, company, description, link, name, rol } = project;
  return (
    <div className='mb-5 flex items-start gap-4'>
      <div className='rounded-xl flex items-center justify-center flex-shrink-0 w-12 h-12 text-primary-500 border-2 border-primary-500 dark:text-gray-200 dark:border-gray-500'>
        <span className='text-2xl'>{name.slice(0, 1)}</span>
      </div>
      <div className='w-full space-y-5'>
        <div className='flex justify-between'>
          <div className='space-y-1.5'>
            <div className='font-medium'>{name}</div>
            <div className='flex flex-wrap gap-2'>
              <div className='flex items-center font-medium text-sm text-gray-400'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 text-primary-400 dark:text-gray-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z' />
                </svg>
                <span className='ml-1'>{company}</span>
              </div>
              <div className='flex items-center font-medium text-sm text-gray-400'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 text-primary-400 dark:text-gray-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
                </svg>
                <span className='ml-1'>{rol}</span>
              </div>
            </div>
          </div>
        </div>
        <p className='text-gray-600 dark:text-gray-300'>{description}</p>
        <a
          className='inline-flex items-center space-x-3 px-3.5 py-1.5 rounded-lg group border border-primary-500 text-primary-500 text-sm font-medium transition duration-200 hover:border-primary-500 hover:text-white hover:bg-primary-600 dark:text-gray-300 dark:bg-slate-700 dark:border-gray-600 dark:hover:bg-slate-900'
          href={link}
          target='_blank'
          rel='noopener noreferrer'
        >
          <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1'
            />
          </svg>
          <span>{link.slice(0, 20)}</span>
        </a>
        <div className='border-b border-gray-200 dark:border-gray-700' />
      </div>
    </div>
  );
};
