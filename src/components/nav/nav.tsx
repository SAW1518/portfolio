import { ABOUT_ID, SKILLS_ID, CONTACT_ID, EXPERIENCE_ID } from 'src/constants';
import styles from './nav.module.css';
import { useState } from 'react';
import { GlobalIcon } from 'src/icons';

export const Nav = () => {
  const [language, setLanguage] = useState('en');

  const handleChangeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
  };

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
        <label htmlFor="select_language" className={styles.labelWrapper}>
          <GlobalIcon />
          <select
            id="select_language"
            className={styles.selectLanguage}
            value={language}
            onChange={handleChangeLanguage}
          >
            <option value="es">Spanish</option>
            <option value="en">English</option>
          </select>
        </label>
      </nav>
    </header>
  );
};
