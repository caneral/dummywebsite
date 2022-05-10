import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

const VerticalLayout = () => {
  return (
    <div>
      <main className="min-h-screen container mx-auto p-4">
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
};

export default VerticalLayout;
