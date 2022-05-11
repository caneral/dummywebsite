import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Dropdown = () => {
  const { t } = useTranslation();

  return (
    <form>
      <select
        onChange={(e) => i18next.changeLanguage(e.target.value)}
        className="py-2 px-4 bg-red-500 text-white rounded-3xl outline-none"
      >
        <option value={"tr"}>{t("Turkish")}</option>
        <option value={"en"}>{t("English")}</option>
      </select>
    </form>
  );
};

export default Dropdown;
