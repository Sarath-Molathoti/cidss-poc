// components/SearchBar.js
import React from "react";

const SearchBar = ({
  placeholder = "Search...",
  onChange,
  value,
  className = "",
  inputClassName = "",
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`flex-grow p-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent ${inputClassName}`}
      />
    </div>
  );
};

export default SearchBar;
