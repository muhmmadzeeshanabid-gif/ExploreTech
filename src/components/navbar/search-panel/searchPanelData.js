import { latestNewsItems } from "../../../data/latestNews.js";
import verifiedIcon from "../../../assets/icon/verified.png";
import enCommon from "../../../i18n/locales/en/common.json";
import arCommon from "../../../i18n/locales/ar/common.json";
import productLogo1 from "../../../assets/growing-network/logos/gs14qlFntB.webp";
import productLogo2 from "../../../assets/growing-network/logos/x5WsbnAfcg.jpg";
import productLogo3 from "../../../assets/growing-network/logos/121121tacit_corp_logo.jpg";
import productLogo4 from "../../../assets/growing-network/logos/160944081408prologicfirst.jpg";
import providerLogo1 from "../../../assets/growing-network/logos/115903squirrel_systems_logo.jpg";
import providerLogo2 from "../../../assets/growing-network/logos/134208dailypoint.png";
import providerLogo3 from "../../../assets/growing-network/logos/160512081225otainsight-1.jpg";
import providerLogo4 from "../../../assets/growing-network/logos/160559081243thynkcloud.jpg";
import providerLogo5 from "../../../assets/growing-network/logos/161157081536d-edge.jpg";

const enSearchPanel = enCommon.searchPanel;
const arSearchPanel = arCommon.searchPanel;

const subcategoryKeys = [
  "hospitalityPurchasingSoftware",
  "timeAndAttendanceSystems",
  "auditServices",
  "locationSolutions",
  "security",
];

const searchTabKeys = [
  "all",
  "subcategories",
  "products",
  "serviceProviders",
  "blogs",
  "news",
];

const productKeys = [
  "personalPayments",
  "electronicPaymentsPlatform",
  "wifiGuestManagement",
  "alliantsGuestApp",
  "alliantsExperiencePlatform",
];

const allProductKeys = [
  "meetingPackageVenueSalesManagement",
  "ventoSpecializedPosByHotelTime",
  "proTechtSystemByFiserv",
  "kwentraPointOfSale",
  "hotelogixOnlineBookingSystem",
];

const blogKeys = [
  "reshapingHospitalityIndustryThroughVrAndAr",
  "navigatingFutureSustainableTourism",
];

const productVisuals = {
  personalPayments: { logo: productLogo1, verified: true },
  electronicPaymentsPlatform: { logo: productLogo1, verified: true },
  wifiGuestManagement: { logo: productLogo3, verified: true, hasAI: true },
  alliantsGuestApp: { logo: productLogo2, verified: true },
  alliantsExperiencePlatform: { logo: productLogo2, verified: true },
};

const allProductVisuals = {
  meetingPackageVenueSalesManagement: { logo: productLogo1 },
  ventoSpecializedPosByHotelTime: { logo: productLogo2, hasAI: true, verified: true },
  proTechtSystemByFiserv: { logo: productLogo3, verified: true },
  kwentraPointOfSale: { logo: productLogo4, verified: true },
  hotelogixOnlineBookingSystem: { logo: providerLogo4, hasAI: true, verified: true },
};

const mapProducts = (localeSearchPanel) =>
  productKeys.map((key) => ({
    title: localeSearchPanel.products?.[key]?.title || "",
    subtitle: localeSearchPanel.products?.[key]?.subtitle || "",
    ...productVisuals[key],
  }));

const mapAllProducts = (localeSearchPanel) =>
  allProductKeys.map((key) => ({
    title: localeSearchPanel.allProducts?.[key]?.title || "",
    subtitle: localeSearchPanel.allProducts?.[key]?.subtitle || "",
    ...allProductVisuals[key],
  }));

export const subcategoriesEn = subcategoryKeys.map(
  (key) => enSearchPanel.subcategories?.[key] || "",
);

export const subcategoriesAr = subcategoryKeys.map(
  (key) => arSearchPanel.subcategories?.[key] || "",
);

export const searchTabsEn = searchTabKeys.map(
  (key) => enSearchPanel.tabs?.[key] || "",
);

export const searchTabsAr = searchTabKeys.map(
  (key) => arSearchPanel.tabs?.[key] || "",
);

export const productsDataEn = mapProducts(enSearchPanel);

export const productsDataAr = mapProducts(arSearchPanel);

export const allProductsDataEn = mapAllProducts(enSearchPanel);

export const allProductsDataAr = mapAllProducts(arSearchPanel);

export const allProductsData = allProductsDataEn;

export const serviceProvidersData = [
  { name: "Hosdu", logo: providerLogo1, verified: true },
  { name: "Hotel Benchmark", logo: providerLogo2, verified: true },
  { name: "Hotellab", logo: providerLogo3, verified: true },
  { name: "Hotelogix", logo: providerLogo4, verified: true },
  { name: "Hotelway", logo: providerLogo5, verified: true },
];

export const allServiceProvidersData = [
  { name: "Viralops Company", logo: providerLogo3, verified: true },
];

export const blogsDataEn = blogKeys.map((key) => ({
  title: enSearchPanel.blogs?.[key] || "",
}));

export const newsItemTitlesAr = arSearchPanel.newsItemTitles || [];

export const searchPanelAssets = {
  latestNewsItems,
  verifiedIcon,
};
