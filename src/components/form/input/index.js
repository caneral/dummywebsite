import React from "react";

const Input = ({ placeholder, hookform, type, defaultValue }) => {
  return (
    <input
      {...hookform}
      type={type}
      defaultValue={defaultValue}
      className="outline-none border rounded-md px-1 py-2 mb-1 text-sm"
      placeholder={placeholder}
    />
  );
};

export default Input;
