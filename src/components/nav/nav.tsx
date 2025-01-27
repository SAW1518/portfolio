import { ABOUT_ID, SKILLS_ID, CONTACT_ID, EXPERIENCE_ID } from 'src/constants';
import styles from './nav.module.css';
// import { useRef, useState } from 'react';
// import { GlobalIcon } from 'src/icons';

export const Nav = () => {
  // const [language, setLanguage] = useState('en');

  // const selectRef = useRef<HTMLSelectElement>(null);

  // // Función para abrir el <select> al hacer clic en el SVG
  // const handleSvgClick = () => {
  //   if (selectRef.current) {
  //     selectRef.current.click(); // Dispara el evento de click
  //   }
  // };

  // const handleChangeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setLanguage(event.target.value);
  // };

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
        {/* <label  className={styles.labelWrapper}>
          <GlobalIcon onClick={handleSvgClick} />
          <select
            ref={selectRef}
            className={styles.selectLanguage}
            value={language}
            onChange={handleChangeLanguage}
          >
            <option value="es">Spanish</option>
            <option value="en">English</option>
          </select>
        </label> */}
      </nav>
    </header>
  );
};
