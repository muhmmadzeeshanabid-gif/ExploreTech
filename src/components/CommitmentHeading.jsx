import { useLanguage } from "../context/LanguageContext.jsx";

const CommitmentHeading = () => {
  const { language } = useLanguage();

  return (
    <section className="mt-0 w-full bg-white pb-8 pt-3 md:mt-0 md:pt-3 lg:mt-0 lg:pt-4">
      <h2
        className={`mx-auto px-6 text-center text-[24px] font-semibold leading-[30px] text-[rgb(0,0,0)] lg:text-[40px] lg:leading-[50px] ${
          language === "AR" ? "max-w-[1120px] lg:max-w-[1120px]" : "max-w-5xl"
        }`}
        style={{ fontFamily: '"Space Grotesk", sans-serif' }}
        dir={language === "AR" ? "rtl" : "ltr"}
      >
        {language === "AR" ? (
          <span
            className="mx-auto block w-full max-w-[1120px]"
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "40px",
              lineHeight: "50px",
              color: "rgb(0, 0, 0)",
            }}
          >
            <span className="block whitespace-nowrap">
              المشترون: منصة تحظى بثقة شركات الضيافة العالمية في جميع أنحاء
            </span>
            <span className="block whitespace-nowrap">
              الشرق الأوسط وأفريقيا.
            </span>
          </span>
        ) : (
          "Committed to serving all hospitality companies throughout the Middle East and Africa."
        )}
      </h2>
    </section>
  );
};

export default CommitmentHeading;
