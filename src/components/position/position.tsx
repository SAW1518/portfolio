import styles from './position.module.css';
import { CalendarIcon, LocationIcon } from 'src/icons';
import { Skills } from '../skills/skills';
import { useCallback, useState } from 'react';
import { ProjectsCarousel, TitleSection } from 'src/components';

export interface PositionProps {
  position: string;
  companyNameAndTime: string;
  dates: string;
  location: string;
  positionDescription: string;
  skills?: string[];
  images?: ImagesType[];
}

export interface ImagesType {
  companyName: string;
  src: string;
  titule: string;
  urls: string[];
  descripcion: string;
}

export const Position = (props: PositionProps) => {
  const { position, companyNameAndTime, dates, location, positionDescription, skills, images } =
    props;

  const [showCarousel, setShowCarousel] = useState<number | null>(null);

  const setShowCarouselIndex = useCallback(
    (index: number | null) => {
      setShowCarousel(index);
    },
    [setShowCarousel],
  );

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
        {images?.map((item, index) => (
          <button
            onClick={() => {
              setShowCarouselIndex(index);
            }}
            className={styles.btnContainerImage}
          >
            <div className={styles.overlayImage}>
              <span className={styles.overlayText}>See more</span>
            </div>
            <img src={item.src} className={styles.imgContainer} key={item.src} />
          </button>
        ))}
      </section>
      {images && showCarousel !== null && (
        <ProjectsCarousel
          images={images}
          index={showCarousel}
          setShowCarouselIndex={setShowCarouselIndex}
        />
      )}
    </>
  );
};
