import React, { useCallback, useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import HeroBanner from "./components/HeroBanner.jsx";
import HeroHeading from "./components/HeroHeading.jsx";
import PromptBox from "./components/PromptBox.jsx";
import CommitmentHeading from "./components/CommitmentHeading.jsx";
import HowToChoose from "./components/HowToChoose.jsx";
import Discover from "./components/discover/Discover.jsx";
import CompareSection from "./components/compare/CompareSection.jsx";
import ConnectSection from "./components/connect/ConnectSection.jsx";
import ProcureSection from "./components/ProcureSection.jsx";
import GrowingNetworkHeading from "./components/growing-network/GrowingNetworkHeading.jsx";
import GrowingNetworkSlider from "./components/growing-network/GrowingNetworkSlider.jsx";
import TrustedCompanies from "./components/growing-network/TrustedCompanies.jsx";
import LogoMarquee from "./components/growing-network/LogoMarquee.jsx";
import LatestNews from "./components/growing-network/LatestNews.jsx";
import EarlyAdopters from "./components/growing-network/EarlyAdopters.jsx";
import Newsletter from "./components/Newsletter.jsx";
import SignInLanding from "./components/signin/SignInLanding.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  const [signInOpen, setSignInOpen] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.location.hash === "#auth";
  });

  useEffect(() => {
    const syncAuthStateFromHash = () => {
      setSignInOpen(window.location.hash === "#auth");
    };

    window.addEventListener("hashchange", syncAuthStateFromHash);
    return () => window.removeEventListener("hashchange", syncAuthStateFromHash);
  }, []);

  const openSignIn = useCallback(() => {
    if (window.location.hash !== "#auth") {
      window.location.hash = "auth";
    }
    setSignInOpen(true);
  }, []);

  const closeSignIn = useCallback(() => {
    if (window.location.hash === "#auth") {
      const cleanUrl = window.location.pathname + window.location.search;
      window.history.replaceState({}, document.title, cleanUrl);
    }
    setSignInOpen(false);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onSignIn={openSignIn} onSignUp={openSignIn} />
      <SignInLanding
        open={signInOpen}
        onHome={closeSignIn}
        youtubeUrl="https://youtu.be/UeZX7_UlF9E"
      />
      <div className="pt-6 pb-12 text-center">
        <HeroHeading />
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
    </div>
  );
};

export default App;
