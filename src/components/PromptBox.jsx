import { useState } from "react";
import { ArrowUp, AudioLines, Info } from "lucide-react";

const PromptBox = () => {
  const [message, setMessage] = useState("");
  const canSend = message.trim().length > 0;

  return (
    <div className="mx-auto mt-2 w-full max-w-[818px] px-4 sm:px-6 md:max-w-[940px] md:px-8 lg:max-w-[818px]">
      <div className="relative h-[152px] rounded-[4px] border-2 border-slate-300 bg-white md:h-[176px] lg:h-[161.6px]">
        <textarea
          className="h-full w-full resize-none rounded-[4px] px-4 pt-3 pb-4 font-['SF_Pro_Text'] text-[15px] leading-[22px] text-slate-900 placeholder:text-slate-400 focus:outline-none md:px-5 md:pt-[15px] md:text-[16px] md:leading-[24px]"
          placeholder="Start a conversation..."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <div className="absolute bottom-3 right-4 flex items-center gap-2 md:bottom-4 md:right-5 md:gap-3">
          <AudioLines className="h-[18px] w-[18px] text-black md:h-5 md:w-5" strokeWidth={2.2} />
          <button
            className={`flex h-8 w-8 items-center justify-center rounded-full text-white transition md:h-9 md:w-9 ${
              canSend
                ? "bg-[#14c439] hover:bg-[#12b337]"
                : "cursor-not-allowed bg-[#8be4a4]"
            }`}
            type="button"
            disabled={!canSend}
            aria-label="Send message"
          >
            <ArrowUp className="h-4 w-4" strokeWidth={2.2} />
          </button>
        </div>
      </div>
      <div className="mt-3 flex w-full items-start justify-center gap-2 bg-white px-3 py-2 text-center font-['SF_Pro_Text'] text-[11px] font-normal leading-[16px] text-[#6B7280] md:px-4 md:text-[12px]">
        <Info className="mt-[2px] h-[11px] w-[11px] shrink-0 text-[#6B7280] md:h-[12px] md:w-[12px]" />
        <p
          className="max-w-[680px] font-['SF_Pro_Text']"
          style={{ fontFamily: '"SF Pro Text", sans-serif' }}
        >
          ExploreTECH PRO is in beta. The bot may sometimes provide incorrect
          responses.
        </p>
      </div>
    </div>
  );
};

export default PromptBox;
