import styles from './position.module.css';
import { CalendarIcon, LocationIcon } from 'src/icons';
import { Skills } from '../skills/skills';
import { ProjectsCarousel, TitleSection } from 'src/components';
import { useCallback, useState } from 'react';

export interface PositionProps {
  position: string;
  companyNameAndTime: string;
  dates: string;
  location: string;
  positionDescription: string;
  skills?: string[];
  images?: string[];
}

export const Position = (props: PositionProps) => {
  const { position, companyNameAndTime, dates, location, positionDescription, skills, images } =
    props;
  const [showCarousel, setShowCarousel] = useState<{ images: string[] }>({ images: [] });

  const openCarousel = useCallback((images: string[]) => {
    setShowCarousel({ images });
  }, []);

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
          <button
            onClick={() => {
              openCarousel(images);
            }}
            className={styles.btnContainerImage}
          >
            <div className={styles.overlayImage}>
              <span className={styles.overlayText}>See more WIP</span>
            </div>
            <img src={item} className={styles.imgContainer} key={item} />
          </button>
        ))}
      </section>
      <ProjectsCarousel images={showCarousel.images} />
    </>
  );
};
