import { useState } from "react";
import { ArrowUp, AudioLines, Info } from "lucide-react";
import { useLanguage } from "../context/LanguageContext.jsx";

const PromptBox = () => {
  const { language } = useLanguage();
  const [message, setMessage] = useState("");
  const canSend = message.trim().length > 0;
  const isArabic = language === "AR";
  const headingClassName = isArabic
    ? "mb-4 w-full px-4 text-center font-['Space_Grotesk'] text-[28px] font-semibold leading-[38px] text-black sm:px-6 lg:text-[40px] lg:leading-[60px]"
    : "mb-4 w-full px-4 text-center font-['Space_Grotesk'] text-[28px] font-semibold leading-[38px] text-black sm:px-6 lg:text-[40px] lg:leading-[60px]";

  return (
    <div className="mx-auto mt-2 w-full max-w-[818px] px-4 sm:px-6 md:max-w-[940px] md:px-8 lg:max-w-[818px]">
      <h1 className={headingClassName} dir={isArabic ? "rtl" : "ltr"}>
        {isArabic ? "اسألني عن أي شيء يخص تقنيات الفنادق" : "Ask me anything about hotel TECH"}
      </h1>
      <div className="relative h-[150px] rounded-[4px] border-2 border-slate-300 bg-white md:h-[176px] lg:h-[164px]">
        <textarea
          className={`h-full w-full resize-none rounded-[4px] px-4 pt-2.5 pb-3.5 font-['SF_Pro_Text'] text-[15px] leading-[22px] text-slate-900 placeholder:text-slate-400 focus:outline-none md:px-5 md:pt-3 md:text-[16px] md:leading-[24px] ${
            language === "AR" ? "text-right" : "text-left"
          }`}
          placeholder={
            language === "AR" ? "ابدأ محادثة..." : "Start a conversation..."
          }
          dir={language === "AR" ? "rtl" : "ltr"}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <div
          className={`absolute bottom-2.5 flex items-center gap-2 md:bottom-3 md:gap-3 ${
            language === "AR" ? "left-4 md:left-5 flex-row-reverse" : "right-4 md:right-5"
          }`}
        >
          <AudioLines className="h-[18px] w-[18px] text-black md:h-5 md:w-5" strokeWidth={2.2} />
          <button
            className={`flex h-8 w-8 items-center justify-center rounded-full text-white transition md:h-9 md:w-9 ${
              canSend
                ? "bg-[#14c439] hover:bg-[#12b337]"
                : "cursor-not-allowed bg-[#8be4a4]"
            }`}
            type="button"
            disabled={!canSend}
            aria-label={language === "AR" ? "إرسال رسالة" : "Send message"}
          >
            <ArrowUp className="h-4 w-4" strokeWidth={2.2} />
          </button>
        </div>
      </div>
      <div
        className={`mt-2.5 flex w-full items-start justify-center gap-2 bg-white px-3 py-1.5 font-['SF_Pro_Text'] text-[11px] font-normal leading-[16px] text-[#6B7280] md:px-4 md:text-[12px] ${
          language === "AR" ? "text-right" : "text-center"
        }`}
      >
        <Info className="mt-[2px] h-[11px] w-[11px] shrink-0 text-[#6B7280] md:h-[12px] md:w-[12px]" />
        <p
          className="max-w-[680px] font-['SF_Pro_Text']"
          dir={language === "AR" ? "rtl" : "ltr"}
          style={{ fontFamily: '"SF Pro Text", sans-serif' }}
        >
          {language === "AR"
            ? "ExploreTECH PRO في مرحلة البيتا حاليًا. الروبوت يتعلم ويتطور بشكل مستمر، لذا قد تختلف بعض الردود في الدقة."
            : "ExploreTECH PRO is in beta. The bot may sometimes provide incorrect responses."}
        </p>
      </div>
    </div>
  );
};

export default PromptBox;
