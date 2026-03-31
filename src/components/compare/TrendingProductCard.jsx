import React from "react";
import { useTranslation } from "react-i18next";
import verifiedIcon from "../../assets/status/verified.webp";
import unverifiedIcon from "../../assets/status/unverified.webp";

const TrendingProductCard = ({ product, style, isMobile }) => {
  const { t } = useTranslation("common");

  return (
    <div
      className="absolute flex flex-col rounded-xl bg-white shadow-md cursor-pointer overflow-hidden transition-all duration-700 ease-in-out"
      style={{
        width: isMobile ? "160px" : "220px",
        height: isMobile ? "240px" : "350px",
        left: "50%",
        ...style,
      }}
    >
      {product.aiPowered && (
        <p className="ribbon ribon-orange">{t("compare.aiPowered")}</p>
      )}

      <div className="h-full flex flex-col justify-between text-center">
        <div className="p-4 flex flex-col items-center">
          <img
            src={product.logo}
            alt={product.name}
            loading="lazy"
            className="w-[90px] h-[29px] md:w-[180px] md:h-[58px] object-contain md:p-2 mb-1"
          />
          <p className="text-xs md:text-base font-semibold mt-1">
            {product.name}
          </p>

          <div className="flex flex-col items-center my-1 md:my-2">
            <img
              src={product.status === "verified" ? verifiedIcon : unverifiedIcon}
              alt={product.status === "verified" ? "Verified" : "Unverified"}
              loading="lazy"
              className="w-[21px] h-[25px] md:w-[42px] md:h-[50px] mb-1"
            />
            <span className={`${product.status === "verified" ? "text-green-600" : "text-[#FF0000]"} text-xs font-medium`}>
              {product.status === "verified"
                ? t("compare.vendorVerified")
                : t("compare.unverified")}
            </span>
          </div>
        </div>

        <div className="text-[10px] md:text-sm text-gray-700 bg-[#EDEDED] p-2 md:p-4 md:mt-auto rounded-b-xl text-center">
          <p>
            <span className="font-bold">{t("compare.category")}</span>
          </p>
          <p>{product.category}</p>
          <p>
            <span className="font-bold">{t("compare.subcategory")}</span>
          </p>
          <p>{product.subCategory}</p>
        </div>
      </div>
    </div>
  );
};

export default TrendingProductCard;
