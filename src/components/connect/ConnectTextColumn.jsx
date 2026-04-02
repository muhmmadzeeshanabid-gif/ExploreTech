import React from "react";
import ConnectInfoBlock from "./ConnectInfoBlock.jsx";

const headingStyle = { fontFamily: '"Space Grotesk", sans-serif' };
const bodyStyle = { fontFamily: '"SF Pro Text", sans-serif' };

const ConnectTextColumn = ({ isArabic, content }) => (
  <div
    className={`text-white lg:-ml-[40px] ${
      isArabic
        ? "text-right lg:order-2 lg:translate-x-10"
        : "text-left lg:order-1"
    }`}
  >
    <h1
      className="text-[32px] font-semibold leading-tight lg:text-[40px] lg:leading-[50px]"
      style={headingStyle}
    >
      {content.title}
    </h1>
    <p
      className="mt-2 text-[16px] font-normal leading-[24px] text-white"
      dir={isArabic ? "rtl" : "ltr"}
      style={bodyStyle}
    >
      {content.subtitle}
    </p>

    <div className="mt-8 space-y-8">
      {content.blocks.map((block) => (
        <ConnectInfoBlock key={block.title} isArabic={isArabic} block={block} />
      ))}
    </div>
  </div>
);

export default ConnectTextColumn;

