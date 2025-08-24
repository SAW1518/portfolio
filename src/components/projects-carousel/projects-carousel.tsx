import { createPortal } from 'react-dom';
import { useCallback, useEffect } from 'react';
import styles from './projects-carousel.module.css';
import { ImagesType } from 'src/components';
import { BackIcon, CloseIcon, NextIcon } from 'src/icons';
import { useTranslation } from 'react-i18next';
import { useAlert } from 'src/hooks';

interface ProjectsCarouselProps {
  images: ImagesType[];
  index: number;
  setShowCarouselIndex: (index: number | null) => void;
}

type BtnContentType = {
  [key: string]: { operationToShow: ImagesType; operation: () => void; icon: JSX.Element };
};

export const ProjectsCarousel = ({
  images,
  index,
  setShowCarouselIndex,
}: ProjectsCarouselProps) => {
  const { t } = useTranslation();
  const { closeCarousel } = useAlert();
  const pageWrapper = document.getElementById('pageWrapper') as Element;
  const root = document.getElementById('root');
  const currentImage = images[index];
  const indexMarker = `${index + 1} ${t('OF')} ${images.length}`;

  const toggleScroll = useCallback(
    (disable: boolean) => {
      if (root) {
        root.style.overflow = disable ? 'auto' : '';
      }
    },
    [root],
  );

  useEffect(() => {
    toggleScroll(true);
    return () => toggleScroll(false);
  }, [toggleScroll]);

  const handleClose = useCallback(() => {
    setShowCarouselIndex(null);
    closeCarousel();
    toggleScroll(false);
  }, [setShowCarouselIndex, closeCarousel, toggleScroll]);

  const BtnContent: BtnContentType = {
    Next: {
      operationToShow: images[index + 1],
      operation: () => setShowCarouselIndex(index + 1),
      icon: <NextIcon />,
    },
    Back: {
      operationToShow: images[index - 1],
      operation: () => setShowCarouselIndex(index - 1),
      icon: <BackIcon />,
    },
  };

  const CarouselBtn = ({ label }: { label: keyof typeof BtnContent }) => {
    return (
      <button className={styles.closeButton} onClick={BtnContent[label].operation}>
        {BtnContent[label].operationToShow && BtnContent[label].icon}
      </button>
    );
  };

  const DescripcionElement = ({ descripcion }: { descripcion: any }) => {
    if (Array.isArray(descripcion)) {
      return (
        <>
          {descripcion.map((des) => (
            <p key={des} className={styles.projectsCarouselPositionDescription}>
              {t(des)}
            </p>
          ))}
        </>
      );
    }
    return (
      <p className={styles.projectsCarouselPositionDescription}>{t(currentImage.descripcion)}</p>
    );
  };

  const RenderCarouselContent = () => (
    <div className={styles.projectsCarouselHoverly} id="projectsCarousel">
      <section className={styles.projectsCarouselModal}>
        <header className={styles.projectsCarouselHeader}>
          <h2 className={styles.projectsCarouselText}>{t(currentImage.companyName)}</h2>
          <button onClick={handleClose} className={styles.closeButton}>
            <CloseIcon />
          </button>
        </header>
        <main className={styles.projectsCarouselMain}>
          <div className={styles.projectsCarouselImageContainer}>
            <img
              className={styles.projectsCarouselImage}
              src={currentImage.src}
              alt={currentImage.companyName}
            />
            <div className={styles.projectsCarouselBtnContainer}>
              <CarouselBtn label="Back" />
              <CarouselBtn label="Next" />
            </div>
          </div>
          <div className={styles.projectsCarouselDescription}>
            <h3 className={styles.projectsCarouselSubHeading}>{t(currentImage.titule)}</h3>
            <DescripcionElement descripcion={currentImage.descripcion} />
            <ul>
              {images[index].urls.map((item) => (
                <li key={item}>
                  <a className={styles.siteLink} target="_blank" href={item}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <p className={styles.projectsCarouselPositionDescription}>{indexMarker}</p>
          </div>
        </main>
      </section>
    </div>
  );

  return createPortal(<RenderCarouselContent />, pageWrapper);
};
