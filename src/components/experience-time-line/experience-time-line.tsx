import { TitleSection } from "../title-section/title-section";
import styles from "./experience-time-line.module.css";
export const ExperienceTimeLine = () => {
  return (
    <section className={styles.experienceListWrapper}>
      <div className={styles.line} />
      <article className={styles.companyWrapper}>
        <div className={styles.imageContainer}>
          <img
            className={styles.experienceImage}
            alt="EPAM system Lopo"
            loading="lazy"
            width="64"
            height="64"
            src="/epam_systems_logo.jpeg"
          />
          <div className={styles.circule} />
        </div>
        <div className={styles.companyInfo}>
          <TitleSection tag="h4" title="Software Engineer - JavaScript" />
          <p className={styles.companyAndTime}> EPAM Systems · Full-time </p>
          <p className={styles.companyAndTime}>
            Mar 2024 - Present · 10 months Guadalajara, Jalisco
          </p>
          <p className={styles.companyAndTime}>México · Remote</p>
          <p className={styles.companyAndTime}>
            Frontend developer for Expedia group Login and Profile Teams
          </p>
        </div>
      </article>
    </section>
  );
};
