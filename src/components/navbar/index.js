import React, { useEffect } from "react";
import { AiFillApple } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import Dropdown from "../dropdown";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.auth);
  console.log(store.data);
  const userInfo = store.data;

  return (
    <div className="flex items-center justify-between px-4 bg-white rounded-md h-16 shadow-all">
      {/* Left side */}
      <div className="flex items-center gap-2 w-full">
        <AiFillApple size={32} />
        <p className="text-lg font-medium">DummyApple</p>
      </div>
      {/* Right side */}
      <div className="w-full hidden md:block">
        <div className="flex items-center gap-4 justify-around">
          <div>
            <ul className="flex items-center gap-3">
              <li>
                <Link
                  to="/"
                  className="py-2 px-4 bg-black text-white rounded-3xl"
                >
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="py-2 px-4 bg-black text-white rounded-3xl"
                >
                  İletişim
                </Link>
              </li>
              <li>
                {/* Localization */}
                <Dropdown />
              </li>
            </ul>
          </div>

          {/* UserInfo */}
          {userInfo.length !== 0 ? (
            <div>
              <p className="text-sm font-medium text-black font-sans leading-3">
                Caner Al
              </p>
            </div>
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
