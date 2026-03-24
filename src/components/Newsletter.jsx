import React, { useState } from "react";

const Newsletter = () => {
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
    <section className="mx-auto w-full max-w-[1520.8px] px-4 py-8 mt-[-5px]">
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-[#0089D9] via-[#00ACB8] via-[#03DB7D] to-[#00BDA8] px-6 py-10 md:px-12 md:py-12 text-center flex flex-col justify-center min-h-[443.6px]">
        <h2
          className="text-[32px] md:text-[36px] font-normal text-white leading-[40px] mb-4"
          style={{ fontFamily: '"SF Pro Text", sans-serif' }}
        >
          Keep up with the latest industry news & trends.
        </h2>
        <p
          className="text-white text-[18px] font-medium leading-[28px] mb-10"
          style={{ fontFamily: '"SF Pro Text", sans-serif' }}
        >
          Subscribe to Our Newsletter to Stay Informed.
        </p>

        <form className="max-w-[1300px] mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-left">
              <label
                className="block text-white font-normal text-[16px] leading-[24px] mb-2"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                First Name:
              </label>
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                type="text"
                placeholder="Enter your First name"
                className={`w-full h-[48px] px-5 rounded-[4px] border-2 outline-none text-[12px] font-normal leading-[16px] transition-all ${formData.firstName ? "bg-[#EEF2FF] text-[#474D66] border-transparent focus:border-[#3B69FF]" : "bg-white text-[#474D66] border-transparent focus:border-[#3B69FF]"}`}
                style={{
                  fontFamily:
                    '"SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                }}
              />
            </div>
            <div className="text-left">
              <label
                className="block text-white font-normal text-[16px] leading-[24px] mb-2"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                Last name:
              </label>
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                type="text"
                placeholder="Enter your Last name"
                className={`w-full h-[48px] px-5 rounded-[4px] border-2 outline-none text-[12px] font-normal leading-[16px] transition-all ${formData.lastName ? "bg-[#EEF2FF] text-[#474D66] border-transparent focus:border-[#3B69FF]" : "bg-white text-[#474D66] border-transparent focus:border-[#3B69FF]"}`}
                style={{
                  fontFamily:
                    '"SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                }}
              />
            </div>
            <div className="text-left">
              <label
                className="block text-white font-normal text-[16px] leading-[24px] mb-2"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                Email:
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Enter your email address"
                className={`w-full h-[48px] px-5 rounded-[4px] border-2 outline-none text-[12px] font-normal leading-[16px] transition-all ${formData.email ? "bg-[#EEF2FF] text-[#474D66] border-transparent focus:border-[#3B69FF]" : "bg-white text-[#474D66] border-transparent focus:border-[#3B69FF]"}`}
                style={{
                  fontFamily:
                    '"SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                }}
              />
            </div>
          </div>

          <div className="flex items-center gap-3 mb-8 text-left">
            <div className="flex-shrink-0">
              <div className="relative inline-block w-5 h-5">
                <input
                  name="agreed"
                  checked={formData.agreed}
                  onChange={handleChange}
                  type="checkbox"
                  className={`w-5 h-5 rounded-[4px] border-2 border-transparent appearance-none cursor-pointer transition-all focus:border-[#3B69FF] outline-none ${formData.agreed ? "bg-[#3B69FF]" : "bg-white"}`}
                  id="agree"
                />
                {formData.agreed && (
                  <svg
                    className="absolute inset-0 w-3 h-3 m-auto text-white pointer-events-none"
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
              className="text-white text-[14px] leading-[16px] font-normal cursor-pointer"
              style={{ fontFamily: '"SF Pro Text", sans-serif' }}
            >
              By subscribing, I agree to receive marketing emails from
              ExploreTECH and accept the{" "}
              <a href="#" className="underline text-white font-normal ">
                Privacy Policy
              </a>
            </label>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-[206px] h-[41.6px] rounded-[3px] text-[14px] leading-[16px] font-normal transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.1)] active:scale-95 flex items-center justify-center text-white ${isFormValid ? "bg-[#3B69FF]" : "bg-[#D1D5FF] cursor-not-allowed"}`}
              style={{ fontFamily: '"SF Pro Text", sans-serif' }}
            >
              Subscribe Newsletter
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
