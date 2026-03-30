import React from "react";
import AdopterLogoCard from "./AdopterLogoCard.jsx";

const AdopterLogoRow = ({ items }) => (
  <div className="flex flex-wrap justify-center gap-4 md:gap-6">
    {items.map((item) => (
      <AdopterLogoCard key={item.id} item={item} />
    ))}
  </div>
);

export default AdopterLogoRow;
