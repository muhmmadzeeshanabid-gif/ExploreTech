import React from "react";
import { useTranslation } from "react-i18next";

const LatestNewsHeader = ({ isArabic }) => {
  const { t } = useTranslation("common");

  return (
    <div className="mb-12 text-center">
      <h2
        className="text-[32px] font-bold leading-[1.2] text-[#111] md:text-[40px]"
        style={{ fontFamily: '"Space Grotesk", sans-serif' }}
      >
        {t("latestNews.title")}
      </h2>
      <p
        className="mx-auto mt-3 max-w-[880px] text-[15px] text-[#4b5563] md:text-[16px]"
        style={{ fontFamily: '"SF Pro Text", sans-serif' }}
        dir={isArabic ? "rtl" : "ltr"}
      >
        {t("latestNews.description")}
      </p>
    </div>
  );
};

export default LatestNewsHeader;
