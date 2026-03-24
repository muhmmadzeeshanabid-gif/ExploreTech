import React, { useEffect, useState } from "react";
import { categories } from "./discoverData";
import DiscoverDots from "./DiscoverDots";
import DiscoverSlideCard from "./DiscoverSlideCard";

const DiscoverSlider = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isPaused, setIsPaused] = useState(false);
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 1024 : false,
  );
  const total = categories.length;
  const maxLeft = isDesktop ? 2 : 2;
  const maxRight = isDesktop ? 3 : 2;

  useEffect(() => {
    if (isPaused) return undefined;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 5200);
    return () => clearInterval(interval);
  }, [isPaused, total]);

  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= 1024);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const getOffset = (index) => {
    let offset = index - activeIndex;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;
    return offset;
  };

  return (
    <div
      className="relative z-10 mt-7 flex w-full justify-center px-4 md:mt-7 md:px-4 lg:mt-0 lg:px-0 lg:justify-end"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <div className="flex flex-col items-center lg:translate-x-[275px]">
        <div
          className="relative isolate mx-auto w-[320px] max-w-[calc(100vw-34px)] overflow-hidden md:w-[332px] md:max-w-[calc(100vw-40px)] lg:ml-auto lg:w-[1080px] lg:max-w-none lg:before:pointer-events-none lg:before:absolute lg:before:inset-y-0 lg:before:left-0 lg:before:z-[200] lg:before:w-[220px] lg:before:bg-[#0B5BFF] lg:before:content-[''] lg:after:pointer-events-none lg:after:absolute lg:after:inset-y-0 lg:after:right-0 lg:after:z-[200] lg:after:w-[175px] lg:after:bg-[#0B5BFF] lg:after:content-['']"
          style={{
            WebkitMaskImage: isDesktop
              ? "linear-gradient(to right, transparent 0%, black 10%, black 84%, transparent 100%)"
              : "none",
            maskImage: isDesktop
              ? "linear-gradient(to right, transparent 0%, black 10%, black 84%, transparent 100%)"
              : "none",
          }}
        >
          <div className="relative mx-auto h-[220px] w-[152px] sm:h-[330px] sm:w-[214px] md:h-[330px] md:w-[214px] lg:h-[345px] lg:w-[222px]">
            {categories.map((cat, index) => {
              const offset = getOffset(index);
              const isOut = offset < -maxLeft || offset > maxRight;
              const depth = Math.abs(offset);
              const zIndex = 100 - depth;
              const translateX = offset * (isDesktop ? 110 : 58);
              const translateY = 0;
              const scale = isDesktop ? 1 - depth * 0.12 : 1 - depth * 0.11;
              const opacity = isOut
                ? 0
                : isDesktop
                  ? 1
                  : depth === 0
                    ? 1
                    : depth === 1
                      ? 0.8
                      : 0.55;

              return (
                <DiscoverSlideCard
                  key={cat.id}
                  cat={cat}
                  isOut={isOut}
                  onClick={() => goToSlide(index)}
                  style={{
                    width: "100%",
                    height: "100%",
                    zIndex: zIndex,
                    transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`,
                    opacity: opacity,
                    boxShadow: "none",
                  }}
                />
              );
            })}
          </div>
        </div>

        <DiscoverDots total={total} activeIndex={activeIndex} onSelect={goToSlide} />
      </div>
    </div>
  );
};

export default DiscoverSlider;
