import React from "react";
import { earlyAdopters } from "../../data/earlyAdopters";

const EarlyAdopters = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1320px] px-5 md:px-10 text-center">
        <h2
          className="text-[32px] md:text-[40px] font-bold text-[#0b0b0b] leading-[1.2]"
          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
        >
          ExploreTECH Early Adopters
        </h2>
        <p
          className="mx-auto mt-4 max-w-[960px] text-[16px] leading-[26px] text-[#1f274b]"
          style={{ fontFamily: '"SF Pro Text", sans-serif' }}
        >
          We are immensely thankful to the visionary technology brands who, as
          early adopters, have played a crucial role in validating ExploreTECH�s
          value proposition right from the outset.
        </p>

        <div className="mt-12 space-y-4 md:space-y-6">
          {/* Row 1: 6 Logos */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {earlyAdopters.slice(0, 6).map((item) => (
              <div
                key={item.id}
                className="flex h-[65px] w-[100px] flex-none cursor-pointer items-center justify-center rounded-[8px] border border-[#f3f3f3] bg-white px-2 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-200 hover:border-[#e5e5e5] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]"
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Row 2: 4 Logos */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {earlyAdopters.slice(6, 10).map((item) => (
              <div
                key={item.id}
                className="flex h-[65px] w-[100px] flex-none cursor-pointer items-center justify-center rounded-[8px] border border-[#f3f3f3] bg-white px-2 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-200 hover:border-[#e5e5e5] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]"
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAdopters;
