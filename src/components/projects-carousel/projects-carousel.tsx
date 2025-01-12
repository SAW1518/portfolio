import { createPortal } from 'react-dom';
import { useCallback, useEffect } from 'react';
import styles from './projects-carousel.module.css';
import { ImagesType } from 'src/components';
import { CloseIcon } from 'src/icons';

interface ProjectsCarouselProps {
  images: ImagesType[];
  index: number;
  setShowCarouselIndex: (index: number | null) => void;
}

export const ProjectsCarousel = ({
  images,
  index,
  setShowCarouselIndex,
}: ProjectsCarouselProps) => {
  const pageWrapper = document.getElementById('pageWrapper') as Element;
  const root = document.getElementById('root');
  const currentImage = images[index];
  const indexMarker = `${index + 1} of ${images.length}`;

  const toggleScroll = useCallback(
    (disable: boolean) => {
      if (root) {
        root.style.overflow = disable ? 'hidden' : '';
        root.style.height = disable ? '100%' : '';
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
    toggleScroll(false);
  }, [setShowCarouselIndex, toggleScroll]);

  const RenderCarouselContent = () => (
    <div className={styles.projectsCarouselHoverly} id="projectsCarousel">
      <section className={styles.projectsCarouselModal}>
        <header className={styles.projectsCarouselHeader}>
          <h2 className={styles.projectsCarouselText}>{`${currentImage.companyName} Projects`}</h2>
          <button onClick={handleClose} className={styles.closeButton}>
            <CloseIcon />
          </button>
        </header>
        <main className={styles.projectsCarouselMain}>
          <div className={styles.projectsCarouselImageContainer}>
            <img
              className={styles.projectsCarouselImage}
              src={currentImage.src}
              alt={`${currentImage.companyName} Project`}
            />
          </div>
          <div className={styles.projectsCarouselDescription}>
            <h3 className={styles.projectsCarouselSubHeading}>{currentImage.titule}</h3>
            <p className={styles.projectsCarouselPositionDescription}>{currentImage.descripcion}</p>
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
            {/* <button
              onClick={() => {
                setShowCarouselIndex(index + 1);
              }}
            >
              Next
            </button> */}
          </div>
        </main>
      </section>
    </div>
  );

  return createPortal(<RenderCarouselContent />, pageWrapper);
};
