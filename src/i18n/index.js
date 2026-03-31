import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import enCommon from "./locales/en/common.json";
import arCommon from "./locales/ar/common.json";

const resources = {
  en: { common: enCommon },
  ar: { common: arCommon },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    defaultNS: "common",
    ns: ["common"],
    interpolation: { escapeValue: false },
    detection: {
      order: ["path"],
      lookupFromPathIndex: 0,
      lookupLocalStorage: "selectedLanguageCode",
      caches: [],
    },
  });

export default i18n;
