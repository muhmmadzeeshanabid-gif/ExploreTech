import { latestNewsItems } from "../../../data/latestNews.js";
import verifiedIcon from "../../../assets/icon/verified.png";
import productLogo1 from "../../../assets/growing-network/logos/gs14qlFntB.webp";
import productLogo2 from "../../../assets/growing-network/logos/x5WsbnAfcg.jpg";
import productLogo3 from "../../../assets/growing-network/logos/121121tacit_corp_logo.jpg";
import productLogo4 from "../../../assets/growing-network/logos/160944081408prologicfirst.jpg";
import providerLogo1 from "../../../assets/growing-network/logos/115903squirrel_systems_logo.jpg";
import providerLogo2 from "../../../assets/growing-network/logos/134208dailypoint.png";
import providerLogo3 from "../../../assets/growing-network/logos/160512081225otainsight-1.jpg";
import providerLogo4 from "../../../assets/growing-network/logos/160559081243thynkcloud.jpg";
import providerLogo5 from "../../../assets/growing-network/logos/161157081536d-edge.jpg";

export const subcategoriesEn = [
  "Hospitality Purchasing Software",
  "Time and Attendance Systems",
  "Audit Services",
  "Location Solutions",
  "Security",
];

export const subcategoriesAr = [
  "برمجيات شراء الضيافة",
  "أنظمة الوقت والحضور",
  "خدمات تدقيق",
  "حلول الموقع",
  "الأمن",
];

export const searchTabsEn = [
  "All",
  "Subcategories",
  "Products",
  "Service Providers",
  "Blogs",
  "News",
];

export const searchTabsAr = [
  "الجميع",
  "الفئات الفرعية",
  "المنتجات",
  "مزودوا الخدمات",
  "المدونات",
  "الأخبار",
];

export const productsDataEn = [
  {
    title: "Personal Payments",
    subtitle: "Payment Platforms",
    logo: productLogo1,
    verified: true,
  },
  {
    title: "Electronic Payments Platform",
    subtitle: "POS System",
    logo: productLogo1,
    verified: true,
  },
  {
    title: "WiFi Guest Management",
    subtitle: "Guest Internet",
    logo: productLogo3,
    verified: true,
    hasAI: true,
  },
  {
    title: "Alliants Guest App",
    subtitle: "Contactless Hotel Solutions",
    logo: productLogo2,
    verified: true,
  },
  {
    title: "Alliants Experience Platform",
    subtitle: "Guest Experiences",
    logo: productLogo2,
    verified: true,
  },
];

export const productsDataAr = [
  {
    title: "المدفوعات الشخصية",
    subtitle: "منصات الدفع",
    logo: productLogo1,
    verified: true,
  },
  {
    title: "منصة المدفوعات الإلكترونية",
    subtitle: "نظام نقاط البيع (POS)",
    logo: productLogo1,
    verified: true,
  },
  {
    title: "WiFi Guest Management",
    subtitle: "إنترنت الضيف",
    logo: productLogo3,
    verified: true,
    hasAI: true,
  },
  {
    title: "Alliants Guest App",
    subtitle: "حلول الفندق بدون تلامس",
    logo: productLogo2,
    verified: true,
  },
  {
    title: "Alliants Experience Platform",
    subtitle: "تجارب الضيوف",
    logo: productLogo2,
    verified: true,
  },
];

export const allProductsData = [
  {
    title: "MeetingPackage Venue Sales Management",
    subtitle: "Event Management",
    logo: productLogo1,
  },
  {
    title: "Vento Specialized POS by HotelTime",
    subtitle: "Restaurant Payment Platforms & Restaurant Management Software",
    logo: productLogo2,
    hasAI: true,
    verified: true,
  },
  {
    title: "Pro-Techt System by Fiserv",
    subtitle: "Contactless Hotel Solutions",
    logo: productLogo3,
    verified: true,
  },
  {
    title: "Kwentra Point of Sale",
    subtitle: "Point of Sale (POS) System",
    logo: productLogo4,
    verified: true,
  },
  {
    title: "Hotelogix Online Booking System",
    subtitle: "Internet Booking Engine (IBE)",
    logo: providerLogo4,
    hasAI: true,
    verified: true,
  },
];

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

export const blogsDataEn = [
  { title: "Reshaping the Hospitality Industry through VR and AR" },
  { title: "Navigating the Future of Sustainable Tourism" },
];

export const newsItemTitlesAr = [
  "Paid News Check- AR",
  "Shady Brand News- AR",
  "Email Test New shady News- AR",
  "Shady News Edit- AR",
];

export const searchPanelAssets = {
  latestNewsItems,
  verifiedIcon,
};
