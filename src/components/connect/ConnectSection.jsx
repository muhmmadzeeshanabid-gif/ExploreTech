import React from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../context/LanguageContext.jsx";
import ConnectImageColumn from "./ConnectImageColumn.jsx";
import ConnectTextColumn from "./ConnectTextColumn.jsx";
import { getConnectSectionContent } from "./connectSectionContent.js";

const ConnectSection = () => {
  const { language } = useLanguage();
  const { t } = useTranslation("common");
  const isArabic = language === "AR";
  const content = getConnectSectionContent(t);

  return (
    <section className="w-full bg-[#0B5BFF] py-16">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.1fr_1.2fr] lg:gap-16 lg:px-10">
        <ConnectTextColumn isArabic={isArabic} content={content} />
        <ConnectImageColumn isArabic={isArabic} imageAlt={content.imageAlt} />
      </div>
    </section>
  );
};

export default ConnectSection;
