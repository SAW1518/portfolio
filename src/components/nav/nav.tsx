import { ChangeEvent, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './nav.module.css';

import { GlobalIcon } from 'src/icons';
import { getCurrentLanguage } from 'src/utils';
import { ABOUT_ID, SKILLS_ID, CONTACT_ID, EXPERIENCE_ID } from 'src/constants';
export const Nav = () => {
  const [language, setLanguage] = useState(getCurrentLanguage());
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
    i18n.changeLanguage(event.target.value);
  }, []);

  return (
    <header className={styles.navWrapper}>
      <nav className={styles.nav}>
        <ul className={styles.navListWrapper}>
          <li>
            <a href={`#${ABOUT_ID}`} className={styles.navItemWrapper}>
              {t('ABOUT')}
            </a>
          </li>
          <li>
            <a href={`#${SKILLS_ID}`} className={styles.navItemWrapper}>
              {t('SKILLS')}
            </a>
          </li>
          <li>
            <a href={`#${CONTACT_ID}`} className={styles.navItemWrapper}>
              {t('CONTACT')}
            </a>
          </li>
          <li>
            <a href={`#${EXPERIENCE_ID}`} className={styles.navItemWrapper}>
              {t('EXPERIENCE')}
            </a>
          </li>
        </ul>
        <label className={styles.labelWrapper}>
          <GlobalIcon />
          <select
            className={styles.selectLanguage}
            value={language}
            onChange={handleChangeLanguage}
          >
            <option value="es">Español</option>
            <option value="en">English</option>
          </select>
        </label>
      </nav>
    </header>
  );
};
