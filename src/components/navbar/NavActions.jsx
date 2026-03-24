import { Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const NavActions = ({ onSignIn, onSignUp }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="hidden items-center gap-4 lg:flex">
      <button
        className="rounded-md px-3 text-[12px] font-medium leading-[32px] uppercase text-[rgb(0,85,254)] transition hover:bg-blue-50"
        type="button"
        onClick={onSignIn}
      >
        Sign In
      </button>
      <button
        className="rounded-md bg-blue-600 px-4 text-[12px] font-medium leading-[32px] uppercase text-white transition hover:bg-blue-700"
        type="button"
        onClick={onSignUp}
      >
        Sign Up
      </button>
      <div className="relative" ref={menuRef}>
        <button
          className="flex items-center gap-2 rounded-md px-2 py-1 text-[13px] text-slate-600 transition hover:text-blue-700"
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-haspopup="menu"
        >
          <Globe className="h-4 w-4" />
          <span>EN</span>
        </button>
        <div
          className={`absolute right-0 top-full mt-3 w-40 overflow-hidden rounded-xl border border-slate-100 bg-white text-[14px] font-medium text-slate-700 shadow-[0_18px_40px_-20px_rgba(15,23,42,0.45)] transition ${
            open ? "visible opacity-100" : "invisible opacity-0"
          }`}
          role="menu"
        >
          <button
            className="w-full border-b border-slate-100 px-4 py-2 text-left hover:bg-slate-50"
            type="button"
            role="menuitem"
            onClick={() => setOpen(false)}
          >
            English
          </button>
          <button
            className="w-full px-4 py-2 text-left hover:bg-slate-50"
            type="button"
            role="menuitem"
            onClick={() => setOpen(false)}
          >
            العربية
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavActions;
