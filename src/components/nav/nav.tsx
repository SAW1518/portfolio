import { ABOUT_ID, SKILLS_ID, CONTACT_ID, EXPERIENCE_ID } from 'src/constants';
import styles from './nav.module.css';

export const Nav = () => {
  return (
    <header className={styles.navWrapper}>
      <nav className={styles.nav}>
        <ul className={styles.navListWrapper}>
          <li>
            <a href={`#${ABOUT_ID}`} className={styles.navItemWrapper}>
              about
            </a>
          </li>
          <li>
            <a href={`#${SKILLS_ID}`} className={styles.navItemWrapper}>
              skills
            </a>
          </li>
          <li>
            <a href={`#${CONTACT_ID}`} className={styles.navItemWrapper}>
              contact
            </a>
          </li>
          <li>
            <a href={`#${EXPERIENCE_ID}`} className={styles.navItemWrapper}>
              experience
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
