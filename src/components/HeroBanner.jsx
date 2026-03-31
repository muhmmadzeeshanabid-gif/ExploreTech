import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/LanguageContext.jsx";
import bannerBg from "../assets/images/backgrounds/homeBannerBg.webp";

const HeroBanner = () => {
  const { language } = useLanguage();
  const { t } = useTranslation("common");
  const isArabic = language === "AR";

  const content = {
    headingPart1: t("heroBanner.headingPart1"),
    headingPart2: t("heroBanner.headingPart2"),
    paragraph: t("heroBanner.paragraph"),
    buttonText: t("heroBanner.buttonText"),
    buttonLink: isArabic ? "/ar/search" : "/search",
  };

  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-4 py-24 md:py-48 3xl:py-52 gap-6 lg:-my-[100px] -mt-[100px] sm:-mt-[145px]"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <h1
        className="font-visbyCF-bold leading-tight font-semibold max-sm:mt-10 text-[28px] max-sm:leading-8 md:text-[32px] lg:text-[60px] text-center p-4 lg:max-w-[80%] mx-auto"
        style={{ fontFamily: '"VisbyCF-Bold", "Space Grotesk", sans-serif' }}
      >
        <span className="text-[#0055FE] !font-visbyCF-bold">{content.headingPart1}</span>
        &nbsp;
        <span>{content.headingPart2}</span>
      </h1>

      <div className="flex flex-col items-center justify-center gap-12 3xl:gap-40 w-[90%] md:w-[70%] max-w-[850px] px-4">
        <p className="font-visbyCF-regular text-[16px] md:text-[18px] text-center mt-4 max-w-[800px]">
          {content.paragraph}
        </p>
        <a
          className="text-sm px-8 font-visbyCF-bold !text-white bg-[#3366FF] h-10 rounded flex items-center justify-center border border-[#3366FF] hover:bg-[#2952CC] hover:border-[#2952CC] no-underline transition-all duration-100 ease-in-out rtl:leading-[normal]"
          target="_blank"
          href={content.buttonLink}
        >
          {content.buttonText}
        </a>
      </div>
    </section>
  );
};

export default HeroBanner;
