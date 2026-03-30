import React from "react";

const CookiesBannerBar = ({ isArabic, onOpenSettings, onAction }) => (
  <div
    className="fixed bottom-0 left-0 z-[10000] w-full animate-in slide-in-from-bottom-full border-t border-slate-800 bg-[#110B35] px-5 py-6 text-white fade-in transition-all duration-500 md:px-[60px] md:py-8"
    style={{ fontFamily: '"SF Pro Text", sans-serif' }}
  >
    <div className="mx-auto flex max-w-[1472px] flex-col items-center justify-center gap-4 text-center">
      <h5
        className="w-full px-2 text-[12px] font-medium leading-[1.6] text-[#FFFFFF] opacity-100 md:text-[18px] md:font-normal md:leading-[27px]"
        style={{ fontFamily: '"SF Pro Text", sans-serif' }}
      >
        {isArabic ? (
          <>
            ExploreTECH uses Cookies in order to offer you the most relevant
            information. Please accept Cookies for optimal performance. To learn
            more, read our{" "}
            <span className="pointer-events-none underline decoration-white underline-offset-4">
              اتفاقية ملفات تعريف الارتباط
            </span>
          </>
        ) : (
          <>
            ExploreTECH uses Cookies in order to offer you the most relevent
            information. Please accept Cookies for optimal performance. To learn
            more, read our{" "}
            <span className="pointer-events-none underline decoration-white underline-offset-4">
              Cookies Policy
            </span>
          </>
        )}
      </h5>

      <div className="mt-2 flex w-full shrink-0 flex-row items-center justify-center gap-3 md:mt-0 md:w-auto">
        <button
          onClick={onOpenSettings}
          className="h-[32px] w-[132px] cursor-pointer rounded-[4px] bg-[#3366FF] text-[12px] font-medium leading-[32px] text-white transition-all hover:bg-[#2a55d4] active:scale-95"
          style={{
            fontFamily: '"SF Pro Text", sans-serif',
            boxShadow: "0 0 0 0.17761px #d6e0ff",
          }}
        >
          Cookies Settings
        </button>

        <button
          onClick={() => onAction("rejected")}
          className="h-[32px] w-[100px] cursor-pointer rounded-[4px] border-none bg-[#FFFFFF] text-[12px] font-medium leading-[32px] text-[#474D66] transition-all hover:bg-slate-50 active:scale-95"
          style={{
            fontFamily: '"SF Pro Text", sans-serif',
            boxShadow: "0 0 0 2px #d6e0ff",
          }}
        >
          Reject All
        </button>

        <button
          onClick={() => onAction("accepted")}
          className="h-[32px] w-[100px] cursor-pointer rounded-[4px] bg-[#3366FF] text-[12px] font-medium leading-[32px] text-[#FFFFFF] transition-all hover:bg-[#2a55d4] active:scale-95"
          style={{ fontFamily: '"SF Pro Text", sans-serif' }}
        >
          Accept All
        </button>
      </div>
    </div>
  </div>
);

export default CookiesBannerBar;
