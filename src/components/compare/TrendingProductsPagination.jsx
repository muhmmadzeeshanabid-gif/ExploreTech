import React from "react";

const TrendingProductsPagination = ({ total, onSelect }) => (
  <ul className="mt-8 flex items-center justify-center gap-2 space-x-3">
    {Array.from({ length: total }).map((_, index) => (
      <li key={index} className="list-none">
        <button
          type="button"
          aria-label={`Go to slide ${index + 1}`}
          onClick={() => onSelect(index)}
          className="h-2 w-8 rounded-full bg-white transition-all duration-300"
        />
      </li>
    ))}
  </ul>
);

export default TrendingProductsPagination;

