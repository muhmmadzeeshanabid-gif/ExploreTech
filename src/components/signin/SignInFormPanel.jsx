import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo/Explote-Tech-Logo-Black.gif";

const inputFontFamily =
  '"SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
const bodyFontFamily = '"SF Pro Text", sans-serif';
const headingFontFamily = '"Space Grotesk", sans-serif';

const SignInFormPanel = ({ onHome }) => {
  const { t } = useTranslation("common");
  const [email, setEmail] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const canContinue = useMemo(
    () => email.trim().length > 0 && acceptedTerms,
    [email, acceptedTerms],
  );

  return (
    <div
      className="flex h-full flex-col items-center px-6 pt-14 pb-10 sm:px-8 sm:pt-12 md:px-10 md:pt-10 lg:pt-20 text-black"
      style={{
        fontFamily: headingFontFamily,
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: 400,
      }}
    >
      <div className="flex h-full w-full max-w-[420px] md:max-w-[480px] flex-col">
        <button
          type="button"
          onClick={onHome}
          className="mt-0 ml-0 flex w-fit cursor-pointer items-center gap-3 self-start"
          aria-label="ExploreTECH"
        >
          <img
            src={logo}
            alt="ExploreTECH"
            className="h-[80px] w-[144px]"
          />
        </button>

        <div className="mt-0 h-[413.075px] w-full max-w-[512px]">
          <h2
            className="whitespace-nowrap text-[24px] leading-[40px] tracking-normal md:text-[32px]"
            style={{
              fontFamily: headingFontFamily,
              fontStyle: "normal",
              fontWeight: 700,
              color: "rgb(0, 0, 0)",
            }}
          >
            {t("signIn.form.welcomePrefix")}{" "}
            <span
              className="text-[24px] leading-[40px] md:text-[32px]"
              style={{
                fontFamily: bodyFontFamily,
                fontStyle: "normal",
                fontWeight: 700,
                color: "rgb(51, 102, 255)",
              }}
            >
              ExploreTECH
            </span>
          </h2>
          <div className="mt-5 w-full">
            <label
              htmlFor="auth-email"
              className="mb-2 block text-[14px] leading-[24px] font-medium"
              style={{
                fontFamily: bodyFontFamily,
                fontStyle: "normal",
                color: "rgb(71, 77, 102)",
              }}
            >
              {t("signIn.form.emailLabel")}
            </label>

            <input
              id="auth-email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="h-[46px] w-full rounded-[4px] border px-4 placeholder:text-slate-400 focus:outline-none"
              style={{
                fontFamily: inputFontFamily,
                fontSize: "16px",
                lineHeight: "20px",
                fontWeight: 400,
                letterSpacing: "-0.05px",
                color: "#474D66",
                backgroundColor: "#FFFFFF",
                borderColor: "rgba(214, 224, 255, 0.82)",
                boxShadow: "0 0 0 0.166485px rgba(214, 224, 255, 0.82)",
              }}
              placeholder={t("signIn.form.emailPlaceholder")}
              type="email"
            />

            <button
              type="button"
              disabled={!canContinue}
              className={`mt-5 w-full md:w-[110px] rounded-md px-4 py-2.5 text-sm font-semibold text-white transition ${
                canContinue
                  ? "bg-[rgb(0,85,254)] hover:bg-blue-700"
                  : "cursor-not-allowed bg-[rgba(0,85,254,0.28)]"
              }`}
            >
              {t("signIn.form.continue")}
            </button>
          </div>

          <div className="mt-8 flex items-center gap-3 text-slate-400">
            <div className="flex-1 border-t border-slate-200" />
            <span
              style={{
                fontFamily: bodyFontFamily,
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                color: "rgb(126, 118, 143)",
              }}
            >
              {t("signIn.form.or")}
            </span>
            <div className="flex-1 border-t border-slate-200" />
          </div>

          <label className="mt-6 flex w-full max-w-[576px] cursor-pointer items-center gap-3">
            <span className="relative inline-flex h-4 w-4 items-center justify-center">
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={(event) => setAcceptedTerms(event.target.checked)}
                className="peer h-4 w-4 cursor-pointer appearance-none rounded-[3px] border border-[#0055FE] bg-white outline-none transition focus:ring-2 focus:ring-blue-200 checked:bg-[#0055FE]"
              />
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="pointer-events-none absolute h-3 w-3 text-white opacity-0 transition peer-checked:opacity-100"
                fill="none"
              >
                <path
                  d="M20 6 9 17l-5-5"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span
              className="underline underline-offset-2"
              style={{
                fontFamily: bodyFontFamily,
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "16px",
                color: "rgb(0, 85, 254)",
              }}
            >
              {t("signIn.form.termsAndConditions")}
            </span>
          </label>

          <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
            <button
              type="button"
              disabled={!acceptedTerms}
              className="flex items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-3 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:text-slate-400 disabled:opacity-70 disabled:hover:bg-white"
              style={{
                fontFamily: headingFontFamily,
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                color: acceptedTerms ? "rgb(0, 0, 0)" : "rgb(148, 163, 184)",
                opacity: acceptedTerms ? 1 : 0.82,
              }}
            >
              <i className="bi bi-google text-[18px]" aria-hidden="true" />
              Google
            </button>
            <button
              type="button"
              disabled={!acceptedTerms}
              className="flex items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-3 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:text-slate-400 disabled:opacity-70 disabled:hover:bg-white"
              style={{
                fontFamily: headingFontFamily,
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                color: acceptedTerms ? "rgb(0, 0, 0)" : "rgb(148, 163, 184)",
                opacity: acceptedTerms ? 1 : 0.82,
              }}
            >
              <i className="bi bi-linkedin text-[18px]" aria-hidden="true" />
              LinkedIn
            </button>
          </div>
        </div>

        <div
          className="mt-auto pt-10 text-center tracking-normal md:text-left"
          style={{
            fontFamily: bodyFontFamily,
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "21px",
            color: "rgb(105, 111, 140)",
          }}
        >
          {t("signIn.form.copyright")}
        </div>
      </div>
    </div>
  );
};

export default SignInFormPanel;
