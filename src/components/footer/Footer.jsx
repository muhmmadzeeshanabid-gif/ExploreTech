import React, { useState } from "react";
import logoEn from "../../assets/logo/015303ETLogo-English_Color.png";
import logoAr from "../../assets/logo/AR-Explote-Tech-Logo-Black.gif";
import { useLanguage } from "../../context/LanguageContext.jsx";
import {
  countries,
  footerLinksGroupsAR,
  footerLinksGroupsEN,
  socialLinks,
  contactInfo,
  copyrightText,
} from "../../data/footerData.js";
import CountrySelect from "./CountrySelect.jsx";
import FooterLinksColumns from "./FooterLinksColumns.jsx";
import FooterSocialLinks from "./FooterSocialLinks.jsx";

const Footer = () => {
  const { language } = useLanguage();
  const isArabic = language === "AR";
  const footerLogo = isArabic ? logoAr : logoEn;
  const [selectedCountry, setSelectedCountry] = useState("Bahamas");

  const footerLinksGroups = isArabic ? footerLinksGroupsAR : footerLinksGroupsEN;
  const displayFooterLinksGroups = isArabic
    ? [...footerLinksGroups].reverse()
    : footerLinksGroups;

  const fontSfPro =
    "font-['SF_Pro_Text',-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,Helvetica,Arial,sans-serif]";
  const footerLinkClass = `${fontSfPro} !text-[#000000] !text-[14px] !leading-[21px] !font-normal tracking-normal no-underline visited:!text-[#000000] hover:!text-[rgb(0,85,254)] hover:underline hover:underline-offset-[2px]`;
  const countrySelectStyle = {
    fontFamily:
      '"SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    fontWeight: 400,
    color: "rgb(71, 77, 102)",
    fontSize: "12px",
    lineHeight: "16px",
  };

  return (
    <footer className="mt-10 w-full bg-white pt-0" dir={isArabic ? "rtl" : "ltr"}>
      <div className="mx-auto max-w-[1790px] px-5 md:px-10">
        <div className="flex flex-col gap-9 border-t-2 border-[#d9dde3] py-[58px]">
          <div className="flex w-full justify-start">
            <a href="/" className="inline-block w-max">
              <img
                src={footerLogo}
                alt="ExploreTECH Logo"
                className="h-[56px] w-[110px] object-contain md:h-[70px] md:w-[125px]"
              />
            </a>
          </div>

          <div className="grid w-full grid-cols-1 items-start gap-y-5 md:grid-cols-[max-content_max-content_max-content_auto] md:justify-start md:gap-x-[148px]">
            <FooterLinksColumns
              groups={displayFooterLinksGroups}
              footerLinkClass={footerLinkClass}
              isArabic={isArabic}
            />

            <CountrySelect
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              countries={countries}
              countrySelectStyle={countrySelectStyle}
            />
          </div>
        </div>

        <div className="border-t-2 border-[#d9dde3]" />

        <div className="py-8">
          <p
            className={`${fontSfPro} text-[14px] font-normal leading-[21px] text-[rgb(15,23,42)]`}
          >
            {isArabic ? copyrightText.ar : copyrightText.en}
          </p>
        </div>

        <div className="flex flex-col items-start justify-between gap-8 pb-9 lg:flex-row lg:items-end">
          <p
            className={`${fontSfPro} text-[12px] font-normal leading-[21px] text-[rgb(15,23,42)] ${
              isArabic ? "text-right" : ""
            }`}
          >
            {isArabic ? contactInfo.ar : contactInfo.en}
          </p>

          <FooterSocialLinks socialLinks={socialLinks} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
