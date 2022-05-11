import React from "react";
import { BiMenu } from "react-icons/bi";

const HamburgerMenu = () => {
  return (
    <div className="md:hidden hover:bg-gray-300 hover:rounded-2xl flex justify-center items-center">
      <button>
        <BiMenu size={32} />
      </button>
    </div>
  );
};

export default HamburgerMenu;
