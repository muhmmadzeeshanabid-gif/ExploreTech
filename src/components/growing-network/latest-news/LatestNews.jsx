import React from "react";
import { useTranslation } from "react-i18next";
import { latestNewsItems } from "../../../data/latestNews";
import { useLanguage } from "../../../context/LanguageContext.jsx";
import LatestNewsCard from "./LatestNewsCard.jsx";
import LatestNewsHeader from "./LatestNewsHeader.jsx";

const LatestNews = () => {
  const { language } = useLanguage();
  const { t } = useTranslation("common");
  const isArabic = language === "AR";
  const displayNewsItems = isArabic
    ? [...latestNewsItems].reverse()
    : latestNewsItems;

  return (
    <section
      className="w-full bg-[#EDEDED] py-16 md:py-24"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="mx-auto w-full max-w-[1520px] px-5 md:px-10">
        <LatestNewsHeader isArabic={isArabic} />

        <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 sm:gap-10 lg:grid-cols-3">
          {displayNewsItems.map((item) => (
            <LatestNewsCard key={item.id} item={item} isArabic={isArabic} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            className="h-[46px] w-[122.5px] rounded-[4px] bg-blue-600 text-[15px] font-medium uppercase leading-[32px] text-white transition hover:bg-blue-700"
          >
            {t("latestNews.readMore")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
