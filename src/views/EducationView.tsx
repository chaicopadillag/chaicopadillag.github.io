import React from 'react';
import { educationDB } from '../database/educationDB';
import { ItemEducation } from '../components';

export const EducationView = () => {
  return (
    <div className='p-7 card mt-4'>
      <h2 className='card-title'>Mi Educación</h2>
      {educationDB.map((education) => (
        <ItemEducation education={education} key={education.id} />
      ))}
    </div>
  );
};
