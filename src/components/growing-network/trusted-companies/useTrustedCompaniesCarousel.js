import { useEffect, useMemo, useRef, useState } from "react";
import { arabicCards, slidesData } from "../../../data/trustedCompaniesData.js";

const useTrustedCompaniesCarousel = (isArabic) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const scrollRef = useRef(null);

  const allCards = useMemo(() => slidesData.flat(), []);
  const visibleSlides = isArabic ? [arabicCards] : slidesData;
  const visibleMobileCards = isArabic ? arabicCards : allCards;

  useEffect(() => {
    setCurrentSlide(0);
  }, [isArabic]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!scrollRef.current) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 },
    );
    observer.observe(scrollRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMobile || !scrollRef.current) return undefined;
    const cards = Array.from(
      scrollRef.current.querySelectorAll("[data-trusted-card]"),
    );
    if (!cards.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisibleIndex = currentSlide;
        let highestRatio = 0;

        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = Number(entry.target.getAttribute("data-trusted-card"));
          if (Number.isNaN(index)) return;
          if (entry.intersectionRatio >= highestRatio) {
            highestRatio = entry.intersectionRatio;
            mostVisibleIndex = index;
          }
        });

        if (highestRatio > 0) {
          setCurrentSlide(mostVisibleIndex);
        }
      },
      {
        root: scrollRef.current,
        threshold: [0.55, 0.7, 0.85],
      },
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [currentSlide, isMobile]);

  const handleDotClick = (index) => {
    if (isMobile) {
      const targetCard = scrollRef.current?.children?.[index];
      targetCard?.scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      });
      setCurrentSlide(index);
      return;
    }

    setCurrentSlide(index);
  };

  useEffect(() => {
    const totalSlides = isMobile
      ? visibleMobileCards.length
      : visibleSlides.length;
    if (totalSlides <= 1) return undefined;

    const intervalId = setInterval(() => {
      if (!isVisible) return; // Pause auto-slide if not visible
      setCurrentSlide((prev) => {
        const next = (prev + 1) % totalSlides;
        if (isMobile && scrollRef.current) {
          const container = scrollRef.current;
          const targetCard = container.children[next];
          if (targetCard) {
            container.scrollTo({
              left: targetCard.offsetLeft,
              behavior: "smooth",
            });
          }
        }
        return next;
      });
    }, 8000);

    return () => clearInterval(intervalId);
  }, [isMobile, visibleMobileCards.length, visibleSlides.length, isVisible]);

  return {
    currentSlide,
    isMobile,
    scrollRef,
    visibleSlides,
    visibleMobileCards,
    handleDotClick,
    setCurrentSlide,
  };
};

export default useTrustedCompaniesCarousel;
