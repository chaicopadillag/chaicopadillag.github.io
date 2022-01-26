import { Dispatch, FC, SetStateAction } from 'react';
import { TabsEnum } from '../AppResume';

type AboutProp = {
  activeTab: TabsEnum;
  setActiveTab: Dispatch<SetStateAction<TabsEnum>>;
};

export const AboutView: FC<AboutProp> = ({ activeTab, setActiveTab }) => {
  return (
    <div className='p-7 pb-0 card'>
      <h2 className='card-title'>Acerca de Mí</h2>
      <p className='text-gray-600 dark:text-gray-300 mb-4'>
        Soy Programador y Desarrollador Web autodidacta, proactivo y eficaz de Lima, Perú. Me apasiona mucho trabajar con nuevas tecnologías, disfruto creando aplicaciones de alto
        rendimiento tanto en Backend como en Frontend. Contribuyo a proyectos de Open-source y comunidades de programación ayudando a otros usuarios. En el futuro me gustaría poder
        crear mi propio negocio. <br />
        Actualmente me dedico al desarrollo de aplicaciones web que ayuden a solucionar los diversos problemas que aquejan al mundo de hoy. <br /> ¿Interesado por mis conocimientos
        y habilidades? ¡Quizás podamos trabajar juntos!
      </p>
      <div className='flex flex-row flex-wrap justify-between items-end space-y-2'>
        <a
          href='mailto:chaicopadillag@gmail.com'
          target='_blank'
          className='flex items-center font-medium text-primary-500 hover:text-primary-600 dark:text-gray-300 dark:hover:text-gray-200 '
        >
          <svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' className='bi bi-at w-6 h-6' viewBox='0 0 16 16'>
            <path d='M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z' />
          </svg>
          <span>chaicopadillag@gmail.com</span>
        </a>
        {/* Social links*/}
        <ul className='flex space-x-5 text-gray-600'>
          <li>
            <a href='https://github.com/chaicopadillag' target='_blank' className='hover:text-primary-600 transition-all dark:hover:text-gray-900'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' className='bi bi-github w-6 h-6' viewBox='0 0 16 16'>
                <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
              </svg>
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/chaicopadillag/' target='_blank' className='hover:text-primary-600 transition-all dark:hover:text-gray-900'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' className='bi bi-linkedin w-6 h-6' viewBox='0 0 16 16'>
                <path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z' />
              </svg>
            </a>
          </li>
          <li>
            <a href='https://www.facebook.com/chaicopadillag' target='_blank' className='hover:text-primary-600 transition-all dark:hover:text-gray-900'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' className='bi bi-facebook w-6 h-6' viewBox='0 0 16 16'>
                <path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z' />
              </svg>
            </a>
          </li>
          <li>
            <a href='https://twitter.com/chaicopadillag' target='_blank' className='hover:text-primary-600 transition-all dark:hover:text-gray-900'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' className='bi bi-twitter w-6 h-6' viewBox='0 0 16 16'>
                <path d='M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z' />
              </svg>
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/chaicopadillag/' target='_blank' className='hover:text-primary-600 transition-all dark:hover:text-gray-900'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' className='bi bi-instagram w-6 h-6' viewBox='0 0 16 16'>
                <path d='M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z' />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      {/* Tab Link */}
      <div className='border-t border-gray-200 my-5 dark:border-gray-700' />
      <ul className='flex space-x-8 font-medium transition-all ease-in'>
        <li>
          <a onClick={() => setActiveTab(TabsEnum.resume)} className={`tab-link ${activeTab === TabsEnum.resume ? 'active' : ''}`}>
            Resumen
          </a>
        </li>
        <li>
          <a onClick={() => setActiveTab(TabsEnum.project)} className={`tab-link ${activeTab === TabsEnum.project ? 'active' : ''}`}>
            Proyectos
          </a>
        </li>
        {/* <li>
          <a onClick={() => setActiveTab(TabsEnum.portfolio)} className={`tab-link ${activeTab === TabsEnum.portfolio ? 'active' : ''}`}>
            Repositorios
          </a>
        </li> */}
      </ul>
    </div>
  );
};