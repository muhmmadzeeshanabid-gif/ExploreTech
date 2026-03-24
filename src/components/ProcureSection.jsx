import React from "react";
import procureImage from "../../ProcureSection.png";

const ProcureSection = () => {
  return (
    <section className="w-full bg-[#17c53a] py-16">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:px-10">
        <div className="flex items-center justify-center lg:justify-end">
          <div className="relative h-[260px] w-[95%] max-w-[360px] overflow-hidden rounded-[12px] sm:h-[350px] sm:w-full sm:max-w-[500px] lg:h-[445px] lg:max-w-[680px] lg:translate-x-[12px] lg:rounded-[28px]">
            <img
              src={procureImage}
              alt="Procure preview"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="text-left text-white lg:-translate-x-[24px]">
          <h1
            className="text-[32px] font-semibold leading-tight lg:h-[50px] lg:w-[653.025px] lg:text-[40px] lg:leading-[50px]"
            style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600 }}
          >
            Procure
          </h1>
          <p
            className="mt-4 text-[16px] font-normal leading-[24px] text-white lg:h-[96px] lg:w-[653.025px]"
            style={{ fontFamily: '"SF Pro Text", sans-serif', fontWeight: 400 }}
          >
            Streamline your RFI/RFP process with our upcoming automated tool. Effortlessly send
            customized requests to multiple vendors, receive organized proposals, and compare
            <span className="hidden lg:inline"><br /></span>
            them side-by-side. Save time, reduce costs, and make smarter decisions with
            <span className="hidden lg:inline"><br /></span>
            confidence.
          </p>
          <p
            className="mt-6 text-[16px] font-bold leading-[24px] text-white"
            style={{ fontFamily: '"SF Pro Text", sans-serif', fontWeight: 700 }}
          >
            --Coming Soon--
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcureSection;
