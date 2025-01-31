import { ExperienceCompany, ExperienceCompanyProps } from 'src/components';
import styles from './experience-time-line.module.css';

const EXPERIENCE_COMPANY_DATA: ExperienceCompanyProps[] = [
  {
    imageSrc: '/epam_systems_logo.jpeg',
    imageAlt: 'EPAM System Lopo',
    positionList: [
      {
        position: 'TITULE',
        companyNameAndTime: 'EPAM_SYSTEMS_TIME',
        dates: 'Mar 2024 - Present · 10 months',
        location: 'LOCATION',
        positionDescription: 'POSITION_DESCRIPTION_EPAM',
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
            companyName: 'EPAM_IMAGES_COMPANY_NAME_1',
            src: 'expeda/login.png',
            titule: 'EPAM_IMAGES_TITLE_1',
            urls: [
              'https://www.expedia.com/login',
              'https://www.vrbo.com/login?enable_login=true',
              'https://www.hoteles.com/login',
              'https://www.wotif.com/login',
            ],
            descripcion: 'SIGN_IN_REQUIRED',
          },
          {
            companyName: 'EPAM_IMAGES_COMPANY_NAME_1',
            src: 'expeda/UP.png',
            titule: 'EPAM_IMAGES_TITLE_2',
            urls: [
              'https://www.expedia.com/account',
              'https://www.vrbo.com/account',
              'https://www.hoteles.com/account',
              'https://www.wotif.com/account',
            ],
            descripcion: 'SIGN_IN_REQUIRED',
          },
          {
            companyName: 'EPAM_IMAGES_COMPANY_NAME_1',
            src: 'expeda/section-management.png',
            titule: 'EPAM_IMAGES_TITLE_3',
            urls: ['https://www.expedia.com/account-security?dvc_history=true'],
            descripcion: 'SIGN_IN_REQUIRED',
          },
          {
            companyName: 'EPAM_IMAGES_COMPANY_NAME_1',
            src: 'expeda/delete.png',
            titule: 'EPAM_IMAGES_TITLE_4',
            urls: [
              'https://www.expedia.com/user/delete',
              'https://www.vrbo.com/user/delete',
              'https://www.hoteles.com/user/delete',
              'https://www.wotif.com/user/delete',
            ],
            descripcion: 'SIGN_IN_REQUIRED',
          },
        ],
      },
    ],
  },
  {
    imageSrc: '/luxoft_logo.jpeg',
    imageAlt: 'Luxoft System Logo',
    positionList: [
      {
        position: 'TITULE',
        companyNameAndTime: 'LUXOFT_TIME',
        dates: 'Feb. 2022 - Mar. 2024 · 2 yers 2 months',
        location: 'LOCATION',
        positionDescription: 'POSITION_DESCRIPTION_LUXOFT',
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
    imageAlt: 'M0SB1T Logo',
    positionList: [
      {
        position: 'FRONTEND_LEAD_DEVELOPER',
        companyNameAndTime: 'MOSBIT_TIME',
        dates: 'Jun. 2020 - Feb. 2022 · 1 yers 9 months',
        location: 'LOCATION',
        positionDescription: 'POSITION_DESCRIPTION_M0SB1T_1',
        skills: [
          'Javascript',
          'NPM',
          'React',
          'Jest',
          'REST APIs',
          'Node.js',
          'CSS',
          'HTML',
          'Express.js',
        ],
      },
      {
        position: 'SOFTWARE_DEVELOPER',
        companyNameAndTime: 'MOSBIT_TIME',
        dates: 'Nov. 2019 - Jul. 2020 · 9 months',
        location: 'LOCATION',
        positionDescription: 'POSITION_DESCRIPTION_M0SB1T_2',
        skills: ['C/C++', 'Android'],
      },
      {
        position: 'TRAINING_INTERN',
        companyNameAndTime: 'MOSBIT_TIME',
        dates: 'Jun. 2019 - Nov. 2019 · 6 months',
        location: 'LOCATION',
        positionDescription: 'POSITION_DESCRIPTION_M0SB1T_3',
        skills: ['Javascript', 'React Native', 'NPM', 'REST APIs', 'Node.js'],
        images: [
          {
            companyName: 'M0SBIT_IMAGES_COMPANY_NAME_1',
            src: 'mosbit/community_login.png',
            titule: 'M0SBIT_IMAGES_TITLE_1',
            urls: [],
            descripcion: ['M0SBIT_DESCRIPTION_1', 'M0SBIT_DESCRIPTION_2'],
          },
          {
            companyName: 'M0SBIT_IMAGES_COMPANY_NAME_2',
            src: 'mosbit/community_home.jpeg',
            titule: 'M0SBIT_IMAGES_TITLE_1',
            urls: [],
            descripcion: ['M0SBIT_DESCRIPTION_1', 'M0SBIT_DESCRIPTION_3', 'M0SBIT_DESCRIPTION_4'],
          },
          {
            companyName: 'M0SBIT_IMAGES_COMPANY_NAME_3',
            src: 'mosbit/community_resivo.png',
            titule: 'M0SBIT_IMAGES_TITLE_1',
            urls: [],
            descripcion: ['M0SBIT_DESCRIPTION_1', 'M0SBIT_DESCRIPTION_5'],
          },
          {
            companyName: 'M0SBIT_IMAGES_COMPANY_NAME_4',
            src: 'mosbit/community_muticoto.png',
            titule: 'M0SBIT_IMAGES_TITLE_1',
            urls: [],
            descripcion: ['M0SBIT_DESCRIPTION_1', 'M0SBIT_DESCRIPTION_6'],
          },
          {
            companyName: 'M0SBIT_IMAGES_COMPANY_NAME_5',
            src: 'mosbit/community_quejas.png',
            titule: 'M0SBIT_IMAGES_TITLE_1',
            urls: [],
            descripcion: ['M0SBIT_DESCRIPTION_1', 'M0SBIT_DESCRIPTION_7', 'M0SBIT_DESCRIPTION_8'],
          },
          {
            companyName: 'M0SBIT_IMAGES_COMPANY_NAME_6',
            src: 'mosbit/community_quejas_chat.png',
            titule: 'M0SBIT_IMAGES_TITLE_1',
            urls: [],
            descripcion: ['M0SBIT_DESCRIPTION_1', 'M0SBIT_DESCRIPTION_9'],
          },
          {
            companyName: 'M0SBIT_IMAGES_COMPANY_NAME_7',
            src: 'mosbit/community_areas_verdes.png',
            titule: 'M0SBIT_IMAGES_TITLE_1',
            urls: [],
            descripcion: ['M0SBIT_DESCRIPTION_1', 'M0SBIT_DESCRIPTION_10'],
          },
          {
            companyName: 'M0SBIT_IMAGES_COMPANY_NAME_8',
            src: 'mosbit/community_areas_verdes_reserva.png',
            titule: 'M0SBIT_IMAGES_TITLE_1',
            urls: [],
            descripcion: ['M0SBIT_DESCRIPTION_1', 'M0SBIT_DESCRIPTION_11'],
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
      {EXPERIENCE_COMPANY_DATA.map((EC_DATA) => (
        <ExperienceCompany {...EC_DATA} key={EC_DATA.imageAlt} />
      ))}
    </section>
  );
};
