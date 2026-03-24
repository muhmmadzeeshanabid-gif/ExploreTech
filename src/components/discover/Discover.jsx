import React from "react";
import DiscoverCopy from "./DiscoverCopy.jsx";
import DiscoverSlider from "./DiscoverSlider.jsx";

const Discover = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0B5BFF] pb-[56px] pt-12 md:pb-[60px] md:pt-14 lg:pt-16">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-8 px-5 md:gap-10 md:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <DiscoverCopy />
        <DiscoverSlider />
      </div>
    </section>
  );
};

export default Discover;
