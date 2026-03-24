import { useLanguage } from "../context/LanguageContext.jsx";

const CommitmentHeading = () => {
  const { language } = useLanguage();

  return (
    <section className="mt-0 w-full bg-white pb-8 pt-3 md:mt-0 md:pt-3 lg:mt-0 lg:pt-4">
      <h2
        className={`mx-auto max-w-5xl px-6 text-center text-[24px] font-semibold leading-[30px] text-[rgb(0,0,0)] lg:leading-[50px] ${
          language === "AR" ? "lg:text-[32px]" : "lg:text-[40px]"
        }`}
        style={{ fontFamily: '"Space Grotesk", sans-serif' }}
      >
        {language === "AR" ? (
          <>
            المشترون: منصة تحظى بثقة شركات الضيافة العالمية في جميع أنحاء
            <br />
            الشرق الأوسط وأفريقيا.
          </>
        ) : (
          "Committed to serving all hospitality companies throughout the Middle East and Africa."
        )}
      </h2>
    </section>
  );
};

export default CommitmentHeading;
