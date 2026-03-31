import { ChevronLeft, ChevronRight, Menu, Search, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  searchButtonDesktop,
  searchButtonTablet,
  searchButtonMobile,
  menuButtonTablet,
  menuButtonMobile,
  signInButtonTablet,
  signInButtonMobile,
  searchSubmitButton,
  clearQueryButton,
  viewMoreButton,
  tabScrollButtonLeft,
  tabScrollButtonRight,
  compareButton,
} from "./navMenuButtons.js";
import { searchSubmitButtonClass } from "./navMenuData.js";

// ============================================================================
// NAVMENU BUTTON COMPONENTS
// Each button is extracted into modular components for easier maintenance.
// ============================================================================

export const DesktopSearchButton = ({ onClick }) => (
  <button
    className={searchButtonDesktop.className}
    aria-label={searchButtonDesktop.ariaLabel}
    type={searchButtonDesktop.type}
    onClick={onClick}
  >
    <Search className="h-[28px] w-[28px]" strokeWidth={2.5} />
  </button>
);

export const TabletSearchButton = ({ onClick }) => (
  <button
    className={searchButtonTablet.className}
    aria-label={searchButtonTablet.ariaLabel}
    type={searchButtonTablet.type}
    onClick={onClick}
  >
    <Search className="h-5 w-5" strokeWidth={2.5} />
  </button>
);

export const MobileSearchButton = ({ onClick }) => (
  <button
    className={searchButtonMobile.className}
    aria-label={searchButtonMobile.ariaLabel}
    type={searchButtonMobile.type}
    onClick={onClick}
  >
    <Search className="h-5 w-5" strokeWidth={2.5} />
  </button>
);

export const TabletSignInButton = ({ onSignIn }) => {
  const { t } = useTranslation("common");
  const label = `${t("navbar.signIn")} / ${t("navbar.signUp")}`;

  return (
    <a
      href="#"
      className={signInButtonTablet.className}
      style={signInButtonTablet.style}
      onClick={(event) => {
        if (!onSignIn) return;
        event.preventDefault();
        onSignIn();
      }}
    >
      {label}
    </a>
  );
};

export const MobileSignInButton = ({ onSignIn }) => {
  const { t } = useTranslation("common");
  const label = `${t("navbar.signIn")} / ${t("navbar.signUp")}`;

  return (
    <a
      href="#"
      className={signInButtonMobile.className}
      style={signInButtonMobile.style}
      onClick={(event) => {
        if (!onSignIn) return;
        event.preventDefault();
        onSignIn();
      }}
    >
      {label}
    </a>
  );
};

export const TabletMenuButton = ({ onClick }) => (
  <button
    className={menuButtonTablet.className}
    aria-label={menuButtonTablet.ariaLabel}
    type={menuButtonTablet.type}
    onClick={onClick}
  >
    <Menu className="h-6 w-6" strokeWidth={2.3} />
  </button>
);

export const MobileMenuButton = ({ onClick }) => (
  <button
    className={menuButtonMobile.className}
    aria-label={menuButtonMobile.ariaLabel}
    type={menuButtonMobile.type}
    onClick={onClick}
  >
    <Menu className="h-6 w-6" strokeWidth={2.3} />
  </button>
);

export const SearchPanelSubmitButton = ({ hasQuery }) => {
  const { t } = useTranslation("common");
  const className = `order-3 ml-2 ${searchSubmitButtonClass} ${
    hasQuery ? "opacity-100" : "cursor-not-allowed opacity-50"
  }`;
  return (
    <button
      type="button"
      disabled={!hasQuery}
      className={className}
      style={searchSubmitButton.style}
      aria-label={searchSubmitButton.ariaLabel}
    >
      {t("navMenu.searchButton")}
    </button>
  );
};

export const SearchPanelClearButton = ({ onClear, language }) => (
  <button
    type="button"
    className={`order-2 shrink-0 p-2 text-slate-400 transition-opacity duration-150 hover:text-slate-600 group-hover:opacity-100 group-focus-within:opacity-100 ${
      language === "AR" ? "opacity-100 sm:order-1" : "opacity-0 sm:opacity-0"
    }`}
    onClick={onClear}
    aria-label={clearQueryButton.ariaLabel}
  >
    <X className="h-5 w-5" strokeWidth={2.5} />
  </button>
);

export const ViewMoreTab = () => {
  const { t } = useTranslation("common");

  return (
    <button
      className={viewMoreButton.className}
      style={viewMoreButton.style}
      aria-label={viewMoreButton.ariaLabel}
    >
      {t("navMenu.viewMore")}
    </button>
  );
};

export const TabScrollButton = ({ direction, onClick }) => {
  if (direction === "left") {
    return (
      <button
        className={tabScrollButtonLeft.className}
        aria-label={tabScrollButtonLeft.ariaLabel}
        type={tabScrollButtonLeft.type}
        onClick={onClick}
        dangerouslySetInnerHTML={{ __html: tabScrollButtonLeft.iconHTML }}
      />
    );
  }
  return (
    <button
      className={tabScrollButtonRight.className}
      aria-label={tabScrollButtonRight.ariaLabel}
      type={tabScrollButtonRight.type}
      onClick={onClick}
      dangerouslySetInnerHTML={{ __html: tabScrollButtonRight.iconHTML }}
    />
  );
};

export const CompareItemButton = () => {
  const { t } = useTranslation("common");

  return (
    <button
      className={compareButton.className}
      style={compareButton.style}
      aria-label={compareButton.ariaLabel}
      type={compareButton.type}
    >
      {t("navMenu.compareButton")}
    </button>
  );
};
