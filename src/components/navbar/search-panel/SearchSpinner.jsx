import React from "react";

const SearchSpinner = () => (
  <div className="flex h-[300px] w-full items-center justify-center">
    <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-100 border-t-[#0b56ff]" />
  </div>
);

export default SearchSpinner;
