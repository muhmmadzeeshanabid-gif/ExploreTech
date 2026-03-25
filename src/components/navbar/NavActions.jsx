import { Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../context/LanguageContext.jsx";

const NavActions = ({ onSignIn, onSignUp }) => {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const isArabic = language === "AR";
  const menuRef = useRef(null);
  const languageMenuItemClass =
    "w-full px-4 py-2 transition-colors hover:bg-blue-50 hover:text-[#0b56ff]";

  useEffect(() => {
    const handleClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const selectLanguage = (code) => {
    setLanguage(code);
    setOpen(false);
  };

  return (
    <div
      className={`hidden items-center gap-4 lg:flex ${
        language === "AR" ? "flex-row-reverse" : ""
      }`}
    >
      <button
        className="rounded-md px-3 text-[12px] font-medium leading-[32px] uppercase text-[rgb(0,85,254)] transition hover:bg-blue-50"
        type="button"
        onClick={onSignIn}
      >
        {language === "AR" ? "تسجيل الدخول" : "Sign In"}
      </button>
      <button
        className="rounded-md bg-blue-600 px-4 text-[12px] font-medium leading-[32px] uppercase text-white transition hover:bg-blue-700"
        type="button"
        onClick={onSignUp}
      >
        {language === "AR" ? "اشتراك" : "Sign Up"}
      </button>
      <div className="relative z-[80] isolate" ref={menuRef}>
        <button
          className="flex items-center gap-2 rounded-md px-2 py-1 text-[13px] text-slate-600 transition hover:text-blue-700"
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-haspopup="menu"
        >
          <Globe className="h-4 w-4" />
          <span>{language}</span>
        </button>
        <div
          className={`absolute top-full mt-3 overflow-hidden border border-slate-100 bg-white text-[14px] font-medium text-slate-700 shadow-[0_18px_40px_-20px_rgba(15,23,42,0.45)] transition ${
            isArabic
              ? "left-0 right-auto w-36 rounded-lg"
              : "right-0 left-auto w-36 rounded-lg"
          } ${open ? "visible opacity-100" : "invisible opacity-0"} z-[90]`}
          role="menu"
        >
          <button
            className={`${languageMenuItemClass} border-b border-slate-100 ${
              "text-center"
            }`}
            type="button"
            role="menuitem"
            onClick={() => selectLanguage("EN")}
          >
            English
          </button>
          <button
            className={`${languageMenuItemClass} text-center`}
            type="button"
            role="menuitem"
            onClick={() => selectLanguage("AR")}
          >
            {"\u0627\u0644\u0639\u0631\u0628\u064a\u0629"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavActions;
