import React from "react";
import logo from "../../Explote-Tech-Logo-Black.gif";
import NavActions from "./NavActions.jsx";
import NavMenu from "./NavMenu.jsx";

const Navbar = ({ onSignIn, onSignUp }) => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white">
      <div className="flex items-center justify-between px-5 py-3 md:pl-[50px] md:pr-[50px]">
        <a href="/" className="flex items-center gap-3 cursor-pointer">
          <img
            src={logo}
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
