import uberDataLogo from "../assets/growing-network/logos/133437uberdata_networks_logo.jpg";
import xquicLogo from "../assets/growing-network/logos/200726xquic_logo.jpg";
import duettoLogo from "../assets/growing-network/logos/140138TOPjEQ71Ym_50_rsx.jpg";
import prismmLogo from "../assets/growing-network/logos/162537prismmtechnologies_logo.jpg";
import rakamLogo from "../assets/growing-network/logos/083151RakamTechnologies.png";
import squirrelLogo from "../assets/growing-network/logos/115903squirrel_systems_logo.jpg";
import tacitLogo from "../assets/growing-network/logos/121121tacit_corp_logo.jpg";
import travelBoomLogo from "../assets/growing-network/logos/131845travelboommarketing_logo.jpg";

// Pair top + bottom images so they travel together (comparison style)
export const pairs = [
  { top: duettoLogo, bottom: rakamLogo },
  { top: prismmLogo, bottom: squirrelLogo },
  { top: uberDataLogo, bottom: xquicLogo },
  { top: tacitLogo, bottom: travelBoomLogo },
];

// Triple for seamless loop; we keep the pointer in the middle copy to avoid jumps
export const loopPairs = [...pairs, ...pairs, ...pairs];

export const logoMarqueeConfig = {
  itemWidth: 93,
  transitionMs: 1000,
  holdMs: 2000,
  mobileGap: 20,
  desktopGap: 80,
  imgHeight: 63,
  imgWidth: 93,
};
