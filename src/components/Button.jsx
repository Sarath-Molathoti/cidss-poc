import React from "react";
import classNames from "classnames";

const Button = ({
  variant = "default",
  size = "md",
  block = false,
  active = false,
  disabled = false,
  children,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded focus:outline-none transition";

  const variantClasses = {
    default: "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50",
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    success: "bg-green-500 text-white hover:bg-green-600",
    info: "bg-teal-500 text-white hover:bg-teal-600",
    warning: "bg-yellow-500 text-white hover:bg-yellow-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
    link: "bg-transparent text-blue-500 underline hover:text-blue-600",
  };

  const sizeClasses = {
    lg: "px-6 py-3 text-lg",
    md: "px-4 py-2 text-md",
    sm: "px-3 py-1.5 text-sm",
    xs: "px-2 py-1 text-xs",
  };

  const blockClass = block ? "w-full" : "";

  const activeClass = active ? "shadow-inner" : "";

  const disabledClass = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";

  const classes = classNames(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    blockClass,
    activeClass,
    disabledClass
  );

  return (
    <button className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
