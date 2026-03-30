import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import CookiesBannerBar from "./CookiesBannerBar.jsx";
import useCookieConsent from "./useCookieConsent.js";

const CookiesBanner = () => {
  const { language } = useLanguage();
  const isArabic = language === "AR";
  const {
    isVisible,
    handleAction,
  } = useCookieConsent();

  if (!isVisible) return null;

  return (
    <>
      <CookiesBannerBar
        isArabic={isArabic}
        onAction={handleAction}
      />

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f8fafc;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `,
        }}
      />
    </>
  );
};

export default CookiesBanner;
