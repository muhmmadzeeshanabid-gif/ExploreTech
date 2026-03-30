import { useCallback, useEffect, useState } from "react";

export const useSignInState = () => {
  const [signInOpen, setSignInOpen] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.location.hash === "#auth";
  });

  useEffect(() => {
    const syncAuthStateFromHash = () => {
      setSignInOpen(window.location.hash === "#auth");
    };

    window.addEventListener("hashchange", syncAuthStateFromHash);
    return () =>
      window.removeEventListener("hashchange", syncAuthStateFromHash);
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

  return { signInOpen, openSignIn, closeSignIn };
};
