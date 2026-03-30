import React from "react";
import logoEn from "../../assets/logo/Explote-Tech-Logo-Black.gif";
import logoAr from "../../assets/logo/AR-Explote-Tech-Logo-Black.gif";
import NavActions from "./NavActions.jsx";
import NavMenu from "./NavMenu.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";

const Navbar = ({ onSignIn, onSignUp }) => {
  const { language } = useLanguage();
  const navLogo = language === "AR" ? logoAr : logoEn;
  return (
    <nav className="fixed top-0 z-50 w-full bg-white">
      <div
        className={`flex items-center px-5 py-3 md:pl-[50px] md:pr-[50px] ${
          language === "AR" ? "flex-row-reverse" : ""
        }`}
      >
        <a
          href="/"
          className="flex cursor-pointer items-center gap-3"
        >
          <img
            src={navLogo}
            alt="Explore Tech"
            className="h-[56px] w-[110px] md:h-[70px] md:w-[125px]"
          />
        </a>

        <div className="flex-1" />

        <div
          className={`flex items-center ${
            language === "AR" ? "flex-row-reverse gap-[6px]" : "gap-3"
          }`}
        >
          <NavMenu onSignIn={onSignIn} onSignUp={onSignUp} />
          <NavActions
            onSignIn={onSignIn}
            onSignUp={onSignUp}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
