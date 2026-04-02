export const getXOffset = (width) => {
  if (width < 380) return width * 0.28;
  if (width < 768) return 110;
  if (width < 1024) return 130;
  return 145;
};

export const getTrendingCardStyle = ({
  index,
  activeIndex,
  total,
  isArabic,
  width,
}) => {
  const relativePos = (index - activeIndex + total) % total;
  let xOffset = getXOffset(width);
  if (isArabic) xOffset = -xOffset;

  if (relativePos === 0) {
    return {
      zIndex: 30,
      transform: "translate(-50%, -30px) scale(1)",
      opacity: 1,
    };
  }

  if (relativePos === 1) {
    return {
      zIndex: 20,
      transform: `translate(calc(-50% + ${xOffset}px), 10px) scale(0.8)`,
      opacity: 1,
    };
  }

  if (relativePos === total - 1) {
    return {
      zIndex: 10,
      transform: `translate(calc(-50% - ${xOffset}px), 20px) scale(0.8)`,
      opacity: 1,
    };
  }

  return {
    zIndex: 0,
    transform: "translate(-50%, 40px) scale(0.7)",
    opacity: 0,
    pointerEvents: "none",
  };
};

