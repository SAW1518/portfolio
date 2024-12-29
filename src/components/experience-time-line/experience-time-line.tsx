import styles from './experience-time-line.module.css';
import { ExperienceCompany, ExperienceCompanyProps } from 'src/components';

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
        positionDescription: 'Frontend developer for Expedia group Login and Profile Teams',
        skills: [
          'Javascript',
          'Typescript',
          'React',
          'Jest',
          'Cypress',
          'Github actions',
          'Github',
          'Node.js',
          'REST APIs',
        ],
        images: ['/UP.png', '/login.png', '/section-management.png', '/delete.png'],
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
        images: [],
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
        images: [],
      },
      {
        position: 'Software Developer',
        companyNameAndTime: 'M0SB1T · Full-time',
        dates: 'Nov. 2019 - Jul. 2020 · 9 months',
        location: 'Zapopan, Jalisco, México · Remote',
        positionDescription: 'React Native Developer',
        skills: ['Javascript', 'NPM', 'React Native', 'REST APIs'],
        images: [],
      },
      {
        position: 'Training Intern',
        companyNameAndTime: 'M0SB1T · Full-time',
        dates: 'Jun. 2019 - Nov. 2019 · 6 months',
        location: 'Zapopan, Jalisco, México · Remote',
        positionDescription: 'React Native Developer',
        skills: ['Javascript', 'NPM', 'React Native', 'REST APIs'],
        images: [],
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
