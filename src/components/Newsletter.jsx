import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext.jsx";

const Newsletter = () => {
  const { language } = useLanguage();
  const isArabic = language === "AR";
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const isFormFilled =
    formData.firstName.trim() !== "" &&
    formData.lastName.trim() !== "" &&
    formData.email.trim() !== "";

  const isFormValid = isFormFilled && formData.agreed;

  return (
    <section className="mx-auto mt-[-5px] w-full max-w-[1520.8px] px-4 py-8" dir={isArabic ? "rtl" : "ltr"}>
      <div className="relative flex min-h-[443.6px] flex-col justify-center overflow-hidden rounded-[32px] bg-gradient-to-r from-[#0089D9] via-[#00ACB8] via-[#03DB7D] to-[#00BDA8] px-6 py-10 text-center md:px-12 md:py-12">
        <h2
          className={`mb-4 text-[32px] font-normal leading-[40px] text-white md:text-[36px] ${isArabic ? "mx-auto max-w-[1120px]" : ""}`}
          style={{ fontFamily: '"SF Pro Text", sans-serif' }}
        >
          {isArabic ? "واكب آخر أخبار الصناعة وتحديثاتها." : "Keep up with the latest industry news & trends."}
        </h2>

        <p
          className="mb-10 text-[18px] font-medium leading-[28px] text-white"
          style={{ fontFamily: '"SF Pro Text", sans-serif' }}
        >
          {isArabic
            ? "اشترك في النشرة الإخبارية لتبقى على اطلاع"
            : "Subscribe to Our Newsletter to Stay Informed."}
        </p>

        <form className="mx-auto w-full max-w-[1300px]">
          <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            <div className={isArabic ? "text-right" : "text-left"}>
              <label
                className="mb-2 block text-[16px] font-semibold leading-[24px] text-white"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                {isArabic ? "الاسم الأول:" : "First Name:"}
              </label>
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                type="text"
                placeholder={isArabic ? "أدخل اسمك الأول" : "Enter your First name"}
                className={`h-[58px] w-full rounded-[4px] border-2 px-5 text-[14px] font-normal leading-[16px] outline-none transition-all ${
                  formData.firstName
                    ? "border-transparent bg-[#EEF2FF] text-[#474D66]"
                    : "border-transparent bg-white text-[#474D66]"
                } focus:border-[#3B69FF]`}
                style={{
                  fontFamily:
                    '"SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                  textAlign: isArabic ? "right" : "left",
                }}
              />
            </div>

            <div className={isArabic ? "text-right" : "text-left"}>
              <label
                className="mb-2 block text-[16px] font-semibold leading-[24px] text-white"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                {isArabic ? "اسم العائلة:" : "Last name:"}
              </label>
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                type="text"
                placeholder={isArabic ? "أدخل اسم العائلة" : "Enter your Last name"}
                className={`h-[58px] w-full rounded-[4px] border-2 px-5 text-[14px] font-normal leading-[16px] outline-none transition-all ${
                  formData.lastName
                    ? "border-transparent bg-[#EEF2FF] text-[#474D66]"
                    : "border-transparent bg-white text-[#474D66]"
                } focus:border-[#3B69FF]`}
                style={{
                  fontFamily:
                    '"SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                  textAlign: isArabic ? "right" : "left",
                }}
              />
            </div>

            <div className={isArabic ? "text-right" : "text-left"}>
              <label
                className="mb-2 block text-[16px] font-semibold leading-[24px] text-white"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                {isArabic ? "بريد إلكتروني:" : "Email:"}
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder={isArabic ? "أدخل عنوان بريدك الإلكتروني" : "Enter your email address"}
                className={`h-[58px] w-full rounded-[4px] border-2 px-5 text-[14px] font-normal leading-[16px] outline-none transition-all ${
                  formData.email
                    ? "border-transparent bg-[#EEF2FF] text-[#474D66]"
                    : "border-transparent bg-white text-[#474D66]"
                } focus:border-[#3B69FF]`}
                style={{
                  fontFamily:
                    '"SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                  textAlign: isArabic ? "right" : "left",
                }}
              />
            </div>
          </div>

          <div className={`mb-8 flex items-center gap-3 ${isArabic ? "justify-center" : "justify-start"}`}>
            <div className="flex-shrink-0">
              <div className="relative inline-block h-5 w-5">
                <input
                  name="agreed"
                  checked={formData.agreed}
                  onChange={handleChange}
                  type="checkbox"
                  id="agree"
                  className={`h-5 w-5 cursor-pointer appearance-none rounded-[4px] border-2 border-transparent outline-none transition-all focus:border-[#3B69FF] ${
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </div>
            <label
              htmlFor="agree"
              className={`cursor-pointer text-[14px] font-normal leading-[16px] text-white ${isArabic ? "text-center" : "text-left"}`}
              style={{ fontFamily: '"SF Pro Text", sans-serif' }}
            >
              {isArabic
                ? "بالاشتراك، أوافق على تلقي رسائل البريد الإلكتروني التسويقية من إكسبلور تك وأقبل "
                : "By subscribing, I agree to receive marketing emails from ExploreTECH and accept the "}
              <a href="#" className="font-normal text-white underline">
                {isArabic ? "سياسة الخصوصية" : "Privacy Policy"}
              </a>
            </label>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={!isFormValid}
              className={`flex h-[50px] w-[260px] items-center justify-center rounded-[4px] text-[14px] font-normal leading-[16px] text-white shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-all duration-300 active:scale-95 ${
                isFormValid ? "bg-[#D8DFFF]" : "cursor-not-allowed bg-[#D1D5FF]"
              }`}
              style={{ fontFamily: '"SF Pro Text", sans-serif' }}
            >
              {isArabic ? "اشترك في النشرة الإخبارية" : "Subscribe Newsletter"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
