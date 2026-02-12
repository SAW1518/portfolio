import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useAlert } from 'src/hooks';
import { TitleSection } from '../title-section/title-section';
import { ProjectsCarousel } from '../projects-carousel/projects-carousel';
import styles from './recognitions.module.css';

export const Recognitions = () => {
 const { t } = useTranslation();
 const { openCarousel, closeCarousel } = useAlert();
 const [showCarousel, setShowCarousel] = useState<number | null>(null);

 const title = t('RECOGNITIONS');
 const awardTitleKey = 'ACCESSIBILITY_AWARD_TITLE';
 const awardDescKey = 'ACCESSIBILITY_AWARD_DESC';
 const awardLongDescKey = 'ACCESSIBILITY_AWARD_LONG_DESC';
 const awardImageSrc = "/awards/1769472832354.jpeg";

 const images = [
  {
   companyName: awardTitleKey,
   src: awardImageSrc,
   titule: awardDescKey,
   urls: [],
   descripcion: awardLongDescKey,
  },
 ];

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
  <section className={styles.wrapper}>
   <TitleSection tag="h3" title={title} />
   <button
    className={styles.card}
    onClick={() => setShowCarouselIndex(0)}
    type="button"
    aria-label={t('SEE_MORE')}
   >
    <div className={styles.imageContainer}>
     <img
      src={awardImageSrc}
      alt={t(awardTitleKey)}
      className={styles.image}
     />
    </div>
    <div className={styles.content}>
     <h4 className={styles.title}>{t(awardTitleKey)}</h4>
     <p className={styles.description}>{t(awardDescKey)}</p>
    </div>
   </button>
   {showCarousel !== null && (
    <ProjectsCarousel
     images={images}
     index={showCarousel}
     setShowCarouselIndex={setShowCarouselIndex}
    />
   )}
  </section>
 );
};
