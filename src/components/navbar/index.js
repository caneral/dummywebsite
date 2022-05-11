import React, { useEffect } from "react";
import { AiFillApple } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import Dropdown from "../dropdown";
import { useSelector } from "react-redux";
import { AiOutlineUser } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const store = useSelector((state) => state.auth);
  const userInfo = store.data;

  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-between px-4 bg-white rounded-md h-16 shadow-all gap-4">
      {/* Left side */}
      <div className="flex items-center gap-2 w-full">
        <AiFillApple size={32} />
        <p className="text-lg font-medium">DummyApple</p>
      </div>
      {/* Right side */}
      <div className="w-full hidden md:block">
        <div className="flex items-center gap-4 justify-between">
          <div>
            <ul className="flex items-center gap-3">
              <li>
                {/* Localization */}
                <Dropdown />
              </li>
              <li>
                <Link
                  to="/"
                  className="flex py-2 px-3 w-28 justify-center bg-black text-white rounded-3xl"
                >
                  {t("Homepage")}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="flex py-2 px-3 w-28 justify-center bg-black text-white rounded-3xl"
                >
                  {t("Contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* UserInfo */}
          {userInfo.length !== 0 ? (
            <button className="flex items-center space-x-3 hover:bg-gray-200 hover:rounded-md p-2">
              <div className="text-right">
                <p className="text-sm font-medium text-black-base font-sans leading-3">
                  {userInfo.username}
                </p>
                <p className="text-xs float-right font-sans font-normal text-black-base">
                  {userInfo.email}
                </p>
              </div>
              <div className="relative">
                <AiOutlineUser className="rounded-2xl bg-gray-200" size={36} />
                <span className="bg-green-500 w-3 h-3 absolute rounded-lg  bottom-0 right-0 border-white border-2" />
              </div>
            </button>
          ) : (
            <div className="py-2 px-4 bg-green-300 text-white font-medium rounded-3xl">
              Login
            </div>
          )}
        </div>
      </div>
      {/* Hamburger Menu */}
      <div className="md:hidden">
        <button>
          <BiMenu size={32} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
