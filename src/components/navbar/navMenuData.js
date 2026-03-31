import enCommon from "../../i18n/locales/en/common.json";
import arCommon from "../../i18n/locales/ar/common.json";

const enNavMenu = enCommon.navMenu || {};
const arNavMenu = arCommon.navMenu || {};

const buildOrderedItems = (localeNavMenu, orderKey, valuesKey) => {
  const order = localeNavMenu?.[orderKey] || [];
  const values = localeNavMenu?.[valuesKey] || {};

  return order.map((itemKey) => values?.[itemKey] || "");
};

const buildSubmenuMap = (localeNavMenu, orderKey, valuesKey, submenuKey) => {
  const order = localeNavMenu?.[orderKey] || [];
  const values = localeNavMenu?.[valuesKey] || {};
  const submenus = localeNavMenu?.[submenuKey] || {};

  return order.reduce((accumulator, itemKey) => {
    const label = values?.[itemKey] || "";
    if (!label) {
      return accumulator;
    }

    accumulator[label] = submenus?.[itemKey] || [];
    return accumulator;
  }, {});
};

export const categoriesEn = buildOrderedItems(
  enNavMenu,
  "menuCategoriesOrder",
  "menuCategories",
);

export const categoriesAr = buildOrderedItems(
  arNavMenu,
  "menuCategoriesOrder",
  "menuCategories",
);

export const categorySubmenusEn = buildSubmenuMap(
  enNavMenu,
  "menuCategoriesOrder",
  "menuCategories",
  "menuCategorySubmenus",
);

export const categorySubmenusAr = buildSubmenuMap(
  arNavMenu,
  "menuCategoriesOrder",
  "menuCategories",
  "menuCategorySubmenus",
);

export const resourcesEn = buildOrderedItems(
  enNavMenu,
  "resourceItemsOrder",
  "resourceItems",
);

export const resourcesAr = buildOrderedItems(
  arNavMenu,
  "resourceItemsOrder",
  "resourceItems",
);

export const resourceSubmenusEn = buildSubmenuMap(
  enNavMenu,
  "resourceItemsOrder",
  "resourceItems",
  "resourceSubmenus",
);

export const resourceSubmenusAr = buildSubmenuMap(
  arNavMenu,
  "resourceItemsOrder",
  "resourceItems",
  "resourceSubmenus",
);

export const menuItemClasses =
  "flex items-center justify-between border-b border-slate-100 px-5 py-1 text-[14px] font-medium text-slate-700 transition-colors last:border-b-0 hover:bg-slate-50 hover:text-[#0b56ff]";

export const arrowClasses =
  "h-4 w-4 text-slate-600 transition-colors group-hover/sub:text-[#0b56ff]";

export const arabicEventsStyle = {
  fontFamily: '"SF Pro Text", sans-serif',
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "18px",
  lineHeight: "27px",
  color: "rgb(105, 111, 140)",
};

export const searchSubmitButtonClass =
  "h-[37px] min-w-[79.1125px] rounded-[4px] bg-[#0055FE] px-4 text-[10px] font-medium leading-[15px] text-white transition sm:px-4 sm:text-[14px] sm:leading-[21px]";
