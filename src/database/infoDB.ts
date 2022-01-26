import { InfoType } from '../types/InfoType';
import { IconAddres, IconPhone, IconEmail, IconWebSite, IconWork } from '../assets/svg';

export const infoDB: InfoType[] = [
  {
    id: '75d7cda0-54c7-459d-beb6-859a32a991a4',
    name: 'Dirección',
    description: 'SJL, Lima, Perú',
    Icon: IconAddres,
  },
  {
    id: 'ffca446a-0f25-4940-baf9-204e7e09f9d2',
    name: 'Teléfono',
    description: '+51 928 255 616',
    Icon: IconPhone,
  },
  {
    id: '4b0dafae-bd76-4018-a749-e6d94524611a',
    name: 'Correo',
    description: 'chaicopadillag@gmail.com',
    Icon: IconEmail,
  },
  {
    id: 'a4086e2c-4b20-4a6f-a611-69fe536f9c95',
    name: 'Web',
    description: 'chaicopadillag.github.io',
    Icon: IconWebSite,
  },
  {
    id: '60c55cf6-8f3f-4e50-8ee4-de5a58e8708f',
    name: 'Experiencia',
    description: '+4 años',
    Icon: IconWork,
  },
];
