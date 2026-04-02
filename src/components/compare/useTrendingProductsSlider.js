import { useEffect, useMemo, useState } from "react";
import { getTrendingCardStyle } from "./trendingProductsSliderUtils.js";

const getInitialScreenSize = () => ({
  width: typeof window !== "undefined" ? window.innerWidth : 1200,
  isMobile: typeof window !== "undefined" ? window.innerWidth < 768 : false,
});

const useTrendingProductsSlider = ({ total, isArabic }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [screenSize, setScreenSize] = useState(getInitialScreenSize);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        isMobile: window.innerWidth < 768,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 4000);

    return () => clearInterval(interval);
  }, [total]);

  const resolveCardStyle = useMemo(
    () => (index) =>
      getTrendingCardStyle({
        index,
        activeIndex,
        total,
        isArabic,
        width: screenSize.width,
      }),
    [activeIndex, isArabic, screenSize.width, total],
  );

  return {
    activeIndex,
    setActiveIndex,
    screenSize,
    resolveCardStyle,
  };
};

export default useTrendingProductsSlider;

