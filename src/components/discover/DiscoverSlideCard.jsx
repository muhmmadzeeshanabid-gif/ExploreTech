import React from "react";

const DiscoverSlideCard = ({ cat, onClick, isOut, style }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`absolute overflow-hidden rounded-[10px] transition-all duration-700 ease-[cubic-bezier(0.16,0.84,0.44,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 lg:rounded-[24px] ${
        isOut ? "pointer-events-none" : "cursor-pointer"
      }`}
      style={style}
    >
      <img
        src={cat.image}
        alt={cat.title}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/35 to-transparent p-3 pb-4 pt-16 text-left lg:p-6 lg:pb-7 lg:pt-24">
        <div className="flex w-full items-end gap-2 lg:gap-4">
          <h3
            className="max-w-[80%] flex-1 text-[12px] font-semibold leading-[16px] text-white lg:max-w-[82%] lg:text-[16px] lg:leading-[24px]"
            style={{
              fontFamily: '"SF Pro Text", sans-serif',
              fontWeight: 600,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              overflowWrap: "normal",
              wordBreak: "normal",
              hyphens: "manual",
            }}
          >
            {cat.title}
          </h3>

          <div className="ml-auto flex flex-col items-center text-center">
            <span
              className="text-[14px] font-bold leading-[18px] text-[#4ADE80] lg:text-[20px] lg:leading-[28px]"
              style={{ fontFamily: '"SF Pro Text", sans-serif', fontWeight: 700 }}
            >
              {cat.products}
            </span>
            <span
              className="text-[9px] font-bold tracking-[0.1em] text-[#34D399] lg:text-[12px] lg:tracking-[0.16em]"
              style={{ fontFamily: '"SF Pro Text", sans-serif', fontWeight: 700 }}
            >
              Products
            </span>
          </div>
        </div>
      </div>
    </button>
  );
};

export default DiscoverSlideCard;
