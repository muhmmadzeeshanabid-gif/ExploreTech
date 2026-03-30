import React from "react";
import { GrowingNetworkCardSlider } from "../slider/GrowingNetworkSlider.jsx";
import { featuredVendors } from "../../../data/growingNetworkData.js";
import CardShowcaseLayout from "./CardShowcaseLayout.jsx";

const GrowingNetworkCardShowcase = () => {
  return (
    <CardShowcaseLayout>
      <GrowingNetworkCardSlider items={featuredVendors} />
    </CardShowcaseLayout>
  );
};

export default GrowingNetworkCardShowcase;
