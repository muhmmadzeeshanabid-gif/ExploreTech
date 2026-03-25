import bannerBg from "../assets/images/backgrounds/homeBannerBg.webp";
import { useLanguage } from "../context/LanguageContext.jsx";

const HeroBanner = () => {
  const { language } = useLanguage();
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <img
        src={bannerBg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[110px] left-1/2 z-0 h-[132px] w-[170%] max-w-none -translate-x-1/2 object-cover object-center contrast-125 saturate-125 sm:bottom-auto sm:top-[-14%] sm:h-[122%] sm:w-[140%] sm:contrast-100 sm:saturate-100 md:top-[-17%] md:h-[126%] md:w-[132%] lg:top-[-22%] lg:h-[132%] lg:w-[118%]"
      />

      <div className="relative z-10 mx-auto flex min-h-[430px] max-w-6xl flex-col items-center justify-start px-6 pt-8 pb-8 text-center sm:min-h-[500px] sm:pt-10 sm:pb-10 lg:min-h-[620px] lg:pt-16 lg:pb-12">
        <h1
          className="relative top-5 w-full max-w-[1200px] px-4 text-[28px] font-semibold leading-[38px] text-black sm:top-9 sm:text-[44px] sm:leading-[56px] lg:top-11 lg:text-[60px] lg:leading-[75px]"
          style={{ fontFamily: '"SF Pro Text", sans-serif' }}
        >
          {language === "AR" ? (
            <>
              <span className="text-[28px] font-semibold leading-[38px] text-[rgb(0,85,254)] sm:text-[44px] sm:leading-[56px] lg:text-[60px] lg:leading-[75px]">
                إكسبلورتك:
              </span>{" "}
              مصدر واحد | موقع واحد | منصة واحدة | عدة عملاء | حلول متعددة
            </>
          ) : (
            <>
              <span className="text-[28px] font-semibold leading-[38px] text-[rgb(0,85,254)] sm:text-[44px] sm:leading-[56px] lg:text-[60px] lg:leading-[75px]">
                ExploreTECH:
              </span>{" "}
              Your
              <br className="sm:hidden" />
              Omni Channel
              <br className="sm:hidden" />
              <br className="hidden sm:block" />
              for All things
              <br className="sm:hidden" />
              Hospitality Tech
            </>
          )}
        </h1>
        <p
          className="relative top-6 mt-8 max-w-3xl px-2 text-[16px] font-normal leading-[24px] text-black sm:top-9 md:text-[18px] md:leading-[27px] lg:top-12"
          style={{ fontFamily: '"SF Pro Text", sans-serif' }}
        >
          {language === "AR" ? (
            <>
              بوابتك الذكية المدعومة بالذكاء الاصطناعي لأكثر من 2000 حل تقني في مجال الضيافة،
              <br className="hidden sm:block" />
              لتبسيط العملية من الاكتشاف وحتى الشراء.
            </>
          ) : (
            <>
              Your AI-driven gateway to 2000+ hospitality tech solutions,
              <br className="hidden sm:block" />
              streamlining the process from discovery to procurement.
            </>
          )}
        </p>
        <button
          className="relative top-8 mt-10 rounded-md bg-[#2F66F3] px-6 py-3 text-[14px] font-medium text-white transition hover:bg-[#2557D6] sm:top-11 lg:top-14"
          type="button"
        >
          {language === "AR" ? "ابدأ الاستكشاف" : "Start exploring"}
        </button>
      </div>
    </section>
  );
};

export default HeroBanner;
