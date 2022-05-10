import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import ContactUs from "../pages/contact";
import VerticalLayout from "../layouts/VerticalLayout";

const RootRoutes = () => {
  return (
    <Routes>
      <Route element={<VerticalLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
      </Route>
    </Routes>
  );
};

export default RootRoutes;
