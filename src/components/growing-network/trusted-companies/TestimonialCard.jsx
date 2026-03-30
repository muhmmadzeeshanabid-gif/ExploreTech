import React from "react";
import { quoteIcon } from "../../../data/trustedCompaniesData.js";

const QuoteIcon = () => (
  <img
    src={quoteIcon}
    alt="Quote Icon"
    className="h-[20px] w-[20px] object-contain"
  />
);

const TestimonialCard = ({ quote, author, title, company, isArabic = false }) => (
  <div className="mx-auto mb-6 flex w-full max-w-[440px] flex-col lg:mb-0 lg:w-[31%] lg:max-w-none">
    <div
      className="relative h-fit w-full rounded-bl-[100px] border-b-[4px] border-l-[3px] border-[#1fc04f] pb-14 pl-[45.5px] pr-6 pt-12"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="absolute left-0 top-0 h-[3px] w-[35px] bg-[#1fc04f]" />

      <div className="absolute -top-[20px] left-[30px] z-10 flex h-[45px] w-[45px] items-center justify-center rounded-full bg-[#1fc04f]">
        <QuoteIcon />
      </div>

      <div className="absolute -bottom-[20px] right-0 z-10 flex h-[45px] w-[45px] items-center justify-center rounded-full bg-[#1fc04f]">
        <QuoteIcon />
      </div>

      <p
        className="mb-6 w-full flex-grow text-left text-[12px] font-normal leading-[18px] text-[#242424]"
        style={{ fontFamily: '"SF Pro Text", sans-serif' }}
      >
        {quote}
      </p>

      <div
        className="flex w-full flex-col items-start text-left"
        style={{ fontFamily: '"SF Pro Text", sans-serif' }}
      >
        <div className="w-full text-[18px] font-medium leading-[27px] text-[#242424]">
          {author}
        </div>
        <div className="w-full text-[18px] font-normal leading-[27px] text-[#242424]">
          {title}
        </div>
        <div className="w-full text-[18px] font-medium leading-[27px] text-[#242424]">
          {company}
        </div>
      </div>
    </div>
  </div>
);

export default TestimonialCard;
