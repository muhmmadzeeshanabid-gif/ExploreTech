export const getSearchPlaceholder = (isArabic, navMenuParagraphs) =>
  isArabic
    ? navMenuParagraphs.searchPlaceholder.ar
    : navMenuParagraphs.searchPlaceholder.en;

export const getBlogCardsData = (blogsDataEn, latestNewsItems) => [
  {
    title: blogsDataEn[0]?.title,
    image: latestNewsItems[0]?.image,
  },
  {
    title: blogsDataEn[1]?.title,
    image: latestNewsItems[1]?.image,
  },
];

export const getNewsCardsData = (latestNewsItems, newsItemTitlesAr, isArabic) =>
  latestNewsItems.slice(0, 4).map((item, idx) => ({
    ...item,
    displayTitle: (isArabic && newsItemTitlesAr[idx]) || item.title,
  }));
