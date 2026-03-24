import React from "react";

const DiscoverDots = ({ total, activeIndex, onSelect }) => {
  return (
    <div className="mx-auto mt-8 flex w-[320px] max-w-[calc(100vw-34px)] justify-between md:mt-9 md:w-[332px] md:max-w-[calc(100vw-40px)] lg:mt-10 lg:w-auto lg:max-w-none lg:justify-center lg:gap-3">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          type="button"
          aria-label={`Go to slide ${index + 1}`}
          className="h-[6px] w-[20px] rounded-full bg-white transition-all duration-500 ease-in-out md:w-[22px] lg:h-[8px] lg:w-[32px]"
        />
      ))}
    </div>
  );
};

export default DiscoverDots;
