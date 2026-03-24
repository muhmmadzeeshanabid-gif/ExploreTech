import React, { useEffect, useRef, useState } from "react";
import verifiedIcon from "../../assets/growing-network/logos/verified.png";
import vendorLogoA from "../../assets/growing-network/logos/x5WsbnAfcg.jpg";
import vendorLogoB from "../../assets/growing-network/logos/gs14qlFntB.webp";

const vendors = [
  {
    id: 1,
    name: "Supply T-REX",
    category: "Hospitality",
    status: "verified",
    logo: vendorLogoA,
  },
  {
    id: 2,
    name: "Shady Vendor",
    category: "Hospitality",
    status: "unverified",
    logo: vendorLogoB,
  },
  {
    id: 3,
    name: "Supply T-REX",
    category: "Hospitality",
    status: "verified",
    logo: vendorLogoA,
  },
  {
    id: 4,
    name: "Shady Vendor",
    category: "Hospitality",
    status: "unverified",
    logo: vendorLogoB,
  },
  {
    id: 5,
    name: "Supply T-REX",
    category: "Hospitality",
    status: "verified",
    logo: vendorLogoA,
  },
  {
    id: 6,
    name: "Shady Vendor",
    category: "Hospitality",
    status: "unverified",
    logo: vendorLogoB,
  },
];

const UnverifiedIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
    <path d="M9 9l6 6M15 9l-6 6" />
  </svg>
);

const LongArrowIcon = ({ direction = "right", className }) => {
  const isLeft = direction === "left";
  return (
    <svg
      viewBox="0 0 36 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {isLeft ? (
        <>
          <path d="M30 12H7" />
          <path d="M13 6l-6 6 6 6" />
        </>
      ) : (
        <>
          <path d="M6 12h23" />
          <path d="M23 6l6 6-6 6" />
        </>
      )}
    </svg>
  );
};

const GrowingNetworkSlider = () => {
  const scrollRef = useRef(null);
  const trackRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const resumeRef = useRef(null);
  const manualAnimRef = useRef(null);
  const dragRef = useRef({ isDown: false, startX: 0, scrollLeft: 0 });
  const loopVendors = [...vendors, ...vendors];
  const autoSpeed = 95;

  // Handle mobile detection reactively
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const animateScrollByCards = (direction, count = 1) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    
    const isMobile = window.innerWidth < 640;
    
    // Temporarily disable snapping during manual animation to prevent "snap-back"
    if (isMobile) {
      container.style.scrollSnapType = "none";
    }

    const step = isMobile ? container.offsetWidth : 356;
    const halfWidth = step * vendors.length;

    // 1. Normalize for infinite loop
    let current = container.scrollLeft;
    if (current >= halfWidth) current -= halfWidth;
    if (current < 0) current += halfWidth;
    container.scrollLeft = current;

    // 2. Setup custom animation for gradual feel
    const targetPos = current + (step * count * direction);
    let remaining = Math.abs(targetPos - current);
    let lastTime = performance.now();

    if (manualAnimRef.current) {
      cancelAnimationFrame(manualAnimRef.current);
    }

    const tick = (time) => {
      const delta = time - lastTime;
      lastTime = time;
      
      // Slightly faster speed for mobile transitions (1.3x)
      const speedMultiplier = isMobile ? 1.3 : 1.5;
      const move = Math.min(remaining, (autoSpeed * speedMultiplier * delta) / 1000);
      const signed = move * direction;
      
      container.scrollLeft += signed;
      remaining -= move;

      if (remaining > 0.5) {
        manualAnimRef.current = requestAnimationFrame(tick);
      } else {
        // 3. Perfect Snap
        let finalPos = targetPos;
        if (finalPos >= halfWidth) finalPos -= halfWidth;
        if (finalPos < 0) finalPos += halfWidth;
        container.scrollLeft = finalPos;
        
        // Restore snapping after animation finishes
        if (isMobile) {
          container.style.scrollSnapType = "x mandatory";
        }

        manualAnimRef.current = null;
        if (resumeRef.current) {
          clearTimeout(resumeRef.current);
        }
        if (!isMobile) {
          resumeRef.current = setTimeout(() => {
            setIsPaused(false);
          }, 200);
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
    if (!dragRef.current.isDown || !scrollRef.current || !trackRef.current)
      return;
    event.preventDefault();
    const container = scrollRef.current;
    const track = trackRef.current;
    
    // Use the correct step-based halfWidth for drag math
    const step = window.innerWidth < 640 ? container.offsetWidth : 356;
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
    }, 800);
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
    }, 120);
  };

  const lastStopRef = useRef(-1);

  useEffect(() => {
    if (isMobile) {
      if (isPaused) return undefined;
      const timer = setInterval(() => {
        animateScrollByCards(1, 1);
      }, 7000);
      return () => clearInterval(timer);
    }

    if (isPaused) return undefined;
    const step = 356; // Desktop step
    const halfWidth = step * vendors.length;

    let frameId;
    let lastTime = performance.now();

    const tick = (time) => {
      if (!scrollRef.current || !trackRef.current) return;
      const container = scrollRef.current;
      const delta = time - lastTime;
      lastTime = time;
      
      const move = (autoSpeed * delta) / 1000;

      container.scrollLeft += move;

      // Infinite Loop normalization
      if (container.scrollLeft >= halfWidth) container.scrollLeft -= halfWidth;
      if (container.scrollLeft < 0) container.scrollLeft += halfWidth;

      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isPaused]);

  useEffect(() => {
    return () => {
      if (resumeRef.current) {
        clearTimeout(resumeRef.current);
      }
      if (manualAnimRef.current) {
        cancelAnimationFrame(manualAnimRef.current);
      }
    };
  }, []);

  return (
    <>
      <div
        ref={scrollRef}
        className="hide-scrollbar w-full cursor-grab overflow-x-auto overflow-y-hidden snap-x snap-mandatory pb-6 pt-2 sm:overflow-hidden sm:snap-none"
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={() => setIsPaused(false)}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseEnd}
      >
        <div ref={trackRef} className="flex w-max select-none gap-0">
          {loopVendors.map((vendor, index) => (
            <article
              key={`${vendor.id}-${index}`}
              data-card
              className="flex w-full min-w-[100vw] snap-center justify-center sm:min-w-[356px] sm:w-auto sm:snap-align-none"
              onMouseEnter={handleCardEnter}
              onMouseLeave={handleCardLeave}
            >
              <div className="group flex h-[143.1px] w-[300px] min-w-[300px] flex-col justify-start rounded-[8px] border border-[#d9def2] bg-white px-5 py-4 shadow-[0_12px_30_rgba(15,23,42,0.35)] transition duration-300 ease-out hover:shadow-[0_18px_40px_-22px_rgba(15,23,42,0.42)]">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-[50px] w-[60px] items-center justify-center rounded-[6px] border border-[#edf0fb] bg-white">
                    <img
                      src={vendor.logo}
                      alt={`${vendor.name} logo`}
                      className="h-full w-full object-contain p-1.5"
                    />
                  </div>

                  <div className="flex flex-col items-center gap-2 text-center">
                    {vendor.status === "verified" ? (
                      <img
                        src={verifiedIcon}
                        alt="Verified"
                        className="h-8 w-8 object-contain"
                      />
                    ) : (
                      <UnverifiedIcon className="h-8 w-8 text-black" />
                    )}
                    <span
                      className="text-[12px] font-normal leading-[18px] tracking-normal text-[#101840]"
                      style={{
                        fontFamily: '"SF Pro Text", sans-serif',
                        fontWeight: 400,
                      }}
                    >
                      {vendor.status === "verified"
                        ? "Vendor Verified"
                        : "Unverified"}
                    </span>
                  </div>
                </div>

                <div className="mt-2">
                  <p
                    className="text-[16px] font-medium leading-[21px] tracking-normal text-[#101840]"
                    style={{
                      fontFamily: '"Space Grotesk", sans-serif',
                      fontWeight: 500,
                    }}
                  >
                    {vendor.name}
                  </p>
                  <p
                    className="mt-0.5 text-[11px] font-normal leading-[16.5px] tracking-normal text-[#696F8C]"
                    style={{
                      fontFamily: '"SF Pro Text", sans-serif',
                      fontWeight: 400,
                    }}
                  >
                    {vendor.category}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Scroll left"
          onClick={() => handleManualScroll(-1)}
          className="flex h-8 w-8 items-center justify-center border border-[#e5e7eb] bg-white text-[#0B5BFF] outline-none focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0"
        >
          <LongArrowIcon direction="left" className="h-4 w-6" />
        </button>
        <button
          type="button"
          aria-label="Scroll right"
          onClick={() => handleManualScroll(1)}
          className="flex h-8 w-8 items-center justify-center border border-[#e5e7eb] bg-white text-[#0B5BFF] outline-none focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0"
        >
          <LongArrowIcon direction="right" className="h-4 w-6" />
        </button>
      </div>
    </>
  );
};

export default GrowingNetworkSlider;
