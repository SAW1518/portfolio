import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'es-MX',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    backend: {
      // Ruta a tus archivos JSON
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    ns: ['translation'], // Espacios de nombres (puedes agregar más si necesitas)
    defaultNS: 'translation', // Espacio de nombres por defecto
  });

export default i18n;
