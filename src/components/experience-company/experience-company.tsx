import styles from "./experience-company.module.css";
import { Position, PositionType } from "../position/position";

interface ExperienceCompanyProps {
  imageSrc: string;
  imageAlt: string;
  experienceCompanyList?: PositionType[];
}

const foo: PositionType[] = [
  {
    position: "Software Engineer - JavaScript",
    companyNameAndTime: "EPAM Systems · Full-time",
    dates: "Mar 2024 - Present · 10 months Guadalajara, Jalisco",
    location: "Guadalajara, Jalisco, México · Remote",
    positionDescription: "Frontend developer for Expedia group Login and Profile Teams",
    skills: ["React", "Jest", "Cypress", "Jest"],
  },
];

export const ExperienceCompany = (prop: ExperienceCompanyProps) => {
  const { imageSrc, imageAlt } = prop;
  return (
    <article className={styles.companyWrapper}>
      <div className={styles.imageContainer}>
        <img
          className={styles.experienceImage}
          alt={imageAlt}
          loading="lazy"
          width="64"
          height="64"
          src={imageSrc}
        />
        <div className={styles.circule} />
      </div>
      <div className={styles.companyInfo}>
        {foo.map((position) => (
          <Position {...position} key={position.positionDescription} />
        ))}
      </div>
    </article>
  );
};
