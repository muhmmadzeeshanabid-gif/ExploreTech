import React from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../context/LanguageContext.jsx";

const DiscoverSlideCard = ({ cat, onClick, isOut, style }) => {
  const { language } = useLanguage();
  const { t } = useTranslation("common");
  const isArabic = language === "AR";
  const cardTitle = isArabic ? cat.arTitle || cat.title : cat.title;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`absolute overflow-hidden rounded-[10px] transition-all duration-700 ease-[cubic-bezier(0.16,0.84,0.44,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 lg:rounded-[24px] ${
        isOut ? "pointer-events-none" : "cursor-pointer"
      }`}
      style={style}
    >
      <img
        src={cat.image}
        alt={cardTitle}
        loading="lazy"
        className="w-full h-full object-cover"
      />

      <div
        className={`absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/35 to-transparent p-3 pb-4 pt-16 lg:p-6 lg:pb-7 lg:pt-24 ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        <div className="flex w-full items-end justify-between gap-1 lg:gap-2">
          <h3
            className="flex-1 min-w-0 text-[12px] font-semibold leading-[16px] text-white lg:text-[18px] lg:leading-[24px]"
            dir={isArabic ? "rtl" : "ltr"}
            style={{
              fontFamily: '"SF Pro Text", sans-serif',
              fontWeight: 600,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              overflowWrap: "normal",
              wordBreak: "normal",
              hyphens: "manual",
            }}
          >
            {cardTitle}
          </h3>

          <div className="flex-shrink-0 flex flex-col items-center text-center">
            <span
              className="text-[15px] font-bold leading-[1] text-[#4ADE80] lg:text-[22px]"
              style={{ fontFamily: '"SF Pro Text", sans-serif', fontWeight: 700 }}
            >
              {cat.products}
            </span>
            <span
              className="text-[8px] font-bold tracking-[0.05em] text-[#4ADE80] lg:text-[11px]"
              style={{ fontFamily: '"SF Pro Text", sans-serif', fontWeight: 700 }}
            >
              {t("discover.products")}
            </span>
          </div>
        </div>
      </div>
    </button>
  );
};

export default DiscoverSlideCard;
