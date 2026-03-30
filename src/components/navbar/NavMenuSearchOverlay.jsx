import React from "react";
import { X } from "lucide-react";
import SearchSpinner from "./search-panel/SearchSpinner.jsx";
import { getSearchPlaceholder } from "./search-panel/searchPanelContent.js";

const NavMenuSearchOverlay = ({
  searchOpen,
  panelRef,
  inputRef,
  tabsRef,
  language,
  isArabic,
  query,
  setQuery,
  hasQuery,
  searchSubmitButtonClass,
  clearQuery,
  clearQueryButton,
  tabScrollButtonLeft,
  tabScrollButtonRight,
  scrollTabs,
  searchTabsAr,
  searchTabsEn,
  activeTab,
  setActiveTab,
  isSearching,
  viewMoreButton,
  tabLabels,
  sectionLabels,
  subcategoriesAr,
  subcategoriesEn,
  allProductsData,
  verifiedIcon,
  navMenuParagraphs,
  compareButton,
  allServiceProvidersData,
  blogCardsData,
  newsCardsData,
  productsDataAr,
  productsDataEn,
  serviceProvidersData,
}) => {
  if (!searchOpen) return null;

  return (        <div className="fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute left-0 right-0 top-[80px] z-50 pl-4 pr-4 sm:pl-5 sm:pr-[21px]">
            <div ref={panelRef} className="mx-auto w-full max-w-[1305.6px]">
              <div className="group relative flex h-[70px] items-center gap-2 rounded-[12px] bg-white px-3 shadow-[0_24px_50px_-30px_rgba(15,23,42,0.6)] sm:gap-4 sm:px-6">
                {language === "AR" && (
                  /* SEARCH PANEL SUBMIT BUTTON - ARABIC (Left Side) */
                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      type="button"
                      disabled={!hasQuery}
                      className={`shrink-0 cursor-pointer ${searchSubmitButtonClass} shadow-[0_10px_24px_-12px_rgba(11,86,255,0.65)] ${
                        hasQuery ? "opacity-100" : "cursor-not-allowed opacity-70"
                      }`}
                      style={{ fontFamily: '"SF Pro Text", sans-serif' }}
                    >
                      Search
                    </button>
                    {hasQuery && (
                      <button
                        type="button"
                        className="shrink-0 p-2 text-slate-400 transition-opacity duration-150 hover:text-slate-600"
                        onClick={clearQuery}
                        aria-label={clearQueryButton.ariaLabel}
                      >
                        <X className="h-5 w-5" strokeWidth={2.5} />
                      </button>
                    )}
                  </div>
                )}
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 500 }}
                  className={`min-w-0 flex-1 bg-transparent px-2 sm:px-4 text-[13px] sm:text-[18px] font-medium leading-normal sm:leading-[28px] tracking-normal text-black placeholder:text-[#9aa3b2] focus:outline-none ${
                    language === "AR" ? "text-right" : "text-left"
                  }`}
                  dir={language === "AR" ? "rtl" : "ltr"}
                  placeholder={
                    getSearchPlaceholder(isArabic, navMenuParagraphs)
                  }
                />
                {language !== "AR" && (
                  /* SEARCH PANEL SUBMIT BUTTON - ENGLISH (Right Side) */
                  <div className="flex items-center gap-1 shrink-0">
                    {hasQuery && (
                      <button
                        type="button"
                        className="shrink-0 p-2 text-slate-400 transition-opacity duration-150 hover:text-slate-600"
                        onClick={clearQuery}
                        aria-label={clearQueryButton.ariaLabel}
                      >
                        <X className="h-5 w-5" strokeWidth={2.5} />
                      </button>
                    )}
                    <button
                      type="button"
                      disabled={!hasQuery}
                      className={`ml-2 cursor-pointer ${searchSubmitButtonClass} ${
                        hasQuery ? "opacity-100" : "cursor-not-allowed opacity-50"
                      }`}
                      style={{ fontFamily: '"SF Pro Text", sans-serif' }}
                    >
                      Search
                    </button>
                  </div>
                )}
              </div>

              {hasQuery && (
                <div className="mt-5 overflow-hidden rounded-[16px] border border-slate-100 bg-white shadow-[0_24px_50px_-30px_rgba(15,23,42,0.45)]">
                  {/* Tabs Header */}
                  <div className="flex items-center border-b border-slate-100 px-4 sm:px-8 relative">
                    {/* Desktop: View More */}
                    <button
                      className={`hidden sm:block text-[13px] shrink-0 font-semibold text-[#0b56ff] hover:underline ${isArabic ? "order-first mr-auto" : "order-last ml-auto"}`}
                      style={{ fontFamily: '"SF Pro Text", sans-serif' }}
                      aria-label={viewMoreButton.ariaLabel}
                    >
                      {isArabic
                        ? navMenuParagraphs.viewMore.ar
                        : navMenuParagraphs.viewMore.en}
                    </button>

                    {/* Mobile: Left Arrow - TAB SCROLL BUTTON (LEFT) */}
                    <button
                      className="flex sm:hidden shrink-0 items-center justify-center w-[36px] h-[36px] mr-2 rounded-[8px] bg-white border border-slate-100 shadow-[0_4px_12px_rgba(0,0,0,0.08)] text-black transition hover:bg-slate-50"
                      onClick={() => scrollTabs("left")}
                      aria-label={tabScrollButtonLeft.ariaLabel}
                    >
                      <i className="bi bi-arrow-left text-[16px]" style={{ WebkitTextStroke: "0.5px black" }}></i>
                    </button>

                    <div
                      className="flex flex-1 items-center gap-0 sm:gap-10 overflow-x-auto no-scrollbar scroll-smooth"
                      ref={tabsRef}
                      dir={isArabic ? "rtl" : "ltr"}
                    >
                      {(isArabic ? searchTabsAr : searchTabsEn).map((tab) => (
                        /* SEARCH TAB BUTTONS */
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={`relative py-4 shrink-0 w-1/2 sm:w-auto flex flex-col items-center justify-center text-[13px] font-semibold transition-colors sm:text-[14px] ${
                            activeTab === tab
                              ? "text-[#0b56ff]"
                              : "text-slate-500 hover:text-slate-700"
                          }`}
                        >
                          <span className="text-center w-full">{tab}</span>
                          {activeTab === tab && (
                            <div className="absolute bottom-0 left-1/2 h-[3px] w-[50px] -translate-x-1/2 rounded-full bg-[#0b56ff] sm:left-0 sm:w-full sm:translate-x-0" />
                          )}
                        </button>
                      ))}
                    </div>

                    {/* Mobile: Right Arrow - TAB SCROLL BUTTON (RIGHT) */}
                    <button
                      className="flex sm:hidden shrink-0 items-center justify-center w-[36px] h-[36px] ml-2 rounded-[8px] bg-white border border-slate-100 shadow-[0_4px_12px_rgba(0,0,0,0.08)] text-black transition hover:bg-slate-50"
                      onClick={() => scrollTabs("right")}
                      aria-label={tabScrollButtonRight.ariaLabel}
                    >
                      <i className="bi bi-arrow-right text-[16px]" style={{ WebkitTextStroke: "0.5px black" }}></i>
                    </button>
                  </div>

                  {/* Results List */}
                  {isSearching ? (
                    <SearchSpinner />
                  ) : (
                    <div className={`max-h-[500px] overflow-y-auto px-5 sm:px-8 py-4 ${isArabic ? "[direction:rtl]" : ""}`}>
                      <div className={`flex flex-col gap-2 ${isArabic ? "[direction:ltr]" : ""}`}>
                        {activeTab === tabLabels.all ? (
                          <div className="flex flex-col gap-6">
                            {/* Subcategories Section */}
                            <div>
                              <h3
                                className={`mb-2 text-[16px] font-bold text-[#1f2937] ${isArabic ? "text-right" : ""}`}
                              >
                                {sectionLabels.subcategories}
                              </h3>
                              <div className="flex flex-col">
                                {(isArabic
                                  ? subcategoriesAr
                                  : subcategoriesEn
                                ).map((item, idx) => (
                                  <div
                                    key={idx}
                                    className={`flex items-center py-2 ${isArabic ? "justify-end text-right" : ""}`}
                                  >
                                    <h4
                                      className="text-[14px] font-bold text-[#1f2937] transition-colors hover:text-[#0b56ff]"
                                      style={{
                                        fontFamily: '"SF Pro Text", sans-serif',
                                      }}
                                    >
                                      {item}
                                    </h4>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Products Section */}
                            <div>
                              <h3
                                className={`mb-2 text-[16px] font-bold text-[#1f2937] ${isArabic ? "text-right" : ""}`}
                              >
                                {sectionLabels.products}
                              </h3>
                              <div className="flex flex-col">
                                {allProductsData.map((item, idx) => (
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
                                        className="text-[13px] font-semibold text-[#1f2937]"
                                        style={{
                                          fontFamily:
                                            '"SF Pro Text", sans-serif',
                                        }}
                                      >
                                        {item.title}
                                      </h4>
                                      <p
                                        className="text-[11px] font-medium text-[#0b56ff] mt-0.5 leading-tight"
                                        style={{
                                          fontFamily:
                                            '"SF Pro Text", sans-serif',
                                        }}
                                      >
                                        {item.subtitle}
                                      </p>
                                      {item.hasAI && (
                                        <div className={`mt-1.5 flex h-[18px] items-center ${isArabic ? "ml-auto" : "mr-auto"}`}>
                                          <div className="rounded-[4px] bg-[#f86d2d] px-1.5 text-[8px] font-bold text-white uppercase tracking-tight">
                                            {isArabic
                                              ? navMenuParagraphs.aiPowered?.ar || "مدعوم بالذكاء الاصطناعي"
                                              : navMenuParagraphs.aiPowered?.en || "AI Powered"}
                                          </div>
                                        </div>
                                      )}
                                    </div>

                                    {/* Spacer */}
                                    <div className="flex-1" />

                                    {/* Right Side Stack: Verified + Compare */}
                                    <div className="flex flex-col items-end gap-1.5 shrink-0">
                                      {item.verified && (
                                        <div className={`flex items-center gap-1 ${isArabic ? "flex-row-reverse" : ""}`}>
                                          <img
                                            src={verifiedIcon}
                                            alt="Verified"
                                            className="h-[22px] w-[22px] object-contain"
                                          />
                                          <span
                                            className={`text-[11px] font-medium text-[#1f2937] ${
                                              isArabic ? "leading-[1.1] text-right" : ""
                                            }`}
                                            style={{ fontFamily: '"SF Pro Text", sans-serif' }}
                                          >
                                            {isArabic ? (
                                              <>
                                                {navMenuParagraphs.verifiedVendor.arLine1}
                                                <br />
                                                {navMenuParagraphs.verifiedVendor.arLine2}
                                              </>
                                            ) : (
                                              navMenuParagraphs.verifiedVendor.en
                                            )}
                                          </span>
                                        </div>
                                      )}
                                      <button className="rounded-[4px] px-3 py-1.5 text-[11px] font-medium border border-slate-200 text-slate-700 hover:bg-slate-50 transition bg-white shadow-sm" style={{ fontFamily: '"SF Pro Text", sans-serif' }}>
                                        Compare
                                      </button>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Service Providers Section */}
                            <div>
                              <h3
                                className={`mb-2 text-[16px] font-bold text-[#1f2937] ${isArabic ? "text-right" : ""}`}
                              >
                                {sectionLabels.serviceProviders}
                              </h3>
                              <div className="flex flex-col">
                                {allServiceProvidersData.map((item, idx) => (
                                  <div
                                    key={idx}
                                    className={`flex items-center gap-4 py-2 ${
                                      isArabic ? "flex-row-reverse" : ""
                                    }`}
                                  >
                                    <div className="h-[44px] w-[44px] shrink-0 overflow-hidden rounded-md border border-slate-100 bg-white p-1">
                                      <img
                                        src={item.logo}
                                        alt={item.name}
                                        className="h-full w-full object-contain"
                                      />
                                    </div>
                                    <div
                                      className={`flex flex-col ${
                                        isArabic ? "text-right" : "text-left"
                                      }`}
                                    >
                                      <h4
                                        className="text-[14px] font-bold text-[#1f2937]"
                                        style={{
                                          fontFamily:
                                            '"SF Pro Text", sans-serif',
                                        }}
                                      >
                                        {item.name}
                                      </h4>
                                    </div>
                                    <div className="flex-1" />
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
                                              fontFamily:
                                                '"SF Pro Text", sans-serif',
                                            }}
                                          >
                                            {isArabic ? (
                                              <>
                                                {navMenuParagraphs.verifiedVendor.arLine1}
                                                <br />
                                                {navMenuParagraphs.verifiedVendor.arLine2}
                                              </>
                                            ) : (
                                              navMenuParagraphs.verifiedVendor.en
                                            )}
                                          </span>
                                        </>
                                      )}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Blogs Section */}
                            <div>
                              <h3
                                className={`mb-2 text-[16px] font-bold text-[#1f2937] ${isArabic ? "text-right" : ""}`}
                              >
                                {sectionLabels.blogs}
                              </h3>
                              <div className="flex flex-col gap-2">
                                {blogCardsData.map((item, idx) => (
                                  <div
                                    key={idx}
                                    className={`flex items-center gap-4 py-1.5 ${
                                      isArabic
                                        ? "flex-row-reverse text-right"
                                        : ""
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
                                          fontFamily:
                                            '"SF Pro Text", sans-serif',
                                        }}
                                      >
                                        {item.title}
                                      </h3>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* News Section */}
                            <div>
                              <h3
                                className={`mb-2 text-[16px] font-bold text-[#1f2937] ${isArabic ? "text-right" : ""}`}
                              >
                                {sectionLabels.news}
                              </h3>
                              <div className="flex flex-col gap-2">
                                {newsCardsData.map((item) => {
                                    const displayTitle = item.displayTitle;
                                    return (
                                      <div
                                        key={item.id}
                                        className={`flex items-center gap-4 py-1.5 ${
                                          isArabic
                                            ? "flex-row-reverse text-right"
                                            : ""
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
                                              fontFamily:
                                                '"SF Pro Text", sans-serif',
                                            }}
                                          >
                                            {displayTitle}
                                          </h3>
                                        </div>
                                      </div>
                                    );
                                  })}
                              </div>
                            </div>
                          </div>
                        ) : activeTab === tabLabels.subcategories ? (
                          (isArabic ? subcategoriesAr : subcategoriesEn).map(
                            (item, idx) => (
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
                            ),
                          )
                        ) : activeTab === tabLabels.products ? (
                          (isArabic ? productsDataAr : productsDataEn).map(
                            (item, idx) => (
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

                                {/* Title Area */}
                                <div
                                  className={`flex flex-col ${
                                    isArabic ? "text-right" : "text-left"
                                  }`}
                                >
                                  <h4
                                    className="text-[13px] font-semibold text-[#1f2937]"
                                    style={{
                                      fontFamily:
                                        '"SF Pro Text", sans-serif',
                                    }}
                                  >
                                    {item.title}
                                  </h4>
                                  <p
                                    className="text-[11px] font-medium text-[#0b56ff] mt-0.5 leading-tight"
                                    style={{
                                      fontFamily:
                                        '"SF Pro Text", sans-serif',
                                    }}
                                  >
                                    {item.subtitle}
                                  </p>
                                  {item.hasAI && (
                                    <div className={`mt-1.5 flex h-[18px] items-center ${isArabic ? "ml-auto" : "mr-auto"}`}>
                                      <div className="rounded-[4px] bg-[#f86d2d] px-1.5 text-[8px] font-bold text-white uppercase tracking-tight">
                                        {isArabic
                                          ? navMenuParagraphs.aiPowered?.ar || "مدعوم بالذكاء الاصطناعي"
                                          : navMenuParagraphs.aiPowered?.en || "AI Powered"}
                                      </div>
                                    </div>
                                  )}
                                </div>

                                {/* Spacer */}
                                <div className="flex-1" />

                                {/* Right Side Stack: Verified + Compare */}
                                <div className="flex flex-col items-end gap-1.5 shrink-0">
                                  {item.verified && (
                                    <div className={`flex items-center gap-1 ${isArabic ? "flex-row-reverse" : ""}`}>
                                      <img
                                        src={verifiedIcon}
                                        alt="Verified"
                                        className="h-[22px] w-[22px] object-contain"
                                      />
                                      <span
                                        className={`text-[11px] font-medium text-[#1f2937] ${
                                          isArabic ? "leading-[1.1] text-right" : ""
                                        }`}
                                        style={{ fontFamily: '"SF Pro Text", sans-serif' }}
                                      >
                                        {isArabic ? (
                                          <>
                                            {navMenuParagraphs.verifiedVendor.arLine1}
                                            <br />
                                            {navMenuParagraphs.verifiedVendor.arLine2}
                                          </>
                                        ) : (
                                          navMenuParagraphs.verifiedVendor.en
                                        )}
                                      </span>
                                    </div>
                                  )}
                                  <button className="rounded-[4px] px-3 py-1.5 text-[11px] font-medium border border-slate-200 text-slate-700 hover:bg-slate-50 transition bg-white shadow-sm" style={{ fontFamily: '"SF Pro Text", sans-serif' }}>
                                    Compare
                                  </button>
                                </div>
                              </div>
                            ),
                          )
                        ) : activeTab === tabLabels.serviceProviders ? (
                          serviceProvidersData.map((item, idx) => (
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
                                  style={{
                                    fontFamily: '"SF Pro Text", sans-serif',
                                  }}
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
                                          {navMenuParagraphs.verifiedVendor.arLine1}
                                          <br />
                                          {navMenuParagraphs.verifiedVendor.arLine2}
                                        </>
                                      ) : (
                                        navMenuParagraphs.verifiedVendor.en
                                      )}
                                    </span>
                                  </>
                                )}
                              </div>
                            </div>
                          ))
                        ) : activeTab === tabLabels.blogs ? (
                          blogCardsData.map((item, idx) => (
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
                                  style={{
                                    fontFamily: '"SF Pro Text", sans-serif',
                                  }}
                                >
                                  {item.title}
                                </h4>
                              </div>

                              {/* Spacer to push content to the left end in row-reverse Arabic */}
                              <div className="flex-1" />
                            </div>
                          ))
                        ) : (
                          newsCardsData.map((item) => {
                            const displayTitle = item.displayTitle;

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
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
  );
};

export default NavMenuSearchOverlay;
