import howToChooseImage from "../assets/images/how-to-choose.webp";

const HowToChoose = () => {
  return (
    <section className="w-full bg-white pb-12 pt-6 md:pb-14 lg:pb-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-5 md:gap-10 md:px-8 lg:flex-row lg:items-start lg:gap-16 lg:px-6 lg:pr-0">
        <div className="w-full max-w-[708px] md:flex md:flex-col md:justify-center lg:-ml-[86px] lg:min-h-[445px]">
          <h1
            className="w-full text-[24px] font-semibold leading-[30px] text-black md:text-[30px] md:leading-[38px] lg:text-[40px] lg:leading-[50px]"
            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
          >
            How to choose the best technology for your needs
          </h1>
          <p
            className="mt-4 w-full text-[15px] font-normal leading-[23px] text-[#242424] md:mt-5 md:max-w-[708px] md:text-[16px] md:leading-[24px]"
            style={{ fontFamily: '"SF Pro Text", sans-serif' }}
          >
            Choosing technology that fits your goals and integrates with
            existing solutions is vital. ExploreTECH simplifies the process
            with AI-powered recommendations, helping you make informed
            decisions in minutes, not days.
          </p>
          <p
            className="mt-5 text-[15px] font-normal leading-[23px] text-[#242424] md:mt-6 md:text-[16px] md:leading-[24px]"
            style={{ fontFamily: '"SF Pro Text", sans-serif' }}
          >
            Get ready to find your perfect fit:
          </p>
        </div>
        <div className="flex w-full justify-center lg:ml-auto lg:flex-1 lg:translate-x-[38px] lg:justify-end lg:pl-6">
          <img
            src={howToChooseImage}
            alt="Technology selection illustration"
            className="h-auto w-full max-w-[655px] rounded-[20px] object-cover shadow-[0_18px_40px_-24px_rgba(0,0,0,0.45)] md:h-[390px] md:rounded-[22px] lg:h-[445px] lg:rounded-[26px]"
          />
        </div>
      </div>
    </section>
  );
};

export default HowToChoose;
