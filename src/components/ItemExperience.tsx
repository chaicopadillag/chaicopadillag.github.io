import { FC } from 'react';
import { experienceDB } from '../database/experienceDB';
import { ExperienceType } from '../types/ExperienceType';
type ExperienceProp = {
  experience: ExperienceType;
};
export const ItemExperience: FC<ExperienceProp> = ({ experience }) => {
  const { company, description, endDate, id, location, position, startDate, workingDay } = experience;
  return (
    <div className='mb-5 w-full space-y-5'>
      <div className='flex justify-between'>
        <div className='space-y-1.5'>
          <div className='font-medium'>{position}</div>
          <div className='flex space-x-5'>
            <div className='flex items-center font-medium text-sm text-gray-400'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' className='w-4 h-4 text-violet-400 dark:text-gray-300' viewBox='0 0 16 16'>
                <path d='M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z' />
                <path d='M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z' />
              </svg>
              <span className='ml-1'>{company}</span>
            </div>
            <div className='flex items-center font-medium text-sm text-gray-400'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 text-violet-400 dark:text-gray-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
              </svg>
              <span className='ml-1'>{location}</span>
            </div>
          </div>
        </div>
        <div className='space-y-2 sm:text-right'>
          <div className='bg-violet-200 rounded-xl text-violet-600 inline px-2 py-1 text-xs dark:bg-slate-600 dark:text-gray-300'>{workingDay}</div>
          <div className='flex items-center font-medium text-sm text-gray-400'>
            <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 text-violet-400 dark:text-gray-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
            </svg>
            <span className='ml-1'>
              {startDate} – {endDate}
            </span>
          </div>
        </div>
      </div>
      <p className='text-gray-600 dark:text-gray-300'>{description}</p>
      <div className='border-b border-gray-200 dark:border-gray-700' />
    </div>
  );
};
