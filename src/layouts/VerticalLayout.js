import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const VerticalLayout = () => {
  return (
    <div>
      <main className="min-h-screen container mx-auto p-4">
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default VerticalLayout;
