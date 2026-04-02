import { useTranslation } from "react-i18next";
import { useLanguage } from "../../context/LanguageContext.jsx";
import CompareDetails from "./CompareDetails.jsx";
import CompareTrendingColumn from "./CompareTrendingColumn.jsx";
import { getCompareSectionContent } from "./compareSectionContent.js";

const CompareSection = () => {
  const { language } = useLanguage();
  const { t } = useTranslation("common");
  const isArabic = language === "AR";
  const content = getCompareSectionContent(t);

  if (isArabic) {
    return (
      <section className="compare-section compare-section-arabic w-full bg-[#17c53a] py-14 md:py-16">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-start gap-10 px-5 md:gap-12 md:px-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16 lg:px-10">
          <CompareTrendingColumn
            isArabic={isArabic}
            trendingProducts={content.trendingProducts}
          />
          <CompareDetails isArabic={isArabic} content={content} />
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-[#17c53a] py-14 md:py-16">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-start gap-10 px-5 md:gap-12 md:px-8 lg:grid-cols-[0.9fr_1.2fr] lg:gap-16 lg:px-10">
        <CompareTrendingColumn
          isArabic={isArabic}
          trendingProducts={content.trendingProducts}
        />
        <CompareDetails isArabic={isArabic} content={content} />
      </div>
    </section>
  );
};

export default CompareSection;
