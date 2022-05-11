import React from "react";
import VerticalForm from "../../components/form/VerticalForm";
import { Modal, ModalBody } from "../../components/modal";
import { useTranslation } from "react-i18next";

const LoginModal = ({
  open,
  handleClose,
  handleSubmit,
  onSubmit,
  errors,
  register,
}) => {
  const { t } = useTranslation();

  return (
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
  );
};

export default LoginModal;
