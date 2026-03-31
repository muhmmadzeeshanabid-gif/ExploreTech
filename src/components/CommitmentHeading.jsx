import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/LanguageContext.jsx";

const CommitmentHeading = () => {
  const { language } = useLanguage();
  const { t } = useTranslation("common");

  return (
    <section className="mt-0 w-full bg-white pb-8 pt-3 md:mt-0 md:pt-3 lg:mt-0 lg:pt-4">
      <h2
        className={`mx-auto px-6 text-center text-[24px] font-semibold leading-[30px] text-[rgb(0,0,0)] lg:text-[40px] lg:leading-[50px] ${
          language === "AR" ? "max-w-[1120px] lg:max-w-[1120px]" : "max-w-5xl"
        }`}
        style={{ fontFamily: '"Space Grotesk", sans-serif' }}
        dir={language === "AR" ? "rtl" : "ltr"}
      >
        {language === "AR" ? (
          <>
            <span
              className="commitment-heading-ar mx-auto block w-[90%] max-w-[420px] lg:hidden"
              style={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "clamp(18px, 5vw, 24px)",
                lineHeight: "1.3",
                color: "rgb(0, 0, 0)",
              }}
            >
              {t("commitment.title")}
            </span>
            <span
              className="commitment-heading-ar hidden max-w-[1120px] lg:mx-auto lg:block lg:w-full"
              style={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "40px",
                lineHeight: "50px",
                color: "rgb(0, 0, 0)",
              }}
            >
              <span className="block whitespace-nowrap">{t("commitment.titleLine1")}</span>
              <span className="block whitespace-nowrap">{t("commitment.titleLine2")}</span>
            </span>
          </>
        ) : (
          t("commitment.title")
        )}
      </h2>
    </section>
  );
};

export default CommitmentHeading;
