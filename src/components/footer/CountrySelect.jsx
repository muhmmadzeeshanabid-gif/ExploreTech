import React from "react";

const CountrySelect = ({ value, onChange, countries, countrySelectStyle }) => (
  <div className="relative w-full md:ml-16 md:w-[290px]">
    <select
      value={value}
      onChange={onChange}
      style={countrySelectStyle}
      className="h-[36px] w-full appearance-none rounded-[6px] border border-[#c9ced8] bg-white px-3 pr-8 text-left outline-none"
      dir="ltr"
      lang="en"
    >
      {countries.map((country, idx) => (
        <option key={idx} value={country} dir="ltr">
          {country}
        </option>
      ))}
    </select>
    <i
      className="bi bi-caret-down-fill pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-[rgb(71,77,102)]"
      aria-hidden="true"
    />
  </div>
);

export default CountrySelect;
