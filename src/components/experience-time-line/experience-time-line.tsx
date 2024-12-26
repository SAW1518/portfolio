import styles from "./experience-time-line.module.css";
import { ExperienceCompany } from "src/components";
export const ExperienceTimeLine = () => {
  return (
    <section className={styles.experienceListWrapper}>
      <div className={styles.line} />
      <ExperienceCompany imageSrc={"/epam_systems_logo.jpeg"} imageAlt="EPAM system Lopo" />
    </section>
  );
};
