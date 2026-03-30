import verifiedIcon from "../assets/icon/verified.png";
import vendorLogoA from "../assets/growing-network/logos/x5WsbnAfcg.jpg";
import vendorLogoB from "../assets/growing-network/logos/gs14qlFntB.webp";

export const vendors = [
  {
    id: 1,
    name: "Supply T-REX",
    category: "Hospitality",
    status: "verified",
    logo: vendorLogoA,
  },
  {
    id: 2,
    name: "Shady Vendor",
    category: "Hospitality",
    status: "unverified",
    logo: vendorLogoB,
  },
  {
    id: 3,
    name: "Supply T-REX",
    category: "Hospitality",
    status: "verified",
    logo: vendorLogoA,
  },
  {
    id: 4,
    name: "Shady Vendor",
    category: "Hospitality",
    status: "unverified",
    logo: vendorLogoB,
  },
  {
    id: 5,
    name: "Supply T-REX",
    category: "Hospitality",
    status: "verified",
    logo: vendorLogoA,
  },
  {
    id: 6,
    name: "Shady Vendor",
    category: "Hospitality",
    status: "unverified",
    logo: vendorLogoB,
  },
];

export const loopVendors = [...vendors, ...vendors];

export const sliderConfig = {
  autoSpeed: 95,
  mobileStep: "containerWidth", // use container width on mobile
  desktopStep: 356,
  animationDelay: 7000, // for mobile
  snapDelay: 200, // after manual animation on desktop
  dragResumeDelay: 800,
  cardLeaveDelay: 120,
};

export { verifiedIcon };
