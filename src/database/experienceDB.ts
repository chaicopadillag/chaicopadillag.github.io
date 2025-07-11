import { ExperienceType } from '../types/ExperienceType';

export const experienceDB: ExperienceType[] = [
  {
    id: 'a2820888-c7d8-4392-a8f5-75b515de6ebc',
    position: 'Backend Developer',
    company: 'Indra (Rimac)',
    location: 'Lima',
    startDate: 'Octubre, 2024',
    endDate: 'Presente',
    achievements: [
      'Diseño e implementación de soluciones backend serverless compuestas por AWS Lambda, API Gateway y DynamoDB, conformando microservicios desacoplados y escalables con Node.js, NestJS y Serverless Framework.',
      'Construcción de flujos orquestados mediante AWS Step Functions, integrando servicios como Lambda, SNS, DynamoDB y EventBridge para procesos tanto síncronos como asíncronos.',
      'Gestión de la seguridad en APIs mediante AWS Cognito (autenticación y autorización), API Keys y AWS Signature V4, cumpliendo con buenas prácticas de protección de endpoints.',
      'Desarrollo de pruebas automatizadas con Jest y Jest-Cucumber, aplicando metodologías de TDD y BDD para asegurar la calidad y mantenibilidad del código.',
      'Uso de herramientas de observabilidad y logging como AWS CloudWatch y AWS X-Ray para monitoreo, trazabilidad y resolución de incidencias.',
      'Aplicación de prácticas DevSecOps y despliegues automatizados mediante pipelines CI/CD utilizando servicios como Azure DevOps.'
    ],
    workingDay: 'Full-time'
  },
  {
    id: 'd46181a2-369b-4842-9d30-917bb88c833b',
    position: 'Backend Developer',
    company: 'Tismart (Niubiz)',
    location: 'Lima',
    startDate: 'Septiembre, 2022',
    endDate: 'Febrero, 2024',
    achievements: [
      'Fui encargado del diseño y desarrollo de servicios y APIs en el proyecto NEL - Niubiz en Línea, utilizando tecnologías avanzadas como Java Spring Boot, Node.js, NestJS y MongoDB.',
      'Utilicé tecnologías en la nube, como AWS S3 para almacenamiento, SQS para colas de mensajes, y EKS para la administración de contenedores con Kubernetes.',
      'Utilicé CodePipeline para Integración Continua (CI) y Despliegue Continuo (CD) para agilizar el proceso de desarrollo y entrega continua.',
      'Implementé RabbitMQ y Redis para mejorar la gestión de mensajes y la eficiencia del sistema.',
      'Estrategias de seguridad con JWT, Passport y Spring Security.',
      'Aplicación de programación reactiva con RXJS y RxJava para mejorar la capacidad de respuesta.',
      'Implementación de pruebas unitarias con Jest, Mockito, y monitoreo con NewRelic e integración para asegurar la calidad del software.'
    ],
    workingDay: 'Full-time'
  },
  {
    id: '5615f938-8787-4211-9d2d-d188fb6b0a7c',
    position: 'Full-stack Developer',
    company: 'Biolink',
    location: 'USA',
    startDate: 'Agosto, 2022',
    endDate: 'Septiembre, 2024',
    achievements: [
      'Lidero el equipo de desarrollo como desarrollador Full-stack, utilizando el framework PHP Laravel para crear servicios API RESTful con base de datos MySQL, empleando el ORM Eloquent para garantizar una gestión eficiente de la base de datos.',
      'Implementé un microservicio de tracking con Node.js y NestJS, respaldado por una base de datos MongoDB, optimizando la escalabilidad y rendimiento del sistema.',
      'En el Frontend, utilicé React.js con Next.js, aprovechando el SSR (Server-Side Rendering) para mejorar el SEO y la velocidad de carga de la aplicación.',
      'Implementé Redux Toolkit y Context API para gestionar de manera eficiente el estado de la aplicación, haciendo uso de Hooks para la creación de componentes dinámicos.',
      'Integré la autenticación OAuth2 y JWT para garantizar la seguridad de las transacciones y el acceso autorizado a los recursos del sistema.',
      'Incorporé Cookies e Internacionalización (Intl) para admitir 6 idiomas, mejorando la accesibilidad y la experiencia del usuario.'
    ],
    workingDay: 'Part-time'
  },
  {
    id: '75d7cda0-54c7-459d-beb6-859a32a991a4',
    position: 'Full-stack Developer',
    company: 'SportBetPerú',
    location: 'Lince',
    startDate: 'Julio, 2020',
    endDate: 'Julio, 2022',
    achievements: [
      'Lideré el desarrollo integral de sistemas de gestión para clientes, socios y locales de apuesta.',
      'Desarrollé API RESTful en el Backend utilizando Laravel (PHP) y Node.js con NestJS y Express.js, asegurando un diseño modular y escalable.',
      'Integré bases de datos MongoDB y MySQL para respaldar la funcionalidad del sistema.',
      'Implementé Socket.io para habilitar la comunicación en tiempo real en aplicaciones específicas.',
      'Utilicé JWT (JSON Web Tokens) y Passport para la autenticación segura de usuarios en el sistema.',
      'Implementé Redis para la gestión eficiente de caché y almacenamiento en memoria.',
      'Implementé React.js con Next.js para la creación de interfaces de usuario interactivas y modernas en el Frontend.',
      'Colaboré en el diseño e implementación de estilos utilizando Tailwind CSS para una interfaz atractiva y responsiva.'
    ],
    workingDay: 'Full-time'
  },
  {
    id: 'fd4b3413-409e-4863-93e8-f82e687d72d4',
    position: 'Programador',
    company: 'Halema SAC',
    location: 'Callao',
    startDate: 'Febrero, 2017',
    endDate: 'Marzo, 2019',
    achievements: [
      'Desarrollé y mantuve el sistema de ventas de la empresa utilizando PowerBuilder, destacando en el mantenimiento de tablas maestras y generación de reportes.',
      'Brindé soporte remoto al usuario, garantizando una experiencia fluida y resolviendo eficientemente cualquier problema técnico relacionado con el sistema.',
      'Gestioné la Base de Datos en PostgreSql mediante PgAdmin, realizando consultas, funciones, reportes y actualización de datos para asegurar la integridad y eficiencia del sistema.',
      'Contribuí activamente a la mejora continua del sistema, proponiendo y desarrollando soluciones para optimizar la funcionalidad y el rendimiento.'
    ],
    workingDay: 'Full-time'
  }
];
