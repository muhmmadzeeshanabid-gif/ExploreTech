import React from "react";
import { verifiedIcon } from "../../../data/growingNetworkSliderData.js";
import { UnverifiedIcon } from "./SliderIcons.jsx";

const VendorCard = ({ vendor, isArabic, onMouseEnter, onMouseLeave }) => (
  <article
    className="flex w-full min-w-[100vw] snap-center justify-center sm:min-w-[356px] sm:w-auto sm:snap-align-none"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <div className="group flex h-[143.1px] w-[300px] min-w-[300px] flex-col justify-start rounded-[8px] border border-[#d9def2] bg-white px-5 py-4 shadow-[0_12px_30_rgba(15,23,42,0.35)] transition duration-300 ease-out hover:shadow-[0_18px_40px_-22px_rgba(15,23,42,0.42)]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-[58px] w-[82px] items-center justify-center rounded-[6px] border border-[#edf0fb] bg-white">
          <img
            src={vendor.logo}
            alt={`${vendor.name} logo`}
            className="h-full w-full object-contain p-1"
          />
        </div>

        <div className="flex flex-col items-center gap-2 text-center">
          {vendor.status === "verified" ? (
            <img src={verifiedIcon} alt="Verified" className="h-8 w-8 object-contain" />
          ) : (
            <UnverifiedIcon className="h-8 w-8 text-black" />
          )}
          <span
            className="text-[12px] font-normal leading-[18px] tracking-normal text-[#101840]"
            style={{
              fontFamily: '"SF Pro Text", sans-serif',
              fontWeight: 400,
            }}
          >
            {vendor.status === "verified"
              ? isArabic
                ? "تم التحقق من البائع"
                : "Vendor Verified"
              : isArabic
                ? "لم يتم التحقق منها"
                : "Unverified"}
          </span>
        </div>
      </div>

      <div className="mt-2">
        <p
          className="text-[16px] font-medium leading-[21px] tracking-normal text-[#101840]"
          style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 500,
          }}
        >
          {vendor.name}
        </p>
        <p
          className="mt-0.5 text-[11px] font-normal leading-[16.5px] tracking-normal text-[#696F8C]"
          style={{
            fontFamily: '"SF Pro Text", sans-serif',
            fontWeight: 400,
          }}
        >
          {vendor.category}
        </p>
      </div>
    </div>
  </article>
);

export default VendorCard;
