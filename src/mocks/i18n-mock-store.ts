import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../../public/locales/en/translation.json';

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',

    // have a common namespace used around the full app
    ns: ['translationsNS'],
    defaultNS: 'translationsNS',

    debug: true,

    interpolation: {
      escapeValue: false,
    },

    resources: {
      en: {
        translationsNS: {
          ...en,
        },
      },
    },
  });

export default i18n;
