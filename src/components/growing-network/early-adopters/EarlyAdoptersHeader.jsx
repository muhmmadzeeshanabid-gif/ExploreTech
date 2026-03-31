import React from "react";
import { useTranslation } from "react-i18next";

const EarlyAdoptersHeader = ({ isArabic }) => {
  const { t } = useTranslation("common");

  return (
    <>
      <h2
        className="text-[32px] font-bold leading-[1.2] text-[#0b0b0b] md:text-[40px]"
        style={{ fontFamily: '"Space Grotesk", sans-serif' }}
      >
        {t("earlyAdopters.title")}
      </h2>
      <p
        className="mx-auto mt-4 max-w-[960px] text-[18px] font-normal leading-[27px] text-[rgb(16,24,64)]"
        style={{
          fontFamily: '"Space Grotesk", sans-serif',
          fontStyle: "normal",
          fontWeight: 400,
        }}
        dir={isArabic ? "rtl" : "ltr"}
      >
        {t("earlyAdopters.description")}
      </p>
    </>
  );
};

export default EarlyAdoptersHeader;
