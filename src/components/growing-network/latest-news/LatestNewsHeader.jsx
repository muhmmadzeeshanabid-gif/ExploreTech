import React from "react";

const LatestNewsHeader = ({ isArabic }) => (
  <div className="mb-12 text-center">
    <h2
      className="text-[32px] font-bold leading-[1.2] text-[#111] md:text-[40px]"
      style={{ fontFamily: '"Space Grotesk", sans-serif' }}
    >
      {isArabic ? "ماذا يحدث؟" : "Latest News"}
    </h2>
    <p
      className="mx-auto mt-3 max-w-[880px] text-[15px] text-[#4b5563] md:text-[16px]"
      style={{ fontFamily: '"SF Pro Text", sans-serif' }}
    >
      {isArabic
        ? "اقرأ أحدث الأخبار وأكثرها صلة والتي ينشرها مزودوا الخدمات المسجلون معنا وإكسبلورتك"
        : "Stay informed with the latest and most relevant news from ExploreTECH and our featured hospitality industry experts."}
    </p>
  </div>
);

export default LatestNewsHeader;
