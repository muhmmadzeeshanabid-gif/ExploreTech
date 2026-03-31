import React from "react";
import { useTranslation } from "react-i18next";
import connectImage from "../../assets/images/connect/ConnectToExploeTECH.webp";
import { useLanguage } from "../../context/LanguageContext.jsx";

const ConnectSection = () => {
  const { language } = useLanguage();
  const { t } = useTranslation("common");
  const isArabic = language === "AR";

  return (
    <section className="w-full bg-[#0B5BFF] py-16">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.1fr_1.2fr] lg:gap-16 lg:px-10">
        <div className={`text-white lg:-ml-[40px] ${isArabic ? "text-right lg:order-2 lg:translate-x-10" : "text-left lg:order-1"}`}>
          <h1
            className="text-[32px] font-semibold leading-tight lg:text-[40px] lg:leading-[50px]"
            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
          >
            {t("connect.title")}
          </h1>
          <p
            className="mt-2 text-[16px] font-normal leading-[24px] text-white"
            dir={isArabic ? "rtl" : "ltr"}
            style={{ fontFamily: '"SF Pro Text", sans-serif' }}
          >
            {t("connect.subtitle")}
          </p>

          <div className="mt-8 space-y-8">
            <div>
              <h3
                className="text-[18px] font-bold leading-[26px]"
                style={{ fontFamily: '"SF Pro Text", sans-serif' }}
              >
                {t("connect.vendorsTitle")}
              </h3>
              <p
                className="mt-2 max-w-[700px] text-[16px] font-normal leading-[24px] text-white"
                dir={isArabic ? "rtl" : "ltr"}
                style={{ fontFamily: '"SF Pro Text", sans-serif' }}
              >
                {t("connect.vendorsDescription")}
              </p>
              <button
                type="button"
                className="mt-4 inline-flex h-[41.6px] w-[208.55px] items-center justify-center rounded-[8px] bg-white text-[12px] font-normal leading-[16px] text-[#0055FE] shadow-[0_10px_22px_-16px_rgba(0,0,0,0.5)] transition hover:bg-[#e9f1ff]"
                style={{ fontFamily: '"SF Pro Text", sans-serif' }}
              >
                {t("connect.vendorsCta")}
              </button>
            </div>

            <div>
              <h3
                className="text-[18px] font-bold leading-[26px]"
                style={{ fontFamily: '"SF Pro Text", sans-serif' }}
              >
                {t("connect.expertsTitle")}
              </h3>
              <p
                className="mt-2 max-w-[700px] text-[16px] font-normal leading-[24px] text-white"
                dir={isArabic ? "rtl" : "ltr"}
                style={{ fontFamily: '"SF Pro Text", sans-serif' }}
              >
                {t("connect.expertsDescription")}
              </p>
              <button
                type="button"
                className="mt-4 inline-flex h-[41.6px] w-[208.55px] items-center justify-center rounded-[8px] bg-white text-[12px] font-normal leading-[16px] text-[#0055FE] shadow-[0_10px_22px_-16px_rgba(0,0,0,0.5)] transition hover:bg-[#e9f1ff]"
                style={{ fontFamily: '"SF Pro Text", sans-serif' }}
              >
                {t("connect.expertsCta")}
              </button>
            </div>

            <div>
              <h3
                className="text-[18px] font-bold leading-[26px]"
                style={{ fontFamily: '"SF Pro Text", sans-serif' }}
              >
                {t("connect.supportTitle")}
              </h3>
              <p
                className="mt-2 max-w-[700px] text-[16px] font-normal leading-[24px] text-white"
                dir={isArabic ? "rtl" : "ltr"}
                style={{ fontFamily: '"SF Pro Text", sans-serif' }}
              >
                {t("connect.supportDescription")}
              </p>
              <button
                type="button"
                className="mt-4 inline-flex h-[41.6px] w-[208.55px] items-center justify-center rounded-[8px] bg-white text-[12px] font-normal leading-[16px] text-[#0055FE] shadow-[0_10px_22px_-16px_rgba(0,0,0,0.5)] transition hover:bg-[#e9f1ff]"
                style={{ fontFamily: '"SF Pro Text", sans-serif' }}
              >
                {t("connect.supportCta")}
              </button>
            </div>
          </div>
        </div>

        <div className={`flex w-full items-center justify-center ${isArabic ? "lg:order-1 lg:justify-start lg:-ml-10" : "lg:order-2 lg:justify-end"}`}>
          <div className={`mt-[2px] h-auto min-h-[250px] w-[95%] max-w-[360px] sm:min-h-[300px] sm:w-full sm:max-w-none lg:h-[445px] ${
            isArabic ? "lg:w-[calc(100%+150px)] lg:mr-[-70px]" : "lg:w-[calc(100%+24px)] lg:mr-[-24px]"
          }`}>
            <img
              src={connectImage}
              alt={t("connect.imageAlt")}
              className="h-full w-full rounded-[12px] object-cover shadow-[0_24px_50px_-30px_rgba(0,0,0,0.7)] lg:rounded-[20px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
