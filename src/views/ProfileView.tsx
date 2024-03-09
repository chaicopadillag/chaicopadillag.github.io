import { DarkMode } from '../components';
import { profileDB } from '../database/profileDB';

export const ProfileView = () => {
  const { name, lastName, bgUrl, level, photoUrl, status } = profileDB;
  return (
    <div className='card'>
      <div
        className='h-32 rounded-t-xl overflow-hidden bg-cover'
        style={{ backgroundImage: `url(${bgUrl})` }}
      >
        <div className='bg-primary-600 dark:bg-gray-900 bg-opacity-60 dark:bg-opacity-70 h-full rounded-t-xl overflow-hidden p-2'>
          <DarkMode />
        </div>
      </div>
      <div className='pt-14 p-7 relative'>
        <img
          src={photoUrl}
          alt='Gerard Ch.'
          className='border-2 border-gray-100 dark:border-gray-700 rounded-xl w-20 h-20 absolute -top-10 shadow'
        />
        <span className='rounded-full px-2 py-1 bg-green-500 text-gray-100 text-xs font-semibold absolute top-4 right-7 uppercase'>
          {status}
        </span>
        <div className='text-lg font-semibold mb-1.5'>
          {lastName} {name}
        </div>
        <div className='text-sm text-gray-700 dark:text-gray-200 mb-7'>{level}</div>
        <div className='flex overflow-hidden'>
          <a
            href='https://api.whatsapp.com/send?phone=51928522616&text=Hola Dev, me contacto desde tu web personal.'
            target='_blank'
            className='block w-full text-gray-200 bg-primary-800 hover:bg-primary-900 dark:bg-slate-700 dark:hover:bg-slate-900 text-base py-3 px-4 font-semibold rounded-l-lg text-center'
          >
            Contactar
          </a>
          <a
            href='./cv-ats.pdf'
            target='_blanck'
            className='text-gray-700 bg-slate-200 hover:bg-slate-300  p-3 rounded-r-lg dark:bg-slate-600 dark:hover:bg-slate-900 cursor-pointer dark:text-gray-200'
            title='Descargar CV'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              className='w-6 h-6'
              viewBox='0 0 24 24'
            >
              <path d='m12 16 4-5h-3V4h-2v7H8z'></path>
              <path d='M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z'></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
