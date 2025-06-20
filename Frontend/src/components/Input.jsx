import React from "react";

function Input({ type = "text", className = "", placeholder, value }) {
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      value={value}
    />
  );
}

export default Input;
