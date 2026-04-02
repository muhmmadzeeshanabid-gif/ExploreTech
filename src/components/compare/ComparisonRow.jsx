import React from "react";

const buttonStyle = {
  fontFamily: '"SF Pro Text", sans-serif',
  fontWeight: 500,
};

const vsStyle = {
  fontFamily: '"Space Grotesk", sans-serif',
  fontWeight: 400,
};

const CompareButton = ({ label }) => (
  <button
    type="button"
    className="h-9 w-full max-w-[98px] flex-shrink-0 rounded-[8px] bg-[#365cff] px-2 text-[10px] font-medium leading-[1.1] text-white transition hover:bg-[#2f52e6] sm:h-10 sm:max-w-[138px] sm:text-[11px] md:max-w-[152px] md:text-[12px]"
    style={buttonStyle}
  >
    {label}
  </button>
);

const ComparisonLogos = ({ row, vsLabel, isArabic }) => {
  const gridClass =
    row.items.length === 3
      ? "grid-cols-[auto_auto_auto_auto_auto]"
      : "grid-cols-[auto_auto_auto]";

  return (
    <div
      className={`grid flex-1 items-center justify-items-center gap-3 ${
        isArabic ? "" : "justify-center sm:gap-4"
      } ${gridClass}`}
    >
      {row.items.map((item, index) => (
        <React.Fragment key={`${row.id}-${item.alt}`}>
          {isArabic ? (
            <img
              src={item.src}
              alt={item.alt}
              className="h-auto w-[45px] object-contain sm:w-[74px] md:w-[82px] lg:h-[52px] lg:w-[120px]"
            />
          ) : (
            <div className="flex items-center justify-center justify-self-center">
              <img
                src={item.src}
                alt={item.alt}
                className="h-auto w-[45px] object-contain sm:w-[74px] md:w-[82px] lg:h-[52px] lg:w-[120px]"
              />
            </div>
          )}

          {index < row.items.length - 1 && (
            <span
              className="text-[12px] font-normal leading-normal tracking-normal text-black sm:text-[14px] md:text-[16px]"
              style={vsStyle}
            >
              {vsLabel}
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

const ComparisonRow = ({ row, isArabic, addToCompareLabel, vsLabel }) => {
  const cardClass = isArabic
    ? "group relative w-full overflow-hidden rounded-[12px] bg-[#e9e9e9] px-3 py-3 shadow-[0_10px_24px_-20px_rgba(0,0,0,0.45)] sm:px-5 md:px-6 lg:h-[81.6px] lg:w-[629px]"
    : "group relative w-full overflow-hidden rounded-[12px] bg-white px-3 py-3 shadow-[0_12px_26px_-18px_rgba(0,0,0,0.5)] sm:px-5 md:px-6 lg:h-[81.6px] lg:w-[629px]";

  const overlayClass = isArabic
    ? "pointer-events-none absolute inset-0 z-0 origin-right scale-x-0 bg-[#dce8ff] transition-transform duration-500 ease-out group-hover:scale-x-100 group-active:scale-x-100"
    : "pointer-events-none absolute inset-0 z-0 origin-left scale-x-0 bg-[#e9f0ff] transition-transform duration-500 ease-out group-hover:scale-x-100 group-active:scale-x-100";

  const innerClass = isArabic
    ? "relative z-10 flex h-full flex-row items-center justify-between gap-3"
    : "relative z-10 flex h-full flex-row items-center justify-between gap-2 md:gap-3 lg:gap-4";

  return (
    <div className={cardClass}>
      <span aria-hidden="true" className={overlayClass} />
      <div className={innerClass}>
        {isArabic && <CompareButton label={addToCompareLabel} />}
        <ComparisonLogos row={row} vsLabel={vsLabel} isArabic={isArabic} />
        {!isArabic && <CompareButton label={addToCompareLabel} />}
      </div>
    </div>
  );
};

export default ComparisonRow;
