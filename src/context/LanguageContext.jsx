/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageContext = createContext(null);
const faviconHref = "/favicon.png";
const LANGUAGE_PATH_REGEX = /^\/(en|ar)(?=\/|$)/i;

const normalizeLanguage = (value) => {
  if (!value) return "EN";
  const upper = String(value).toUpperCase();
  return upper === "AR" ? "AR" : "EN";
};

const getLanguageFromPath = (pathname) => {
  if (!pathname) return null;
  const match = pathname.match(LANGUAGE_PATH_REGEX);
  if (!match?.[1]) return null;
  return normalizeLanguage(match[1]);
};

const getPathWithoutLanguagePrefix = (pathname) => {
  if (!pathname) return "/";
  const cleanPath = pathname.replace(LANGUAGE_PATH_REGEX, "");
  return cleanPath || "/";
};

const getPathWithLanguagePrefix = (pathname, languageCode) => {
  const cleanPath = getPathWithoutLanguagePrefix(pathname);
  return cleanPath === "/" ? `/${languageCode}` : `/${languageCode}${cleanPath}`;
};

export const LanguageProvider = ({ children }) => {
  const { t, i18n } = useTranslation("common");

  const [language, setLanguageState] = useState(() => {
    if (typeof window === "undefined") return "EN";

    const pathLanguage = getLanguageFromPath(window.location.pathname);
    if (pathLanguage) return pathLanguage;

    return "EN";
  });

  const setLanguage = (nextLanguage) => {
    setLanguageState(normalizeLanguage(nextLanguage));
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const languageCode = language === "AR" ? "ar" : "en";

    window.localStorage.setItem("selectedLanguage", language);
    window.localStorage.setItem("selectedLanguageCode", languageCode);

    if (i18n.language !== languageCode) {
      i18n.changeLanguage(languageCode);
    }

    const nextPathname = getPathWithLanguagePrefix(
      window.location.pathname,
      languageCode,
    );

    const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;
    const nextUrl = `${nextPathname}${window.location.search}${window.location.hash}`;

    if (currentUrl !== nextUrl) {
      window.history.replaceState(window.history.state, "", nextUrl);
    }

    document.documentElement.lang = languageCode;
    document.documentElement.dir = "ltr";
  }, [language, i18n]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handlePopState = () => {
      const pathLanguage = getLanguageFromPath(window.location.pathname);
      if (pathLanguage && pathLanguage !== language) {
        setLanguageState(pathLanguage);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [language]);

  useEffect(() => {
    const title = t("seo.title");
    const description = t("seo.description");

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
  }, [language, t]);

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
