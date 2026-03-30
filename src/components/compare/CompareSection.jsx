import React from "react";
import {
  comparisons,
  compareContentEN,
  compareContentAR,
} from "../../data/compareData.js";
import { useLanguage } from "../../context/LanguageContext.jsx";
import TrendingProductsSlider from "./TrendingProductsSlider.jsx";

const CompareSection = () => {
  const { language } = useLanguage();
  const isArabic = language === "AR";
  const content = isArabic ? compareContentAR : compareContentEN;

  if (isArabic) {
    return (
      <section className="compare-section compare-section-arabic w-full bg-[#17c53a] py-14 md:py-16">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-start gap-10 px-5 md:gap-12 md:px-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16 lg:px-10">
          <div className="compare-trending-heading order-1 flex w-full flex-col items-end justify-end lg:order-2 lg:items-center">
            <h1
              className="text-white font-visbyCF-bold leading-tight mb-10 font-semibold max-sm:mt-10 text-[24px] md:text-[32px] lg:text-[40px] text-right"
              style={{
                fontFamily: '"VisbyCF-Bold", "Space Grotesk", sans-serif',
                fontWeight: 600,
              }}
              dir="rtl"
            >
              {content.trendingProducts}
            </h1>
            <TrendingProductsSlider isArabic={isArabic} />
          </div>

          <div className="compare-content order-2 w-full text-right text-white lg:order-1">
            <h1
              className="text-[30px] font-semibold leading-tight text-white md:text-[36px] lg:w-[629px] lg:text-[40px] lg:leading-[50px]"
              style={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontWeight: 600,
              }}
              dir="rtl"
            >
              {content.compare}
            </h1>
            <p
              className="mt-2 text-[15px] font-normal leading-[23px] text-white md:text-[16px] md:leading-[24px] lg:w-[629px]"
              style={{
                fontFamily: '"SF Pro Text", sans-serif',
                fontWeight: 400,
              }}
              dir="rtl"
            >
              {content.viewSolutions}
            </p>

            <div className="mt-5 lg:w-[629px]">
              <p
                className="text-[15px] font-bold leading-[23px] text-white md:text-[16px] md:leading-[24px]"
                style={{
                  fontFamily: '"SF Pro Text", sans-serif',
                  fontWeight: 700,
                }}
                dir="rtl"
              >
                {content.advancedTool}
              </p>
              <p
                className="mt-2 text-[15px] font-normal leading-[23px] text-white md:text-[16px] md:leading-[24px] lg:w-[629px]"
                style={{
                  fontFamily: '"SF Pro Text", sans-serif',
                  fontWeight: 400,
                }}
                dir="rtl"
              >
                {content.description}
              </p>
            </div>

            <div className="relative z-30 mt-8 lg:w-[629px] md:mt-10">
              <p
                className="mb-4 block text-right text-[15px] font-bold leading-[23px] text-white md:text-[16px] md:leading-[24px]"
                style={{
                  fontFamily: '"SF Pro Text", sans-serif',
                  fontWeight: 700,
                }}
                dir="rtl"
              >
                {content.latestComparisons}
              </p>
            </div>

            <div className="relative z-10 mt-0 space-y-3 md:space-y-4 lg:max-w-[640px]">
              {comparisons.map((row) => (
                <div
                  key={row.id}
                  className="group relative w-full overflow-hidden rounded-[12px] bg-[#e9e9e9] px-3 py-3 shadow-[0_10px_24px_-20px_rgba(0,0,0,0.45)] sm:px-5 md:px-6 lg:h-[81.6px] lg:w-[629px]"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-0 origin-right scale-x-0 bg-[#dce8ff] transition-transform duration-500 ease-out group-hover:scale-x-100 group-active:scale-x-100"
                  />
                  <div className="relative z-10 flex h-full flex-row items-center justify-between gap-3">
                    <button
                      type="button"
                      className="h-9 w-full max-w-[98px] flex-shrink-0 rounded-[8px] bg-[#365cff] px-2 text-[10px] font-medium leading-[1.1] text-white transition hover:bg-[#2f52e6] sm:h-10 sm:max-w-[138px] sm:text-[11px] md:max-w-[152px] md:text-[12px]"
                      style={{
                        fontFamily: '"SF Pro Text", sans-serif',
                        fontWeight: 500,
                      }}
                    >
                      {content.addToCompare}
                    </button>

                    <div
                      className={`grid flex-1 items-center justify-items-center gap-3 ${
                        row.items.length === 3
                          ? "grid-cols-[auto_auto_auto_auto_auto]"
                          : "grid-cols-[auto_auto_auto]"
                      }`}
                    >
                      {row.items.map((item, index) => (
                        <React.Fragment key={`${row.id}-${item.alt}`}>
                          <img
                            src={item.src}
                            alt={item.alt}
                            className="object-contain h-auto w-[45px] sm:w-[74px] md:w-[82px] lg:h-[52px] lg:w-[120px]"
                          />
                          {index < row.items.length - 1 && (
                            <span
                              className="text-[12px] font-normal leading-normal tracking-normal text-black sm:text-[14px] md:text-[16px]"
                              style={{
                                fontFamily: '"Space Grotesk", sans-serif',
                                fontWeight: 400,
                              }}
                            >
                              {content.vs}
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-[#17c53a] py-14 md:py-16">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-start gap-10 px-5 md:gap-12 md:px-8 lg:grid-cols-[0.9fr_1.2fr] lg:gap-16 lg:px-10">
        <div className="flex w-full h-full flex-col items-start justify-start">
          <h1
            className="text-white font-visbyCF-bold leading-tight mb-10 font-semibold max-sm:mt-10 text-[24px] md:text-[32px] lg:text-[40px] text-left"
            style={{
              fontFamily: '"VisbyCF-Bold", "Space Grotesk", sans-serif',
              fontWeight: 600,
            }}
          >
            {content.trendingProducts}
          </h1>
          <TrendingProductsSlider isArabic={isArabic} />
        </div>

        <div className="text-left text-white md:max-w-[880px] lg:translate-x-[32px]">
          <div>
            <h1
              className="w-full text-[30px] font-semibold leading-tight text-white md:text-[36px] lg:h-[50px] lg:w-[629px] lg:text-[40px] lg:leading-[50px]"
              style={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontWeight: 600,
              }}
            >
              {content.compare}
            </h1>
            <p
              className="mt-2 w-full text-[15px] font-normal leading-[23px] text-white md:text-[16px] md:leading-[24px] lg:h-[24px] lg:w-[629px]"
              style={{
                fontFamily: '"SF Pro Text", sans-serif',
                fontWeight: 400,
              }}
            >
              {content.viewSolutions}
            </p>
          </div>

          <div className="mt-5 w-full md:mt-6 lg:max-w-[640px]">
            <p
              className="text-[15px] font-bold leading-[23px] text-white md:text-[16px] md:leading-[24px]"
              style={{
                fontFamily: '"SF Pro Text", sans-serif',
                fontWeight: 700,
              }}
            >
              {content.advancedTool}
            </p>
            <p
              className="mt-2 w-full text-[15px] font-normal leading-[23px] text-white md:text-[16px] md:leading-[24px] lg:h-[72px] lg:w-[629px]"
              style={{
                fontFamily: '"SF Pro Text", sans-serif',
                fontWeight: 400,
              }}
            >
              {content.description}
            </p>
          </div>

          <div className="mt-8 md:mt-10">
            <p
              className="text-[15px] font-bold leading-[23px] text-white md:text-[16px] md:leading-[24px]"
              style={{
                fontFamily: '"SF Pro Text", sans-serif',
                fontWeight: 700,
              }}
            >
              {content.latestComparisons}
            </p>
            <div className="mt-4 space-y-3 md:space-y-4">
              {comparisons.map((row) => (
                <div
                  key={row.id}
                  className="group relative w-full overflow-hidden rounded-[12px] bg-white px-3 py-3 shadow-[0_12px_26px_-18px_rgba(0,0,0,0.5)] sm:px-5 md:px-6 lg:h-[81.6px] lg:w-[629px]"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-0 origin-left scale-x-0 bg-[#e9f0ff] transition-transform duration-500 ease-out group-hover:scale-x-100 group-active:scale-x-100"
                  />
                  <div className="relative z-10 flex h-full flex-row items-center justify-between gap-2 md:gap-3 lg:gap-4">
                    <div
                      className={`grid flex-1 items-center justify-center justify-items-center gap-3 sm:gap-4 ${
                        row.items.length === 3
                          ? "grid-cols-[auto_auto_auto_auto_auto]"
                          : "grid-cols-[auto_auto_auto]"
                      }`}
                    >
                      {row.items.map((item, index) => (
                        <React.Fragment key={`${row.id}-${item.alt}`}>
                          <div className="flex items-center justify-center justify-self-center">
                            <img
                              src={item.src}
                              alt={item.alt}
                              className="object-contain h-auto w-[45px] sm:w-[74px] md:w-[82px] lg:h-[52px] lg:w-[120px]"
                            />
                          </div>
                          {index < row.items.length - 1 && (
                            <span
                              className="text-[12px] font-normal leading-normal tracking-normal text-black sm:text-[14px] md:text-[16px]"
                              style={{
                                fontFamily: '"Space Grotesk", sans-serif',
                                fontWeight: 400,
                              }}
                            >
                              {content.vs}
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                    <button
                      type="button"
                      className="h-9 w-full max-w-[98px] flex-shrink-0 rounded-[8px] bg-[#365cff] px-2 text-[10px] font-medium leading-[1.1] text-white transition hover:bg-[#2f52e6] sm:h-10 sm:max-w-[138px] sm:text-[11px] md:max-w-[152px] md:text-[12px]"
                      style={{
                        fontFamily: '"SF Pro Text", sans-serif',
                        fontWeight: 500,
                      }}
                    >
                      {content.addToCompare}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompareSection;
