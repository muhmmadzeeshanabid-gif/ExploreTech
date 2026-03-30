import React, { useState, useEffect } from "react";
import TrendingProductCard from "./TrendingProductCard";
import { trendingProducts } from "../../data/trendingProductsData";

const TrendingProductsSlider = ({ isArabic }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    isMobile: typeof window !== "undefined" ? window.innerWidth < 768 : false
  });
  const total = trendingProducts.length;

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        isMobile: window.innerWidth < 768
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

  const getCardStyle = (index) => {
    const relativePos = (index - activeIndex + total) % total;
    const { width, isMobile } = screenSize;
    
    // Dynamic xOffset calculation
    let xOffset;
    if (width < 380) {
      xOffset = width * 0.28; // Small mobile
    } else if (width < 768) {
      xOffset = 110; // Regular mobile
    } else if (width < 1024) {
      xOffset = 130; // Tablet
    } else {
      xOffset = 145; // Desktop
    }

    if (isArabic) xOffset = -xOffset;

    // Center card (Active)
    if (relativePos === 0) {
      return {
        zIndex: 30,
        transform: "translate(-50%, -30px) scale(1)",
        opacity: 1,
      };
    }

    // Right card (Next)
    if (relativePos === 1) {
      return {
        zIndex: 20,
        transform: `translate(calc(-50% + ${xOffset}px), 10px) scale(0.8)`,
        opacity: 1,
      };
    }

    // Left card (Previous)
    if (relativePos === total - 1) {
      return {
        zIndex: 10,
        transform: `translate(calc(-50% - ${xOffset}px), 20px) scale(0.8)`,
        opacity: 1,
      };
    }

    // Hidden cards
    return {
      zIndex: 0,
      transform: "translate(-50%, 40px) scale(0.7)",
      opacity: 0,
      pointerEvents: "none",
    };
  };

  return (
    <div className="relative flex w-full flex-col items-center justify-center pt-8">
      {/* Cards Container */}
      <div className="relative h-[360px] w-full max-w-[600px] flex items-center justify-center">
        {trendingProducts.map((product, index) => (
          <TrendingProductCard
            key={product.id}
            product={product}
            isArabic={isArabic}
            isMobile={screenSize.isMobile}
            style={getCardStyle(index)}
          />
        ))}
      </div>

      {/* Pagination Dots */}
      <ul className="mt-8 flex items-center justify-center gap-2 space-x-3">
        {trendingProducts.map((_, index) => (
          <li key={index} className="list-none">
            <button
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className="h-2 w-8 rounded-full transition-all duration-300 bg-white"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingProductsSlider;
