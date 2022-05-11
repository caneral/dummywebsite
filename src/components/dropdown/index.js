import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const Dropdown = () => {
  return (
      <select className="py-2 px-4 bg-red-500 text-white rounded-3xl">
        <option>Turkish</option>
        <option>English</option>
      </select>
  );
};

export default Dropdown;
