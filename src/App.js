import React from "react";
import VerticalLayout from "./layouts/VerticalLayout";
import RootRoutes from "./router/RootRoutes";

const App = () => {
  return (
    <div className="bg-[#f8f8f8]">
      <RootRoutes />
    </div>
  );
};

export default App;
