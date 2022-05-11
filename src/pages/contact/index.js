import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import VerticalForm from "../../components/form/VerticalForm";
import Select from "react-select";
import Label from "../../components/form/label";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const countryList = [
  { value: "TR", label: "Turkey" },
  { value: "US", label: "United States of America" },
  { value: "GB", label: "United Kingdom" },
  { value: "DE", label: "Germany" },
  { value: "SE", label: "Sweden" },
  { value: "KE", label: "Kenya" },
  { value: "BR", label: "Brazil" },
  { value: "ZW", label: "Zimbabwe" },
];

const ContactUs = () => {
  const { t } = useTranslation();

  const store = useSelector((state) => state.auth);
  const userInfo = store.data;

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
      phonenumber: data.phoneNumber,
      country_code: data.country.value,
      text: data.text,
    };

    console.log(JSON.stringify(formData));
  };

  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center">
      <h1 className="font-bold text-2xl my-2">{t("HowCanWeHelp?")}</h1>
      <div className="flex gap-2">
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-2 ">
            <VerticalForm
              errors={errors.name}
              title={t("Name")}
              defaultValue={userInfo?.name}
              type={"text"}
              hookform={{ ...register("name", { required: true }) }}
            />
            <VerticalForm
              errors={errors.email}
              title={t("Email")}
              defaultValue={userInfo?.email}
              hookform={{
                ...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                }),
              }}
            />
            <VerticalForm
              errors={errors.phoneNumber}
              title={t("PhoneNumber")}
              type={"number"}
              hookform={{ ...register("phoneNumber", { required: true }) }}
            />
            <div>
              <Label labelName={t("Country")} />
              <Controller
                name="country"
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => (
                  <Select {...field} className="pt-1" options={countryList} placeholder={t("Select_Country")} />
                )}
              />
              {errors.country && (
                <span className="text-red-600 text-sm">
                  {t("This_field_is_required")}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col my-2">
            <Label labelName={t("Message")} />
            <textarea
              rows={4}
              className="border-2 rounded-md outline-none resize-none px-2"
              {...register("text", { required: true })}
            />
            {errors.text && (
              <span className="text-red-600 text-sm">
                {t("This_field_is_required")}
              </span>
            )}
          </div>
          <button className="bg-green-300 px-4 py-1 w-full rounded-md text-white font-medium my-4">
            {t("Send")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
