import React from "react";

const EarlyAdoptersHeader = ({ isArabic }) => (
  <>
    <h2
      className="text-[32px] font-bold leading-[1.2] text-[#0b0b0b] md:text-[40px]"
      style={{ fontFamily: '"Space Grotesk", sans-serif' }}
    >
      {isArabic
        ? "أوائل من انضموا إلى إكسبلورتك"
        : "ExploreTECH Early Adopters"}
    </h2>
    <p
      className="mx-auto mt-4 max-w-[960px] text-[18px] font-normal leading-[27px] text-[rgb(16,24,64)]"
      style={{
        fontFamily: '"Space Grotesk", sans-serif',
        fontStyle: "normal",
        fontWeight: 400,
      }}
    >
      {isArabic
        ? "قمنا بإدراج 13 علامة تجارية على منصة إكسبلورتك الرقمية منذ اليوم الأول، تشاركنا جميعها الرؤية والرسالة لتمكين الابتكار من خلال التكنولوجيا في قطاع الضيافة في الشرق الأوسط وأفريقيا"
        : "We are immensely thankful to the visionary technology brands who, as early adopters, have played a crucial role in validating ExploreTECH's value proposition right from the outset."}
    </p>
  </>
);

export default EarlyAdoptersHeader;
