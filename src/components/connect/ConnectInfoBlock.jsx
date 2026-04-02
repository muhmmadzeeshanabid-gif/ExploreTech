import React from "react";

const textStyle = { fontFamily: '"SF Pro Text", sans-serif' };

const ConnectInfoBlock = ({ isArabic, block }) => (
  <div>
    <h3 className="text-[18px] font-bold leading-[26px]" style={textStyle}>
      {block.title}
    </h3>
    <p
      className="mt-2 max-w-[700px] text-[16px] font-normal leading-[24px] text-white"
      dir={isArabic ? "rtl" : "ltr"}
      style={textStyle}
    >
      {block.description}
    </p>
    <button
      type="button"
      className="mt-4 inline-flex h-[41.6px] w-[208.55px] items-center justify-center rounded-[8px] bg-white text-[12px] font-normal leading-[16px] text-[#0055FE] shadow-[0_10px_22px_-16px_rgba(0,0,0,0.5)] transition hover:bg-[#e9f1ff]"
      style={textStyle}
    >
      {block.cta}
    </button>
  </div>
);

export default ConnectInfoBlock;

