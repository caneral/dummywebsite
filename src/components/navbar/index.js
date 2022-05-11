import React, { useEffect, useState } from "react";
import { AiFillApple } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import Dropdown from "../dropdown";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineUser } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { Modal, ModalBody, ModalHeader } from "../modal";
import VerticalForm from "../form/VerticalForm";
import { userLogin } from "../../redux/actions/auth";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    dispatch(userLogin(formData));
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
          {location.pathname === "/" ? "DummyApple" : pageName}
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
            <button className="flex items-center space-x-3 hover:bg-gray-200 hover:rounded-md p-2">
              <div className="text-right">
                <p className="text-sm font-medium text-black-base font-sans leading-3">
                  {userInfo.name}
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
            <div>
              <button
                onClick={handleOpen}
                className="py-2 px-4 bg-green-300 text-white font-medium rounded-3xl flex w-28 justify-center hover:bg-green-200"
              >
                Login
              </button>
              <Modal isOpen={open} toggle={handleClose}>
                <ModalBody>
                  <div className="flex gap-2">
                    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-2 ">
                        <VerticalForm
                          errors={errors.name}
                          title={t("Name")}
                          type={"text"}
                          hookform={{ ...register("name", { required: true }) }}
                        />
                        <VerticalForm
                          errors={errors.email}
                          title={t("Email")}
                          hookform={{
                            ...register("email", {
                              required: true,
                              pattern:
                                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            }),
                          }}
                        />
                      </div>
                      <VerticalForm
                        errors={errors.password}
                        title={t("Password")}
                        type={"password"}
                        hookform={{
                          ...register("password", { required: true }),
                        }}
                      />
                      <button className="bg-green-300 px-4 py-2 w-full rounded-md text-white font-medium mt-2">
                        {t("Login")}
                      </button>
                    </form>
                  </div>
                </ModalBody>
              </Modal>
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
