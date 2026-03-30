import React from "react";
import { earlyAdopters } from "../../../data/earlyAdopters";
import { useLanguage } from "../../../context/LanguageContext.jsx";
import AdopterLogoRow from "./AdopterLogoRow.jsx";
import EarlyAdoptersHeader from "./EarlyAdoptersHeader.jsx";

const EarlyAdopters = () => {
  const { language } = useLanguage();
  const isArabic = language === "AR";

  return (
    <section className="w-full bg-white py-16 md:py-24" dir={isArabic ? "rtl" : "ltr"}>
      <div className="mx-auto w-full max-w-[1320px] px-5 text-center md:px-10">
        <EarlyAdoptersHeader isArabic={isArabic} />

        <div className="mt-12 space-y-4 md:space-y-6">
          <AdopterLogoRow items={earlyAdopters.slice(0, 6)} />
          <AdopterLogoRow items={earlyAdopters.slice(6, 10)} />
        </div>
      </div>
    </section>
  );
};

export default EarlyAdopters;
