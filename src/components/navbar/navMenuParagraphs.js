import enCommon from "../../i18n/locales/en/common.json";
import arCommon from "../../i18n/locales/ar/common.json";

const enNavMenu = enCommon.navMenu || {};
const arNavMenu = arCommon.navMenu || {};

export const navMenuParagraphs = {
  searchPlaceholder: {
    en: enNavMenu.searchPlaceholder || "",
    ar: arNavMenu.searchPlaceholder || "",
  },
  verifiedVendor: {
    en: enNavMenu.verifiedVendor?.label || "",
    arLine1: arNavMenu.verifiedVendor?.line1 || "",
    arLine2: arNavMenu.verifiedVendor?.line2 || "",
  },
  aiPowered: {
    en: enNavMenu.aiPowered || "",
    ar: arNavMenu.aiPowered || "",
  },
  drawerTagline: {
    en: enNavMenu.drawerTagline || "",
    ar: arNavMenu.drawerTagline || "",
  },
  viewMore: {
    en: enNavMenu.viewMore || "",
    ar: arNavMenu.viewMore || "",
  },
  searchButton: {
    en: enNavMenu.searchButton || "",
    ar: arNavMenu.searchButton || "",
  },
  compareButton: {
    en: enNavMenu.compareButton || "",
    ar: arNavMenu.compareButton || "",
  },
};
