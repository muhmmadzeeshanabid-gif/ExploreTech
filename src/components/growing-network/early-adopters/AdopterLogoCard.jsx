import React from "react";

const AdopterLogoCard = ({ item }) => (
  <div className="flex h-[65px] w-[100px] flex-none cursor-pointer items-center justify-center rounded-[8px] border border-[#f3f3f3] bg-white px-2 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-200 hover:border-[#e5e5e5] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
    <img
      src={item.logo}
      alt={item.name}
      className="max-h-full max-w-full object-contain"
      loading="lazy"
    />
  </div>
);

export default AdopterLogoCard;
