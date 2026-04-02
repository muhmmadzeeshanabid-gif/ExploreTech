import React from "react";
import { comparisons } from "../../data/compareData.js";
import ComparisonRow from "./ComparisonRow.jsx";

const titleStyle = {
  fontFamily: '"Space Grotesk", sans-serif',
  fontWeight: 600,
};

const bodyStyle = {
  fontFamily: '"SF Pro Text", sans-serif',
  fontWeight: 400,
};

const headingStyle = {
  fontFamily: '"SF Pro Text", sans-serif',
  fontWeight: 700,
};

const CompareDetails = ({ isArabic, content }) => {
  if (isArabic) {
    return (
      <div className="compare-content order-2 w-full text-right text-white lg:order-1">
        <h1
          className="text-[30px] font-semibold leading-tight text-white md:text-[36px] lg:w-[629px] lg:text-[40px] lg:leading-[50px]"
          style={titleStyle}
          dir="rtl"
        >
          {content.compare}
        </h1>
        <p
          className="mt-2 text-[15px] font-normal leading-[23px] text-white md:text-[16px] md:leading-[24px] lg:w-[629px]"
          style={bodyStyle}
          dir="rtl"
        >
          {content.viewSolutions}
        </p>

        <div className="mt-5 lg:w-[629px]">
          <p
            className="text-[15px] font-bold leading-[23px] text-white md:text-[16px] md:leading-[24px]"
            style={headingStyle}
            dir="rtl"
          >
            {content.advancedTool}
          </p>
          <p
            className="mt-2 text-[15px] font-normal leading-[23px] text-white md:text-[16px] md:leading-[24px] lg:w-[629px]"
            style={bodyStyle}
            dir="rtl"
          >
            {content.description}
          </p>
        </div>

        <div className="relative z-30 mt-8 lg:w-[629px] md:mt-10">
          <p
            className="mb-4 block text-right text-[15px] font-bold leading-[23px] text-white md:text-[16px] md:leading-[24px]"
            style={headingStyle}
            dir="rtl"
          >
            {content.latestComparisons}
          </p>
        </div>

        <div className="relative z-10 mt-0 space-y-3 md:space-y-4 lg:max-w-[640px]">
          {comparisons.map((row) => (
            <ComparisonRow
              key={row.id}
              row={row}
              isArabic={isArabic}
              addToCompareLabel={content.addToCompare}
              vsLabel={content.vs}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="text-left text-white md:max-w-[880px] lg:translate-x-[32px]">
      <div>
        <h1
          className="w-full text-[30px] font-semibold leading-tight text-white md:text-[36px] lg:h-[50px] lg:w-[629px] lg:text-[40px] lg:leading-[50px]"
          style={titleStyle}
        >
          {content.compare}
        </h1>
        <p
          className="mt-2 w-full text-[15px] font-normal leading-[23px] text-white md:text-[16px] md:leading-[24px] lg:h-[24px] lg:w-[629px]"
          style={bodyStyle}
        >
          {content.viewSolutions}
        </p>
      </div>

      <div className="mt-5 w-full md:mt-6 lg:max-w-[640px]">
        <p
          className="text-[15px] font-bold leading-[23px] text-white md:text-[16px] md:leading-[24px]"
          style={headingStyle}
        >
          {content.advancedTool}
        </p>
        <p
          className="mt-2 w-full text-[15px] font-normal leading-[23px] text-white md:text-[16px] md:leading-[24px] lg:h-[72px] lg:w-[629px]"
          style={bodyStyle}
        >
          {content.description}
        </p>
      </div>

      <div className="mt-8 md:mt-10">
        <p
          className="text-[15px] font-bold leading-[23px] text-white md:text-[16px] md:leading-[24px]"
          style={headingStyle}
        >
          {content.latestComparisons}
        </p>
        <div className="mt-4 space-y-3 md:space-y-4">
          {comparisons.map((row) => (
            <ComparisonRow
              key={row.id}
              row={row}
              isArabic={isArabic}
              addToCompareLabel={content.addToCompare}
              vsLabel={content.vs}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompareDetails;

