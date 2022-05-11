import React, { useEffect, useState } from "react";
import { AiFillApple } from "react-icons/ai";
import { Link } from "react-router-dom";
import Dropdown from "../dropdown";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineUser } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import VerticalForm from "../form/VerticalForm";
import { userLogin, userLogout } from "../../redux/actions/auth";
import { useLocation } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import HamburgerMenu from "../hamburger-menu";
import LoginModal from "../../pages/login-modal";

const Navbar = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    dispatch(userLogin(formData));
    handleClose();
  };

  const logout = () => {
    console.log("tıklandı");
    dispatch(userLogout());
    handleCloseMenu();
  };

  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = (event) => {
    setOpenMenu(event.currentTarget);
  };
  const handleCloseMenu = (event) => {
    setOpenMenu(null);
  };

  const location = useLocation();
  const pageName = location.pathname.replace("/", "").toUpperCase();

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();
  const store = useSelector((state) => state.auth);
  const userInfo = store.data;
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-between px-4 bg-white rounded-md h-16 shadow-all gap-4">
      {/* Left side */}
      <div className="flex items-center gap-2 w-full">
        <AiFillApple size={32} />
        <p className="text-lg font-medium">
          {" "}
          {location.pathname === "/" ? "DummyApple" : t(pageName)}
        </p>
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
          {Object.keys(userInfo).length !== 0 ? (
            <div>
              <button
                onClick={(event) => handleMenu(event)}
                className="flex items-center space-x-3 hover:bg-gray-200 hover:rounded-md p-2"
              >
                <div className="text-right">
                  <p className="text-sm font-medium text-black-base font-sans leading-3">
                    {userInfo.name}
                  </p>
                  <p className="text-xs float-right font-sans font-normal text-black-base">
                    {userInfo.email}
                  </p>
                </div>
                <div className="relative">
                  <AiOutlineUser
                    className="rounded-2xl bg-gray-200"
                    size={36}
                  />
                  <span className="bg-green-500 w-3 h-3 absolute rounded-lg  bottom-0 right-0 border-white border-2" />
                </div>
              </button>
              <Menu
                id="menu-appbar"
                anchorEl={openMenu}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(openMenu)}
                onClose={handleCloseMenu}
              >
                <MenuItem onClick={logout}>Logout</MenuItem>
              </Menu>
            </div>
          ) : (
            <div>
              <button
                onClick={handleOpen}
                className="py-2 px-4 bg-green-300 text-white font-medium rounded-3xl flex w-28 justify-center hover:bg-green-200"
              >
                {t("Login")}
              </button>
              <LoginModal
                open={open}
                handleClose={handleClose}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                errors={errors}
                register={register}
              />
            </div>
          )}
        </div>
      </div>
      {/* Hamburger Menu */}
      <HamburgerMenu />
    </div>
  );
};

export default Navbar;
