import React from "react";
import Input from "../input";
import Label from "../label";
import { useTranslation } from "react-i18next";

const VerticalForm = ({
  hookform,
  errors,
  title,
  placeholder,
  type,
  defaultValue,
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col">
      <Label labelName={title} />
      <Input
        placeholder={placeholder}
        hookform={hookform}
        type={type}
        defaultValue={defaultValue}
      />
      {errors && errors.type === "required" && (
        <span className="text-red-600 text-sm">
          {t("This_field_is_required")}
        </span>
      )}
      {errors && errors.type === "pattern" && (
        <span className="text-red-600 text-sm">Invalid e-mail address</span>
      )}
    </div>
  );
};

export default VerticalForm;
