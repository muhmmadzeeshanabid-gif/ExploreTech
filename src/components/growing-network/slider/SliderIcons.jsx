import React from "react";

export const UnverifiedIcon = ({ className }) => (
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

export const LongArrowIcon = ({ direction = "right", className }) => {
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
