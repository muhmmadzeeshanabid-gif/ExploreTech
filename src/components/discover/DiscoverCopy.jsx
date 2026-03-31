import React from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../context/LanguageContext.jsx";

const DiscoverCopy = () => {
  const { language } = useLanguage();
  const { t } = useTranslation("common");
  const isArabic = language === "AR";

  return (
    <div
      className={`discover-copy relative z-20 w-full px-3 text-white md:px-8 lg:px-0 ${
        isArabic ? "text-right lg:pr-6" : "text-center lg:-ml-[60px] lg:text-left"
      }`}
    >
      <h1
        className="text-[30px] font-semibold leading-[38px] tracking-normal text-white md:text-[34px] md:leading-[42px] lg:text-[40px] lg:leading-[50px]"
        dir={isArabic ? "rtl" : "ltr"}
        style={{ fontFamily: '"Space Grotesk", sans-serif' }}
      >
        {t("discover.title")}
      </h1>

      <p
        className={`mt-2 font-normal text-white md:mt-3 ${
          isArabic ? "text-[18px] leading-[27px]" : "text-[15px] leading-[23px] md:text-[16px] md:leading-[24px]"
        }`}
        dir={isArabic ? "rtl" : "ltr"}
        style={{ fontFamily: '"SF Pro Text", sans-serif' }}
      >
        {t("discover.subtitle")}
      </p>

      <div className={`discover-copy-body mt-6 max-w-[696px] md:mt-7 ${isArabic ? "mr-0 ml-auto" : "mx-auto lg:mx-0"}`}>
        <h3
          className="text-[15px] font-bold leading-[23px] text-white md:text-[16px] md:leading-[24px]"
          dir={isArabic ? "rtl" : "ltr"}
          style={{ fontFamily: '"SF Pro Text", sans-serif' }}
        >
          {t("discover.bodyTitle")}
        </h3>
        <p
          className={`mt-2 font-normal tracking-normal text-white md:mt-3 ${
            isArabic ? "text-[18px] leading-[27px]" : "text-[15px] leading-[23px] md:text-[16px] md:leading-[24px]"
          }`}
          dir={isArabic ? "rtl" : "ltr"}
          style={{ fontFamily: '"SF Pro Text", sans-serif' }}
        >
          {t("discover.bodyDescription")}
        </p>
      </div>

      <button
        className={`discover-copy-button relative z-30 mt-7 flex h-[34px] w-[136px] items-center justify-center rounded-[8px] bg-white text-[10px] font-normal leading-[12px] tracking-normal text-[#0055FE] md:mt-8 md:h-[38px] md:w-[150px] md:text-[11px] lg:mt-10 lg:h-[41.6px] lg:w-[161.95px] lg:text-[12px] lg:leading-[16px] ${
          isArabic ? "ml-auto mr-0" : "mx-auto lg:mx-0"
        }`}
        style={{ fontFamily: '"SF Pro Text", sans-serif' }}
      >
        {t("discover.browseAll")}
      </button>
    </div>
  );
};

export default DiscoverCopy;
