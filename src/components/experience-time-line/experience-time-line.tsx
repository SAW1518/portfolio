import { ExperienceCompany, ExperienceCompanyProps } from 'src/components';
import styles from './experience-time-line.module.css';

const foo: ExperienceCompanyProps[] = [
  {
    imageSrc: '/epam_systems_logo.jpeg',
    imageAlt: 'EPAM System Lopo',
    positionList: [
      {
        position: 'Software Engineer - JavaScript',
        companyNameAndTime: 'EPAM Systems · Full-time',
        dates: 'Mar 2024 - Present · 10 months',
        location: 'Guadalajara, Jalisco, México · Remote',
        positionDescription:
          'Front-end engineer at Expedia, Inc., part of the Membership Growth and Profile Team. Expertise in Universal Login, Profile, and Session Management. Actively involved in authentication processes for Expedia and its sub-brands, including Expedia, Vrbo, Hotels, Wotif, Lastminute, and Trivago.',
        skills: [
          'React',
          'GraphQL',
          'Javascript',
          'Typescript',
          'HTTPS',
          'CSS',
          'HTML',
          'Jest',
          'Cypress.js',
          'Github actions',
          'Github',
          'Node.js',
          'REST APIs',
        ],
        images: [
          {
            companyName: 'EPAM Systems Projects',
            src: 'expeda/login.png',
            titule: 'Working in sign in and sign up in Expedia grup',
            urls: [
              'https://www.expedia.com/login',
              'https://www.vrbo.com/login?enable_login=true',
              'https://www.hoteles.com/login',
              'https://www.wotif.com/login',
            ],
            descripcion: 'Sign in no required *',
          },
          {
            companyName: 'EPAM Systems Projects',
            src: 'expeda/UP.png',
            titule: 'Working in account-profile in Expedia grup',
            urls: [
              'https://www.expedia.com/account',
              'https://www.vrbo.com/account',
              'https://www.hoteles.com/account',
              'https://www.wotif.com/account',
            ],
            descripcion: 'Sign in required *',
          },
          {
            companyName: 'EPAM Systems Projects',
            src: 'expeda//section-management.png',
            titule: 'Working in Session management in Expedia grup',
            urls: ['https://www.expedia.com/account-security?dvc_history=true'],
            descripcion: 'Sign in required *',
          },
          {
            companyName: 'EPAM Systems Projects',
            src: 'expeda//delete.png',
            titule: 'Working in Delete account in Expedia grup',
            urls: [
              'https://www.expedia.com/user/delete',
              'https://www.vrbo.com/user/delete',
              'https://www.hoteles.com/user/delete',
              'https://www.wotif.com/user/delete',
            ],
            descripcion: 'Sign in required *',
          },
        ],
      },
    ],
  },
  {
    imageSrc: '/luxoft_logo.jpeg',
    imageAlt: 'Luxoft System Lopo',
    positionList: [
      {
        position: 'Software Engineer - JavaScript',
        companyNameAndTime: 'Luxoft · Full-time',
        dates: 'Feb. 2022 - Mar. 2024 · 2 yers 2 months',
        location: 'Guadalajara, Jalisco, México · Remote',
        positionDescription: 'Frontend developer',
        skills: [
          'React',
          'GraphQL',
          'Javascript',
          'Typescript',
          'HTTPS',
          'CSS',
          'HTML',
          'Jest',
          'Cypress.js',
          'Github',
          'Node.js',
          'REST APIs',
        ],
      },
    ],
  },
  {
    imageSrc: 'mosbit/m0sb1t_logo.jpeg',
    imageAlt: 'M0SB1T Lopo',
    positionList: [
      {
        position: 'Frontend Lead Developer',
        companyNameAndTime: 'M0SB1T · Full-time',
        dates: 'Jun. 2020 - Feb. 2022 · 1 yers 9 months',
        location: 'Guadalajara, Jalisco, México · Remote',
        positionDescription: 'Principal Frontend Lead',
        skills: ['Javascript', 'NPM', 'React', 'Jest', 'REST APIs'],
      },
      {
        position: 'Software Developer',
        companyNameAndTime: 'M0SB1T · Full-time',
        dates: 'Nov. 2019 - Jul. 2020 · 9 months',
        location: 'Zapopan, Jalisco, México · Remote',
        positionDescription: 'Android and C/C++ Developer',
        skills: ['C/C++', 'Android'],
      },
      {
        position: 'Training Intern',
        companyNameAndTime: 'M0SB1T · Full-time',
        dates: 'Jun. 2019 - Nov. 2019 · 6 months',
        location: 'Zapopan, Jalisco, México · Remote',
        positionDescription: 'React Native Developer',
        skills: ['Javascript', 'React Native', 'NPM', 'REST APIs', 'Node.js'],
        images: [
          {
            companyName: 'M0SB1T: Community App (Home screen)',
            src: 'mosbit/community_login.png',
            titule:
              'Community: Application to manage the administration of residential complex ( Android & IOS )',
            urls: [],
            descripcion: ['Application removed from stores by M0sbit *', 'Login screen'],
          },
          {
            companyName: 'M0SB1T: Community App (Home screen)',
            src: 'mosbit/community_home.jpeg',
            titule:
              'Application to manage the administration of residential complex ( Android & IOS )',
            urls: [],
            descripcion: [
              'Application removed from stores by M0sbit *',
              'The user can navigate between the lower taps',
              'The user can also select the balance of each account.',
            ],
          },
          {
            companyName: 'M0SB1T: Community App (Note)',
            src: 'mosbit/community_resivo.png',
            titule:
              'Community: Application to manage the administration of residential complex ( Android & IOS )',
            urls: [],
            descripcion: [
              'Application removed from stores by M0sbit *',
              'The user can download payment receipts in PDF format',
            ],
          },
          {
            companyName: 'M0SB1T: Community App (Muti Hose seccion)',
            src: 'mosbit/community_muticoto.png',
            titule:
              'Community: Application to manage the administration of residential complex ( Android & IOS )',
            urls: [],
            descripcion: [
              'Application removed from stores by M0sbit *',
              'When the user has multiple residences can choose which one to review',
            ],
          },
          {
            companyName: 'M0SB1T: Community App (Complaints List)',
            src: 'mosbit/community_quejas.png',
            titule:
              'Community: Application to manage the administration of residential complex ( Android & IOS )',
            urls: [],
            descripcion: [
              'Application removed from stores by M0sbit *',
              'The user can access a list with the suggestion list.',
              'This list has different channels such as direct communication with the administration or with other neighbors.',
            ],
          },
          {
            companyName: 'M0SB1T: Community App (Complaints Chat)',
            src: 'mosbit/community_quejas_chat.png',
            titule:
              'Community: Application to manage the administration of residential complex ( Android & IOS )',
            urls: [],
            descripcion: [
              'Application removed from stores by M0sbit *',
              'The user can select any of these complaints and have a chat with the administration or with the neighbors.',
            ],
          },
          {
            companyName: 'M0SB1T: Community App (Green Areas)',
            src: 'mosbit/community_areas_verdes.png',
            titule:
              'Community: Application to manage the administration of residential complex ( Android & IOS )',
            urls: [],
            descripcion: [
              'Application removed from stores by M0sbit *',
              'The user can access a list with the Green Areas lists.',
            ],
          },
          {
            companyName: 'M0SB1T: Community App (Green Areas)',
            src: 'mosbit/community_areas_verdes_reserva.png',
            titule:
              'Community: Application to manage the administration of residential complex ( Android & IOS )',
            urls: [],
            descripcion: [
              'Application removed from stores by M0sbit *',
              'Once the user selects a green area, he can select a day/hour to reserve it.',
            ],
          },
        ],
      },
    ],
  },
];

export const ExperienceTimeLine = () => {
  return (
    <section className={styles.experienceListWrapper}>
      <div className={styles.line} />
      {foo.map((EC) => (
        <ExperienceCompany {...EC} key={EC.imageAlt} />
      ))}
    </section>
  );
};
