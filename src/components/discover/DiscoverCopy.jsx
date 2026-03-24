import React from "react";

const DiscoverCopy = () => {
  return (
    <div className="relative z-[320] w-full px-3 text-center text-white md:px-8 lg:-ml-[60px] lg:px-0 lg:text-left">
      <h1
        className="text-[30px] font-semibold leading-[38px] tracking-normal text-white md:text-[34px] md:leading-[42px] lg:text-[40px] lg:leading-[50px]"
        style={{ fontFamily: '"Space Grotesk", sans-serif' }}
      >
        Discover
      </h1>
      <p
        className="mt-2 text-[15px] font-normal leading-[23px] text-white md:mt-3 md:text-[16px] md:leading-[24px]"
        style={{ fontFamily: '"SF Pro Text", sans-serif' }}
      >
        Browse possibilities by category
      </p>
      
      <div className="mx-auto mt-6 max-w-[696px] md:mt-7 lg:mx-0">
        <h3
          className="text-[15px] font-bold leading-[23px] text-white md:text-[16px] md:leading-[24px]"
          style={{ fontFamily: '"SF Pro Text", sans-serif' }}
        >
          Simplified Technology Exploration
        </h3>
        <p
          className="mt-2 text-[15px] font-normal leading-[23px] tracking-normal text-white md:mt-3 md:text-[16px] md:leading-[24px]"
          style={{ fontFamily: '"SF Pro Text", sans-serif' }}
        >
          Explore the best solutions across 12 categories. ExploreTECH
          simplifies your search for the ideal Hotel Management Software,
          including cloud-based systems.
        </p>
      </div>

      <button
        className="relative z-[330] mx-auto mt-7 flex h-[34px] w-[136px] items-center justify-center rounded-[8px] bg-white text-[10px] font-normal leading-[12px] tracking-normal text-[#0055FE] md:mt-8 md:h-[38px] md:w-[150px] md:text-[11px] lg:mx-0 lg:mt-10 lg:h-[41.6px] lg:w-[161.95px] lg:text-[12px] lg:leading-[16px]"
        style={{ fontFamily: '"SF Pro Text", sans-serif' }}
      >
        Browse all categories
      </button>
    </div>
  );
};

export default DiscoverCopy;
