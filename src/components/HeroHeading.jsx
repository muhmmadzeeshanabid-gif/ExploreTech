import { useLanguage } from "../context/LanguageContext.jsx";

const HeroHeading = () => {
  const { language } = useLanguage();
  return (
    <h1 className="mt-4 px-4 font-['Space_Grotesk'] text-[28px] font-semibold leading-[42px] text-[rgb(0,0,0)] sm:px-6 lg:text-[40px] lg:leading-[60px]">
      {language === "AR"
        ? "اسألني عن أي شيء يخص تقنيات الفنادق"
        : "Ask me anything about hotel TECH"}
    </h1>
  );
};

export default HeroHeading;
