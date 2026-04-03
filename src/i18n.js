import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import eng from "./locales/en.json";
import rus from "./locales/ru.json";
import taj from "./locales/tj.json";

i18next.use(initReactI18next).init({
  resources: {
    en: { translation: eng },
    ru: { translation: rus },
    tj: { translation: taj },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
