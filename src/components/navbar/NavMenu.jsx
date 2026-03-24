import { ChevronRight, Globe, Menu, Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import logoEn from "../../Explote-Tech-Logo-Black.gif";
import logoAr from "../../../AR-Explote-Tech-Logo-Black.gif";
import { useLanguage } from "../../context/LanguageContext.jsx";

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
  "ذكاء الأعمال",
  "التجاري والتوزيع",
  "عمليات الضيافة",
  "تقنيات الضيوف والمسافرين",
  "تقنيات الغرف",
  "تقنية المعلومات والاتصالات",
  "التمويل والمدفوعات",
  "الروبوتات والأتمتة",
  "خدمات الضيافة",
  "تقنية المطاعم",
  "حلول الإيجار قصير الأمد/العطلات",
  "الاستدامة",
];

const resourcesEn = ["Resources", "News", "Blog"];
const resourcesAr = ["الموارد", "الأخبار", "المدونة"];

const menuItemClasses =
  "flex items-center justify-between border-b border-slate-100 px-5 py-1.5 text-[14px] font-medium text-slate-700 transition-colors last:border-b-0 hover:bg-slate-50 hover:text-[#0b56ff]";

const arrowClasses = "h-4 w-4 text-slate-600";

const NavMenu = ({ onSignIn, onSignUp }) => {
  const { language, setLanguage } = useLanguage();
  const navLogo = language === "AR" ? logoAr : logoEn;
  const categories = language === "AR" ? categoriesAr : categoriesEn;
  const resources = language === "AR" ? resourcesAr : resourcesEn;
  const [searchOpen, setSearchOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerSection, setDrawerSection] = useState(null);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [query, setQuery] = useState("");
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
            {language === "AR" ? "الفئات" : "Categories"}
          </a>
          <div className="invisible absolute left-0 top-full z-50 mt-4 w-72 translate-y-2 rounded-2xl border border-slate-100 bg-white py-2 opacity-0 shadow-[0_20px_40px_-18px_rgba(15,23,42,0.35)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
            {categories.map((item) => (
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
        >
          {language === "AR" ? "المنتجات" : "Products"}
        </a>
        <a
          className="text-sm font-medium tracking-wide uppercase text-slate-700"
          href="#"
        >
          {language === "AR" ? "المورّدون" : "Vendors"}
        </a>
        <a
          className="text-sm font-medium tracking-wide uppercase text-slate-700"
          href="#"
        >
          {language === "AR" ? "الخدمات الاستشارية" : "Advisory Services"}
        </a>
        <div className="group relative">
          <a
            className="text-sm font-medium tracking-wide uppercase text-slate-700 transition-colors group-hover:text-[#0b56ff]"
            href="#"
          >
            {language === "AR" ? "الموارد" : "Resources"}
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
        >
          {language === "AR" ? "الفعاليات" : "Events"}
        </a>
        <a
          className="text-sm font-medium tracking-wide uppercase text-slate-700"
          href="#"
        >
          {language === "AR" ? "اتصل بنا" : "Contact Us"}
        </a>
      </div>

      <div className="hidden items-center gap-2 md:flex lg:hidden">
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
          {language === "AR" ? "تسجيل الدخول / إنشاء حساب" : "Sign In/ Sign Up"}
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

      <div className="flex items-center gap-3 md:hidden">
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
          {language === "AR" ? "تسجيل الدخول / إنشاء حساب" : "Sign In/ Sign Up"}
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
            <div ref={panelRef} className="mx-auto w-full max-w-[1265px]">
              <div className="flex h-[70px] items-center gap-4 rounded-xl bg-white pl-6 pr-6 shadow-[0_24px_50px_-30px_rgba(15,23,42,0.6)]">
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                  className="min-w-0 flex-1 bg-transparent pl-0 pr-[6px] text-[14px] font-medium leading-[20px] tracking-normal text-black placeholder:text-slate-400 focus:outline-none sm:pr-[10px] sm:text-[18px] sm:leading-[28px]"
                  placeholder={
                    language === "AR"
                      ? "أدخل عبارة البحث هنا"
                      : "Enter your search term here"
                  }
                />
                {hasQuery && (
                  <button
                    type="button"
                    className="p-2 text-slate-400 transition hover:text-slate-600"
                    onClick={clearQuery}
                    aria-label="Clear search"
                  >
                    <X className="h-5 w-5" strokeWidth={2.5} />
                  </button>
                )}
                <button
                  type="button"
                  disabled={!hasQuery}
                  className={`ml-2 rounded-lg bg-[#0b56ff] px-5 py-2 text-[14px] font-semibold text-white transition ${
                    hasQuery ? "opacity-100" : "cursor-not-allowed opacity-50"
                  }`}
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                >
                  {language === "AR" ? "بحث" : "Search"}
                </button>
              </div>

              {hasQuery && (
                <div className="mt-5 rounded-2xl border border-slate-200 bg-white px-8 py-10 text-center shadow-[0_24px_50px_-30px_rgba(15,23,42,0.35)]">
                  <p
                    className="text-[14px] font-normal leading-[23px] text-black"
                    style={{
                      fontFamily: '"SF Pro Text", sans-serif',
                      fontWeight: 400,
                    }}
                  >
                    {language === "AR"
                      ? "لم يتم العثور على نتائج. هل تريد البحث في "
                      : "No Result found. Do you want to get result on "}
                    <a
                      href="#"
                      className="text-[14px] font-[600] leading-[23px] !text-[#0055fe] hover:!text-[#0055fe]"
                      style={{
                        fontFamily: '"SF Pro Text", sans-serif',
                        fontWeight: 600,
                      }}
                    >
                      {language === "AR" ? "ExploreTECH PRO؟" : "ExploreTECH PRO?"}
                    </a>
                  </p>
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
          <div className="flex items-start justify-between px-6 pb-5 pt-6">
            <div>
              <img
                src={navLogo}
                alt="Explore Tech"
                className="-ml-4 h-[86px] w-[176px]"
                style={{ filter: "invert(1) brightness(1.2)" }}
              />
              <div className="-mt-[18px] w-[172px] whitespace-nowrap text-[8px] font-semibold leading-[10px] tracking-[0.18em] text-white">
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
              className={`flex w-full items-center justify-between border-b border-[#18c443] py-4 text-left text-[16px] font-semibold tracking-wide ${
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
                {language === "AR" ? "الفئات" : "CATEGORIES"}
                
              </span>
              <ChevronRight
                className={`h-6 w-6 transition-transform duration-200 ${
                  drawerSection === "categories" ? "rotate-90 text-[#18c443]" : "text-white"
                }`}
                strokeWidth={2}
              />
            </button>
            {drawerSection === "categories" && (
              <div className="border-b border-white/15">
                {categories.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="flex w-full items-center justify-between border-t border-white/15 py-4 text-white"
                    onClick={closeDrawer}
                  >
                    <span
                      className="pr-4 uppercase"
                      style={{
                        fontFamily: '"SF Pro Text", sans-serif',
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "24px",
                        color: "rgb(215, 245, 222)",
                      }}
                    >
                      {item}
                    </span>
                    <ChevronRight
                      className="h-6 w-6 shrink-0 text-white"
                      strokeWidth={2}
                    />
                  </a>
                ))}
              </div>
            )}
            <a
              href="#"
              className="flex w-full items-center justify-between border-b border-[#18c443] py-4 text-left"
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
                {language === "AR" ? "المنتجات" : "PRODUCTS"}
              </span>
            </a>
            <a
              href="#"
              className="flex w-full items-center justify-between border-b border-[#18c443] py-4 text-left"
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
                {language === "AR" ? "المورّدون" : "VENDORS"}
              </span>
            </a>
            <a
              href="#"
              className="flex w-full items-center justify-between border-b border-[#18c443] py-4 text-left"
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
                {language === "AR" ? "الخدمات الاستشارية" : "ADVISORY SERVICES"}
              </span>
            </a>
            <button
              type="button"
              className={`flex w-full items-center justify-between border-b border-[#18c443] py-4 text-left text-[16px] font-semibold tracking-wide ${
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
                {language === "AR" ? "الموارد" : "RESOURCES"}
              </span>
              <ChevronRight
                className={`h-6 w-6 transition-transform duration-200 ${
                  drawerSection === "resources" ? "rotate-90 text-[#18c443]" : "text-white"
                }`}
                strokeWidth={2}
              />
            </button>
            {drawerSection === "resources" && (
              <div className="border-b border-white/15">
                {resources.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="flex w-full items-center justify-between border-t border-white/15 py-4 text-white"
                    onClick={closeDrawer}
                  >
                    <span
                      className="pr-4 uppercase"
                      style={{
                        fontFamily: '"SF Pro Text", sans-serif',
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "24px",
                        color: "rgb(215, 245, 222)",
                      }}
                    >
                      {item}
                    </span>
                    <ChevronRight
                      className="h-6 w-6 shrink-0 text-white"
                      strokeWidth={2}
                    />
                  </a>
                ))}
              </div>
            )}
            <a
              href="#"
              className="flex w-full items-center justify-between border-b border-[#18c443] py-4 text-left"
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
                {language === "AR" ? "الفعاليات" : "EVENTS"}
              </span>
            </a>
            <a
              href="#"
              className="flex w-full items-center justify-between border-b border-[#18c443] py-4 text-left"
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
                {language === "AR" ? "اتصل بنا" : "CONTACT US"}
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


