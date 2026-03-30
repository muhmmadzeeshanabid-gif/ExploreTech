import React from "react";
import { INPUT_BASE_CLASS, INPUT_BASE_STYLE } from "./newsletterContent.js";

const NewsletterInput = ({
  isArabic,
  label,
  placeholder,
  name,
  type = "text",
  value,
  onChange,
}) => (
  <div className={isArabic ? "text-right" : "text-left"}>
    <label
      className="mb-2 block text-[16px] font-semibold leading-[24px] text-white"
      style={{ fontFamily: '"Space Grotesk", sans-serif' }}
    >
      {label}
    </label>
    <input
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      className={`${INPUT_BASE_CLASS} ${
        value
          ? "border-transparent bg-[#EEF2FF] text-[#474D66]"
          : "border-transparent bg-white text-[#474D66]"
      } focus:border-[#3B69FF]`}
      style={{ ...INPUT_BASE_STYLE, textAlign: isArabic ? "right" : "left" }}
      dir={isArabic ? "rtl" : "ltr"}
    />
  </div>
);

export default NewsletterInput;
