import React from "react";
import { useLanguage } from "../../../context/LanguageContext.jsx";
import TestimonialCard from "./TestimonialCard.jsx";
import useTrustedCompaniesCarousel from "./useTrustedCompaniesCarousel.js";

const TrustedCompanies = () => {
  const { language } = useLanguage();
  const isArabic = language === "AR";
  const {
    currentSlide,
    isMobile,
    scrollRef,
    visibleSlides,
    visibleMobileCards,
    handleDotClick,
    setCurrentSlide,
  } = useTrustedCompaniesCarousel(isArabic);

  return (
    <section
      className="relative w-full overflow-hidden bg-white py-24 font-sans"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="mx-auto mb-10 max-w-[1380px] px-6 text-center lg:mb-28">
        <h2
          className="mx-auto max-w-[1040px] text-[24px] font-semibold leading-[1.3] text-black lg:text-[42px] lg:font-bold"
          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
        >
          {isArabic
            ? "البائعون: منصة موثوق بها عالميًا ومعتمدة من قبل مزودي التكنولوجيا المعروفين."
            : "Trusted and recognized by renowned global hospitality tech companies."}
        </h2>
      </div>

      {isMobile ? (
        <div className="relative w-full overflow-visible pb-0 pt-8 min-h-[460px]">
          <div
            ref={scrollRef}
            className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto pt-10 pb-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onScroll={(event) => {
              const cardWidth = event.currentTarget.offsetWidth;
              if (!cardWidth) return;
              const active = Math.round(event.currentTarget.scrollLeft / cardWidth);
              if (active !== currentSlide) setCurrentSlide(active);
            }}
          >
            {visibleMobileCards.map((card, index) => (
              <div
                key={index}
                data-trusted-card={index}
                className="flex w-full shrink-0 snap-center items-center justify-center px-6"
              >
                <div className="w-full max-w-[440px]">
                  <TestimonialCard {...card} isArabic={isArabic} />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="relative -mb-[30px] -mt-[30px] w-full overflow-hidden pb-[30px] pt-[30px]">
          <div
            className="flex w-full transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {visibleSlides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                className="flex w-full shrink-0 flex-col items-center justify-start"
              >
                <div className="mx-auto flex w-full max-w-[1380px] flex-col items-start justify-between gap-8 px-6 lg:flex-row lg:gap-[3.5%] lg:px-8">
                  {slide.slice(0, 3).map((card, cardIndex) => (
                    <TestimonialCard key={cardIndex} {...card} isArabic={isArabic} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div
        className={`relative z-10 w-full px-6 font-sans ${isMobile ? "mt-0" : "mt-12"}`}
      >
        <div
          className={`${isMobile ? "max-w-[440px] gap-2" : "max-w-[1380px] gap-2"} mx-auto flex items-center justify-center`}
        >
          {(isMobile ? visibleMobileCards : visibleSlides).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2 w-8 cursor-pointer rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-[#0B5BFF] shadow-[0_0_0_2px_rgba(11,91,255,0.14)]"
                  : "bg-[#0B5BFF] opacity-30"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
