import React from "react";
import connectImage from "../../assets/images/connect/ConnectToExploeTECH.webp";

const ConnectImageColumn = ({ isArabic, imageAlt }) => (
  <div
    className={`flex w-full items-center justify-center ${
      isArabic ? "lg:order-1 lg:justify-start lg:-ml-10" : "lg:order-2 lg:justify-end"
    }`}
  >
    <div
      className={`mt-[2px] h-auto min-h-[250px] w-[95%] max-w-[360px] sm:min-h-[300px] sm:w-full sm:max-w-none lg:h-[445px] ${
        isArabic
          ? "lg:w-[calc(100%+150px)] lg:mr-[-70px]"
          : "lg:w-[calc(100%+24px)] lg:mr-[-24px]"
      }`}
    >
      <img
        src={connectImage}
        alt={imageAlt}
        className="h-full w-full rounded-[12px] object-cover shadow-[0_24px_50px_-30px_rgba(0,0,0,0.7)] lg:rounded-[20px]"
      />
    </div>
  </div>
);

export default ConnectImageColumn;

