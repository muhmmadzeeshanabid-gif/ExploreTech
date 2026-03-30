// ============================================================================
// NAVBAR MENU BUTTONS - All button configurations and styles
// ============================================================================

// Search Button - Desktop (Large)
// Used in: Desktop navigation bar for opening search panel
export const searchButtonDesktop = {
  label: "Search",
  icon: "Search",
  className:
    "flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-slate-200 text-[#14c439] shadow-sm",
  iconProps: { size: 28, strokeWidth: 2.5 },
  ariaLabel: "Search",
  type: "button",
};

// Search Button - Tablet (Medium)
// Used in: Tablet/medium screen sizes for opening search panel
export const searchButtonTablet = {
  label: "Search",
  icon: "Search",
  className:
    "flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-[#14c439] shadow-sm",
  iconProps: { size: 20, strokeWidth: 2.5 },
  ariaLabel: "Search",
  type: "button",
};

// Search Button - Mobile (Small)
// Used in: Mobile screens for opening search panel
export const searchButtonMobile = {
  label: "Search",
  icon: "Search",
  className:
    "flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-[#14c439] shadow-sm",
  iconProps: { size: 20, strokeWidth: 2.5 },
  ariaLabel: "Search",
  type: "button",
};

// Sign In / Sign Up Button - Desktop
// Used in: Tablet size for initiating authentication
export const signInButtonTablet = {
  label: (language) =>
    language === "AR" ? "التوقيع في السجل" : "Sign In/ Sign Up",
  className:
    "inline-flex h-9 items-center justify-center whitespace-nowrap rounded-lg bg-[#0b56ff] px-4 text-[10px] font-semibold uppercase tracking-wide !text-white shadow-sm min-[370px]:px-5 min-[370px]:text-[11px]",
  style: { fontFamily: '"Space Grotesk", sans-serif' },
  ariaLabel: "Sign In",
  type: "button",
};

// Sign In / Sign Up Button - Mobile
// Used in: Mobile screens for initiating authentication
export const signInButtonMobile = {
  label: (language) =>
    language === "AR" ? "التوقيع في السجل" : "Sign In/ Sign Up",
  className:
    "inline-flex h-9 items-center justify-center whitespace-nowrap rounded-lg bg-[#0b56ff] px-4 text-[10px] font-semibold uppercase tracking-wide !text-white shadow-sm min-[370px]:px-5 min-[370px]:text-[11px]",
  style: { fontFamily: '"Space Grotesk", sans-serif' },
  ariaLabel: "Sign In",
  type: "button",
};

// Menu Button (Drawer Toggle) - Tablet
// Used in: Tablet/medium screens for opening mobile drawer menu
export const menuButtonTablet = {
  label: "Open menu",
  icon: "Menu",
  className:
    "flex h-9 w-9 items-center justify-center rounded-lg text-slate-900",
  iconProps: { size: 24, strokeWidth: 2.3 },
  ariaLabel: "Open menu",
  type: "button",
};

// Menu Button (Drawer Toggle) - Mobile
// Used in: Mobile screens for opening mobile drawer menu
export const menuButtonMobile = {
  label: "Open menu",
  icon: "Menu",
  className:
    "flex h-9 w-9 items-center justify-center rounded-lg text-slate-900",
  iconProps: { size: 24, strokeWidth: 2.3 },
  ariaLabel: "Open menu",
  type: "button",
};

// Search Panel Submit Button
// Used in: Search panel for submitting search query
export const searchSubmitButton = {
  label: "Search",
  className:
    "h-[37px] min-w-[79.1125px] rounded-[4px] bg-[#0055FE] px-4 text-[10px] font-medium leading-[15px] text-white transition sm:px-4 sm:text-[14px] sm:leading-[21px]",
  style: { fontFamily: '"SF Pro Text", sans-serif' },
  ariaLabel: "Submit search",
  type: "button",
  disabled: false, // Will be conditionally set based on query length
  shadowClass: "shadow-[0_10px_24px_-12px_rgba(11,86,255,0.65)]",
};

// Clear Query Button
// Used in: Search panel for clearing the search input
export const clearQueryButton = {
  label: "Clear search",
  icon: "X",
  className:
    "p-2 text-slate-400 transition-opacity duration-150 hover:text-slate-600",
  iconProps: { size: 20, strokeWidth: 2.5 },
  ariaLabel: "Clear search",
  type: "button",
};

// Search Tab Buttons
// Used in: Search results section for filtering results by category
export const searchTabButtonConfig = {
  baseClass:
    "relative py-4 shrink-0 w-1/2 sm:w-auto text-[13px] font-semibold transition-colors sm:text-[14px]",
  activeClass: "text-[#0b56ff]",
  inactiveClass: "text-slate-500 hover:text-slate-700",
  indicatorClass:
    "absolute bottom-0 left-0 h-[3px] w-full rounded-full bg-[#0b56ff]",
};

// Tab Scroll Navigation Buttons (Mobile)
// Used in: Mobile search panel for scrolling through tabs
export const tabScrollButtonLeft = {
  label: "Scroll left",
  icon: "arrow-left",
  className:
    "block sm:hidden shrink-0 pr-2 text-slate-400 transition hover:text-[#0b56ff]",
  iconHTML: '<i className="bi bi-arrow-left text-[18px]"></i>',
  ariaLabel: "Scroll tab list left",
  type: "button",
};

export const tabScrollButtonRight = {
  label: "Scroll right",
  icon: "arrow-right",
  className:
    "block sm:hidden shrink-0 pl-2 text-slate-400 transition hover:text-[#0b56ff]",
  iconHTML: '<i className="bi bi-arrow-right text-[18px]"></i>',
  ariaLabel: "Scroll tab list right",
  type: "button",
};

// View More Button (Desktop)
// Used in: Desktop search panel for viewing more results
export const viewMoreButton = {
  label: (language) => (language === "AR" ? "View More" : "View More"),
  className:
    "hidden sm:block text-[13px] shrink-0 font-semibold text-[#0b56ff] hover:underline",
  style: { fontFamily: '"SF Pro Text", sans-serif' },
  ariaLabel: "View more results",
  type: "button",
};

// Compare Button
// Used in: Search results for adding items to comparison
export const compareButton = {
  label: "Compare",
  className:
    "rounded-[4px] border border-slate-200 px-4 py-1.5 text-[12px] font-medium text-slate-500 transition hover:bg-slate-50",
  style: { fontFamily: '"SF Pro Text", sans-serif' },
  ariaLabel: "Add to comparison",
  type: "button",
};

// Close Search Panel Button
// Used in: Search panel overlay for closing the search
export const closeSearchButton = {
  icon: "X",
  className: "mt-1 rounded-md p-2 text-white",
  iconProps: { size: 28, strokeWidth: 2.4 },
  ariaLabel: "Close search panel",
  type: "button",
};

// Close Drawer Button
// Used in: Mobile drawer menu for closing the drawer
export const closeDrawerButton = {
  icon: "X",
  className: "rounded-md p-2 text-white",
  iconProps: { size: 28, strokeWidth: 2.4 },
  ariaLabel: "Close menu",
  type: "button",
};

// Drawer Menu Items (Expandable/Collapsible)
// Used in: Mobile drawer for category and resource sections
export const drawerItemConfig = {
  expandedClass: "text-[#18c443]",
  collapsedClass: "text-white",
  borderClass: "border-b border-[#18c443]",
  paddingClass: "py-4",
  fontStyle: {
    fontFamily: '"SF Pro Text", sans-serif',
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "24px",
    color: "rgb(214, 245, 220)",
  },
};

// Drawer Sub-Item
// Used in: Drawer expanded sections for sub-menu items
export const drawerSubItemConfig = {
  baseClass:
    "flex w-full items-center justify-between border-t border-white/15 py-4",
  fontStyle: {
    fontFamily: '"SF Pro Text", sans-serif',
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "24px",
    color: "rgb(215, 245, 222)",
  },
};

// Language Toggle Button (Desktop)
// Used in: Drawer for switching between EN and AR
export const languageToggleButton = {
  icon: "Globe",
  className: "inline-flex items-center gap-2",
  iconProps: { size: 16 },
  ariaLabel: "Toggle language",
  type: "button",
  style: {
    fontFamily: '"SF Pro Text", sans-serif',
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "13px",
    lineHeight: "20px",
  },
};

// Language Option Button (in dropdown)
// Used in: Language dropdown for selecting English or Arabic
export const languageOptionButton = {
  baseClass:
    "w-full px-5 py-[10px] text-left transition-colors hover:bg-[#eef2f7]",
  style: {
    fontFamily: '"SF Pro Text", sans-serif',
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "13px",
    lineHeight: "20px",
    color: "rgb(87, 106, 160)",
  },
  type: "button",
};

// Categories Dropdown Toggle Button
// Used in: Desktop navigation for toggling categories menu
export const categoriesDropdownButton = {
  label: (language) => (language === "AR" ? "الفئات" : "Categories"),
  className:
    "text-sm font-medium tracking-wide uppercase text-slate-700 transition-colors group-hover:text-[#0b56ff]",
  ariaLabel: "Toggle categories dropdown",
  type: "link",
};

// Resources Dropdown Toggle Button
// Used in: Desktop navigation for toggling resources menu
export const resourcesDropdownButton = {
  label: (language) => (language === "AR" ? "الموارد" : "Resources"),
  className:
    "text-sm font-medium tracking-wide uppercase text-slate-700 transition-colors group-hover:text-[#0b56ff]",
  ariaLabel: "Toggle resources dropdown",
  type: "link",
};

// Navigation Link Buttons (Desktop)
// Used in: Desktop navigation bar for main menu items
export const navLinkButtons = [
  {
    label: (language) => (language === "AR" ? "الفئات" : "Categories"),
    href: "#",
    type: "dropdown",
    icon: "ChevronRight",
  },
  {
    label: (language) => (language === "AR" ? "المنتجات" : "Products"),
    href: "#",
    type: "link",
  },
  {
    label: (language) => (language === "AR" ? "مزودوا الخدمات" : "Vendors"),
    href: "#",
    type: "link",
  },
  {
    label: (language) =>
      language === "AR" ? "خدمات استشارية" : "Advisory Services",
    href: "#",
    type: "link",
  },
  {
    label: (language) => (language === "AR" ? "الموارد" : "Resources"),
    href: "#",
    type: "dropdown",
    icon: "ChevronRight",
  },
  {
    label: (language) => (language === "AR" ? "الأحداث" : "Events"),
    href: "#",
    type: "link",
  },
  {
    label: (language) => (language === "AR" ? "اتصل بنا" : "Contact Us"),
    href: "#",
    type: "link",
  },
];

// Dropdown Item Button
// Used in: Category and resources dropdowns
export const dropdownItemButton = {
  baseClass:
    "flex items-center justify-between border-b border-slate-100 px-5 py-1.5 text-[14px] font-medium text-slate-700 transition-colors last:border-b-0 hover:bg-slate-50 hover:text-[#0b56ff]",
  arrowClass: "h-4 w-4 text-slate-600",
  arrowStrokeWidth: 2.4,
  type: "link",
};

// ============================================================================
// BUTTON ACTIONS & HANDLERS
// ============================================================================

// Search button actions
export const searchButtonActions = {
  onClick: "(setSearchOpen) => () => setSearchOpen(true)",
  description: "Opens the search panel overlay",
};

// Toggle drawer menu
export const toggleDrawerActions = {
  onClick: "(setDrawerOpen) => () => setDrawerOpen(true)",
  description: "Opens the mobile drawer menu",
};

// Close drawer menu
export const closeDrawerActions = {
  onClick: "(closeDrawer) => closeDrawer",
  description: "Closes the mobile drawer menu",
};

// Language toggle
export const languageToggleActions = {
  onClick: "(setLanguageOpen) => (current) => !current",
  description: "Toggles language dropdown visibility",
};

// Select language
export const selectLanguageActions = {
  onClick:
    "(setLanguage, setLanguageOpen, closeDrawer) => (code) => { setLanguage(code); setLanguageOpen(false); if(drawerOpen) closeDrawer(); }",
  description: "Changes language and closes dropdowns",
};

// Tab navigation
export const tabNavigationActions = {
  onClick: "(setActiveTab) => (tab) => setActiveTab(tab)",
  description: "Changes active search results tab",
};

// Scroll tabs
export const scrollTabsActions = {
  scrollLeft:
    "(tabsRef, isArabic) => { scrollAmount = 150 * (isArabic ? 1 : -1); tabsRef.current?.scrollBy({left: scrollAmount, behavior: 'smooth'}); }",
  scrollRight:
    "(tabsRef, isArabic) => { scrollAmount = 150 * (isArabic ? -1 : 1); tabsRef.current?.scrollBy({left: scrollAmount, behavior: 'smooth'}); }",
  description: "Scrolls tab list horizontally on mobile",
};

// ============================================================================
// BUTTON STATE MANAGEMENT
// ============================================================================

export const buttonStates = {
  searchSubmit: {
    disabled: "(hasQuery) => !hasQuery",
    opacityClass:
      "(hasQuery) => hasQuery ? 'opacity-100' : 'cursor-not-allowed opacity-50/70'",
  },
  clearQuery: {
    hidden: "(hasQuery) => !hasQuery",
    visibility: "(hasQuery) => hasQuery ? 'visible' : 'hidden'",
  },
  tabButton: {
    active: "(activeTab, tab) => activeTab === tab",
    color:
      "(activeTab, tab) => activeTab === tab ? 'text-[#0b56ff]' : 'text-slate-500 hover:text-slate-700'",
  },
};
