import React from "react";
import connectImage from "../../../ConnectToExploeTECH.webp";

const ConnectSection = () => {
  return (
    <section className="w-full bg-[#0B5BFF] py-16">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.1fr_1.2fr] lg:gap-12 lg:px-10">
        <div className="text-left text-white lg:-ml-[64px]">
          <h1
            className="text-[32px] font-semibold leading-tight lg:text-[40px] lg:leading-[50px]"
            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
          >
            Connect
          </h1>
          <p
            className="mt-2 text-[16px] font-normal leading-[24px] text-white"
            style={{ fontFamily: '"SF Pro Text", sans-serif' }}
          >
            Easily access our services
          </p>

          <div className="mt-8 space-y-8">
            <div>
              <h3
                className="text-[18px] font-bold leading-[26px]"
                style={{ fontFamily: '"SF Pro Text", sans-serif' }}
              >
                Connect with Vendors
              </h3>
              <p
                className="mt-2 max-w-[700px] text-[16px] font-normal leading-[24px] text-white"
                style={{ fontFamily: '"SF Pro Text", sans-serif' }}
              >
                Connect and engage with a growing database of top hospitality
                tech providers to find the perfect solutions for your business.
              </p>
              <button
                type="button"
                className="mt-4 inline-flex h-[41.6px] w-[208.55px] items-center justify-center rounded-[8px] bg-white text-[12px] font-normal leading-[16px] text-[#0055FE] shadow-[0_10px_22px_-16px_rgba(0,0,0,0.5)] transition hover:bg-[#e9f1ff]"
                style={{ fontFamily: '"SF Pro Text", sans-serif' }}
              >
                Explore Our Vendor Database
              </button>
            </div>

            <div>
              <h3
                className="text-[18px] font-bold leading-[26px]"
                style={{ fontFamily: '"SF Pro Text", sans-serif' }}
              >
                Connect with ExploreTech Experts
              </h3>
              <p
                className="mt-2 max-w-[700px] text-[16px] font-normal leading-[24px] text-white"
                style={{ fontFamily: '"SF Pro Text", sans-serif' }}
              >
                Get in touch with a hospitality technology specialist for expert
                guidance on optimizing your business or selecting the right
                technology for your needs.
              </p>
              <button
                type="button"
                className="mt-4 inline-flex h-[41.6px] w-[208.55px] items-center justify-center rounded-[8px] bg-white text-[12px] font-normal leading-[16px] text-[#0055FE] shadow-[0_10px_22px_-16px_rgba(0,0,0,0.5)] transition hover:bg-[#e9f1ff]"
                style={{ fontFamily: '"SF Pro Text", sans-serif' }}
              >
                Speak with an Expert
              </button>
            </div>

            <div>
              <h3
                className="text-[18px] font-bold leading-[26px]"
                style={{ fontFamily: '"SF Pro Text", sans-serif' }}
              >
                Connect with Support Services
              </h3>
              <p
                className="mt-2 max-w-[700px] text-[16px] font-normal leading-[24px] text-white"
                style={{ fontFamily: '"SF Pro Text", sans-serif' }}
              >
                Enjoy quick access to our wide range of support services.
              </p>
              <button
                type="button"
                className="mt-4 inline-flex h-[41.6px] w-[208.55px] items-center justify-center rounded-[8px] bg-white text-[12px] font-normal leading-[16px] text-[#0055FE] shadow-[0_10px_22px_-16px_rgba(0,0,0,0.5)] transition hover:bg-[#e9f1ff]"
                style={{ fontFamily: '"SF Pro Text", sans-serif' }}
              >
                Get Support Now
              </button>
            </div>
          </div>
        </div>

        <div className="flex w-full items-center justify-center lg:justify-end">
          <div className="mt-[2px] h-auto min-h-[250px] w-[95%] max-w-[360px] sm:min-h-[300px] sm:w-full sm:max-w-none lg:h-[445px] lg:w-[calc(100%+55px)] lg:mr-[-55px]">
            <img
              src={connectImage}
              alt="Connect with ExploreTech"
              className="h-full w-full rounded-[12px] object-cover shadow-[0_24px_50px_-30px_rgba(0,0,0,0.7)] lg:rounded-[20px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
