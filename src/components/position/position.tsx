import styles from './position.module.css';
import { CalendarIcon, LocationIcon } from 'src/icons';
import { TitleSection } from '../title-section/title-section';
import { Skills } from '../skills/skills';

export interface PositionProps {
  position: string;
  companyNameAndTime: string;
  dates: string;
  location: string;
  positionDescription: string;
  skills?: string[];
  images?: string[];
}

export const Position = ({
  position,
  companyNameAndTime,
  dates,
  location,
  positionDescription,
  skills,
  images,
}: PositionProps) => {
  return (
    <>
      <TitleSection tag="h4" title={position} />
      <p className={styles.companyAndTime}>{companyNameAndTime}</p>
      <div className={styles.dateAndLocationWrapper}>
        <p className={styles.companyAndTime}>
          <CalendarIcon className={styles.icon} />
          {dates}
        </p>
        <p className={styles.companyAndTime}>
          <LocationIcon className={styles.icon} /> {location}
        </p>
      </div>
      <p className={styles.companyAndTime}>{positionDescription}</p>
      <Skills skills={skills} />
      <section className={styles.proyectsWrapper}>
        {images?.map((item) => (
          <img src={item} className={styles.imgContainer} />
        ))}
      </section>
    </>
  );
};
