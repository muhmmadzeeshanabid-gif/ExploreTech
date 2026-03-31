import React from "react";
import { useTranslation } from "react-i18next";

const AgreementText = ({ isArabic }) => {
  const { t } = useTranslation("common");

  return (
    <span dir={isArabic ? "rtl" : "ltr"}>
      {t("newsletter.agreementPrefix")} {" "}
      <span className="font-normal text-white underline decoration-white decoration-1 underline-offset-2">
        {t("newsletter.privacyPolicy")}
      </span>
    </span>
  );
};

export default AgreementText;
