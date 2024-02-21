import { Dispatch, FC, SetStateAction } from 'react';
import { TabsEnum } from '../AppResume';

type AboutProp = {
  activeTab: TabsEnum;
  setActiveTab: Dispatch<SetStateAction<TabsEnum>>;
};

export const AboutView: FC<AboutProp> = ({ activeTab, setActiveTab }) => {
  return (
    <div className='p-7 pb-0 card'>
      <h2 className='card-title'>Sobre mí</h2>
      <p className='text-gray-700 dark:text-gray-300'>
        Soy un apasionado desarrollador con una sólida experiencia en tecnologías como AWS, Java,
        Spring Boot, Node.js, NestJS, PHP y Laravel para el back-end. En el front-end, me
        especializo en React.js, Next.js y Flutter, brindando experiencias web y móviles
        excepcionales. Mi destreza abarca el manejo experto de bases de datos como MongoDB y MySQL.
        Desde la planificación hasta la implementación, mi enfoque es integral, y me esfuerzo
        constantemente por encontrar soluciones innovadoras que impulsen el éxito de cada proyecto.
      </p>
      <div className='flex flex-row flex-wrap justify-between items-end space-y-2'>
        <a
          href='mailto:chaicopadillag@gmail.com'
          target='_blank'
          className='flex items-center font-medium text-primary-800 hover:text-primary-800 dark:text-gray-300 dark:hover:text-gray-200 '
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            className='bi bi-at w-6 h-6'
            viewBox='0 0 16 16'
          >
            <path d='M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z' />
          </svg>
          <span>chaicopadillag@gmail.com</span>
        </a>
        {/* Social links*/}
        <ul className='flex space-x-5 text-gray-600 dark:text-gray-100'>
          <li>
            <a
              href='https://github.com/chaicopadillag'
              target='_blank'
              className='hover:text-primary-600 transition-all dark:hover:text-gray-500'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                className='bi bi-github w-6 h-6'
                viewBox='0 0 16 16'
              >
                <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
              </svg>
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/chaicopadillag/'
              target='_blank'
              className='hover:text-primary-600 transition-all dark:hover:text-gray-500'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                className='bi bi-linkedin w-6 h-6'
                viewBox='0 0 16 16'
              >
                <path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z' />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      {/* Tab Link */}
      <div className='border-t border-gray-200 my-5 dark:border-gray-700' />
      <ul className='flex space-x-8 font-medium transition-all ease-in'>
        <li>
          <a
            onClick={() => setActiveTab(TabsEnum.resume)}
            className={`tab-link ${activeTab === TabsEnum.resume ? 'active' : ''}`}
          >
            Resumen
          </a>
        </li>
        <li>
          <a
            onClick={() => setActiveTab(TabsEnum.project)}
            className={`tab-link ${activeTab === TabsEnum.project ? 'active' : ''}`}
          >
            Proyectos
          </a>
        </li>
        {/* <li>
          <a
            onClick={() => setActiveTab(TabsEnum.portfolio)}
            className={`tab-link ${activeTab === TabsEnum.portfolio ? 'active' : ''}`}
          >
            Repositorios
          </a>
        </li> */}
      </ul>
    </div>
  );
};
