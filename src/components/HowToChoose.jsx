import { useTranslation } from "react-i18next";
import howToChooseImage from "../assets/images/how-to-choose.webp";
import { useLanguage } from "../context/LanguageContext.jsx";

const HowToChoose = () => {
  const { language } = useLanguage();
  const { t } = useTranslation("common");
  const isArabic = language === "AR";

  return (
    <section className="w-full bg-white pb-12 pt-6 md:pb-14 lg:pb-16">
      <div
        className={`mx-auto flex max-w-7xl flex-col items-center gap-8 px-5 md:gap-10 md:px-8 lg:items-start lg:px-6 lg:pr-0 ${
          isArabic ? "lg:flex-row lg:gap-12" : "lg:flex-row lg:gap-16"
        }`}
      >
        <div
          className={`flex w-full justify-center lg:flex-1 ${
            isArabic
              ? "lg:order-1 lg:justify-start"
              : "lg:order-2 lg:ml-auto lg:translate-x-[38px] lg:justify-end lg:pl-6"
          }`}
        >
          <img
            src={howToChooseImage}
            alt={t("howToChoose.imageAlt")}
            className="h-auto w-full max-w-[900px] rounded-[20px] object-cover shadow-[0_18px_40px_-24px_rgba(0,0,0,0.45)] md:h-[390px] md:rounded-[22px] lg:h-[445px] lg:rounded-[26px]"
          />
        </div>

        <div
          className={`w-full max-w-[708px] md:flex md:flex-col md:justify-center lg:min-h-[445px] ${
            isArabic
              ? "lg:order-2 lg:flex-1 lg:pl-6 text-right"
              : "lg:order-1 text-left lg:-ml-[86px]"
          }`}
        >
          <h1
            className={`w-full font-semibold text-black md:text-[30px] md:leading-[38px] ${
              isArabic
                ? "text-[24px] leading-[30px] lg:text-[34px] lg:leading-[46px] lg:whitespace-nowrap"
                : "text-[24px] leading-[30px] lg:text-[40px] lg:leading-[50px]"
            }`}
            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
          >
            {t("howToChoose.title")}
          </h1>

          <p
            className="mt-4 w-full text-[15px] font-normal leading-[23px] text-[#242424] md:mt-5 md:max-w-[708px] md:text-[16px] md:leading-[24px]"
            dir={isArabic ? "rtl" : "ltr"}
            style={{ fontFamily: '"SF Pro Text", sans-serif' }}
          >
            {t("howToChoose.description")}
          </p>

          <p
            className="mt-5 text-[15px] font-normal leading-[23px] text-[#242424] md:mt-6 md:text-[16px] md:leading-[24px]"
            dir={isArabic ? "rtl" : "ltr"}
            style={{ fontFamily: '"SF Pro Text", sans-serif' }}
          >
            {t("howToChoose.ctaIntro")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowToChoose;
