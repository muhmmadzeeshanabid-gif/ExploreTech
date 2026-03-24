import React, { useEffect, useRef, useState } from "react";
import uberDataLogo from "../../assets/growing-network/logos/133437uberdata_networks_logo.jpg";
import xquicLogo from "../../assets/growing-network/logos/200726xquic_logo.jpg";
import duettoLogo from "../../assets/growing-network/logos/140138TOPjEQ71Ym_50_rsx.jpg";
import prismmLogo from "../../assets/growing-network/logos/162537prismmtechnologies_logo.jpg";
import rakamLogo from "../../assets/growing-network/logos/083151RakamTechnologies.png";
import squirrelLogo from "../../assets/growing-network/logos/115903squirrel_systems_logo.jpg";
import tacitLogo from "../../assets/growing-network/logos/121121tacit_corp_logo.jpg";
import travelBoomLogo from "../../assets/growing-network/logos/131845travelboommarketing_logo.jpg";

// Pair top + bottom images so they travel together (comparison style)
const pairs = [
  { top: duettoLogo, bottom: rakamLogo },
  { top: prismmLogo, bottom: squirrelLogo },
  { top: uberDataLogo, bottom: xquicLogo },
  { top: tacitLogo, bottom: travelBoomLogo },
];

// Triple for seamless loop; we keep the pointer in the middle copy to avoid jumps
const loopPairs = [...pairs, ...pairs, ...pairs];

const LogoMarquee = () => (
  <div className="w-full overflow-hidden bg-white pb-10 pt-6">
    <StepperTrack />
  </div>
);

const StepperTrack = () => {
  const baseLength = pairs.length;
  const startIndex = baseLength; // middle copy start
  const [active, setActive] = useState(startIndex);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef(null);
  const [enableTransition, setEnableTransition] = useState(false); // enabled after first paint
  const timerRef = useRef(null);
  const [gap, setGap] = useState(window.innerWidth < 640 ? 30 : 80); // Responsive gap
  const itemWidth = 93; // fixed logo width to avoid jitter
  const transitionMs = 1400; // slower slide time
  const holdMs = 2600; // slightly longer pause
  const cadenceMs = transitionMs + holdMs;

  // Handle resize for responsive gap
  useEffect(() => {
    const handleResize = () => {
      setGap(window.innerWidth < 640 ? 30 : 80);
    };
    window.addEventListener("resize", handleResize);
    // Enable transition after initial paint
    const id = requestAnimationFrame(() => setEnableTransition(true));
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(id);
    };
  }, []);

  // Step one item, pause, then queue the next step (cleared on hover)
  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (paused) return;
    timerRef.current = setTimeout(() => {
      setActive((prev) => prev + 1);
    }, cadenceMs);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [active, paused, cadenceMs]);

  // Clear timer on unmount to avoid stale setState after refresh/HMR
  useEffect(
    () => () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    },
    [],
  );

  // Reset position to middle copy when we finish second copy to avoid jump
  useEffect(() => {
    if (active < baseLength * 2) return;
    setEnableTransition(false);
    setActive(startIndex);
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setEnableTransition(true));
    });
    return () => cancelAnimationFrame(id);
  }, [active, baseLength, startIndex]);

  const offset = -(itemWidth + gap) * active;

  return (
    <div className="relative mx-auto max-w-[1380px] px-4">
      <div
        ref={trackRef}
        className="flex items-center"
        style={{
          transform: `translateX(${offset}px)`,
          transition: enableTransition
            ? `transform ${transitionMs}ms ease-in-out`
            : "none",
          gap: `${gap}px`,
          width: "max-content",
          willChange: "transform",
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {loopPairs.map((pair, i) => (
          <div
            key={`pair-${i}`}
            className="flex flex-col items-center justify-center gap-2 cursor-pointer"
            style={{ width: `${itemWidth}px` }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <img
              src={pair.top}
              alt={`Partner logo ${i}-top`}
              draggable={false}
              className="select-none object-contain"
              style={{ width: "93px", height: "63px" }}
            />
            <img
              src={pair.bottom}
              alt={`Partner logo ${i}-bottom`}
              draggable={false}
              className="select-none object-contain"
              style={{ width: "93px", height: "63px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;
