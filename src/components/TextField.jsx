// components/TextField.jsx
import React from "react";
import PropTypes from "prop-types";

const TextField = ({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  containerClassName = "",
  labelClassName = "",
  inputClassName = "",
  prefixIcon = null,
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
      <div className="relative">
        {prefixIcon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            {prefixIcon}
          </div>
        )}
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`${
            prefixIcon ? "pl-10" : "pl-3"
          } shadow appearance-none border rounded w-full py-3 px-3 text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${inputClassName}`}
          {...props}
        />
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

TextField.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  containerClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  prefixIcon: PropTypes.node, // Optional prop for prefix icon
  error: PropTypes.string,
};

export default TextField;
