import { useEffect, useState } from "react";
import {
  allAcceptedPreferences,
  allRejectedPreferences,
} from "./constants.js";

const useCookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }

    return undefined;
  }, []);

  const handleAction = (type) => {
    if (type === "accepted") {
      localStorage.setItem("cookieConsent", "accepted");
      localStorage.setItem(
        "cookiePreferences",
        JSON.stringify(allAcceptedPreferences),
      );
      setIsVisible(false);
      return;
    }

    if (type === "rejected") {
      localStorage.setItem("cookieConsent", "rejected");
      localStorage.setItem(
        "cookiePreferences",
        JSON.stringify(allRejectedPreferences),
      );
      setIsVisible(false);
      return;
    }
  };

  return {
    isVisible,
    handleAction,
  };
};

export default useCookieConsent;
