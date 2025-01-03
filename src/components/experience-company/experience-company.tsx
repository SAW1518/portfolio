import { Position, PositionProps } from 'src/components';
import styles from './experience-company.module.css';

export interface ExperienceCompanyProps {
  imageSrc: string;
  imageAlt: string;
  positionList?: PositionProps[];
}

export const ExperienceCompany = (prop: ExperienceCompanyProps) => {
  const { imageSrc, imageAlt, positionList } = prop;
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
        {positionList?.map((position) => (
          <Position {...position} key={position.positionDescription} />
        ))}
      </div>
    </article>
  );
};
