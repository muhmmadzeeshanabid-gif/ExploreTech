import React from "react";
import procureImage from "../assets/images/procure/ProcureSection.png";
import { useLanguage } from "../context/LanguageContext.jsx";

const ProcureSection = () => {
  const { language } = useLanguage();
  const isArabic = language === "AR";
  return (
    <section className="w-full bg-[#17c53a] py-16">
      <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div
          className={`flex items-center ${
            isArabic ? "justify-start lg:order-2 lg:justify-start" : "justify-center lg:order-1 lg:justify-end"
          }`}
        >
          <div className="relative h-[260px] w-[95%] max-w-[360px] overflow-hidden rounded-[12px] sm:h-[350px] sm:w-full sm:max-w-[500px] lg:h-[445px] lg:w-full lg:max-w-[640px] lg:rounded-[28px]">
            <img
              src={procureImage}
              alt={isArabic ? "معاينة الشراء" : "Procure preview"}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div
          className={`text-white ${
            isArabic ? "text-right lg:order-1 lg:-translate-x-10" : "text-left lg:order-2"
          }`}
        >
          <h1
            className="text-[32px] font-semibold leading-tight lg:h-[50px] lg:w-[653.025px] lg:text-[40px] lg:leading-[50px]"
            style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600 }}
          >
            {isArabic ? "الشراء" : "Procure"}
          </h1>
          {isArabic ? (
            <>
              <p
                className="mt-4 text-[18px] font-normal leading-[24px] text-white lg:h-[96px] lg:w-[653.025px]"
                dir="rtl"
                style={{
                  fontFamily: '"SF Pro Text", sans-serif',
                  fontWeight: 400,
                }}
              >
                تبسيط عملية RFI/RFP باستخدام أداة مؤتمتة قادمة قريبًا. أرسل
                طلبات مخصصة إلى عدة مورّدين، استقبل العروض المنظمة، وقارنها جنبًا
                إلى جنب. وفر الوقت، قلل التكاليف، واتخذ قرارات أكثر ذكاءً بثقة.
              </p>
              <p
                className="mt-6 block w-full text-right text-[16px] font-bold leading-[24px] text-white lg:w-[653.025px]"
                style={{
                  fontFamily: '"SF Pro Text", sans-serif',
                  fontWeight: 700,
                }}
              >
                -- قريبًا --
              </p>
            </>
          ) : (
            <>
              <p
                className="mt-4 font-normal leading-[24px] text-white lg:h-[96px] lg:w-[653.025px] text-[16px]"
                dir="ltr"
                style={{ fontFamily: '"SF Pro Text", sans-serif', fontWeight: 400 }}
              >
                Streamline your RFI/RFP process with our upcoming automated tool.
                Effortlessly send customized requests to multiple vendors, receive
                organized proposals, and compare them side-by-side. Save time,
                reduce costs, and make smarter decisions with confidence.
              </p>
              <p
                className="mt-6 text-[16px] font-bold leading-[24px] text-white"
                style={{
                  fontFamily: '"SF Pro Text", sans-serif',
                  fontWeight: 700,
                }}
              >
                --Coming Soon--
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProcureSection;
