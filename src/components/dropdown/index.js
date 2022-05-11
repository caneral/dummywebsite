import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../redux/actions/localization";

const Dropdown = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.localization);

  const language = store.data;
  const { t } = useTranslation();
  const chngeLanguage = (e) => {
    i18next.changeLanguage(e.target.value);
    dispatch(setLanguage(e.target.value));
  };

  return (
    <form>
      <select
        defaultValue={language}
        onChange={(e) => chngeLanguage(e)}
        className="flex py-2 px-3 w-28 justify-center bg-red-500 text-white rounded-3xl outline-none"
      >
        <option value={"en"}>{t("English")}</option>
        <option value={"tr"}>{t("Turkish")}</option>
      </select>
    </form>
  );
};

export default Dropdown;
