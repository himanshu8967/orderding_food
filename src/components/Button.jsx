import React from "react";

const Button = ({ children, className = "" }) => {
  return (
    <button
      className={`bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white px-3 py-2 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
