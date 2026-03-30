import React, { useEffect, useRef, useState } from "react";
import { loopPairs, logoMarqueeConfig, pairs } from "../../../data/logoMarqueeData.js";

const LogoMarqueeTrack = () => {
  const baseLength = pairs.length;
  const startIndex = baseLength;
  const [gap, setGap] = useState(
    window.innerWidth < 640
      ? logoMarqueeConfig.mobileGap
      : logoMarqueeConfig.desktopGap,
  );
  const [itemWidth, setItemWidth] = useState(
    window.innerWidth < 640
      ? (window.innerWidth - 32 - 2 * logoMarqueeConfig.mobileGap) / 3
      : logoMarqueeConfig.itemWidth,
  );

  const [translateX, setTranslateX] = useState(0);
  const xRef = useRef(0);
  const isPaused = useRef(false);
  const lastTimeRef = useRef(performance.now());
  const stateRef = useRef({ phase: "pausing", timer: 0, fromActive: startIndex });

  const baseWidth = baseLength * (itemWidth + gap);
  const transitionMs = logoMarqueeConfig.transitionMs;
  const holdMs = logoMarqueeConfig.holdMs;

  useEffect(() => {
    const handleResize = () => {
      const g = window.innerWidth < 640
        ? logoMarqueeConfig.mobileGap
        : logoMarqueeConfig.desktopGap;
      setGap(g);
      setItemWidth(
        window.innerWidth < 640
          ? (window.innerWidth - 32 - 2 * g) / 3
          : logoMarqueeConfig.itemWidth,
      );
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let frameId;

    const tick = (time) => {
      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;

      if (!isPaused.current) {
        if (stateRef.current.phase === "pausing") {
          stateRef.current.timer += delta;
          if (stateRef.current.timer >= holdMs) {
            stateRef.current.phase = "moving";
            stateRef.current.timer = 0;
          }
        } else if (stateRef.current.phase === "moving") {
          stateRef.current.timer += delta;
          const progress = Math.min(1, stateRef.current.timer / transitionMs);
          
          // Cubic-bezier like easing: ease-in-out
          const ease = progress < 0.5 
            ? 2 * progress * progress 
            : 1 - Math.pow(-2 * progress + 2, 2) / 2;

          const startOffset = -(itemWidth + gap) * stateRef.current.fromActive;
          const targetOffset = -(itemWidth + gap) * (stateRef.current.fromActive + 1);
          
          xRef.current = startOffset + (targetOffset - startOffset) * ease;

          if (progress >= 1) {
            stateRef.current.phase = "pausing";
            stateRef.current.timer = 0;
            stateRef.current.fromActive += 1;

            // Seamless wrap
            if (stateRef.current.fromActive >= baseLength * 2) {
              stateRef.current.fromActive = baseLength;
              xRef.current = -(itemWidth + gap) * stateRef.current.fromActive;
            }
          }
        }
      } else {
        // When paused, we still need to update lastTime to avoid huge jumps when unpausing
        lastTimeRef.current = time;
      }

      setTranslateX(xRef.current);
      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [itemWidth, gap, baseWidth, transitionMs, holdMs, baseLength]);

  return (
    <div className="relative mx-auto max-w-[1380px] px-4 overflow-hidden">
      <div
        className="flex items-center will-change-transform"
        style={{
          transform: `translateX(${translateX}px)`,
          gap: `${gap}px`,
          width: "max-content",
        }}
        onMouseEnter={() => (isPaused.current = true)}
        onMouseLeave={() => (isPaused.current = false)}
      >
        {loopPairs.map((pair, i) => (
          <div
            key={`pair-${i}`}
            className="cursor-pointer flex flex-col items-center justify-center gap-2"
            style={{ width: `${itemWidth}px` }}
          >
            <img
              src={pair.top}
              alt={`Partner logo ${i}-top`}
              draggable={false}
              loading="lazy"
              className="select-none object-contain"
              style={{
                width: `${logoMarqueeConfig.imgWidth}px`,
                height: `${logoMarqueeConfig.imgHeight}px`,
              }}
            />
            <img
              src={pair.bottom}
              alt={`Partner logo ${i}-bottom`}
              draggable={false}
              loading="lazy"
              className="select-none object-contain"
              style={{
                width: `${logoMarqueeConfig.imgWidth}px`,
                height: `${logoMarqueeConfig.imgHeight}px`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoMarqueeTrack;
