export const getConnectSectionContent = (t) => ({
  title: t("connect.title"),
  subtitle: t("connect.subtitle"),
  imageAlt: t("connect.imageAlt"),
  blocks: [
    {
      title: t("connect.vendorsTitle"),
      description: t("connect.vendorsDescription"),
      cta: t("connect.vendorsCta"),
    },
    {
      title: t("connect.expertsTitle"),
      description: t("connect.expertsDescription"),
      cta: t("connect.expertsCta"),
    },
    {
      title: t("connect.supportTitle"),
      description: t("connect.supportDescription"),
      cta: t("connect.supportCta"),
    },
  ],
});

