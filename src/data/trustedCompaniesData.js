import quoteIcon from "../assets/icon/quote.png";
import enCommon from "../i18n/locales/en/common.json";
import arCommon from "../i18n/locales/ar/common.json";

const enCards = enCommon.trustedCompanies?.cards || {};
const arCards = arCommon.trustedCompanies?.cards || {};

const slideGroups = [
  ["amitSharda", "heinrichKessler", "noraGalfi"],
  ["jeffDown", "adelAbdelMasih", "mrigankDevam"],
  ["adelAbdelMasih", "mrigankDevam", "nikkieRandhawaSingh"],
];

const arabicCardOrder = ["noraGalfi", "heinrichKessler", "amitSharda"];

const mapCard = (cards, key) => ({
  quote: cards?.[key]?.quote || "",
  author: cards?.[key]?.author || "",
  title: cards?.[key]?.title || "",
  company: cards?.[key]?.company || "",
});

export const slidesData = slideGroups.map((group) =>
  group.map((cardKey) => mapCard(enCards, cardKey)),
);

export const arabicCards = arabicCardOrder.map((cardKey) =>
  mapCard(arCards, cardKey),
);

export { quoteIcon };
