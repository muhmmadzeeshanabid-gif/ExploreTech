import React from "react";
import TrendingProductsSlider from "./TrendingProductsSlider.jsx";

const headingStyle = {
  fontFamily: '"VisbyCF-Bold", "Space Grotesk", sans-serif',
  fontWeight: 600,
};

const CompareTrendingColumn = ({ isArabic, trendingProducts }) => {
  if (isArabic) {
    return (
      <div className="compare-trending-heading order-1 flex w-full flex-col items-end justify-end lg:order-2 lg:items-center">
        <h1
          className="mb-10 text-right text-[24px] font-semibold leading-tight text-white font-visbyCF-bold max-sm:mt-10 md:text-[32px] lg:text-[40px]"
          style={headingStyle}
          dir="rtl"
        >
          {trendingProducts}
        </h1>
        <TrendingProductsSlider isArabic={isArabic} />
      </div>
    );
  }

  return (
    <div className="flex h-full w-full flex-col items-start justify-start">
      <h1
        className="mb-10 text-left text-[24px] font-semibold leading-tight text-white font-visbyCF-bold max-sm:mt-10 md:text-[32px] lg:text-[40px]"
        style={headingStyle}
      >
        {trendingProducts}
      </h1>
      <TrendingProductsSlider isArabic={isArabic} />
    </div>
  );
};

export default CompareTrendingColumn;
