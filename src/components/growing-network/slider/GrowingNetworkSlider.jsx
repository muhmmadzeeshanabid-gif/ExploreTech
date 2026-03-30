import React from "react";
import { loopVendors } from "../../../data/growingNetworkSliderData.js";
import { useLanguage } from "../../../context/LanguageContext.jsx";
import VendorCard from "./VendorCard.jsx";
import { LongArrowIcon } from "./SliderIcons.jsx";
import useGrowingNetworkSlider from "./useGrowingNetworkSlider.js";

const GrowingNetworkSlider = () => {
  const { language } = useLanguage();
  const isArabic = language === "AR";
  const {
    scrollRef,
    trackRef,
    setIsPaused,
    handleManualScroll,
    handleMouseDown,
    handleMouseMove,
    handleMouseEnd,
    handleCardEnter,
    handleCardLeave,
  } = useGrowingNetworkSlider();

  return (
    <>
      <div
        ref={scrollRef}
        className="hide-scrollbar w-full cursor-grab overflow-x-auto overflow-y-hidden snap-x snap-mandatory pb-6 pt-2 sm:overflow-hidden sm:snap-none"
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={() => setIsPaused(false)}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseEnd}
      >
        <div ref={trackRef} className="flex w-max select-none gap-0">
          {loopVendors.map((vendor, index) => (
            <VendorCard
              key={`${vendor.id}-${index}`}
              vendor={vendor}
              isArabic={isArabic}
              onMouseEnter={handleCardEnter}
              onMouseLeave={handleCardLeave}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Scroll left"
          onClick={() => handleManualScroll(-1)}
          className="flex h-8 w-8 items-center justify-center border border-[#e5e7eb] bg-white text-[#0B5BFF] outline-none focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0"
        >
          <LongArrowIcon direction="left" className="h-4 w-6" />
        </button>
        <button
          type="button"
          aria-label="Scroll right"
          onClick={() => handleManualScroll(1)}
          className="flex h-8 w-8 items-center justify-center border border-[#e5e7eb] bg-white text-[#0B5BFF] outline-none focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0"
        >
          <LongArrowIcon direction="right" className="h-4 w-6" />
        </button>
      </div>
    </>
  );
};

export const GrowingNetworkCardSlider = GrowingNetworkSlider;
export default GrowingNetworkSlider;
