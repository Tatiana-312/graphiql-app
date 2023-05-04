import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from './assets/languages/resourse';

i18n.use(initReactI18next).init({
  resources,
  lng: 'ENG',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
