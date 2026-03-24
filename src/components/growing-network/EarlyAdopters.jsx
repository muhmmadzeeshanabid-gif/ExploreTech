import React from "react";
import { earlyAdopters } from "../../data/earlyAdopters";
import { useLanguage } from "../../context/LanguageContext.jsx";

const EarlyAdopters = () => {
  const { language } = useLanguage();
  const isArabic = language === "AR";

  return (
    <section className="w-full bg-white py-16 md:py-24" dir={isArabic ? "rtl" : "ltr"}>
      <div className="mx-auto w-full max-w-[1320px] px-5 text-center md:px-10">
        <h2
          className="text-[32px] font-bold leading-[1.2] text-[#0b0b0b] md:text-[40px]"
          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
        >
          {isArabic ? "أوائل من انضموا إلى إكسبلورتك" : "ExploreTECH Early Adopters"}
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

        <div className="mt-12 space-y-4 md:space-y-6">
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
