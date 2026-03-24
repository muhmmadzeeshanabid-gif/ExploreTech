import React from "react";
import logoEn from "../../Explote-Tech-Logo-Black.gif";
import logoAr from "../../../AR-Explote-Tech-Logo-Black.gif";
import NavActions from "./NavActions.jsx";
import NavMenu from "./NavMenu.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";

const Navbar = ({ onSignIn, onSignUp }) => {
  const { language } = useLanguage();
  const navLogo = language === "AR" ? logoAr : logoEn;
  return (
    <nav className="sticky top-0 z-50 w-full bg-white">
      <div
        className={`flex items-center justify-between px-5 py-3 md:pl-[50px] md:pr-[50px] ${
          language === "AR" ? "flex-row-reverse" : ""
        }`}
      >
        <a href="/" className="flex items-center gap-3 cursor-pointer">
          <img
            src={navLogo}
            alt="Explore Tech"
            className="h-[56px] w-[110px] md:h-[70px] md:w-[125px]"
          />
        </a>

        <NavMenu onSignIn={onSignIn} onSignUp={onSignUp} />
        <NavActions
          onSignIn={onSignIn}
          onSignUp={onSignUp}
        />
      </div>
    </nav>
  );
};

export default Navbar;
