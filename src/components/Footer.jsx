import React, { useState } from "react";
import logoEn from "../../015303ETLogo-English_Color.png";
import logoAr from "../../AR-Explote-Tech-Logo-Black.gif";
import { useLanguage } from "../context/LanguageContext.jsx";

const Footer = () => {
  const { language } = useLanguage();
  const isArabic = language === "AR";
  const footerLogo = isArabic ? logoAr : logoEn;
  const [selectedCountry, setSelectedCountry] = useState("Bahamas");

  const countries = [
    "--Select Country--",
    "Afghanistan",
    "Aland Islands",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua And Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia And Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Cayman Islands",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands",
    "Colombia",
    "Comoros",
    "Congo",
    "Congo, Democratic Republic",
    "Cook Islands",
    "Costa Rica",
    "Cote D'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands (Malvinas)",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island & Mcdonald Islands",
    "Holy See (Vatican City State)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran, Islamic Republic Of",
    "Iraq",
    "Ireland",
    "Isle Of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libyan Arab Jamahiriya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia, Federated States Of",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestinian Territory, Occupied",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Barthelemy",
    "Saint Helena",
    "Saint Kitts And Nevis",
    "Saint Lucia",
    "Saint Martin",
    "Saint Pierre And Miquelon",
    "Saint Vincent And Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome And Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia & South Sandwich Is.",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Svalbard And Jan Mayen",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad And Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks And Caicos Islands",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "United States Outlying Islands",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Viet Nam",
    "Virgin Islands, British",
    "Virgin Islands, U.S.",
    "Wallis And Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  const footerLinksGroups = isArabic
    ? [
        ["لمحة عامة", "أسئلة متكررة", "التسعير والمزايا للبائعين", "اتصل بنا", "المدونة", "ابدأ مقارنة جديدة"],
        ["أحدث الأخبار", "اكتشف أخبار التكنولوجيا", "اكسبلورتك في وسائل الإعلام", "استكشف أحداث التكنولوجيا", "الشروط والأحكام", "شروط الاستخدام"],
        ["سياسة الاسترجاع", "اتفاقية ملفات تعريف الارتباط", "سياسة الخصوصية", "شروط وأحكام صوت الخبير", "الموارد", "إعدادات ملفات تعريف الارتباط"],
      ]
    : [
        ["About Us", "FAQ", "Pricing", "Contact Us", "Blog", "Start a New Comparison"],
        ["Latest News", "ExploreTECH News", "ExploreTECH in the Media", "ExploreTECH Events", "Terms & Conditions", "Terms of Use"],
        ["Refund Policy", "Cookies Policy", "Privacy Policy", "VOE Terms & Conditions", "Resources", "Cookie Settings"],
      ];

  const fontSfPro =
    "font-['SF_Pro_Text',-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,Helvetica,Arial,sans-serif]";
  const footerLinkClass = `${fontSfPro} !text-[#000000] !text-[14px] !leading-[21px] !font-normal tracking-normal no-underline visited:!text-[#000000] hover:!text-[rgb(0,85,254)] hover:underline hover:underline-offset-[2px]`;

  return (
    <footer className="mt-10 w-full bg-white pt-0" dir={isArabic ? "rtl" : "ltr"}>
      <div className="mx-auto max-w-[1790px] px-5 md:px-10">
        <div className="flex flex-col gap-9 border-t-2 border-[#d9dde3] py-[58px]">
          <div className={`flex w-full ${isArabic ? "justify-end" : "justify-start"}`}>
            <a href="/" className="inline-block w-max">
              <img src={footerLogo} alt="ExploreTECH Logo" className="h-[63px] w-auto object-contain" />
            </a>
          </div>

          <div className="grid w-full grid-cols-1 items-start gap-y-5 md:grid-cols-[max-content_max-content_max-content_auto] md:justify-start md:gap-x-[148px]">
            {footerLinksGroups.map((group, groupIndex) => (
              <div key={groupIndex} className={`flex flex-col gap-[10px] ${isArabic ? "text-right" : ""}`}>
                {group.map((link, idx) => (
                  <a key={idx} href="#" className={footerLinkClass}>
                    {link}
                  </a>
                ))}
              </div>
            ))}

            <div className="relative w-full md:ml-16 md:w-[290px]">
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className={`${fontSfPro} h-[36px] w-full appearance-none rounded-[6px] border border-[#c9ced8] bg-white px-3 pr-8 text-[12px] font-normal leading-[18px] outline-none`}
              >
                {countries.map((country, idx) => (
                  <option key={idx} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              <i
                className="bi bi-caret-down-fill pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-[rgb(15,23,42)]"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        <div className="border-t-2 border-[#d9dde3]" />

        <div className="py-8">
          <p className={`${fontSfPro} text-[14px] font-normal leading-[21px] text-[rgb(15,23,42)]`}>
            {isArabic ? "© إكسبلورتك. جميع الحقوق محفوظة" : "© Copyright 2024, All Rights Reserved"}
          </p>
        </div>

        <div className="flex flex-col items-start justify-between gap-8 pb-9 lg:flex-row lg:items-end">
          <p className={`${fontSfPro} text-[12px] font-normal leading-[21px] text-[rgb(15,23,42)]`}>
            {isArabic
              ? "مكتب إكسبلورتك في دبي:3906، Mazaya Business Avenue BB1، أبراج بحيرة جميرا، صندوق بريد 333834، دبي، الإمارات العربية المتحدة|اتصل بنا:+971 (0)4 363 6588|راسلنا عبر البريد الإلكتروني:exploremore@exploretech.io"
              : "ExploreTECH Dubai office. 3906, Mazaya Business Avenue BB1, JLT P.O.Box 333834, Dubai, UAE | Call Us: +971 (0)4 363 6588 | Email Us: exploremore@exploretech.io"}
          </p>

          <div className="flex flex-shrink-0 gap-3">
            {[
              { iconClass: "bi bi-twitter-x", label: "X" },
              { iconClass: "bi bi-facebook", label: "Facebook" },
              { iconClass: "bi bi-instagram", label: "Instagram" },
              { iconClass: "bi bi-linkedin", label: "LinkedIn" },
            ].map((social, idx) => (
              <a
                key={idx}
                href="#"
                aria-label={social.label}
                className="flex h-[38px] w-[38px] items-center justify-center rounded-[4px] border border-[#d7dbe3] bg-white text-[rgb(15,23,42)] transition-all duration-300 ease-out hover:rounded-[10px] hover:border-b-[4px] hover:border-[rgb(0,85,254)] hover:text-[rgb(0,85,254)] hover:shadow-[0_6px_14px_rgba(0,85,254,0.16)]"
              >
                <i className={`${social.iconClass} text-[14px] leading-none`} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
