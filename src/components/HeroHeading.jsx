import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/LanguageContext.jsx";

const HeroHeading = () => {
  const { language } = useLanguage();
  const { t } = useTranslation("common");
  const isArabic = language === "AR";
  const headingClassName = isArabic
    ? "mt-4 px-4 font-['Space_Grotesk'] text-[28px] font-semibold leading-[42px] text-[rgb(0,0,0)] sm:px-6 text-right lg:text-[40px] lg:leading-[60px] lg:font-['Space_Grotesk'] lg:font-semibold lg:text-[rgb(0,0,0)]"
    : "mt-4 px-4 font-['Space_Grotesk'] text-[28px] font-semibold leading-[42px] text-[rgb(0,0,0)] sm:px-6 lg:text-[40px] lg:leading-[60px]";

  return (
    <h1 className={headingClassName} dir={isArabic ? "rtl" : "ltr"}>
      {t("promptBox.heading")}
    </h1>
  );
};

export default HeroHeading;
