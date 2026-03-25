import React from "react";
import { latestNewsItems } from "../../data/latestNews";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext.jsx";

const LatestNews = () => {
  const { language } = useLanguage();
  const isArabic = language === "AR";
  const displayNewsItems = isArabic ? [...latestNewsItems].reverse() : latestNewsItems;

  return (
    <section className="w-full bg-[#EDEDED] py-16 md:py-24" dir={isArabic ? "rtl" : "ltr"}>
      <div className="mx-auto w-full max-w-[1520px] px-5 md:px-10">
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

        <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 sm:gap-10 lg:grid-cols-3">
          {displayNewsItems.map((item) => {
            const isSelectDate = item.id === 4;
            return (
              <article
                key={item.id}
                className={`group relative mx-auto flex h-full w-full max-w-[440px] flex-col gap-3 ${
                  isArabic ? "text-right" : "text-left"
                }`}
              >
                <div className="h-[180px] w-full max-w-[440px] overflow-hidden rounded-[12px] bg-[#e5e7eb] sm:h-[209px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full cursor-pointer object-cover transition duration-500 ease-out group-hover:scale-[1.08]"
                    style={isSelectDate ? { objectPosition: "center 55%" } : undefined}
                    loading="lazy"
                  />
                </div>

                <div className={`flex flex-1 flex-col gap-2 ${isArabic ? "pl-2 pr-0" : "pr-2"}`}>
                  <p
                    className="text-[13px] font-semibold uppercase tracking-[0.03em] text-[#3b4cca] group-hover:text-[#3b4cca]"
                    style={{ fontFamily: '"SF Pro Text", sans-serif' }}
                  >
                    {item.date}
                  </p>
                  <div
                    className={`flex h-[60px] w-[440px] max-w-full items-start justify-between gap-3 ${
                      isArabic ? "flex-row-reverse" : ""
                    }`}
                  >
                    {isArabic ? (
                      <i
                        className="bi bi-arrow-down-left mt-1 shrink-0 text-[18px] leading-none text-black transition-colors duration-200 group-hover:text-[#6b7280]"
                        aria-hidden="true"
                      />
                    ) : (
                      <h4
                        className="pb-[2px] text-[22px] font-[600] leading-[32px] text-[#000] transition-all duration-200 group-hover:text-[#0B5BFF] group-hover:underline group-hover:underline-offset-[2px] text-left"
                        style={{ fontFamily: '"SF Pro Text", sans-serif', letterSpacing: "normal" }}
                      >
                        {item.title}
                      </h4>
                    )}
                    {isArabic ? (
                      <h4
                        className="pb-[2px] text-[22px] font-[600] leading-[32px] text-[#000] transition-all duration-200 group-hover:text-[#0B5BFF] group-hover:underline group-hover:underline-offset-[2px] text-right"
                        style={{ fontFamily: '"SF Pro Text", sans-serif', letterSpacing: "normal" }}
                      >
                        {item.title}
                      </h4>
                    ) : (
                      <span className="mt-1 shrink-0">
                        <ArrowUpRight className="h-4 w-4 text-black transition-colors duration-200 group-hover:text-[#6b7280]" />
                      </span>
                    )}
                  </div>
                  <p
                    className={`text-[14px] text-[#6b7280] ${isArabic ? "text-right" : "text-left"}`}
                    style={{ fontFamily: '"SF Pro Text", sans-serif' }}
                  >
                    {item.company}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            className="h-[46px] w-[122.5px] rounded-[4px] bg-blue-600 text-[16px] font-medium uppercase leading-[32px] text-white transition hover:bg-blue-700"
          >
            {isArabic ? "قراءة المزيد" : "Read More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
