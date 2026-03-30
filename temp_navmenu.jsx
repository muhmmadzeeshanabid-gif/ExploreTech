import { ChevronRight, Globe, Menu, Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import logoEn from "../../assets/logo/Explote-Tech-Logo-Black.gif";
import logoAr from "../../assets/logo/AR-Explote-Tech-Logo-Black.gif";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { latestNewsItems } from "../../data/latestNews.js";
import { earlyAdopters } from "../../data/earlyAdopters.js";
import verifiedIcon from "../../assets/icon/verified.png";
import productLogo1 from "../../assets/growing-network/logos/gs14qlFntB.webp";
import productLogo2 from "../../assets/growing-network/logos/x5WsbnAfcg.jpg";
import productLogo3 from "../../assets/growing-network/logos/121121tacit_corp_logo.jpg";
import productLogo4 from "../../assets/growing-network/logos/160944081408prologicfirst.jpg";
import providerLogo1 from "../../assets/growing-network/logos/115903squirrel_systems_logo.jpg";
import providerLogo2 from "../../assets/growing-network/logos/134208dailypoint.png";
import providerLogo3 from "../../assets/growing-network/logos/160512081225otainsight-1.jpg";
import providerLogo4 from "../../assets/growing-network/logos/160559081243thynkcloud.jpg";
import providerLogo5 from "../../assets/growing-network/logos/161157081536d-edge.jpg";

const categoriesEn = [
  "Business intelligence",
  "Commercial and distribution",
  "Hospitality operations",
  "Guest and traveller tech",
  "In room tech",
  "Information communication technology",
  "Finance and payments",
  "Robotics and automation",
  "Hospitality services",
  "Restaurant technology",
  "Short term/vacation rental solutions",
  "Sustainability",
];

const categoriesAr = [
  "╪░┘â╪º╪í ╪º┘ä╪ú╪╣┘à╪º┘ä",
  "╪º┘ä╪¬╪¼╪º╪▒┘è ┘ê╪º┘ä╪¬┘ê╪▓┘è╪╣",
  "╪╣┘à┘ä┘è╪º╪¬ ╪º┘ä╪╢┘è╪º┘ü╪⌐",
  "╪¬┘é┘å┘è╪º╪¬ ╪º┘ä╪╢┘è┘ê┘ü ┘ê╪º┘ä┘à╪│╪º┘ü╪▒┘è┘å",
  "╪¬┘é┘å┘è╪º╪¬ ╪º┘ä╪║╪▒┘ü",
  "╪¬┘é┘å┘è╪⌐ ╪º┘ä┘à╪╣┘ä┘ê┘à╪º╪¬ ┘ê╪º┘ä╪º╪¬╪╡╪º┘ä╪º╪¬",
  "╪º┘ä╪¬┘à┘ê┘è┘ä ┘ê╪º┘ä┘à╪»┘ü┘ê╪╣╪º╪¬",
  "╪º┘ä╪▒┘ê╪¿┘ê╪¬╪º╪¬ ┘ê╪º┘ä╪ú╪¬┘à╪¬╪⌐",
  "╪«╪»┘à╪º╪¬ ╪º┘ä╪╢┘è╪º┘ü╪⌐",
  "╪¬┘é┘å┘è╪⌐ ╪º┘ä┘à╪╖╪º╪╣┘à",
  "╪¡┘ä┘ê┘ä ╪º┘ä╪Ñ┘è╪¼╪º╪▒ ┘é╪╡┘è╪▒ ╪º┘ä╪ú┘à╪»/╪º┘ä╪╣╪╖┘ä╪º╪¬",
  "╪º┘ä╪º╪│╪¬╪»╪º┘à╪⌐",
];

const resourcesEn = ["Resources", "News", "Blog"];
const resourcesAr = ["╪º┘ä┘à┘ê╪º╪▒╪»", "╪º┘ä╪ú╪«╪¿╪º╪▒", "╪º┘ä┘à╪»┘ê┘å╪⌐"];

const menuItemClasses =
  "flex items-center justify-between border-b border-slate-100 px-5 py-1.5 text-[14px] font-medium text-slate-700 transition-colors last:border-b-0 hover:bg-slate-50 hover:text-[#0b56ff]";

const arrowClasses = "h-4 w-4 text-slate-600";

const arabicEventsStyle = {
  fontFamily: '"SF Pro Text", sans-serif',
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "18px",
  lineHeight: "27px",
  color: "rgb(105, 111, 140)",
};

const searchSubmitButtonClass =
  "h-[37px] min-w-[79.1125px] rounded-[4px] bg-[#0055FE] px-4 text-[10px] font-medium leading-[15px] text-white transition sm:px-4 sm:text-[14px] sm:leading-[21px]";

const NavMenu = ({ onSignIn, onSignUp }) => {
  const { language, setLanguage } = useLanguage();
  const isArabic = language === "AR";
  const navLogo = language === "AR" ? logoAr : logoEn;
  const categories = language === "AR" ? categoriesAr : categoriesEn;
  const resources = language === "AR" ? resourcesAr : resourcesEn;
  const drawerResources = resourcesEn;
  const [searchOpen, setSearchOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerSection, setDrawerSection] = useState(null);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState(isArabic ? "╪º┘ä╪ú╪«╪¿╪º╪▒" : "News");
  const panelRef = useRef(null);
  const inputRef = useRef(null);
  const mobileLanguageRef = useRef(null);
  const hasQuery = query.trim().length > 0;

  const closeSearch = () => {
    setSearchOpen(false);
    setQuery("");
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    setLanguageOpen(false);
  };

  const toggleDrawerSection = (section) => {
    setDrawerSection((current) => (current === section ? null : section));
  };

  const clearQuery = () => {
    setQuery("");
    inputRef.current?.focus();
  };

  const handleLanguageSelect = (code) => {
    setLanguage(code);
    setLanguageOpen(false);
    if (drawerOpen) {
      closeDrawer();
    }
  };

  useEffect(() => {
    if (!searchOpen) {
      return;
    }
    const handleClick = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        closeSearch();
      }
    };
    const handleKey = (event) => {
      if (event.key === "Escape") {
        closeSearch();
      }
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    const timeout = setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
    return () => {
      clearTimeout(timeout);
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [searchOpen]);

  useEffect(() => {
    if (!drawerOpen) return;
    setDrawerSection(null);
    setLanguageOpen(false);
    const handleKey = (event) => {
      if (event.key === "Escape") {
        closeDrawer();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [drawerOpen]);

  useEffect(() => {
    if (!searchOpen && !drawerOpen) {
      return;
    }
    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
    };
  }, [searchOpen, drawerOpen]);

  useEffect(() => {
    if (!languageOpen) return;
    const handleOutside = (event) => {
      const clickedOutsideMobile =
        mobileLanguageRef.current &&
        !mobileLanguageRef.current.contains(event.target);
      if (clickedOutsideMobile) {
        setLanguageOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [languageOpen]);

  const drawerRowClass = isArabic
    ? "flex-row-reverse text-right"
    : "text-left";
  const drawerArrow = isArabic ? (
    <i className="bi bi-chevron-left text-[16px] leading-none text-white" aria-hidden="true" />
  ) : (
    <ChevronRight className="h-6 w-6 shrink-0 text-white" strokeWidth={2} />
  );
  const drawerActiveArrow = isArabic ? (
    <i className="bi bi-chevron-up text-[16px] leading-none text-[#18c443]" aria-hidden="true" />
  ) : (
    <ChevronRight
      className="h-6 w-6 shrink-0 text-[#18c443]"
      strokeWidth={2}
    />
  );

  return (
    <div
      className={`flex items-center lg:mr-6 ${
        language === "AR" ? "mr-auto ml-0" : "ml-auto mr-0"
      }`}
    >
      <div
        className={`hidden items-center gap-6 lg:flex ${
          language === "AR" ? "flex-row-reverse" : ""
        }`}
      >
        <button
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-slate-200 text-[#14c439] shadow-sm"
          aria-label="Search"
          type="button"
          onClick={() => setSearchOpen(true)}
        >
          <Search className="h-[28px] w-[28px]" strokeWidth={2.5} />
        </button>
        <div className="group relative">
          <a
            className="text-sm font-medium tracking-wide uppercase text-slate-700 transition-colors group-hover:text-[#0b56ff]"
            href="#"
          >
            {language === "AR" ? "╪º┘ä┘ü╪ª╪º╪¬" : "Categories"}
          </a>
          <div className="invisible absolute left-0 top-full z-50 mt-4 w-72 translate-y-2 rounded-2xl border border-slate-100 bg-white py-2 opacity-0 shadow-[0_20px_40px_-18px_rgba(15,23,42,0.35)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
            {categories.map((item) => (
              <a
                key={item}
                href="#"
                className={`${menuItemClasses} ${
                  isArabic ? "flex-row-reverse text-right" : ""
                }`}
                dir={isArabic ? "rtl" : "ltr"}
              >
                <span dir={isArabic ? "rtl" : "ltr"}>{item}</span>
                <ChevronRight className={arrowClasses} strokeWidth={2.4} />
              </a>
            ))}
          </div>
        </div>
        <a
          className="text-sm font-medium tracking-wide uppercase text-slate-700"
          href="#"
        >
          {language === "AR" ? "╪º┘ä┘à┘å╪¬╪¼╪º╪¬" : "Products"}
        </a>
        <a
          className="text-sm font-medium tracking-wide uppercase text-slate-700"
          href="#"
        >
          {language === "AR" ? "┘à╪▓┘ê╪»┘ê╪º ╪º┘ä╪«╪»┘à╪º╪¬" : "Vendors"}
        </a>
        <a
          className="text-sm font-medium tracking-wide uppercase text-slate-700"
          href="#"
        >
          {language === "AR" ? "╪«╪»┘à╪º╪¬ ╪º╪│╪¬╪┤╪º╪▒┘è╪⌐" : "Advisory Services"}
        </a>
        <div className="group relative">
          <a
            className="text-sm font-medium tracking-wide uppercase text-slate-700 transition-colors group-hover:text-[#0b56ff]"
            href="#"
          >
            {language === "AR" ? "╪º┘ä┘à┘ê╪º╪▒╪»" : "Resources"}
          </a>
          <div className="invisible absolute left-0 top-full z-50 mt-4 w-56 translate-y-2 rounded-2xl border border-slate-100 bg-white py-2 opacity-0 shadow-[0_20px_40px_-18px_rgba(15,23,42,0.35)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
            {resources.map((item) => (
              <a key={item} href="#" className={menuItemClasses}>
                <span>{item}</span>
                <ChevronRight className={arrowClasses} strokeWidth={2.4} />
              </a>
            ))}
          </div>
        </div>
        <a
          className="text-sm font-medium tracking-wide uppercase text-slate-700"
          href="#"
          style={language === "AR" ? arabicEventsStyle : undefined}
        >
          {language === "AR" ? "╪º┘ä╪ú╪¡╪»╪º╪½" : "Events"}
        </a>
        <a
          className="text-sm font-medium tracking-wide uppercase text-slate-700"
          href="#"
        >
          {language === "AR" ? "╪º╪¬╪╡┘ä ╪¿┘å╪º" : "Contact Us"}
        </a>
      </div>

      <div
        className={`hidden items-center gap-2 md:flex lg:hidden ${
          language === "AR" ? "flex-row-reverse" : ""
        }`}
      >
        <button
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-[#14c439] shadow-sm"
          aria-label="Search"
          type="button"
          onClick={() => setSearchOpen(true)}
        >
          <Search className="h-5 w-5" strokeWidth={2.5} />
        </button>
        <a
          href="#"
          className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-lg bg-[#0b56ff] px-4 text-[10px] font-semibold uppercase tracking-wide !text-white shadow-sm min-[370px]:px-5 min-[370px]:text-[11px]"
          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
          onClick={(event) => {
            if (!onSignIn) return;
            event.preventDefault();
            onSignIn();
          }}
        >
          {language === "AR" ? "╪º┘ä╪¬┘ê┘é┘è╪╣ ┘ü┘è ╪º┘ä╪│╪¼┘ä" : "Sign In/ Sign Up"}
        </a>
        <button
          className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-900"
          type="button"
          aria-label="Open menu"
          onClick={() => setDrawerOpen(true)}
        >
          <Menu className="h-6 w-6" strokeWidth={2.3} />
        </button>
      </div>

      <div
        className={`flex items-center gap-3 md:hidden ${
          language === "AR" ? "flex-row-reverse" : ""
        }`}
      >
        <button
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-[#14c439] shadow-sm"
          aria-label="Search"
          type="button"
          onClick={() => setSearchOpen(true)}
        >
          <Search className="h-5 w-5" strokeWidth={2.5} />
        </button>
        <a
          href="#"
          className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-lg bg-[#0b56ff] px-4 text-[10px] font-semibold uppercase tracking-wide !text-white shadow-sm min-[370px]:px-5 min-[370px]:text-[11px]"
          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
          onClick={(event) => {
            if (!onSignIn) return;
            event.preventDefault();
            onSignIn();
          }}
        >
          {language === "AR" ? "╪º┘ä╪¬┘ê┘é┘è╪╣ ┘ü┘è ╪º┘ä╪│╪¼┘ä" : "Sign In/ Sign Up"}
        </a>
        <button
          className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-900"
          type="button"
          aria-label="Open menu"
          onClick={() => setDrawerOpen(true)}
        >
          <Menu className="h-6 w-6" strokeWidth={2.3} />
        </button>
      </div>

      {searchOpen && (
        <div className="fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute left-0 right-0 top-10 z-50 pl-4 pr-4 sm:pl-5 sm:pr-[21px]">
            <div ref={panelRef} className="mx-auto w-full max-w-[1305.6px]">
              <div className="group relative flex h-[70px] items-center gap-2 rounded-[12px] bg-white px-3 shadow-[0_24px_50px_-30px_rgba(15,23,42,0.6)] sm:gap-4 sm:px-6">
                {language === "AR" && (
                  <button
                    type="button"
                    disabled={!hasQuery}
                    className={`shrink-0 ${searchSubmitButtonClass} shadow-[0_10px_24px_-12px_rgba(11,86,255,0.65)] ${
                      hasQuery ? "opacity-100" : "cursor-not-allowed opacity-70"
                    }`}
                    style={{ fontFamily: '"SF Pro Text", sans-serif' }}
                  >
                    Search
                  </button>
                )}
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  style={{ fontFamily: '"SF Pro Text", sans-serif' }}
                  className={`min-w-0 flex-1 bg-transparent pl-0 text-[11px] font-medium leading-[14px] tracking-normal text-black placeholder:text-[#9aa3b2] focus:outline-none sm:pr-[44px] sm:text-[18px] sm:leading-[28px] ${
                    language === "AR" ? "text-right" : "text-left"
                  }`}
                  dir={language === "AR" ? "rtl" : "ltr"}
                  placeholder={
                    language === "AR"
                      ? "╪ú╪»╪«┘ä ┘à╪╡╪╖┘ä╪¡ ╪º┘ä╪¿╪¡╪½ ╪º┘ä╪«╪º╪╡ ╪¿┘â ┘ç┘å╪º"
                      : "Enter your search term here"
                  }
                />
                {language !== "AR" && (
                  <button
                    type="button"
                    disabled={!hasQuery}
                    className={`order-3 ml-2 ${searchSubmitButtonClass} ${
                      hasQuery ? "opacity-100" : "cursor-not-allowed opacity-50"
                    }`}
                    style={{ fontFamily: '"SF Pro Text", sans-serif' }}
                  >
                    Search
                  </button>
                )}
                {hasQuery && (
                  <button
                    type="button"
                    className={`order-2 shrink-0 p-2 text-slate-400 transition-opacity duration-150 hover:text-slate-600 group-hover:opacity-100 group-focus-within:opacity-100 ${
                      language === "AR"
                        ? "opacity-100 sm:order-1"
                        : "opacity-0 sm:opacity-0"
                    }`}
                    onClick={clearQuery}
                    aria-label="Clear search"
                  >
                    <X className="h-5 w-5" strokeWidth={2.5} />
                  </button>
                )}
              </div>

              {hasQuery && (
                <div className="mt-5 overflow-hidden rounded-[16px] border border-slate-100 bg-white shadow-[0_24px_50px_-30px_rgba(15,23,42,0.45)]">
                  {/* Tabs Header */}
                  <div
                    className={`flex items-center border-b border-slate-100 px-8 ${
                      isArabic ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className={`flex flex-1 items-center gap-6 sm:gap-10 ${
                        isArabic ? "flex-row-reverse" : ""
                      }`}
                    >
                      {[
                        isArabic ? "╪º┘ä╪¼┘à┘è╪╣" : "All",
                        isArabic ? "╪º┘ä┘ü╪ª╪º╪¬ ╪º┘ä┘ü╪▒╪╣┘è╪⌐" : "Subcategories",
                        isArabic ? "╪º┘ä┘à┘å╪¬╪¼╪º╪¬" : "Products",
                        isArabic ? "┘à╪▓┘ê╪»┘ê╪º ╪º┘ä╪«╪»┘à╪º╪¬" : "Service Providers",
                        isArabic ? "╪º┘ä┘à╪»┘ê┘å╪º╪¬" : "Blogs",
                        isArabic ? "╪º┘ä╪ú╪«╪¿╪º╪▒" : "News",
                      ].map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={`relative py-4 text-[13px] font-semibold transition-colors sm:text-[14px] ${
                            activeTab === tab
                              ? "text-[#0b56ff]"
                              : "text-slate-500 hover:text-slate-700"
                          }`}
                        >
                          {tab}
                          {activeTab === tab && (
                            <div className="absolute bottom-0 left-0 h-[3px] w-full rounded-full bg-[#0b56ff]" />
                          )}
                        </button>
                      ))}
                    </div>
                    <button
                      className="text-[13px] font-semibold text-[#0b56ff] hover:underline"
                      style={{ fontFamily: '"SF Pro Text", sans-serif' }}
                    >
                      {isArabic ? "View More" : "View More"}
                    </button>
                  </div>

                  {/* Results List */}
                  <div className="max-h-[500px] overflow-y-auto px-8 py-4">
                    <div className="flex flex-col gap-2">
                      {activeTab === (isArabic ? "╪º┘ä╪¼┘à┘è╪╣" : "All") ? (
                        <div className="flex flex-col gap-6">
                          {/* Products Section */}
                          <div>
                            <h3 className="mb-2 text-[16px] font-bold text-[#1f2937]">
                              {isArabic ? "╪º┘ä┘à┘å╪¬╪¼╪º╪¬:" : "Products:"}
                            </h3>
                            <div className="flex flex-col">
                              {[
                                {
                                  title: "MeetingPackage Venue Sales Management",
                                  subtitle: "╪Ñ╪»╪º╪▒╪⌐ ╪º┘ä┘à┘å╪º╪│╪¿╪º╪¬",
                                  logo: productLogo1,
                                },
                                {
                                  title: "┘å╪╕╪º┘à Vento ╪º┘ä┘à╪¬╪«╪╡╪╡ ┘ä┘å┘é╪º╪╖ ╪º┘ä╪¿┘è╪╣ ┘à┘å HotelTime",
                                  subtitle: "┘à┘å╪╡╪º╪¬ ╪º┘ä╪»┘ü╪╣ ┘ü┘è ╪º┘ä┘à╪╖╪º╪╣┘à & ╪¿╪▒╪º┘à╪¼ ╪Ñ╪»╪º╪▒╪⌐ ╪º┘ä┘à╪╖╪º╪╣┘à",
                                  logo: productLogo2,
                                  hasAI: true,
                                  verified: true,
                                },
                                {
                                  title: "┘å╪╕╪º┘à ╪¿╪▒┘ê╪¬┘â╪¬ (Pro-Techt) ┘à┘å ╪┤╪▒┘â╪⌐ ┘ü┘è╪│┘è╪▒┘ü",
                                  subtitle: "╪º┘ä┘ü┘å╪»┘é ╪¡┘ä┘ê┘ä ╪¿╪»┘ê┘å ╪¬┘ä╪º┘à╪│",
                                  logo: productLogo3,
                                  verified: true,
                                },
                                {
                                  title: "Kwentra Point of Sale",
                                  subtitle: "┘å╪╕╪º┘à ┘å┘é╪º╪╖ ╪º┘ä╪¿┘è╪╣ (POS)",
                                  logo: productLogo4,
                                  verified: true,
                                },
                                {
                                  title: "┘å╪╕╪º┘à ╪º┘ä╪¡╪¼╪▓ ╪╣╪¿╪▒ ╪º┘ä╪Ñ┘å╪¬╪▒┘å╪¬ ┘à┘å Hotelogix",
                                  subtitle: "┘à╪¡╪▒┘â ╪º┘ä╪¡╪¼╪▓ (IBE)",
                                  logo: providerLogo4,
                                  hasAI: true,
                                  verified: true,
                                },
                              ].map((item, idx) => (
                                <div
                                  key={idx}
                                  className={`flex items-center gap-4 py-2 ${
                                    isArabic ? "flex-row-reverse" : ""
                                  }`}
                                >
                                  {/* Logo - Far Left in row-reverse Arabic */}
                                  <div className="h-[44px] w-[44px] shrink-0 overflow-hidden rounded-md border border-slate-100 bg-white p-1">
                                    <img
                                      src={item.logo}
                                      alt={item.title}
                                      className="h-full w-full object-contain"
                                    />
                                  </div>

                                  {/* Title Area */}
                                  <div
                                    className={`flex flex-col ${
                                      isArabic ? "text-right" : "text-left"
                                    }`}
                                  >
                                    <h4
                                      className="text-[14px] font-bold text-[#1f2937]"
                                      style={{ fontFamily: '"SF Pro Text", sans-serif' }}
                                    >
                                      {item.title}
                                    </h4>
                                    <p
                                      className="text-[12px] font-medium text-[#0b56ff]"
                                      style={{ fontFamily: '"SF Pro Text", sans-serif' }}
                                    >
                                      {item.subtitle}
                                    </p>
                                  </div>

                                  {/* Spacer */}
                                  <div className="flex-1" />

                                  {/* Verified & AI Badge Area */}
                                  <div
                                    className={`flex items-center gap-2 ${
                                      isArabic ? "flex-row-reverse" : ""
                                    }`}
                                  >
                                    {item.hasAI && (
                                      <div className="relative flex h-[22px] items-center">
                                        <div className="rounded-[4px] bg-[#f86d2d] px-2 py-0.5 text-[9px] font-bold text-white uppercase tracking-tight">
                                          {isArabic ? "┘à╪»╪╣┘ê┘à ╪¿╪º┘ä╪░┘â╪º╪í ╪º┘ä╪º╪╡╪╖┘å╪º╪╣┘è" : "AI Powered"}
                                        </div>
                                      </div>
                                    )}
                                    <div
                                      className={`flex items-center gap-1.5 ${
                                        isArabic ? "flex-row-reverse" : ""
                                      }`}
                                    >
                                      {item.verified && (
                                        <>
                                          <img
                                            src={verifiedIcon}
                                            alt="Verified"
                                            className="h-[22px] w-[22px] object-contain"
                                          />
                                          <span
                                            className={`text-[11px] font-medium text-[#1f2937] ${
                                              isArabic ? "leading-[1.1]" : ""
                                            }`}
                                            style={{
                                              fontFamily: '"SF Pro Text", sans-serif',
                                            }}
                                          >
                                            {isArabic ? (
                                              <>
                                                ╪¬┘à ╪º┘ä╪¬╪¡┘é┘é
                                                <br />
                                                ┘à┘å ╪º┘ä╪¿╪º╪ª╪╣
                                              </>
                                            ) : (
                                              "Verified Vendor"
                                            )}
                                          </span>
                                        </>
                                      )}
                                    </div>
                                  </div>

                                  {/* Compare Button - Far Right in row-reverse Arabic */}
                                  <button
                                    className="rounded-[4px] border border-slate-200 px-4 py-1.5 text-[12px] font-medium text-slate-500 transition hover:bg-slate-50"
                                    style={{ fontFamily: '"SF Pro Text", sans-serif' }}
                                  >
                                    Compare
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Service Providers Section */}
                          <div>
                            <h3 className="mb-2 text-[16px] font-bold text-[#1f2937]">
                              {isArabic ? "┘à╪▓┘ê╪»┘ê╪º ╪º┘ä╪«╪»┘à╪º╪¬:" : "Service Providers:"}
                            </h3>
                            <div className="flex flex-col">
                              {[
                                { name: "╪┤╪▒┘â╪⌐ Viralops", logo: providerLogo3, verified: true },
                              ].map((item, idx) => (
                                <div
                                  key={idx}
                                  className={`flex items-center gap-4 py-2 ${
                                    isArabic ? "flex-row-reverse" : ""
                                  }`}
                                >
                                  {/* Logo - Far Left in row-reverse Arabic */}
                                  <div className="h-[44px] w-[44px] shrink-0 overflow-hidden rounded-md border border-slate-100 bg-white p-1">
                                    <img
                                      src={item.logo}
                                      alt={item.name}
                                      className="h-full w-full object-contain"
                                    />
                                  </div>

                                  {/* Title Area */}
                                  <div
                                    className={`flex flex-col ${
                                      isArabic ? "text-right" : "text-left"
                                    }`}
                                  >
                                    <h4
                                      className="text-[14px] font-bold text-[#1f2937]"
                                      style={{ fontFamily: '"SF Pro Text", sans-serif' }}
                                    >
                                      {item.name}
                                    </h4>
                                  </div>

                                  <div className="flex-1" />

                                  {/* Verified Area - Far Right in row-reverse Arabic */}
                                  <div
                                    className={`flex items-center gap-1.5 ${
                                      isArabic ? "flex-row-reverse" : ""
                                    }`}
                                  >
                                    {item.verified && (
                                      <>
                                        <img
                                          src={verifiedIcon}
                                          alt="Verified"
                                          className="h-[22px] w-[22px] object-contain"
                                        />
                                        <span
                                          className={`text-[11px] font-medium text-[#1f2937] ${
                                            isArabic ? "leading-[1.1]" : ""
                                          }`}
                                          style={{
                                            fontFamily: '"SF Pro Text", sans-serif',
                                          }}
                                        >
                                          {isArabic ? (
                                            <>
                                              ╪¬┘à ╪º┘ä╪¬╪¡┘é┘é
                                              <br />
                                              ┘à┘å ╪º┘ä╪¿╪º╪ª╪╣
                                            </>
                                          ) : (
                                            "Verified Vendor"
                                          )}
                                        </span>
                                      </>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : activeTab === (isArabic ? "╪º┘ä┘ü╪ª╪º╪¬ ╪º┘ä┘ü╪▒╪╣┘è╪⌐" : "Subcategories") ? (
                        [
                          isArabic ? "╪¿╪▒┘à╪¼┘è╪º╪¬ ╪┤╪▒╪º╪í ╪º┘ä╪╢┘è╪º┘ü╪⌐" : "Hospitality Purchasing Software",
                          isArabic ? "╪ú┘å╪╕┘à╪⌐ ╪º┘ä┘ê┘é╪¬ ┘ê╪º┘ä╪¡╪╢┘ê╪▒" : "Time and Attendance Systems",
                          isArabic ? "╪«╪»┘à╪º╪¬ ╪¬╪»┘é┘è┘é" : "Audit Services",
                          isArabic ? "╪¡┘ä┘ê┘ä ╪º┘ä┘à┘ê┘é╪╣" : "Location Solutions",
                          isArabic ? "╪º┘ä╪ú┘à┘å" : "Security",
                        ].map((item, idx) => (
                          <div
                            key={idx}
                            className={`flex items-center py-2 ${
                              isArabic ? "justify-end text-right" : ""
                            }`}
                          >
                            <h3
                              className="text-[15px] font-bold leading-tight text-[#1f2937] transition-colors hover:text-[#0b56ff]"
                              style={{
                                fontFamily: '"SF Pro Text", sans-serif',
                              }}
                            >
                              {item}
                            </h3>
                          </div>
                        ))
                      ) : activeTab === (isArabic ? "╪º┘ä┘à┘å╪¬╪¼╪º╪¬" : "Products") ? (
                        [
                          {
                            title: isArabic ? "╪º┘ä┘à╪»┘ü┘ê╪╣╪º╪¬ ╪º┘ä╪┤╪«╪╡┘è╪⌐" : "Personal Payments",
                            subtitle: isArabic ? "┘à┘å╪╡╪º╪¬ ╪º┘ä╪»┘ü╪╣" : "Payment Platforms",
                            logo: productLogo1,
                            verified: true,
                          },
                          {
                            title: isArabic ? "┘à┘å╪╡╪⌐ ╪º┘ä┘à╪»┘ü┘ê╪╣╪º╪¬ ╪º┘ä╪Ñ┘ä┘â╪¬╪▒┘ê┘å┘è╪⌐" : "Electronic Payments Platform",
                            subtitle: isArabic ? "┘å╪╕╪º┘à ┘å┘é╪º╪╖ ╪º┘ä╪¿┘è╪╣ (POS)" : "POS System",
                            logo: productLogo1,
                            verified: true,
                          },
                          {
                            title: "WiFi Guest Management",
                            subtitle: isArabic ? "╪Ñ┘å╪¬╪▒┘å╪¬ ╪º┘ä╪╢┘è┘ü" : "Guest Internet",
                            logo: productLogo3,
                            verified: true,
                            hasAI: true,
                          },
                          {
                            title: "Alliants Guest App",
                            subtitle: isArabic ? "╪º┘ä┘ü┘å╪»┘é ╪¡┘ä┘ê┘ä ╪¿╪»┘ê┘å ╪¬┘ä╪º┘à╪│" : "Contactless Hotel Solutions",
                            logo: productLogo2,
                            verified: true,
                          },
                          {
                            title: "Alliants Experience Platform",
                            subtitle: isArabic ? "╪¬╪¼╪º╪▒╪¿ ╪º┘ä╪╢┘è┘ê┘ü" : "Guest Experiences",
                            logo: productLogo2,
                            verified: true,
                          },
                        ].map((item, idx) => (
                          <div
                            key={idx}
                            className={`flex items-center gap-4 py-2 ${
                              isArabic ? "flex-row-reverse" : ""
                            }`}
                          >
                            {/* Logo */}
                            <div className="h-[44px] w-[44px] shrink-0 overflow-hidden rounded-md border border-slate-100 bg-white p-1">
                              <img
                                src={item.logo}
                                alt={item.title}
                                className="h-full w-full object-contain"
                              />
                            </div>

                            {/* Title & Subtitle */}
                            <div
                              className={`flex flex-col ${
                                isArabic ? "text-right" : "text-left"
                              }`}
                            >
                              <h4
                                className="text-[14px] font-bold text-[#1f2937]"
                                style={{ fontFamily: '"SF Pro Text", sans-serif' }}
                              >
                                {item.title}
                              </h4>
                              <p
                                className="text-[12px] font-medium text-[#0b56ff]"
                                style={{ fontFamily: '"SF Pro Text", sans-serif' }}
                              >
                                {item.subtitle}
                              </p>
                            </div>

                            {/* Spacer to push elements to opposite end */}
                            <div className="flex-1" />

                            {/* Verified & AI Badge Area */}
                            <div
                              className={`flex items-center gap-2 ${
                                isArabic ? "flex-row-reverse" : ""
                              }`}
                            >
                              {item.hasAI && (
                                <div className="relative flex h-[22px] items-center">
                                  <div className="rounded-[4px] bg-[#f86d2d] px-2 py-0.5 text-[9px] font-bold text-white uppercase tracking-tight">
                                    {isArabic ? "┘à╪»╪╣┘ê┘à ╪¿╪º┘ä╪░┘â╪º╪í ╪º┘ä╪º╪╡╪╖┘å╪º╪╣┘è" : "AI Powered"}
                                  </div>
                                </div>
                              )}
                              <div
                                className={`flex items-center gap-1.5 ${
                                  isArabic ? "flex-row-reverse" : ""
                                }`}
                              >
                                {item.verified && (
                                  <>
                                    <img
                                      src={verifiedIcon}
                                      alt="Verified"
                                      className="h-[22px] w-[22px] object-contain"
                                    />
                                    <span
                                      className={`text-[11px] font-medium text-[#1f2937] ${
                                        isArabic ? "leading-[1.1]" : ""
                                      }`}
                                      style={{
                                        fontFamily: '"SF Pro Text", sans-serif',
                                      }}
                                    >
                                      {isArabic ? (
                                        <>
                                          ╪¬┘à ╪º┘ä╪¬╪¡┘é┘é
                                          <br />
                                          ┘à┘å ╪º┘ä╪¿╪º╪ª╪╣
                                        </>
                                      ) : (
                                        "Verified Vendor"
                                      )}
                                    </span>
                                  </>
                                )}
                              </div>
                            </div>

                            {/* Compare Button */}
                            <button
                              className="rounded-[4px] border border-slate-200 px-4 py-1.5 text-[12px] font-medium text-slate-500 transition hover:bg-slate-50"
                              style={{ fontFamily: '"SF Pro Text", sans-serif' }}
                            >
                              {isArabic ? "Compare" : "Compare"}
                            </button>
                          </div>
                        ))
                      ) : activeTab === (isArabic ? "┘à╪▓┘ê╪»┘ê╪º ╪º┘ä╪«╪»┘à╪º╪¬" : "Service Providers") ? (
                        [
                          { name: "Hosdu", logo: providerLogo1, verified: true },
                          { name: "Hotel Benchmark", logo: providerLogo2, verified: true },
                          { name: "Hotellab", logo: providerLogo3, verified: true },
                          { name: "Hotelogix", logo: providerLogo4, verified: true },
                          { name: "Hotelway", logo: providerLogo5, verified: true },
                        ].map((item, idx) => (
                          <div
                            key={idx}
                            className={`flex items-center gap-4 py-2 ${
                              isArabic ? "flex-row-reverse" : ""
                            }`}
                          >
                            {/* Logo - First child (Will be on Left in row-reverse RTL) */}
                            <div className="h-[44px] w-[44px] shrink-0 overflow-hidden rounded-md border border-slate-100 bg-white p-1">
                              <img
                                src={item.logo}
                                alt={item.name}
                                className="h-full w-full object-contain"
                              />
                            </div>

                            {/* Title - Second child */}
                            <div
                              className={`flex flex-col ${
                                isArabic ? "text-right" : "text-left"
                              }`}
                            >
                              <h4
                                className="text-[14px] font-bold text-[#1f2937]"
                                style={{ fontFamily: '"SF Pro Text", sans-serif' }}
                              >
                                {item.name}
                              </h4>
                            </div>

                            {/* Spacer to push elements to opposite end */}
                            <div className="flex-1" />

                            {/* Verified Area - Last child (Will be on Right in row-reverse RTL) */}
                            <div
                              className={`flex items-center gap-1.5 ${
                                isArabic ? "flex-row-reverse" : ""
                              }`}
                            >
                              {item.verified && (
                                <>
                                  <img
                                    src={verifiedIcon}
                                    alt="Verified"
                                    className="h-[22px] w-[22px] object-contain"
                                  />
                                  <span
                                    className={`text-[11px] font-medium text-[#1f2937] ${
                                      isArabic ? "leading-[1.1]" : ""
                                    }`}
                                    style={{
                                      fontFamily: '"SF Pro Text", sans-serif',
                                    }}
                                  >
                                    {isArabic ? (
                                      <>
                                        ╪¬┘à ╪º┘ä╪¬╪¡┘é┘é
                                        <br />
                                        ┘à┘å ╪º┘ä╪¿╪º╪ª╪╣
                                      </>
                                    ) : (
                                      "Verified Vendor"
                                    )}
                                  </span>
                                </>
                              )}
                            </div>
                          </div>
                        ))
                      ) : activeTab === (isArabic ? "╪º┘ä┘à╪»┘ê┘å╪º╪¬" : "Blogs") ? (
                        [
                          {
                            title: "Reshaping the Hospitality Industry through VR and AR",
                            image: latestNewsItems[0]?.image,
                          },
                          {
                            title: "Navigating the Future of Sustainable Tourism",
                            image: latestNewsItems[1]?.image,
                          },
                        ].map((item, idx) => (
                          <div
                            key={idx}
                            className={`flex items-center gap-4 py-2 ${
                              isArabic ? "flex-row-reverse" : ""
                            }`}
                          >
                            {/* Image Area - Far Left Side in row-reverse Arabic */}
                            <div className="h-[44px] w-[64px] shrink-0 overflow-hidden rounded-md border border-slate-100 bg-white">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="h-full w-full object-cover"
                              />
                            </div>

                            {/* Title Area - Right Side next to image */}
                            <div
                              className={`${
                                isArabic ? "text-right" : "text-left"
                              }`}
                            >
                              <h4
                                className="text-[14px] font-bold text-[#1f2937]"
                                style={{ fontFamily: '"SF Pro Text", sans-serif' }}
                              >
                                {item.title}
                              </h4>
                            </div>

                            {/* Spacer to push content to the left end in row-reverse Arabic */}
                            <div className="flex-1" />
                          </div>
                        ))
                      ) : (
                        latestNewsItems.slice(0, 4).map((item, idx) => {
                          // Mock titles to match screenshot more closely for the first 4 items
                          const mockTitles = isArabic ? [
                            "Paid News Check- AR",
                            "Shady Brand News- AR",
                            "Email Test New shady News- AR",
                            "Shady News Edit- AR"
                          ] : [];
                          const displayTitle = (isArabic && mockTitles[idx]) || item.title;
                          
                          return (
                            <div
                              key={item.id}
                              className={`flex items-center gap-4 py-1.5 ${
                                isArabic ? "flex-row-reverse text-right" : ""
                              }`}
                            >
                              <div className="h-[48px] w-[72px] shrink-0 overflow-hidden rounded-md border border-slate-200 bg-slate-50">
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              <div className="flex-1">
                                <h3
                                  className="text-[15px] font-bold leading-tight text-[#1f2937] transition-colors hover:text-[#0b56ff]"
                                  style={{
                                    fontFamily: '"SF Pro Text", sans-serif',
                                  }}
                                >
                                  {displayTitle}
                                </h3>
                              </div>
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          drawerOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!drawerOpen}
      >
        <div
          className={`absolute inset-0 bg-black transition-opacity ${
            drawerOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeDrawer}
        />
        <aside
          className={`absolute right-0 top-0 h-full w-full bg-black text-white shadow-[-24px_0_60px_-30px_rgba(0,0,0,0.75)] transition-transform duration-300 ${
            drawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={`flex items-start justify-between px-6 pb-4 pt-4 ${
              isArabic ? "flex-row-reverse" : ""
            }`}
          >
            <div>
              <img
                src={navLogo}
                alt="Explore Tech"
                className={`h-[86px] w-[176px] ${
                  isArabic ? "ml-0 mr-0" : "-ml-4"
                }`}
                style={{ filter: "invert(1) brightness(1.2)" }}
              />
              <div
                className={`-mt-[18px] w-[172px] whitespace-nowrap text-[8px] font-semibold leading-[10px] tracking-[0.18em] text-white ${
                  isArabic ? "ml-0 mr-0" : ""
                }`}
              >
                THE DIGITAL MARKETPLACE
              </div>
            </div>
            <button
              type="button"
              className="mt-1 rounded-md p-2 text-white"
              aria-label="Close menu"
              onClick={closeDrawer}
            >
              <X className="h-7 w-7" strokeWidth={2.4} />
            </button>
          </div>

          <nav className="relative mt-4 px-6 text-white">
            <button
              type="button"
              className={`flex w-full items-center justify-between border-b border-[#18c443] py-4 text-[16px] font-semibold tracking-wide ${
                drawerRowClass
              } ${
                drawerSection === "categories" ? "text-[#18c443]" : "text-white"
              }`}
              onClick={() => toggleDrawerSection("categories")}
            >
              <span
                style={{
                  fontFamily: '"SF Pro Text", sans-serif',
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "rgb(214, 245, 220)",
                }}
              >
                {language === "AR" ? "╪º┘ä┘ü╪ª╪º╪¬" : "CATEGORIES"}
                
              </span>
              {drawerSection === "categories" ? drawerActiveArrow : drawerArrow}
            </button>
            {drawerSection === "categories" && (
              <div className="border-b border-white/15">
                {categories.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className={`flex w-full items-center justify-between border-t border-white/15 py-4 text-white ${drawerRowClass}`}
                    dir={isArabic ? "rtl" : "ltr"}
                    onClick={closeDrawer}
                  >
                    <span
                      className={`${isArabic ? "pl-4 pr-0" : "pr-4"} ${
                        isArabic ? "" : "uppercase"
                      }`}
                      style={{
                        fontFamily: '"SF Pro Text", sans-serif',
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "24px",
                        color: "rgb(215, 245, 222)",
                      }}
                      dir={isArabic ? "rtl" : "ltr"}
                    >
                      {item}
                    </span>
                    {drawerArrow}
                  </a>
                ))}
              </div>
            )}
            <a
              href="#"
              className={`flex w-full items-center justify-between border-b border-[#18c443] py-4 ${drawerRowClass}`}
              onClick={closeDrawer}
            >
              <span
                dir={isArabic ? "rtl" : "ltr"}
                style={{
                  fontFamily: '"SF Pro Text", sans-serif',
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "rgb(214, 245, 220)",
                }}
              >
                {language === "AR" ? "╪º┘ä┘à┘å╪¬╪¼╪º╪¬" : "PRODUCTS"}
              </span>
            </a>
            <a
              href="#"
              className={`flex w-full items-center justify-between border-b border-[#18c443] py-4 ${drawerRowClass}`}
              onClick={closeDrawer}
            >
              <span
                dir={isArabic ? "rtl" : "ltr"}
                style={{
                  fontFamily: '"SF Pro Text", sans-serif',
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "rgb(214, 245, 220)",
                }}
              >
                {language === "AR" ? "┘à╪▓┘ê╪»┘ê╪º ╪º┘ä╪«╪»┘à╪º╪¬" : "VENDORS"}
              </span>
            </a>
            <a
              href="#"
              className={`flex w-full items-center justify-between border-b border-[#18c443] py-4 ${drawerRowClass}`}
              onClick={closeDrawer}
            >
              <span
                dir={isArabic ? "rtl" : "ltr"}
                style={{
                  fontFamily: '"SF Pro Text", sans-serif',
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "rgb(214, 245, 220)",
                }}
              >
                {language === "AR" ? "╪«╪»┘à╪º╪¬ ╪º╪│╪¬╪┤╪º╪▒┘è╪⌐" : "ADVISORY SERVICES"}
              </span>
            </a>
            <button
              type="button"
              className={`flex w-full items-center justify-between border-b border-[#18c443] py-3 text-[16px] font-semibold tracking-wide ${
                drawerRowClass
              } ${
                drawerSection === "resources" ? "text-[#18c443]" : "text-white"
              }`}
              onClick={() => toggleDrawerSection("resources")}
            >
              <span
                style={{
                  fontFamily: '"SF Pro Text", sans-serif',
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "rgb(214, 245, 220)",
                }}
              >
                {language === "AR" ? "RESOURCES" : "RESOURCES"}
              </span>
              {drawerSection === "resources" ? drawerActiveArrow : drawerArrow}
            </button>
            {drawerSection === "resources" && (
              <div className="border-b border-white/15 pt-1">
                {drawerResources.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className={`flex w-full items-center justify-between border-t border-white/15 py-3 text-white ${drawerRowClass}`}
                    dir={isArabic ? "rtl" : "ltr"}
                    onClick={closeDrawer}
                  >
                    <span
                      className={`${isArabic ? "pl-4 pr-0" : "pr-4"} ${
                        isArabic ? "" : "uppercase"
                      }`}
                      style={{
                        fontFamily: '"SF Pro Text", sans-serif',
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "24px",
                        color: "rgb(215, 245, 222)",
                      }}
                      dir={isArabic ? "rtl" : "ltr"}
                    >
                      {item}
                    </span>
                    {drawerArrow}
                  </a>
                ))}
              </div>
            )}
            <a
              href="#"
              className={`flex w-full items-center justify-between border-b border-[#18c443] py-4 ${drawerRowClass}`}
              onClick={closeDrawer}
            >
              <span
                dir={isArabic ? "rtl" : "ltr"}
                style={{
                  fontFamily: '"SF Pro Text", sans-serif',
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "rgb(214, 245, 220)",
                }}
              >
                {language === "AR" ? "╪º┘ä╪ú╪¡╪»╪º╪½" : "EVENTS"}
              </span>
            </a>
            <a
              href="#"
              className={`flex w-full items-center justify-between border-b border-[#18c443] py-4 ${drawerRowClass}`}
              onClick={closeDrawer}
            >
              <span
                style={{
                  fontFamily: '"SF Pro Text", sans-serif',
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "rgb(214, 245, 220)",
                }}
              >
                {language === "AR" ? "╪º╪¬╪╡┘ä ╪¿┘å╪º" : "CONTACT US"}
              </span>
            </a>

            <div ref={mobileLanguageRef} className="relative mt-10 inline-flex">
              {languageOpen && (
                <div className="absolute bottom-full left-0 z-10 mb-2 w-[170px] overflow-hidden rounded-[14px] border border-[#d7dee8] bg-[#f4f6f9] shadow-[0_10px_28px_-18px_rgba(15,23,42,0.45)]">
                  <button
                    type="button"
                    className="w-full px-5 py-[10px] text-left transition-colors hover:bg-[#eef2f7]"
                    onClick={() => handleLanguageSelect("EN")}
                    style={{
                      fontFamily: '"SF Pro Text", sans-serif',
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "13px",
                      lineHeight: "20px",
                      color: "rgb(87, 106, 160)",
                    }}
                  >
                    English
                  </button>
                  <div className="h-px w-full bg-[#d7dee8]" />
                  <button
                    type="button"
                    className="w-full px-5 py-[10px] text-left transition-colors hover:bg-[#eef2f7]"
                    onClick={() => handleLanguageSelect("AR")}
                    style={{
                      fontFamily: '"SF Pro Text", sans-serif',
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "13px",
                      lineHeight: "20px",
                      color: "rgb(87, 106, 160)",
                    }}
                  >
                    {"\u0627\u0644\u0639\u0631\u0628\u064a\u0629"}
                  </button>
                </div>
              )}
              <button
                type="button"
                className="inline-flex items-center gap-2"
                onClick={() => setLanguageOpen((current) => !current)}
                style={{
                  fontFamily: '"SF Pro Text", sans-serif',
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "13px",
                  lineHeight: "20px",
                  color: languageOpen ? "#0b56ff" : "rgb(87, 106, 160)",
                }}
              >
                <Globe className="h-4 w-4" />
                <span>{language}</span>
              </button>
            </div>
          </nav>
        </aside>
      </div>
    </div>
  );
};

export default NavMenu;
