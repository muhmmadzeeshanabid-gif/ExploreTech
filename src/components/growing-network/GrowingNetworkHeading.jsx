const GrowingNetworkHeading = () => {
  return (
    <section className="w-full bg-white py-14">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center px-6 text-center">
        <h2
          className="text-[24px] font-bold leading-[40px] text-black lg:text-[40px] lg:font-semibold lg:leading-[50px]"
          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
        >
          Our growing network of tech providers
        </h2>
        <p
          className="mt-4 max-w-[980px] text-[16px] font-normal leading-[24px] text-[#242424] lg:text-[#1F2937]"
          style={{ fontFamily: '"SF Pro Text", sans-serif', fontWeight: 400 }}
        >
          Explore the newest hospitality technology providers who've recently joined our
          platform. These forward-thinking vendors bring fresh innovations and specialized
          solutions to help hoteliers enhance their tech stack and stay ahead in a competitive
          market.
        </p>
      </div>
    </section>
  );
};

export default GrowingNetworkHeading;

