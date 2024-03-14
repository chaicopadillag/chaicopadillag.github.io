import {
  IconAngular,
  IconAws,
  IconAzure,
  IconBitbucket,
  IconBootstrap,
  IconCsharp,
  IconCss,
  IconDocker,
  IconFirebase,
  IconFlutter,
  IconGit,
  IconGithub,
  IconGoogleCloud,
  IconHtml,
  IconJava,
  IconJavascript,
  IconJira,
  IconLaravel,
  IconMongoDB,
  IconMySql,
  IconNestJS,
  IconNextJS,
  IconNodeJs,
  IconPHP,
  IconPostgresql,
  IconPostman,
  IconPython,
  IconReactJs,
  IconSlack,
  IconSpringBoot,
  IconSqlServer,
  IconTailwindCss,
  IconTeams,
  IconTypescript,
  IconVSCode,
  IconWordPress,
} from '../assets/svg';
import { IcoKubernetes } from '../assets/svg/index';
import { SkillType } from '../types/SkillsType';

export const skillsProgrammingLanguages: SkillType[] = [
  {
    id: '0907e9d6-552d-443b-ab06-877836581980',
    name: 'Java',
    level: 'Avanzado',
    Icon: IconJava,
  },
  {
    id: '4ba06da2-7563-491f-b317-dbfe955348ca',
    name: 'Node.js',
    level: 'Avanzado',
    Icon: IconNodeJs,
  },
  {
    id: '3089394c-c560-4b12-870a-8671bcdb9784',
    name: 'Javascript',
    level: 'Avanzado',
    Icon: IconJavascript,
  },
  {
    id: '5b69c757-9b4f-4926-900a-4b5cb53a67ae',
    name: 'PHP',
    level: 'Avanzado',
    Icon: IconPHP,
  },
  {
    id: 'e67cc540-6ae3-405c-b574-5774ed33468d',
    name: 'Typescript',
    level: 'Avanzado',
    Icon: IconTypescript,
  },
  {
    id: 'a12339b0-1058-40af-bb9c-9c1313b63580',
    name: '',
    level: 'Intermedio',
    Icon: IconCsharp,
  },
  {
    id: 'b3ee278b-1561-4fde-8f27-d1bf322e22e0',
    name: 'Python',
    level: 'Básico',
    Icon: IconPython,
  },
  {
    id: '2b9e488e-48be-4d57-8ee6-d44604e25275',
    name: 'HTML',
    level: 'Avanzado',
    Icon: IconHtml,
  },
  {
    id: 'fb93ea34-73ad-45ff-a596-8724887fb96e',
    name: 'CSS',
    level: 'Intermedio',
    Icon: IconCss,
  },
];
export const skillsFrameworks: SkillType[] = [
  {
    id: '6165ad99-963b-4191-829e-f74d35ea6f55',
    name: 'Spring Boot',
    level: 'Avanzado',
    Icon: IconSpringBoot,
  },
  {
    id: 'b35004da-9fbc-4ea9-bfc0-739953177790',
    name: 'Nest.js',
    level: 'Avanzado',
    Icon: IconNestJS,
  },
  {
    id: 'f7e63553-219f-4e95-a3cd-7a712455b840',
    name: 'React.js',
    level: 'Avanzado',
    Icon: IconReactJs,
  },
  {
    id: '02eb253b-1140-4278-a641-a44d29a619af',
    name: 'Next.js',
    level: 'Avanzado',
    Icon: IconNextJS,
  },
  {
    id: 'a458f157-19b8-44a7-88b1-a56937c7d82c',
    name: 'Laravel',
    level: 'Avanzado',
    Icon: IconLaravel,
  },
  {
    id: 'b9dead0e-2953-4f2c-b372-73e7ae967d5b',
    name: 'Flutter',
    level: 'Intermedio',
    Icon: IconFlutter,
  },
  {
    id: '055d39fc-3972-4638-b307-eb376e5cd371',
    name: 'Angular',
    level: 'Intermedio',
    Icon: IconAngular,
  },
  {
    id: 'cb40a224-2405-459b-871f-28172af9b1d9',
    name: 'Tailwind CSS',
    level: 'Intermedio',
    Icon: IconTailwindCss,
  },
  {
    id: '9f0829e7-c5b8-42d4-909c-6a8eae79ae15',
    name: 'Bootstrap',
    level: 'Intermedio',
    Icon: IconBootstrap,
  },
  {
    id: '5d2c9a1a-3afe-4197-ad6d-aa75f69f3111',
    name: 'WordPress',
    level: 'Intermedio',
    Icon: IconWordPress,
  },
];
export const skillsCloudAndDevOpsTools: SkillType[] = [
  {
    id: '8d7693fb-9d6a-480e-8957-1f7fde798189',
    name: 'AWS',
    level: 'avanzado',
    Icon: IconAws,
  },
  {
    id: '9e441980-917d-43bb-879a-a1b03a79f46a',
    name: 'Google Cloud Platform',
    level: 'Básico',
    Icon: IconGoogleCloud,
  },
  {
    id: '10101a0d-1e1f-45de-9728-1267d1117442',
    name: 'Azure',
    level: 'Básico',
    Icon: IconAzure,
  },
  {
    id: '72749f23-f7f4-47e4-a7b3-3fd827f3472a',
    name: 'Docker',
    level: 'Intermedio',
    Icon: IconDocker,
  },
  {
    id: '44f6fc4c-bfc2-422d-9bac-f4ca4b1a3ff8',
    name: 'Kubernetes',
    level: 'Intermedio',
    Icon: IcoKubernetes,
  },
  {
    id: '1ae69bb9-e5ee-4dc8-808e-b050712e52f8',
    name: 'Git',
    level: 'Avanzado',
    Icon: IconGit,
  },
];

export const skillsTools: SkillType[] = [
  {
    id: '9ce74d83-ebdd-4a71-8faf-c8b919237419',
    name: 'Git',
    level: 'Avanzado',
    Icon: IconGit,
  },
  {
    id: '8b43c2ff-e4af-40c6-b9b8-b03dc31b6200',
    name: 'Postman',
    level: 'Avanzado',
    Icon: IconPostman,
  },
  {
    id: '1f6bdd82-6958-4cfd-901e-37db966d728f',
    name: 'VS Code',
    level: 'Avanzado',
    Icon: IconVSCode,
  },
  {
    id: '5b0a5169-6efb-49f4-bb30-52fb4a8861a4',
    name: 'Jira',
    level: 'Avanzado',
    Icon: IconJira,
  },
  {
    id: '432078c3-b49e-4691-b7f8-e09b72edf119',
    name: 'Slack',
    level: 'Avanzado',
    Icon: IconSlack,
  },
  {
    id: '034e811d-653d-4871-bbe9-8b2d2cbb332e',
    name: 'Teams',
    level: 'Avanzado',
    Icon: IconTeams,
  },
  {
    id: 'd3efa293-024d-41ef-ba39-fc14a9538b92',
    name: 'GitHub',
    level: 'Avanzado',
    Icon: IconGithub,
  },
  {
    id: 'aa71fd7b-6ce0-4e75-a5f0-378f5358f579',
    name: 'Bitbucket',
    level: 'Avanzado',
    Icon: IconBitbucket,
  },
];
export const skillsAgileMethodologies: SkillType[] = [
  {
    id: 'f9c2242a-a7b9-443a-b31e-e808b011c427',
    name: 'Scrum',
    level: 'Avanzado',
    Icon: IconMongoDB,
  },
  {
    id: '7186c526-83db-4159-b3ce-42569955010f',
    name: 'Kanban',
    level: 'Intermedio',
    Icon: IconMongoDB,
  },
];

export const skillDBs: SkillType[] = [
  {
    id: 'f8f919ba-6a5e-4e5d-8ca0-28ce9ba66e3e',
    name: 'MongoDB',
    level: 'Avanzado',
    Icon: IconMongoDB,
  },

  {
    id: 'df9227b2-ff7a-4bcf-92b7-27855d59ca33',
    name: 'MySQL',
    level: 'Avanzado',
    Icon: IconMySql,
  },
  {
    id: '85926f60-b7d3-49c7-b5c6-a52a9b1b392b',
    name: 'Firebase',
    level: 'Intermedio',
    Icon: IconFirebase,
  },
  {
    id: '93a40b6e-0f43-48ae-a37e-a69585050672',
    name: 'PostgreSQL',
    level: 'Intermedio',
    Icon: IconPostgresql,
  },
  {
    id: 'db0102ac-af60-4b52-beb9-6d3fc86c148c',
    name: 'SqlServer',
    level: 'Intermedio',
    Icon: IconSqlServer,
  },
];
