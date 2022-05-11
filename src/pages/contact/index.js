import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import VerticalForm from "../../components/form/VerticalForm";
import Select from "react-select";
import Label from "../../components/form/label";
import { useSelector } from "react-redux";

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
    <div>
      <h1 className="font-bold text-2xl my-2">ContactUs</h1>
      <div className="flex gap-2">
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-2 ">
            <VerticalForm
              errors={errors.name}
              title="Name"
              defaultValue={userInfo?.name}
              type={"text"}
              hookform={{ ...register("name", { required: true }) }}
            />
            <VerticalForm
              errors={errors.email}
              title="Email"
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
              title="Phone Number"
              type={"number"}
              hookform={{ ...register("phoneNumber", { required: true }) }}
            />
            <div>
              <Label labelName={"Country"} />
              <Controller
                name="country"
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => (
                  <Select {...field} className="pt-1" options={countryList} />
                )}
              />
              {errors.country && (
                <span className="text-red-600 text-sm">
                  This field is required
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col my-2">
            <Label labelName={"Message"} />
            <textarea
              rows={4}
              className="border-2 rounded-md outline-none resize-none px-2"
              {...register("text", { required: true })}
            />
            {errors.text && (
              <span className="text-red-600 text-sm">
                This field is required
              </span>
            )}
          </div>
          <button className="bg-green-300 px-4 py-1 w-full rounded-md text-white font-medium my-4">
            Send
          </button>
        </form>
        <div className="w-full flex justify-center">
          <h2 className="font-medium text-3xl">How Can We Help?</h2>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
