import React from "react";
import { GrowingNetworkCardSlider } from "./GrowingNetworkSlider.jsx";
import duettoLogo from "../../assets/images/compare/140138TOPjEQ71Ym_50_rsx.jpg";
import atomizeLogo from "../../assets/images/compare/153556143810075036Atomize_1_50_rsx.png";
import profitLogo from "../../assets/images/compare/081608ProfitIntelligence.png";
import demandLogo from "../../assets/images/compare/103339Demandcalendar.png";
import robomationLogo from "../../assets/images/compare/101945download4.webp";
import circuitsImage from "../../assets/images/compare/102645images.webp";

const featuredVendors = [
  {
    id: 1,
    name: "Duetto",
    category: "Revenue management",
    status: "verified",
    logo: duettoLogo,
  },
  {
    id: 2,
    name: "Atomize",
    category: "Pricing intelligence",
    status: "verified",
    logo: atomizeLogo,
  },
  {
    id: 3,
    name: "Profit Intelligence",
    category: "Analytics",
    status: "verified",
    logo: profitLogo,
  },
  {
    id: 4,
    name: "Demand Calendar",
    category: "Forecasting",
    status: "unverified",
    logo: demandLogo,
  },
  {
    id: 5,
    name: "Robomation",
    category: "Automation",
    status: "verified",
    logo: robomationLogo,
  },
  {
    id: 6,
    name: "Automation Stack",
    category: "Operations",
    status: "unverified",
    logo: circuitsImage,
  },
];

const GrowingNetworkCardShowcase = () => {
  return (
    <section className="w-full bg-white pb-16 pt-2">
      <div className="mx-auto w-full px-0">
        <GrowingNetworkCardSlider items={featuredVendors} />
      </div>
    </section>
  );
};

export default GrowingNetworkCardShowcase;
