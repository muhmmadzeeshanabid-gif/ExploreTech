import React from "react";
import duettoLogo from "../../assets/images/compare/140138TOPjEQ71Ym_50_rsx.jpg";
import atomizeLogo from "../../assets/images/compare/153556143810075036Atomize_1_50_rsx.png";
import dotLogo from "../../assets/images/compare/3pjklG8nxF.png";
import profitLogo from "../../assets/images/compare/081608ProfitIntelligence.png";
import demandLogo from "../../assets/images/compare/103339Demandcalendar.png";
import robotsImage from "../../assets/images/compare/113157images4.jpg";
import robomationLogo from "../../assets/images/compare/101945download4.webp";
import circuitsImage from "../../assets/images/compare/102645images.webp";

const comparisons = [
  {
    id: 1,
    items: [
      { src: duettoLogo, alt: "Duetto", className: "h-[52px] w-[120px] object-contain" },
      { src: atomizeLogo, alt: "Atomize", className: "h-[52px] w-[120px] object-contain" },
    ],
  },
  {
    id: 2,
    items: [
      { src: dotLogo, alt: "Analytics platform", className: "h-[52px] w-[120px] object-contain" },
      { src: profitLogo, alt: "Profit Intelligence", className: "h-[52px] w-[120px] object-contain" },
      { src: demandLogo, alt: "Demand Calendar", className: "h-[52px] w-[120px] object-contain" },
    ],
  },
  {
    id: 3,
    items: [
      { src: robotsImage, alt: "Robotics", className: "h-[52px] w-[120px] object-contain" },
      { src: robomationLogo, alt: "Robomation", className: "h-[52px] w-[120px] object-contain" },
      { src: circuitsImage, alt: "Automation", className: "h-[52px] w-[120px] object-contain" },
    ],
  },
];

const CompareSection = () => {
  return (
    <section className="w-full bg-[#17c53a] py-14 md:py-16">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-start gap-10 px-5 md:gap-12 md:px-8 lg:grid-cols-[0.9fr_1.2fr] lg:gap-16 lg:px-10">
        <div className="flex h-full items-start justify-start md:items-center lg:-ml-[80px]">
          <h1
            className="text-left text-[30px] font-semibold leading-tight text-white md:text-[36px] lg:text-[40px] lg:leading-[50px]"
            style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600 }}
          >
            Trending Products
          </h1>
        </div>

        <div className="text-white md:max-w-[880px] lg:translate-x-[32px]">
          <div>
            <h1
              className="w-full text-[30px] font-semibold leading-tight text-white md:text-[36px] lg:h-[50px] lg:w-[629px] lg:text-[40px] lg:leading-[50px]"
              style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600 }}
            >
              Compare
            </h1>
            <p
              className="mt-2 w-full text-[15px] font-normal leading-[23px] text-white md:text-[16px] md:leading-[24px] lg:h-[24px] lg:w-[629px]"
              style={{ fontFamily: '"SF Pro Text", sans-serif', fontWeight: 400 }}
            >
              View side-by-side solutions
            </p>
          </div>

          <div className="mt-5 w-full md:mt-6 lg:max-w-[640px]">
            <p
              className="text-[15px] font-bold leading-[23px] text-white md:text-[16px] md:leading-[24px]"
              style={{ fontFamily: '"SF Pro Text", sans-serif', fontWeight: 700 }}
            >
              Advanced Product Comparison Tool
            </p>
            <p
              className="mt-2 w-full text-[15px] font-normal leading-[23px] text-white md:text-[16px] md:leading-[24px] lg:h-[72px] lg:w-[629px]"
              style={{ fontFamily: '"SF Pro Text", sans-serif', fontWeight: 400 }}
            >
              Easily compare hospitality technologies side-by-side. Build your hotel profile and
              receive tailored solutions that integrate with your systems. Compare features,
              pricing, specs, and integrations effortlessly.
            </p>
          </div>

          <div className="mt-8 md:mt-10">
            <p
              className="text-[15px] font-bold leading-[23px] text-white md:text-[16px] md:leading-[24px]"
              style={{ fontFamily: '"SF Pro Text", sans-serif', fontWeight: 700 }}
            >
              Latest Comparison Conducted
            </p>
            <div className="mt-4 space-y-3 md:space-y-4">
              {comparisons.map((row) => (
                <div
                  key={row.id}
                  className="group relative w-full overflow-hidden rounded-[12px] bg-white px-3 py-3 shadow-[0_12px_26px_-18px_rgba(0,0,0,0.5)] sm:px-5 md:px-6 lg:h-[81.6px] lg:w-[629px]"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-0 origin-left scale-x-0 bg-[#e9f0ff] transition-transform duration-500 ease-out group-hover:scale-x-100 group-active:scale-x-100"
                  />
                  <div className="relative z-10 flex h-full flex-row items-center justify-between gap-2 md:gap-3 lg:gap-4">
                    <div
                      className={`grid flex-1 items-center justify-center justify-items-center gap-3 sm:gap-4 ${
                        row.items.length === 3
                          ? "grid-cols-[auto_auto_auto_auto_auto]"
                          : "grid-cols-[auto_auto_auto]"
                      }`}
                    >
                      {row.items.map((item, index) => {
                        const alignClass = "justify-self-center";
                        return (
                          <React.Fragment key={`${row.id}-${item.alt}`}>
                            <div className={`${alignClass} flex items-center justify-center`}>
                              <img
                                src={item.src}
                                alt={item.alt}
                              className="object-contain h-auto w-[45px] sm:w-[74px] md:w-[82px] lg:h-[52px] lg:w-[120px]"
                              />
                            </div>
                          {index < row.items.length - 1 && (
                            <span
                              className="text-[12px] font-normal leading-normal tracking-normal text-black sm:text-[14px] md:text-[16px]"
                              style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 400 }}
                            >
                              vs
                            </span>
                          )}
                          </React.Fragment>
                        );
                      })}
                    </div>
                    <button
                      type="button"
                      className="h-9 w-full max-w-[98px] flex-shrink-0 rounded-[8px] bg-[#365cff] px-2 text-[10px] font-medium leading-[1.1] text-white transition hover:bg-[#2f52e6] sm:h-10 sm:max-w-[138px] sm:text-[11px] md:max-w-[152px] md:text-[12px]"
                      style={{ fontFamily: '"SF Pro Text", sans-serif', fontWeight: 500 }}
                    >
                      Add to Compare
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompareSection;
