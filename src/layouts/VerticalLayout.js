import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const VerticalLayout = () => {
  return (
    <div>
      <main className="min-h-screen container mx-auto p-4">
        <div className="h-[6vh]">
          <Navbar />
        </div>
        <div className="bg-white my-4 p-4 min-h-[80vh] rounded-md shadow-all">
          <Outlet />
        </div>
        <div className="h-[6vh]">
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default VerticalLayout;
