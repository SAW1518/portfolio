import { ExperienceCompany } from 'src/components';
import styles from './experience-time-line.module.css';
import { EXPERIENCE_COMPANY_DATA } from 'src/constants';

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
