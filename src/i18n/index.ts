import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import bg from '../../public/locales/bg.json';
import en from '../../public/locales/en.json';

i18n.use(initReactI18next).init({
  lng: 'bg',
  fallbackLng: 'en',
  supportedLngs: ['en', 'bg'],
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: { translation: en },
    bg: { translation: bg },
  },
});

export default i18n;
