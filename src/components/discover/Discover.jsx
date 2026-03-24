import React from "react";
import DiscoverCopy from "./DiscoverCopy.jsx";
import DiscoverSlider from "./DiscoverSlider.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";

const Discover = () => {
  const { language } = useLanguage();
  const isArabic = language === "AR";
  return (
    <section className="relative w-full overflow-hidden bg-[#0B5BFF] pb-[56px] pt-12 md:pb-[60px] md:pt-14 lg:pt-16">
      <div
        className={`mx-auto grid grid-cols-1 items-center gap-8 md:gap-10 lg:grid-cols-2 ${
          isArabic
            ? "max-w-[1700px] px-4 md:px-6 lg:px-4 lg:gap-28"
            : "max-w-[1320px] px-5 md:px-8 lg:px-10 lg:gap-16"
        }`}
      >
        {isArabic ? (
          <>
            <DiscoverSlider />
            <DiscoverCopy />
          </>
        ) : (
          <>
            <DiscoverCopy />
            <DiscoverSlider />
          </>
        )}
      </div>
    </section>
  );
};

export default Discover;
