import { useEffect, useRef, useState } from "react";
import logoEn from "../../assets/logo/Explote-Tech-Logo-Black.gif";
import logoAr from "../../assets/logo/AR-Explote-Tech-Logo-Black.gif";
import { useLanguage } from "../../context/LanguageContext.jsx";
import {
  categoriesEn,
  categoriesAr,
  categorySubmenusEn,
  categorySubmenusAr,
  resourcesEn,
  resourcesAr,
  resourceSubmenusEn,
  resourceSubmenusAr,
  menuItemClasses,
  arrowClasses,
  arabicEventsStyle,
  searchSubmitButtonClass,
} from "./navMenuData.js";
import {
  allProductsData,
  allServiceProvidersData,
  blogsDataEn,
  newsItemTitlesAr,
  productsDataAr,
  productsDataEn,
  searchPanelAssets,
  searchTabsAr,
  searchTabsEn,
  serviceProvidersData,
  subcategoriesAr,
  subcategoriesEn,
} from "./search-panel/searchPanelData.js";
import {
  clearQueryButton,
  tabScrollButtonLeft,
  tabScrollButtonRight,
  viewMoreButton,
  compareButton,
} from "./navMenuButtons.js";
import { DesktopSearchButton } from "./NavMenuButtons.jsx";
import {
  drawerMenuHeadings,
  languageLabels,
  navMenuHeadings,
  searchSectionHeadings,
  searchTabsLabels,
} from "./navMenuHeadings.js";
import { navMenuParagraphs } from "./navMenuParagraphs.js";
import {
  getBlogCardsData,
  getNewsCardsData,
} from "./search-panel/searchPanelContent.js";
import NavMenuSearchOverlay from "./NavMenuSearchOverlay.jsx";
import NavMenuDesktopLinks from "./NavMenuDesktopLinks.jsx";
import NavMenuResponsiveActions from "./NavMenuResponsiveActions.jsx";
import NavMenuDrawer from "./NavMenuDrawer.jsx";

const NavMenu = ({ onSignIn }) => {
  const { latestNewsItems, verifiedIcon } = searchPanelAssets;
  const { language, setLanguage } = useLanguage();
  const isArabic = language === "AR";
  const navLogo = language === "AR" ? logoAr : logoEn;
  const categories = language === "AR" ? categoriesAr : categoriesEn;
  const categorySubmenus =
    language === "AR" ? categorySubmenusAr : categorySubmenusEn;
  const resources = language === "AR" ? resourcesAr : resourcesEn;
  const resourceSubmenus =
    language === "AR" ? resourceSubmenusAr : resourceSubmenusEn;
  const drawerResources = resourcesEn;

  const [searchOpen, setSearchOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerSection, setDrawerSection] = useState(null);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [query, setQuery] = useState("");

  const labels = isArabic ? navMenuHeadings.ar : navMenuHeadings.en;
  const drawerLabels = isArabic ? drawerMenuHeadings.ar : drawerMenuHeadings.en;
  const tabLabels = isArabic ? searchTabsLabels.ar : searchTabsLabels.en;
  const sectionLabels = isArabic
    ? searchSectionHeadings.ar
    : searchSectionHeadings.en;

  const blogCardsData = getBlogCardsData(blogsDataEn, latestNewsItems);
  const newsCardsData = getNewsCardsData(
    latestNewsItems,
    newsItemTitlesAr,
    isArabic,
  );

  const [activeTab, setActiveTab] = useState(tabLabels.news);
  const [isSearching, setIsSearching] = useState(false);

  const panelRef = useRef(null);
  const inputRef = useRef(null);
  const mobileLanguageRef = useRef(null);
  const tabsRef = useRef(null);

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

  const scrollTabs = (direction) => {
    if (!tabsRef.current) return;

    const scrollAmount =
      150 *
      (isArabic
        ? direction === "left"
          ? 1
          : -1
        : direction === "left"
          ? -1
          : 1);

    tabsRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
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
    if (!query) {
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const timeout = setTimeout(() => {
      setIsSearching(false);
    }, 4500);

    return () => clearTimeout(timeout);
  }, [query]);

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
        <DesktopSearchButton onClick={() => setSearchOpen(true)} />
        <NavMenuDesktopLinks
          language={language}
          isArabic={isArabic}
          labels={labels}
          categories={categories}
          categorySubmenus={categorySubmenus}
          resources={resources}
          resourceSubmenus={resourceSubmenus}
          menuItemClasses={menuItemClasses}
          arrowClasses={arrowClasses}
          arabicEventsStyle={arabicEventsStyle}
        />
      </div>

      <NavMenuResponsiveActions
        language={language}
        onSignIn={onSignIn}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenDrawer={() => setDrawerOpen(true)}
      />

      <NavMenuSearchOverlay
        searchOpen={searchOpen}
        panelRef={panelRef}
        inputRef={inputRef}
        tabsRef={tabsRef}
        language={language}
        isArabic={isArabic}
        query={query}
        setQuery={setQuery}
        hasQuery={hasQuery}
        searchSubmitButtonClass={searchSubmitButtonClass}
        clearQuery={clearQuery}
        clearQueryButton={clearQueryButton}
        tabScrollButtonLeft={tabScrollButtonLeft}
        tabScrollButtonRight={tabScrollButtonRight}
        scrollTabs={scrollTabs}
        searchTabsAr={searchTabsAr}
        searchTabsEn={searchTabsEn}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isSearching={isSearching}
        viewMoreButton={viewMoreButton}
        tabLabels={tabLabels}
        sectionLabels={sectionLabels}
        subcategoriesAr={subcategoriesAr}
        subcategoriesEn={subcategoriesEn}
        allProductsData={allProductsData}
        verifiedIcon={verifiedIcon}
        navMenuParagraphs={navMenuParagraphs}
        compareButton={compareButton}
        allServiceProvidersData={allServiceProvidersData}
        blogCardsData={blogCardsData}
        newsCardsData={newsCardsData}
        productsDataAr={productsDataAr}
        productsDataEn={productsDataEn}
        serviceProvidersData={serviceProvidersData}
      />

      <NavMenuDrawer
        drawerOpen={drawerOpen}
        closeDrawer={closeDrawer}
        isArabic={isArabic}
        navLogo={navLogo}
        navMenuParagraphs={navMenuParagraphs}
        drawerSection={drawerSection}
        toggleDrawerSection={toggleDrawerSection}
        drawerLabels={drawerLabels}
        categories={categories}
        drawerResources={drawerResources}
        mobileLanguageRef={mobileLanguageRef}
        languageOpen={languageOpen}
        setLanguageOpen={setLanguageOpen}
        handleLanguageSelect={handleLanguageSelect}
        languageLabels={languageLabels}
        language={language}
      />
    </div>
  );
};

export default NavMenu;
