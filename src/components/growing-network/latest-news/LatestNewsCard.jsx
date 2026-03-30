import React from "react";
import { ArrowUpRight } from "lucide-react";

const LatestNewsCard = ({ item, isArabic }) => {
  const isSelectDate = item.id === 4;

  return (
    <article
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
              className="pb-[2px] text-left text-[22px] font-[600] leading-[32px] text-[#000] transition-all duration-200 group-hover:text-[#0B5BFF] group-hover:underline group-hover:underline-offset-[2px]"
              style={{ fontFamily: '"SF Pro Text", sans-serif', letterSpacing: "normal" }}
            >
              {item.title}
            </h4>
          )}
          {isArabic ? (
            <h4
              className="pb-[2px] text-right text-[22px] font-[600] leading-[32px] text-[#000] transition-all duration-200 group-hover:text-[#0B5BFF] group-hover:underline group-hover:underline-offset-[2px]"
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
};

export default LatestNewsCard;
