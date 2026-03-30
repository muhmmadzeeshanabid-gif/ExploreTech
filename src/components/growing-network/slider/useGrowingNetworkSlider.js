import { useEffect, useRef, useState } from "react";
import { sliderConfig, vendors } from "../../../data/growingNetworkSliderData.js";

const useGrowingNetworkSlider = () => {
  const scrollRef = useRef(null);
  const trackRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const resumeRef = useRef(null);
  const manualAnimRef = useRef(null);
  const dragRef = useRef({ isDown: false, startX: 0, scrollLeft: 0 });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const animateScrollByCards = (direction, count = 1) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const mobile = window.innerWidth < 640;

    if (mobile) {
      container.style.scrollSnapType = "none";
    }

    const step = mobile ? container.offsetWidth : sliderConfig.desktopStep;
    const halfWidth = step * vendors.length;

    let current = container.scrollLeft;

    const targetPos = current + step * count * direction;
    let remaining = Math.abs(targetPos - current);
    let lastTime = performance.now();

    if (manualAnimRef.current) {
      cancelAnimationFrame(manualAnimRef.current);
    }

    const tick = (time) => {
      const delta = time - lastTime;
      lastTime = time;
      const speedMultiplier = mobile ? 1.3 : 1.5;
      const move = Math.min(
        remaining,
        (sliderConfig.autoSpeed * speedMultiplier * delta) / 1000,
      );
      const signed = move * direction;
      container.scrollLeft += signed;
      remaining -= move;

      if (remaining > 0.5) {
        manualAnimRef.current = requestAnimationFrame(tick);
      } else {
        let finalPos = Math.round(targetPos);
        while (finalPos >= halfWidth) finalPos -= halfWidth;
        while (finalPos < 0) finalPos += halfWidth;
        container.scrollLeft = finalPos;

        if (mobile) {
          container.style.scrollSnapType = "x mandatory";
        }

        manualAnimRef.current = null;
        if (resumeRef.current) {
          clearTimeout(resumeRef.current);
        }
        if (!mobile) {
          resumeRef.current = setTimeout(() => {
            setIsPaused(false);
          }, sliderConfig.snapDelay);
        }
      }
    };

    manualAnimRef.current = requestAnimationFrame(tick);
  };

  const handleManualScroll = (direction) => {
    setIsPaused(true);
    animateScrollByCards(direction, 1);
    if (resumeRef.current) {
      clearTimeout(resumeRef.current);
    }
  };

  const handleMouseDown = (event) => {
    if (!scrollRef.current || !trackRef.current) return;
    setIsPaused(true);
    if (resumeRef.current) {
      clearTimeout(resumeRef.current);
    }
    if (manualAnimRef.current) {
      cancelAnimationFrame(manualAnimRef.current);
      manualAnimRef.current = null;
    }
    dragRef.current.isDown = true;
    dragRef.current.startX = event.pageX;
    dragRef.current.scrollLeft = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (event) => {
    if (!dragRef.current.isDown || !scrollRef.current || !trackRef.current) return;
    event.preventDefault();
    const container = scrollRef.current;
    const step =
      window.innerWidth < 640 ? container.offsetWidth : sliderConfig.desktopStep;
    const halfWidth = step * vendors.length;
    const walk = event.pageX - dragRef.current.startX;
    let next = dragRef.current.scrollLeft - walk;

    if (next < 0) next += halfWidth;
    if (next >= halfWidth) next -= halfWidth;

    container.scrollLeft = next;
  };

  const handleMouseEnd = () => {
    if (dragRef.current.isDown) {
      dragRef.current.isDown = false;
    }
    if (resumeRef.current) {
      clearTimeout(resumeRef.current);
    }
    resumeRef.current = setTimeout(() => {
      setIsPaused(false);
    }, sliderConfig.dragResumeDelay);
  };

  const handleCardEnter = () => {
    setIsPaused(true);
    if (resumeRef.current) {
      clearTimeout(resumeRef.current);
    }
  };

  const handleCardLeave = () => {
    if (dragRef.current.isDown) return;
    if (resumeRef.current) {
      clearTimeout(resumeRef.current);
    }
    resumeRef.current = setTimeout(() => {
      setIsPaused(false);
    }, sliderConfig.cardLeaveDelay);
  };

  useEffect(() => {
    if (isMobile) {
      if (isPaused) return undefined;
      const timer = setInterval(() => {
        animateScrollByCards(1, 1);
      }, sliderConfig.animationDelay);
      return () => clearInterval(timer);
    }

    if (isPaused) return undefined;
    const step = sliderConfig.desktopStep;
    const halfWidth = step * vendors.length;
    let frameId;
    let lastTime = performance.now();

    const tick = (time) => {
      if (!scrollRef.current || !trackRef.current) return;
      const container = scrollRef.current;
      const delta = time - lastTime;
      lastTime = time;
      const move = (sliderConfig.autoSpeed * delta) / 1000;
      container.scrollLeft += move;

      if (container.scrollLeft >= halfWidth) container.scrollLeft -= halfWidth;
      if (container.scrollLeft < 0) container.scrollLeft += halfWidth;

      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isMobile, isPaused]);

  useEffect(
    () => () => {
      if (resumeRef.current) {
        clearTimeout(resumeRef.current);
      }
      if (manualAnimRef.current) {
        cancelAnimationFrame(manualAnimRef.current);
      }
    },
    [],
  );

  return {
    scrollRef,
    trackRef,
    setIsPaused,
    handleManualScroll,
    handleMouseDown,
    handleMouseMove,
    handleMouseEnd,
    handleCardEnter,
    handleCardLeave,
  };
};

export default useGrowingNetworkSlider;
