import { ChevronRight, Globe, X } from "lucide-react";

const drawerPrimaryTextStyle = {
  fontFamily: '"SF Pro Text", sans-serif',
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "24px",
  color: "rgb(214, 245, 220)",
};

const drawerSecondaryTextStyle = {
  fontFamily: '"SF Pro Text", sans-serif',
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "24px",
  color: "rgb(215, 245, 222)",
};

const languageOptionStyle = {
  fontFamily: '"SF Pro Text", sans-serif',
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "13px",
  lineHeight: "20px",
  color: "rgb(87, 106, 160)",
};

const NavMenuDrawer = ({
  drawerOpen,
  closeDrawer,
  isArabic,
  navLogo,
  navMenuParagraphs,
  drawerSection,
  toggleDrawerSection,
  drawerLabels,
  categories,
  drawerResources,
  mobileLanguageRef,
  languageOpen,
  setLanguageOpen,
  handleLanguageSelect,
  languageLabels,
  language,
}) => {
  const drawerRowClass = isArabic ? "flex-row-reverse text-right" : "text-left";
  const drawerArrow = isArabic ? (
    <i
      className="bi bi-chevron-left text-[16px] leading-none text-white"
      aria-hidden="true"
    />
  ) : (
    <ChevronRight className="h-6 w-6 shrink-0 text-white" strokeWidth={2} />
  );
  const drawerActiveArrow = isArabic ? (
    <i
      className="bi bi-chevron-up text-[16px] leading-none text-[#18c443]"
      aria-hidden="true"
    />
  ) : (
    <ChevronRight className="h-6 w-6 shrink-0 text-[#18c443]" strokeWidth={2} />
  );

  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden ${
        drawerOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!drawerOpen}
    >
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity ${
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
          className={`flex items-start justify-between px-6 pb-4 pt-8 ${
            isArabic ? "flex-row-reverse" : ""
          }`}
        >
          <div className={`flex flex-col ${isArabic ? "items-end" : "items-start"}`}>
            <img
              src={navLogo}
              alt="Explore Tech"
              className={`h-[72px] w-auto object-contain block ${
                isArabic ? "" : "-ml-2"
              }`}
              style={{ filter: "invert(1) brightness(1.2)" }}
            />
            <div
              className={`-mt-[20px] whitespace-nowrap text-[9px] font-semibold leading-[10px] text-white ${
                isArabic
                  ? "w-full text-center tracking-widest pl-2"
                  : "w-[200px] text-left tracking-[0.16em]"
              }`}
            >
              {isArabic ? "السوق الرقمي" : navMenuParagraphs.drawerTagline}
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
            } ${drawerSection === "categories" ? "text-[#18c443]" : "text-white"}`}
            onClick={() => toggleDrawerSection("categories")}
          >
            <span style={drawerPrimaryTextStyle}>{drawerLabels.categories}</span>
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
                    style={drawerSecondaryTextStyle}
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
            <span dir={isArabic ? "rtl" : "ltr"} style={drawerPrimaryTextStyle}>
              {drawerLabels.products}
            </span>
          </a>

          <a
            href="#"
            className={`flex w-full items-center justify-between border-b border-[#18c443] py-4 ${drawerRowClass}`}
            onClick={closeDrawer}
          >
            <span dir={isArabic ? "rtl" : "ltr"} style={drawerPrimaryTextStyle}>
              {drawerLabels.vendors}
            </span>
          </a>

          <a
            href="#"
            className={`flex w-full items-center justify-between border-b border-[#18c443] py-4 ${drawerRowClass}`}
            onClick={closeDrawer}
          >
            <span dir={isArabic ? "rtl" : "ltr"} style={drawerPrimaryTextStyle}>
              {drawerLabels.advisoryServices}
            </span>
          </a>

          <button
            type="button"
            className={`flex w-full items-center justify-between border-b border-[#18c443] py-3 text-[16px] font-semibold tracking-wide ${
              drawerRowClass
            } ${drawerSection === "resources" ? "text-[#18c443]" : "text-white"}`}
            onClick={() => toggleDrawerSection("resources")}
          >
            <span style={drawerPrimaryTextStyle}>{drawerLabels.resources}</span>
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
                    style={drawerSecondaryTextStyle}
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
            <span dir={isArabic ? "rtl" : "ltr"} style={drawerPrimaryTextStyle}>
              {drawerLabels.events}
            </span>
          </a>

          <a
            href="#"
            className={`flex w-full items-center justify-between border-b border-[#18c443] py-4 ${drawerRowClass}`}
            onClick={closeDrawer}
          >
            <span style={drawerPrimaryTextStyle}>{drawerLabels.contactUs}</span>
          </a>

          <div ref={mobileLanguageRef} className="relative mt-10 inline-flex pb-10">
            {languageOpen && (
              <div className="absolute bottom-full left-0 z-10 mb-2 w-36 overflow-hidden rounded-lg border border-slate-100 bg-white text-[14px] font-medium text-slate-700 shadow-[0_18px_40px_-20px_rgba(15,23,42,0.45)]">
                <button
                  type="button"
                  className="w-full border-b border-slate-100 px-4 py-2 text-center transition-colors hover:bg-blue-50 hover:text-[#0b56ff]"
                  onClick={() => handleLanguageSelect("EN")}
                >
                  English
                </button>
                <button
                  type="button"
                  className="w-full px-4 py-2 text-center transition-colors hover:bg-blue-50 hover:text-[#0b56ff]"
                  onClick={() => handleLanguageSelect("AR")}
                >
                  العربية
                </button>
              </div>
            )}
            <button
              type="button"
              className="inline-flex items-center gap-2"
              onClick={() => setLanguageOpen((current) => !current)}
              style={{
                ...languageOptionStyle,
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
  );
};

export default NavMenuDrawer;
