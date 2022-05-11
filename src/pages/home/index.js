import { useTranslation } from "react-i18next";
import React from "react";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-center items-center min-h-[75vh]">
      <h2 className="text-lg font-bold">{t("Welcome_to_Homepage")}</h2>
      <p>{t("This_project_was_made_by_Caner_Al.")}</p>
    </div>
  );
};

export default Home;
