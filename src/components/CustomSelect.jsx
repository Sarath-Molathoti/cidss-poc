// components/CustomSelect.jsx
import React from "react";
import PropTypes from "prop-types";

const CustomSelect = ({
  label,
  id,
  options,
  value,
  onChange,
  placeholder = "Select an option",
  containerClassName = "",
  labelClassName = "",
  selectClassName = "",
  error = null,
  ...props
}) => {
  return (
    <div className={`mb-4 ${containerClassName}`}>
      {label && (
        <label
          htmlFor={id}
          className={`block text-gray-700 text-sm font-bold mb-1 ${labelClassName}`}
        >
          {label}
        </label>
      )}
      <select
        id={id}
        value={value}
        onChange={onChange}
        className={`block w-full py-3 px-3 text-lg border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${selectClassName}`}
        {...props}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
    </div>
  );
};

CustomSelect.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  containerClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  selectClassName: PropTypes.string,
  error: PropTypes.string,
};

export default CustomSelect;
