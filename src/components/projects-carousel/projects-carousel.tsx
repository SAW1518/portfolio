import { createPortal } from 'react-dom';
import styles from './projects-carousel.module.css';
import { useEffect } from 'react';

interface ProjectsCarouselProps {
  showCarousel?: boolean;
  indexOpen?: number;
  images?: string[];
}

export const ProjectsCarousel = ({  images }: ProjectsCarouselProps) => {
  const pageWrapper = document.getElementById('pageWrapper') as Element;

  const {
    projectsCarouselHoverly,
    projectsCarouselModal,
    projectsCarouselHeader,
    projectsCarouselText,
    projectsCarouselMain,
    projectsCarouselImageContainer,
    projectsCarouselImage,
    projectsCarouselDescription,
    subHeading,
    projectsCarouselPositionDescription,
  } = styles;

  useEffect(() => {
    const root = document.getElementById('root');
    if (root && images?.length) {
      root.style.overflow = 'hidden';
      root.style.height = '100%';
    }
  }, [images]);
  console.log('xxx', images);

  if (!images?.length) {
    return null;
  }

  return createPortal(
    <div id="projectsCarousel" className={projectsCarouselHoverly}>
      <section className={projectsCarouselModal}>
        <header className={projectsCarouselHeader}>
          <h2 className={projectsCarouselText}>Luxoft Projects</h2>
        </header>
        <main className={projectsCarouselMain}>
          <div className={projectsCarouselImageContainer}>
            <img className={projectsCarouselImage} src={images[0]} />
          </div>
          <div className={projectsCarouselDescription}>
            <h3 className={subHeading}>Profile Management Interface</h3>
            <p className={projectsCarouselPositionDescription}>
              Proyectos desarrollados durante mi tiempo en Luxoft, incluyendo mejoras en la interfaz
              de usuario y nuevas funcionalidades.
            </p>
          </div>
        </main>
      </section>
    </div>,
    pageWrapper,
  );
};
