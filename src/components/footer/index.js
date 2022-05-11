import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center px-4 bg-white rounded-md h-16 shadow-all">
      <p>© 2022-CanerAl {t("All_rights_reserved.")}</p>
    </div>
  );
};

export default Footer;
