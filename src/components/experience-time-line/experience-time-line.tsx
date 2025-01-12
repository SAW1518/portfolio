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
          ' Frontend Developer in Expedia Group Authentication, Login, and Profile Teams, with expertise in applications such as Login, Profile, and Session Management. I am actively involved in the authentication processes for Expedia and its associated sub-brands, that includes platforms like Expedia.com, Vrbo.com, Hoteles.com, Wotif.com, Lastminute.au, Trivago.com, and more. ',
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
            companyName: 'EPAM Systems',
            src: '/login.png',
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
            companyName: 'EPAM Systems',
            src: '/UP.png',
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
            companyName: 'EPAM Systems',
            src: '/section-management.png',
            titule: 'Working in Session management in Expedia grup',
            urls: ['https://www.expedia.com/account-security?dvc_history=true'],
            descripcion: 'Sign in required *',
          },
          {
            companyName: 'EPAM Systems',
            src: '/delete.png',
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
        skills: ['Javascript', 'Typescript', 'React', 'Jest', 'Github', 'REST APIs'],
      },
    ],
  },
  {
    imageSrc: '/m0sb1t_logo.jpeg',
    imageAlt: 'M0SB1T System Lopo',
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
        positionDescription: 'React Native Developer',
        skills: ['Javascript', 'NPM', 'React Native', 'REST APIs'],
      },
      {
        position: 'Training Intern',
        companyNameAndTime: 'M0SB1T · Full-time',
        dates: 'Jun. 2019 - Nov. 2019 · 6 months',
        location: 'Zapopan, Jalisco, México · Remote',
        positionDescription: 'React Native Developer',
        skills: ['Javascript', 'NPM', 'React Native', 'REST APIs'],
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
