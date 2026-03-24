import React from "react";
import { latestNewsItems } from "../../data/latestNews";
import { ArrowUpRight } from "lucide-react";

const LatestNews = () => {
  return (
    <section className="w-full bg-[#f4f5f7] py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1520px] px-5 md:px-10">
        <div className="mb-12 text-center">
          <h2
            className="text-[32px] md:text-[40px] font-bold text-[#111] leading-[1.2]"
            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
          >
            Latest News
          </h2>
          <p
            className="mt-3 text-[15px] md:text-[16px] text-[#4b5563] max-w-[880px] mx-auto"
            style={{ fontFamily: '"SF Pro Text", sans-serif' }}
          >
            Stay informed with the latest and most relevant news from ExploreTECH and our featured hospitality industry experts.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-10 grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3">
          {latestNewsItems.map((item) => {
            const isSelectDate = item.id === 4;
            return (
              <article
                key={item.id}
                className="group relative mx-auto flex h-full w-full max-w-[440px] flex-col gap-3"
              >
                <div className="h-[180px] sm:h-[209px] w-full max-w-[440px] overflow-hidden rounded-[12px] bg-[#e5e7eb]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full cursor-pointer object-cover transition duration-500 ease-out group-hover:scale-[1.08]"
                    style={isSelectDate ? { objectPosition: "center 55%" } : undefined}
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-2 pr-2">
                  <p
                    className="text-[13px] font-semibold uppercase tracking-[0.03em] text-[#3b4cca] group-hover:text-[#3b4cca]"
                    style={{ fontFamily: '"SF Pro Text", sans-serif' }}
                  >
                    {item.date}
                  </p>
                  <div className="flex h-[60px] w-[440px] max-w-full items-start gap-3 justify-between">
                    <h4
                      className="pb-[2px] text-[22px] leading-[32px] font-[600] text-[#000] transition-all duration-200 group-hover:text-[#0B5BFF] group-hover:underline group-hover:underline-offset-[2px]"
                      style={{ fontFamily: '"SF Pro Text", sans-serif', letterSpacing: "normal" }}
                    >
                      {item.title}
                    </h4>
                    <span className="mt-1 shrink-0">
                      <ArrowUpRight className="h-4 w-4 text-black transition-colors duration-200 group-hover:text-[#6b7280]" />
                    </span>
                  </div>
                  <p
                    className="text-[14px] text-[#6b7280]"
                    style={{ fontFamily: '"SF Pro Text", sans-serif' }}
                  >
                    {item.company}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            className="h-[46px] w-[122.5px] rounded-[4px] bg-blue-600 text-[16px] font-medium leading-[32px] uppercase text-white transition hover:bg-blue-700"
          >
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
