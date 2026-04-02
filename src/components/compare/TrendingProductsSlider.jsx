import React from "react";
import TrendingProductCard from "./TrendingProductCard";
import { trendingProducts } from "../../data/trendingProductsData";
import TrendingProductsPagination from "./TrendingProductsPagination.jsx";
import useTrendingProductsSlider from "./useTrendingProductsSlider.js";

const TrendingProductsSlider = ({ isArabic }) => {
  const total = trendingProducts.length;
  const { setActiveIndex, screenSize, resolveCardStyle } =
    useTrendingProductsSlider({
      total,
      isArabic,
    });

  return (
    <div className="relative flex w-full flex-col items-center justify-center pt-8">
      <div className="relative h-[360px] w-full max-w-[600px] flex items-center justify-center">
        {trendingProducts.map((product, index) => (
          <TrendingProductCard
            key={product.id}
            product={product}
            isArabic={isArabic}
            isMobile={screenSize.isMobile}
            style={resolveCardStyle(index)}
          />
        ))}
      </div>

      <TrendingProductsPagination total={total} onSelect={setActiveIndex} />
    </div>
  );
};

export default TrendingProductsSlider;
