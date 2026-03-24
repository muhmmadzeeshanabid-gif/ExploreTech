import { createContext, useContext, useEffect, useMemo, useState } from "react";

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    if (typeof window === "undefined") return "EN";
    return window.localStorage.getItem("selectedLanguage") || "EN";
  });

  useEffect(() => {
    window.localStorage.setItem("selectedLanguage", language);
    document.documentElement.lang = language === "AR" ? "ar" : "en";
    document.documentElement.dir = "ltr";
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
