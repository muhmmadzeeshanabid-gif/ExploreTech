import AppHeader from "./components/AppHeader.jsx";
import HeroBanner from "./components/HeroBanner.jsx";
import PromptBox from "./components/PromptBox.jsx";
import CommitmentHeading from "./components/CommitmentHeading.jsx";
import HowToChoose from "./components/HowToChoose.jsx";
import Discover from "./components/discover/Discover.jsx";
import CompareSection from "./components/compare/CompareSection.jsx";
import ConnectSection from "./components/connect/ConnectSection.jsx";
import ProcureSection from "./components/ProcureSection.jsx";
import GrowingNetworkHeading from "./components/growing-network/heading/GrowingNetworkHeading.jsx";
import GrowingNetworkSlider from "./components/growing-network/slider/GrowingNetworkSlider.jsx";
import TrustedCompanies from "./components/growing-network/trusted-companies/TrustedCompanies.jsx";
import LogoMarquee from "./components/growing-network/marquee/LogoMarquee.jsx";
import LatestNews from "./components/growing-network/latest-news/LatestNews.jsx";
import EarlyAdopters from "./components/growing-network/early-adopters/EarlyAdopters.jsx";
import Newsletter from "./components/newsletter/Newsletter.jsx";
import Footer from "./components/footer/Footer.jsx";
import CookiesBanner from "./components/cookies-banner/CookiesBanner.jsx";
import { useSignInState } from "./hooks/useSignInState.js";

const App = () => {
  const { signInOpen, openSignIn, closeSignIn } = useSignInState();

  return (
    <>
      <AppHeader
        signInOpen={signInOpen}
        openSignIn={openSignIn}
        closeSignIn={closeSignIn}
      />
      <main className="pt-24">
        <div className="pt-6 pb-12 text-center">
          <PromptBox />
        </div>
        <HeroBanner />
        <CommitmentHeading />
        <HowToChoose />
        <Discover />
        <CompareSection />
        <ConnectSection />
        <ProcureSection />
        <GrowingNetworkHeading />
        <GrowingNetworkSlider />
        <TrustedCompanies />
        <LogoMarquee />
        <LatestNews />
        <EarlyAdopters />
        <Newsletter />
        <Footer />
        <CookiesBanner />
      </main>
    </>
  );
};

export default App;
