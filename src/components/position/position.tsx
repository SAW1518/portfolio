import styles from './position.module.css';
import { CalendarIcon, LocationIcon } from 'src/icons';
import { Skills } from '../skills/skills';
import { useCallback, useState } from 'react';
import { ProjectsCarousel, TitleSection } from 'src/components';
import { useTranslation } from 'react-i18next';
import { calculateDate, getCurrentLanguage } from 'src/utils/utils.utils';
import { useAlert } from 'src/hooks';

export interface PositionProps {
  position: string;
  companyNameAndTime: string;
  dates: string | { initDate: Date; endDate: Date };
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
  descripcion: string | string[];
}

export const Position = (props: PositionProps) => {
  const { position, companyNameAndTime, dates, location, positionDescription, skills, images } =
    props;

  const [showCarousel, setShowCarousel] = useState<number | null>(null);
  const { t } = useTranslation();
  const { openCarousel, closeCarousel } = useAlert();

  const setShowCarouselIndex = useCallback(
    (index: number | null) => {
      setShowCarousel(index);
      if (index !== null) {
        openCarousel();
      } else {
        closeCarousel();
      }
    },
    [setShowCarousel, openCarousel, closeCarousel],
  );

  return (
    <>
      <TitleSection tag="h4" title={t(position)} />
      <p className={styles.companyAndTime}>{t(companyNameAndTime)}</p>
      <div className={styles.dateAndLocationWrapper}>
        <p className={styles.companyAndTime}>
          <CalendarIcon className={styles.icon} />
          {dates instanceof Object
            ? `${calculateDate({ date: dates, lang: getCurrentLanguage() })} ${t('MONTHS')}`
            : t(dates)}
        </p>
        <p className={styles.companyAndTime}>
          <LocationIcon className={styles.icon} /> {t(location)}
        </p>
      </div>
      <p className={styles.companyAndTime}>{t(positionDescription)}</p>
      <Skills skills={skills} />
      <section className={styles.proyectsWrapper}>
        {images?.map((item, index) => (
          <button
            key={item.src}
            onClick={() => {
              setShowCarouselIndex(index);
            }}
            className={styles.btnContainerImage}
          >
            <div className={styles.overlayImage}>
              <span className={styles.overlayText}>{t('SEE_MORE')}</span>
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
