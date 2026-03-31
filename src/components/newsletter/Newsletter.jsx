import React from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../context/LanguageContext.jsx";
import AgreementText from "./AgreementText.jsx";
import NewsletterInput from "./NewsletterInput.jsx";
import useNewsletterForm from "./useNewsletterForm.js";

const Newsletter = () => {
  const { language } = useLanguage();
  const { t } = useTranslation("common");
  const isArabic = language === "AR";
  const { formData, isSubmitting, isSuccess, isFormValid, handleSubmit, handleChange } =
    useNewsletterForm();

  return (
    <section
      className="mx-auto mt-[-5px] w-full max-w-[1520.8px] px-4 py-8"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div
        className={`relative flex min-h-[443.6px] flex-col justify-center overflow-hidden rounded-[32px] bg-gradient-to-r from-[#0089D9] via-[#00ACB8] via-[#03DB7D] to-[#00BDA8] px-6 py-10 text-center md:px-12 md:py-12 ${
          isArabic ? "items-center" : ""
        }`}
      >
        <h2
          className={`mb-4 text-white ${
            isArabic
              ? "mx-auto max-w-[1120px] text-[24px] font-normal leading-[32px] md:text-[36px] md:leading-[40px]"
              : "text-[32px] font-normal leading-[40px] md:text-[36px]"
          }`}
          style={{ fontFamily: '"SF Pro Text", sans-serif' }}
        >
          {t("newsletter.heading")}
        </h2>

        <p
          className={`mb-10 text-white ${
            isArabic
              ? "text-[14px] font-medium leading-[20px] md:text-[18px] md:leading-[28px]"
              : "text-[18px] font-medium leading-[28px]"
          }`}
          style={{ fontFamily: '"SF Pro Text", sans-serif' }}
        >
          {t("newsletter.subheading")}
        </p>

        <form onSubmit={(event) => handleSubmit(event, isFormValid)} className="mx-auto w-full max-w-[1062px]">
          <div
            className={`mb-8 grid grid-cols-1 gap-6 md:grid-cols-[repeat(3,minmax(0,1fr))] md:gap-6 ${
              isArabic ? "md:[direction:rtl]" : ""
            }`}
          >
            <NewsletterInput
              isArabic={isArabic}
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              label={t("newsletter.labels.firstName")}
              placeholder={t("newsletter.placeholders.firstName")}
            />

            <NewsletterInput
              isArabic={isArabic}
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              label={t("newsletter.labels.lastName")}
              placeholder={t("newsletter.placeholders.lastName")}
            />

            <NewsletterInput
              isArabic={isArabic}
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              label={t("newsletter.labels.email")}
              placeholder={t("newsletter.placeholders.email")}
            />
          </div>

          <div
            className={`mb-8 flex w-full items-start gap-3 text-white ${
              isArabic ? "flex-row justify-start text-right" : "justify-start text-left"
            }`}
          >
            <div className="flex-shrink-0 pt-1">
              <div className="relative inline-block h-5 w-5">
                <input
                  name="agreed"
                  checked={formData.agreed}
                  onChange={handleChange}
                  type="checkbox"
                  id="agree"
                  className={`h-5 w-5 cursor-pointer appearance-none rounded-[4px] border-2 border-white/90 outline-none transition-all focus:border-[#3B69FF] ${
                    formData.agreed ? "bg-[#3B69FF]" : "bg-white"
                  }`}
                />
                {formData.agreed && (
                  <svg
                    className="pointer-events-none absolute inset-0 m-auto h-3 w-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={4}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
            </div>

            <label
              htmlFor="agree"
              className={`cursor-pointer text-[18px] font-normal leading-[26px] ${
                isArabic ? "max-w-[1100px] text-right" : "text-left"
              }`}
              style={{ fontFamily: '"SF Pro Text", sans-serif' }}
            >
              <AgreementText isArabic={isArabic} />
            </label>
          </div>

          <div className="flex flex-col items-center justify-center">
            <button
              type="submit"
              disabled={!isFormValid || isSubmitting || isSuccess}
              className={`flex cursor-pointer items-center justify-center rounded-[4px] text-white shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-all duration-300 active:scale-95 ${
                isFormValid && !isSuccess
                  ? "bg-[#3B69FF]"
                  : "cursor-not-allowed bg-[#D1D5FF]"
              }`}
              style={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                width: "208.675px",
                height: "41.6px",
              }}
            >
              {isSubmitting ? (
                <div className="mt-[2px] flex items-center justify-center gap-2" dir={isArabic ? "rtl" : "ltr"}>
                  <div className="h-4 w-4 flex-shrink-0 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  <span>{t("newsletter.subscribe")}</span>
                </div>
              ) : (
                t("newsletter.subscribe")
              )}
            </button>
            {isSuccess && (
              <p
                className="animate-in mt-6 text-center text-[16px] font-medium text-white fade-in duration-500"
                style={{ fontFamily: '"SF Pro Text", sans-serif' }}
              >
                {t("newsletter.success")}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
