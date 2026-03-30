import { createContext, useContext, useEffect, useMemo, useState } from "react";

const LanguageContext = createContext(null);
const faviconHref = "/favicon.png";

const seoContent = {
  EN: {
    title: "ExploreTECH | Hospitality Technology Marketplace",
    description:
      "ExploreTECH connects hospitality professionals with trusted technology solutions, industry news, and vendors across the global hospitality market.",
  },
  AR: {
    title: "إكسبلور تك | سوق تقنيات الضيافة",
    description:
      "إكسبلور تك تربط المتخصصين في قطاع الضيافة بحلول تقنية موثوقة، وأحدث الأخبار، والموردين عبر سوق الضيافة العالمي.",
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("EN");

  useEffect(() => {
    window.localStorage.setItem("selectedLanguage", language);
    document.documentElement.lang = language === "AR" ? "ar" : "en";
    document.documentElement.dir = "ltr";

    const { title, description } = seoContent[language] || seoContent.EN;
    document.title = title;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    let iconLink = document.querySelector('link[rel="icon"]');
    if (!iconLink) {
      iconLink = document.createElement("link");
      iconLink.setAttribute("rel", "icon");
      document.head.appendChild(iconLink);
    }
    iconLink.setAttribute("type", "image/png");
    iconLink.setAttribute("href", faviconHref);
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage }), [language]);
  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
};
