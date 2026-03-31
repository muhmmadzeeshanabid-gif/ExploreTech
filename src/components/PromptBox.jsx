import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/LanguageContext.jsx";

const PromptBox = () => {
  const { language } = useLanguage();
  const { t } = useTranslation("common");
  const [message, setMessage] = useState("");
  const isArabic = language === "AR";
  const canSend = message.trim().length > 0;

  const content = {
    heading: t("promptBox.heading"),
    placeholder: t("promptBox.placeholder"),
    disclaimer: t("promptBox.disclaimer"),
  };

  return (
    <div className="flex w-full flex-col items-center justify-center px-4">
      <div className="flex w-[90%] max-w-[850px] flex-col items-center md:w-[70%]">
        <h1
          className="mb-6 text-center text-[28px] font-semibold max-sm:mt-10 max-sm:leading-8 md:text-[32px] lg:text-[40px]"
          dir={isArabic ? "rtl" : "ltr"}
        >
          {content.heading}
        </h1>

        <div
          className={`w-full rounded-md border-2 border-gray-300 bg-white px-2 py-2 ${isArabic ? "rtl" : "ltr"} flex flex-col gap-2 md:block`}
        >
          <textarea
            rows="4"
            placeholder={content.placeholder}
            className={`w-full resize-none border-none bg-transparent px-3 text-black focus:outline-none focus:ring-0 ${isArabic ? "text-right" : "text-left"}`}
            style={{ height: "96px" }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            dir={isArabic ? "rtl" : "ltr"}
          />

          <div className="mt-2 flex items-center justify-between px-1">
            <div />
            <div
              className={`flex items-center space-x-1.5 ${isArabic ? "flex-row-reverse space-x-reverse" : ""}`}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 7.33333L1.5 10.6667M5.25 8.16667V9.83333M9 4V14M12.75 1.5V16.5M16.5 7.33333V10.6667"
                    stroke="#535862"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <button
                disabled={!canSend}
                className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${
                  canSend
                    ? "bg-[#12b033] hover:shadow-lg active:scale-95"
                    : "cursor-not-allowed bg-[#12b033] opacity-50"
                }`}
                title={t("promptBox.sendTitle")}
              >
                <div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path
                      d="M12 19V5M12 5L5 12M12 5L19 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>

        <p
          className={`mt-3 flex items-center gap-1 text-xs text-gray-500 ${
            isArabic ? "flex-row-reverse" : ""
          }`}
          dir={isArabic ? "rtl" : "ltr"}
        >
          <span aria-hidden="true">ⓘ</span>
          <span>{content.disclaimer}</span>
        </p>
      </div>
    </div>
  );
};

export default PromptBox;
